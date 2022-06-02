# typescript-eslint-single-run

- Run `yarn lint:root` to lint the entire repo using `tsconfig.eslint.json`.
- Run `yarn lint:app` to lint the app using `apps/main/tsconfig.json`.

Both of these should fail with a handful of errors. If you disable `allowAutomaticSingleRunInference` in the root eslint config, then they pass.
