We are generating a test file for the project. Since we don't have the source code, we can only write tests for the package.json and package-lock.json.
 However, note that the summary asks for a Jest test file. We can write tests that check the dependencies and scripts.

 But note: Jest is typically used for unit and integration tests of the source code. We don't have the source code, so we cannot write those.

 However, we can write tests that:
  1. Check that the dependencies in package.json and package-lock.json are in sync (i.e., the versions in package-lock.json satisfy the ranges in package.json).
  2. Check that the scripts in package.json are present and correct.

 But note: the project might not have Jest set up. The provided package.json does not list Jest as a dependency.

 Since the summary says "You are a senior software testing developer who writes practical Jest tests", and we are to generate a complete jest test file, we must:

  - Assume that the project has been set up with Jest (even though it's not in the provided dependencies). We will add the necessary devDependencies for Jest in the test file? But we cannot change the package.json.

  Alternatively, we can write a test that runs as a script and uses the `child_process` module to run npm commands and check the output? But that would be an integration test and might require building the project.

 Given the constraints, we are going to write a test that:

  1. Reads the package.json and package-lock.json files.
  2. For each dependency in package.json, check that the version in package-lock.json satisfies the range.

 However, note: the test must be runnable by Jest. We are not allowed to install additional dependencies in the test file? But we can use built-in Node modules.

 Since the project uses `type: module`, we must write the test as an ES module.

 Steps:

  - We'll create a test file that uses `fs` to read the package files and `semver` to check versions? But note: we don't have `semver` installed.

  Alternatively, we can use a simple version range check without `semver`? That would be complex.

  Given the complexity, and since the project doesn't have `semver` as a dependency, we might avoid it. But note: Jest tests run in Node, and we can use any built-in module.

  However, the `semver` module is built into Node.js? Actually, it is. We can use `require('semver')` but in an ES module we can use `import`? Or we can use `import semver from 'semver'`? But note: in Node.js, `semver` is a built-in module.

  Let's check: Node.js does have a built-in `semver` module. So we can use it.

  But note: the test might run in an environment without `semver`? Unlikely because it's built-in.

  Alternatively, we can use dynamic import? But that might be overkill.

  We'll write the test using `import` for built-in modules and for `semver`.

  However, note: the test file must be runnable by Jest. Jest supports ES modules.

  Plan:

  Test 1: Check that all dependencies in package.json are present in package-lock.json and the version in the lockfile satisfies the range.

  Test 2: Check that the required scripts (dev, build, lint, preview) are present in package.json.

  We'll write:

    import fs from 'fs';
    import semver from 'semver';
    import path from 'path';
    import { fileURLToPath } from 'url';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const packageJsonPath = path.resolve(__dirname, '../package.json');
    const packageLockJsonPath = path.resolve(__dirname, '../package-lock.json');

    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const packageLockJson = JSON.parse(fs.readFileSync(packageLockJsonPath, 'utf8'));

    Then, for each dependency in packageJson.dependencies and packageJson.devDependencies, check that the version in packageLockJson.packages[''].dependencies[dep] satisfies the range.

  However, note the structure of package-lock.json (lockfileVersion 3): the root package is represented in the `packages` object with key `""` (empty string). And the dependencies are under `dependencies` and `devDependencies` of that package.

  But note: the provided package-lock.json has:

    "packages": {
      "": { ... }

  So we can access the root package by `packageLockJson.packages['']`.

  However, the lockfile might have nested dependencies? We are only concerned with the top-level dependencies.

  We'll check the top-level dependencies.

  Steps for each dependency:

    const rootPackage = packageLockJson.packages[''];
    for (const [dep, range] of Object.entries(packageJson.dependencies)) {
      const lockedVersion = rootPackage.dependencies[dep];
      if (!lockedVersion) {
        // fail: dependency not found in lockfile
      }
      if (!semver.satisfies(lockedVersion, range)) {
        // fail: locked version does not satisfy the range
      }
    }

  Similarly for devDependencies.

  But note: the lockfile might have the version with a `^` or `~`? Actually, the lockfile records the exact version.

  Also, note: the range in package.json might be a URL or a git reference? We are only using version ranges.

  We'll write the test.

  Also, we'll write a test for the scripts.

  Let's write the test file.

  Note: We are to return only the test file contents. We'll name the file: `package.test.js`

  But note: the test file should be placed in the same directory as the package files? Typically, tests are in a `tests` or `__tests__` directory. However, we are not given the project structure.

  We'll assume the test file is placed in a `__tests__` directory at the root, so the path to the package files is `../package.json`.

  Alternatively, we can use `process.cwd()` to get the root? But we are using `__dirname` and going up one level.

  We'll use relative paths.

  Now, the test:

    import fs from 'fs';
    import semver from 'semver';
    import path from 'path';
    import { fileURLToPath } from 'url';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    describe('Package files', () => {
      let packageJson, packageLockJson, rootPackage;

      beforeAll(() => {
        const packageJsonPath = path.resolve(__dirname, '../package.json');