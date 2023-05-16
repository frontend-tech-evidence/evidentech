/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    setupFiles: ['jest-localstorage-mock'],
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    // collectCoverage: true,
    // coverageDirectory: './coverage',
    // coverageThreshold: {
    // global:{
    //   statements: 100,
    //   branches: 100,
    //   functions: 100,
    //   lines: 100
    // }
    // },
}
