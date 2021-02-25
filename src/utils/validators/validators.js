export const required = value => {
    if(value) return undefined;

    return "Field is required";
}

export const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined


export const minLength = min => value => value && value.length < min ? `Must be ${min} characters or more` : undefined


