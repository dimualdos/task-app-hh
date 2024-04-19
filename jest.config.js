module.exports = {
    roots: ['<rootDir>/src'],
    testRegex: '/__tests__/.*\\.(test|spec)\\.(ts|tsx|js)$',
    transform: {
        '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
        '^.+\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};