export const parseApiError = (error) =>{
    return error.response.body.violations.reduce((parsedErrors, violation)=>{
        parsedErrors[violation['propertyPath']] = violation['message'];
        return parsedErrors;
        },
        {}
    );
};