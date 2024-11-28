class LoginModal {

    url: string = 'https://www.demoblaze.com/index.html';
    usernameTxt: string = '.modal-body  .form-group > input#loginusername';
    passwordTxt: string = '.modal-body  .form-group > input#loginpassword';
    sumbitBtn: string = '#logInModal .btn-primary';
    modalContainer: string = '.modal-dialog';

    constructor() { }

}

const LoginModalInstance = new LoginModal()

export { LoginModal }

export default LoginModalInstance;