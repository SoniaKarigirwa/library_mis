function SignupValidation(values) {
    let errors = {}
    const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/

    if(!values.firstName){
        errors.firstName = "First name is required"
    } 

    if(!values.lastName){
        errors.lastName = "Last name is required"
    } 

    if(!values.email){
        errors.email = "Email is required"
    } 
    else if(!email_pattern.test(values.email)){
        errors.email = "Email is invalid"
    }

    if(!values.password){
        errors.password = "Password is required"
    } 
    else if(!password_pattern.test(values.password)){
        errors.password = "Password is invalid"
    } 

    return errors;
}

export default SignupValidation;