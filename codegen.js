const randomWords = require('random-words');
const path = require('path');
const fs = require('fs');
const _ = require('lodash');

const ROOT = __dirname;
const SRC_ROOT = path.join(ROOT, 'apps/main/src');
const MAX_DEPTH = 3;
const HOOKS = ['useState', 'useMemo', 'useRef', 'useEffect', 'useCallback'];

function createReactHook(hook) {
  if (hook === 'useMemo' || hook === 'useCallback') {
    return `const handler = ${hook}(() => 123, []);`;
  }

  if (hook === 'useEffect') {
    return `${hook}(() => {}, []);`;
  }

  return `const value = ${hook}('abc');`;
}

function createReactComponent(name, source, imports = []) {
  const index = _.random(0, HOOKS.length - 1);
  const hook = HOOKS[index];

  let component = `import React, { ${hook} } from 'react';\n`;
  let children = '';

  imports.forEach((imp) => {
    component += `import ${imp.fileName} from '${path.relative(
      path.dirname(source),
      imp.filePath.replace('.tsx', ''),
    )}';\n`;

    children += `<${imp.fileName} />`;
  });

  component += `
export default function ${name}() {
	${createReactHook(hook)}

	return <div>${children}</div>;
}`;

  return component;
}

function generateFiles(dir, depth, imports) {
  fs.mkdirSync(dir, { recursive: true });

  const files = randomWords({ min: 10, max: 30 });

  files.forEach((file, index) => {
    const fileName = _.startCase(file);
    const filePath = path.join(dir, `${fileName}.tsx`);

    fs.writeFileSync(filePath, createReactComponent(fileName, filePath, imports), 'utf8');

    if (index === files.length - 1) {
      imports.push({ fileName, filePath });
    }
  });

  // Avoid creating super deep and empty folders
  if (depth + 1 === MAX_DEPTH) {
    return;
  }

  const folders = randomWords({ min: 3, max: 6 });

  folders.forEach((folder) => {
    generateFiles(path.join(dir, folder), depth + 1, imports);
  });
}

try {
  fs.rmSync(SRC_ROOT, { force: true, recursive: true });
} catch {}

generateFiles(SRC_ROOT, 0, []);
