
const config = {
    transform: {
        "^.+\\.(ts|tsx|js|jsx)$": "ts-jest"
    }
    testPathIgnorePatterns: [
    '<rootDir>/src/interface/'
    ]
}

module.exports = config;
