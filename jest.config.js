module.exports = {
    roots:['note_app/src'],
    transform:{
      '\\.(js|jsx)?$': 'babel-jest',
    },
    testMatch: ['note_app/src/**/(*.)test.{js,jsx}'],
    moduleFileExtensions:['js','jsx','json','node'],
    testPathIgnorePatterns: ['/node_modules/','/public'],
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
        '@testing-library/react/cleanup-after-each'

    ]
}