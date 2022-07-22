
const config = {
    transform: {
        "^.+\\.(ts|tsx|js|jsx)$": "ts-jest"
    }
    coveragePathIgnorePatterns: [
        '<rootDir>/facade-app/src/interface/'
    ]
}

module.exports = config;
