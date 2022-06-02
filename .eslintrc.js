const fs = require('fs');
const path = require('path');
const { walkForTsConfig } = require('tsconfig-paths/lib/tsconfig-loader');

const ROOT = __dirname;

export function getTsConfigPath() {
  let cachedLookup = walkForTsConfig(process.cwd());

  // If a `tsconfig.eslint.json` exists in the same folder,
  // use that instead, since it's an override.
  if (cachedLookup) {
    const eslintProject = path.join(path.dirname(cachedLookup), 'tsconfig.eslint.json');

    if (fs.existsSync(eslintProject)) {
      cachedLookup = eslintProject;
    }
  }

  return cachedLookup;
}

export function getEslintParserOptions() {
  const tsConfigPath = getTsConfigPath();
  const project = [];

  // Include the project being linted
  project.push(path.relative(ROOT, tsConfigPath));

  // And include any referenced projects
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const tsConfig = require(tsConfigPath);

  if (tsConfig.references) {
    tsConfig.references.forEach((ref) => {
      project.push(path.relative(ROOT, normalizeRef(tsConfigPath, ref.path)));
    });
  }

  return {
    project,
    tsconfigRootDir: ROOT,
  };
}

const parserOptions = getEslintParserOptions();
parserOptions.allowAutomaticSingleRunInference = true;

console.log(parserOptions);

module.exports = {
  root: true,
  extends: ['beemo', 'beemo/browser', 'beemo/react'],
  parserOptions,
  reportUnusedDisableDirectives: true,
};
