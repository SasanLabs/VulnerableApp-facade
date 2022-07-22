
const config = {
    transform: {
        "^.+\\.(ts|tsx|js|jsx)$": "ts-jest"
    }
    testPathIgnorePatterns: [
    '<rootDir>/facade-app/src/interface/'
    ]
}

module.exports = config;
