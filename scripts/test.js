#!/usr/bin/env node

/**
 * Wrapper around CRA's test runner that strips any trailing `--`
 * forwarded by package managers (for example `pnpm test --`),
 * which would otherwise confuse Jest and break its CLI argument parsing.
 */

function stripStandaloneSeparators(argv) {
  if (argv.length <= 2) {
    return argv;
  }

  return argv.filter((arg, index) => index < 2 || arg !== '--');
}

const sanitizedArgv = stripStandaloneSeparators(process.argv);

if (sanitizedArgv.length !== process.argv.length) {
  process.argv.length = 0;
  Array.prototype.push.apply(process.argv, sanitizedArgv);
}

require('react-scripts/scripts/test');

