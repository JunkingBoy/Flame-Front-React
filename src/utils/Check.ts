function checkInput (username: string, password: string, confirmPassword?: string): boolean {
    if (!username.startsWith('+86')) {
        username = '+86' + username;
    }

    // 正则规则
    const usernamePattern: RegExp = /^\+86\d{10,13}$/;
    const passwordPattern: RegExp = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[\W_]).{1,16}$/;

    let isUserNameValid: boolean = usernamePattern.test(username);
    let isPasswordValid: boolean = passwordPattern.test(password);

    return isUserNameValid && isPasswordValid;
}

export {
    checkInput
}