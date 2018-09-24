import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LoginView from './LoginView';
import DashboardContainer from '../Dashboard/DashboardContainer';
import './Login.scss';
import LoginService from '../Service/LoginService';
import EmailService from '../Service/EmailService';
import {accountList} from './Account';

class LoginContainer extends Component {
    constructor(props){
        super(props);
        this.updateAccountList();
        this.state = {
            loginStatus: false
        }
        this.account = {
            userName: '',
            userPassword: ''
        }

        this.unreadEmailCount = 0;
        this.loginService = new LoginService();
        this.emailService = null;

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.errorMessageRefHandler = this.errorMessageRefHandler.bind(this);
        this.onLogoutHandler = this.onLogoutHandler.bind(this);
    }

    updateAccountList() {
        window.localStorage.account = JSON.stringify(accountList); 
    }

    onChangeHandler = (event) => {
        this.account[event.target.name] = event.target.value;
    }
 
    onSubmitHandler = (event) => {
        event.preventDefault();
        event.stopPropagation();
        var account = this.loginService.validateUser(this.account.userName, this.account.userPassword);
        
        if(account.isValidUser === false) {
            this.errorMessageRef.innerText = "Invalid User Name / Password";
        } else {
            this.setState({
                loginStatus: true 
            });
            this.emailService = new EmailService(this.account.userName);
            // this.myEmailList = this.emailService.getMyEmailList(this.account.userName);
             this.unreadEmailCount = this.emailService.getUnreadEmailCount(this.account.userName);
        }
    }
    
    errorMessageRefHandler = element => this.errorMessageRef = element;

    onLogoutHandler = (event) => {
        this.emailService = null;
        this.account = {
            userName: '',
            userPassword: ''
        }
        //this.myEmailList = [];
        this.unreadEmailCount = 0;
        this.setState({
            loginStatus: false,
        });
    }
    render(){
        const props = Object.assign({},this.props,{
            onSubmitHandler: this.onSubmitHandler,
            onChangeHandler: this.onChangeHandler,
            errorMessageRefHandler: this.errorMessageRefHandler,
           // myEmailList: this.myEmailList,
            emailService: this.emailService,
            userName: this.account.userName,
            unreadEmailCount: this.unreadEmailCount,
            onLogoutHandler: this.onLogoutHandler
        });
        return(
            <div>
                {this.state.loginStatus === false && <LoginView {...props}/>}
                {this.state.loginStatus === true && <DashboardContainer {...props}/>}
            </div>
        );
    }
} 

export default LoginContainer;