class LoginService {
    constructor(){
        this.account = {
            isValidUser: false,
            userName: ''
        }
        this.validateUser = this.validateUser.bind(this);
        this.checkUserAvailability = this.checkUserAvailability.bind(this);
    }

    checkUserAvailability = (userName) => {
        const account = JSON.parse(window.localStorage.account); 
        var data = (account != null) 
                ? account.find(el => el.userName === userName) 
                : null;

        return data != null ? true: false;
    }

    validateUser = (userName, password) => {
        const account = JSON.parse(window.localStorage.account); 
        var data = (account != null) 
                ? account.find(el => el.userName === userName 
                    && el.password === password) 
                : null;
        if(data != null) {
            this.account = Object.assign({},data,{
                isValidUser: true
            });
        } else {
            this.account.isValidUser = false;
        }

        return this.account;
    }
}

export default LoginService;