class FormRegexValidation {
    nameRegexValidation = (value) => {
        const nameRegex = /^[a-zA-Z][a-zA-Z .,'-]*$/;
        const isValid = nameRegex.test(value);
        return isValid;
    }

    surnameRegexValidation = (value) => {
        const surnameRegex = /^[a-zA-Z][a-zA-Z .,'-]*$/;
        const isValid = surnameRegex.test(value);
        return isValid;
    }

    emailRegexValidation = (value) => {
        const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        const isValid = emailRegex.test(value);
        return isValid;
    }

    dateRegexValidation = (value) => {
        const dateRegex = /[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}/;
        const isValid = dateRegex.test(value);
        return isValid;
    }
}

export default FormRegexValidation;