const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("../tsconfig.json");
const nextJest = require('next/jest');

const paths = compilerOptions.paths ? compilerOptions.paths : {};

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
	rootDir: './',
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
	testPathIgnorePatterns: [
		"<rootDir>/.next/",
		"<rootDir>/node_modules/",
		"<rootDir>/cypress/",
		"<rootDir>/webdriverio/",
],
	moduleNameMapper: {
			...pathsToModuleNameMapper(paths, { prefix: "<rootDir>/" }),
			"\\.(scss|sass|css)$": "identity-obj-proxy",
	},
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);