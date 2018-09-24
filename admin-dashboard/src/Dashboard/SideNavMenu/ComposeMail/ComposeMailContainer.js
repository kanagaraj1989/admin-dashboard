import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ComposeMailView from './ComposeMailView';
import './ComposeMail.scss';

class ComposeMailContainer extends Component {
    constructor(props) {
        super(props);
        this.mailSendHandler = this.mailSendHandler.bind(this);
        this.ComposeMailcloseHandler = this.ComposeMailcloseHandler.bind(this);
        this.emailData = {
            toEmail: '',
            ccEmail: '',
            subject: '',
            mailBody:''
        };
        this.handleChange = this.handleChange.bind(this);
    }
   
    getCurrentTime = () => {
        var today = new Date();
        var month = today.getMonth()+1;
        var day = today.getDate();

        month = month < 10 ? '0'+month : month;
        day = day < 10 ? '0'+day : day;

        return today.getFullYear() + '/' + month + '/' + day;
    }

    
    mailSendHandler = (event) => {
        event.preventDefault();
        event.stopPropagation();
        var recTime = this.getCurrentTime();
        var emailObj = {
            eid: "email_" + ++window.localStorage.emailID,
            fromAddress: this.props.userName,
            toAddress: this.emailData.toEmail,
            ccAddress: this.emailData.ccEmail,
            subject: this.emailData.subject,
            mailBody: this.emailData.mailBody,
            receivedTime: recTime,
            isRead: false
        }
        var sendstatus = this.props.emailService.sendEmail(emailObj);
        if(sendstatus.status === false) {
            alert(sendstatus.errorMessage);
        }
        this.props.closeComposeMailHandler(event);
    }

    ComposeMailcloseHandler = (event) => {
        this.props.closeComposeMailHandler(event);
    }

    handleChange = (event) => {
        this.emailData[event.target.name] = event.target.value;
    }

    render() {
        const props = Object.assign({},this.props,{
            ComposeMailcloseHandler: this.ComposeMailcloseHandler,
            mailSendHandler: this.mailSendHandler,
            handleChange: this.handleChange
        });
        return(
            <ComposeMailView {...props}/>
        );
    }

}

ComposeMailContainer.propTypes = {
    closeComposeMailHandler: PropTypes.func.isRequired,
    openComposeMail: PropTypes.bool.isRequired
    
}

export default ComposeMailContainer;