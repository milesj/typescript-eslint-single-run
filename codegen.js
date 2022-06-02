const randomWords = require('random-words');
const path = require('path');
const fs = require('fs');
const _ = require('lodash');

const ROOT = __dirname;
const APP_ROOT = path.join(__dirname, 'apps/main');

const HOOKS = ['useState', 'useMemo', 'useRef', 'useEffect', 'useCallback'];

function createReactHook(hook) {
  if (hook === 'useMemo' || hook === 'useCallback') {
    return `${hook}(() => 123, [])`;
  }

  if (hook === 'useEffect') {
    return `${hook}(() => {}, [])`;
  }

  return `${hook}()`;
}

function createReactComponent(name) {
  const index = _.random(0, HOOKS.length - 1);
  const hook = HOOKS[index];

  return `
import React, { ${hook} } from 'react';

export default function ${name}() {
	const value = ${createReactHook(hook)};

	return <div />;
}
	`;
}

function generateFiles(dir, depth) {
  if (depth === 5) {
    return;
  }

  const files = randomWords({ min: 10, max: 30 });

  files.forEach((file) => {
    const fileName = _.startCase(file);
    const filePath = path.join(dir, `${fileName}.tsx`);

    fs.writeFileSync(filePath, createReactComponent(fileName), 'utf8');
  });

  // const folders = randomWords({ min: 3, max: 6 });

  // folders.forEach((folder) => {
  //   const folderPath = path.join(dir, folder);

  //   fs.mkdirSync(folderPath, { recursive: true });
  // });
}

generateFiles(APP_ROOT);
