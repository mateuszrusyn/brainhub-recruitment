import FormRegexValidation from './FormRegexValidation';

const formRegexValidation = new FormRegexValidation();


describe('Name regex validation test', () => {
    it('should pass regex validation with given string', () => {
        const exampleName = "Mateusz";
        expect(formRegexValidation.nameRegexValidation(exampleName)).toBe(true);
    })

    it('should not pass regex validation with given string', () => {
        const exampleName = "Kad1314";
        expect(formRegexValidation.nameRegexValidation(exampleName)).toBe(false);
    })
})

describe('Surname regex validation test', () => {
    it('should pass regex validation with given string', () => {
        const exampleSurname = "Rusyn";
        expect(formRegexValidation.surnameRegexValidation(exampleSurname)).toBe(true);
    })

    it('should not pass regex validation with given string', () => {
        const exampleSurname = "324@#";
        expect(formRegexValidation.surnameRegexValidation(exampleSurname)).toBe(false);
    })
})

describe('Email regex validaiton test', () => {
    it('should pass regex validation with given string', () => {
        const exampleEmail = "mateusz.rusyn@gmail.com";
        expect(formRegexValidation.emailRegexValidation(exampleEmail)).toBe(true);
    })

    it('should not pass regex validation with given string', () => {
        const exampleEmail = "mateusz.rusyngmail.com";
        expect(formRegexValidation.emailRegexValidation(exampleEmail)).toBe(false);
    })
})

describe('Date regex validation test', () => {
    it('should pass regex validation with given string', () => {
        const exampleDate = new Date().toISOString().slice(0, 19);
        expect(formRegexValidation.dateRegexValidation(exampleDate)).toBe(true);
    })

    it('should not pass regex validation with given string', () => {
        const exampleDate = new Date();
        expect(formRegexValidation.dateRegexValidation(exampleDate)).toBe(false);
    })
})