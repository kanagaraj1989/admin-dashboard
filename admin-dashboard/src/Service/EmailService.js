import LoginService from './LoginService';

class EmailService {
    constructor(userName){
        this.userName = userName;
        this.emailList = this.getInboxEmail();
        this.sentEmailList = this.getSentEmail();
        this.loginService = new LoginService();
        this.getMyEmailList = this.getMyEmailList.bind(this);
        this.updateEmailRead = this.updateEmailRead.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
        this.deleteEmails = this.deleteEmails.bind(this);
        this.setMyEmail = this.setMyEmail.bind(this);
        this.setMyEmail();  
        this.mailSending = this.mailSending.bind(this);
        this.mySentEmailList = [];
        this.createSentMail = this.createSentMail.bind(this);
        this.getSentEmailList = this.getSentEmailList.bind(this);
    }
    
    getInboxEmail() {
        return window.localStorage.email != null 
        ? JSON.parse(window.localStorage.email)
        : [];
    }

    getSentEmail() {
        return window.localStorage.sentEmail != null 
        ? JSON.parse(window.localStorage.sentEmail)
        : [];
    }

    setMyEmail() {
        this.myEmailList = this.emailList.find( el => el.userName === this.userName);

        if(this.myEmailList === null || this.myEmailList === undefined ) {
            this.myEmailList = [];
            this.myEmailList.emailList = [];
        }
    }

    getMyEmailList = userName => {
        this.myEmailList = this.emailList != null 
                 ? this.emailList.find( el => el.userName === userName)
                 : null; 
        return this.myEmailList != null ? this.myEmailList.emailList: [];
    }

    getUnreadEmailCount = userName => {
        return this.myEmailList.emailList.filter( eList => eList.isRead === false).length;
    }

    updateEmailRead = emailID => {
        if(emailID != null) {
            if(this.myEmailList != null ) {
            this.myEmailList.emailList.find( el => el.eid === emailID).isRead = true;
            window.localStorage.email = JSON.stringify(this.emailList); 
            } else {
                this.setMyEmail(); 
            }
        }
    }

    sendEmail = email => {
        var returnStatus = {
            status: false,
            errorMessage: 'ToAddress is invalid.'
        }

        var toAddrStatus = this.mailSending(email, email.toAddress);
        if(!toAddrStatus) {
            alert('ToAddress is invalid.');
        }

        if( email.ccAddress.trim().length > 0) {
            var ccAddrStatus =  this.mailSending(email, email.ccAddress);
            if(!ccAddrStatus) {
                alert('ccAddress is invalid.');
            }
        }
        if( toAddrStatus || ccAddrStatus) {
            this.createSentMail(email, email.fromAddress);
        }

        window.localStorage.email = JSON.stringify(this.emailList);
        
        returnStatus.status = true;
        return returnStatus;
    }

    mailSending = (email,emailID) => {
        if(this.loginService.checkUserAvailability(emailID) === false) {
            return false;
        }

        var toEmailList = (this.emailList != null) 
                        ? this.emailList.find( el => el.userName === emailID)
                        : null;

        if (toEmailList === null || toEmailList === undefined) {
            var toEmail = {
                userName: emailID,
                emailList:[]
            };
            toEmail.emailList.push(email);
            this.emailList.push(toEmail);
        } else {
            toEmailList.emailList.unshift(email);
        }
        return true;
    }

    createSentMail = (email, fromAddress) => {
        this.mySentEmailList = this.sentEmailList.find( el => el.userName === fromAddress);
        if( this.mySentEmailList === null || this.mySentEmailList === undefined) {
            var sentEmail = {
                userName: fromAddress,
                emailList:[]
            };
            sentEmail.emailList.push(email);
            this.sentEmailList.push(sentEmail);
        } else {
            this.mySentEmailList.emailList.unshift(email);
        } 

        window.localStorage.sentEmail = JSON.stringify(this.sentEmailList);
    }

    deleteEmails = (emailIdList,userName) => {
        if(emailIdList === undefined || emailIdList === null || emailIdList.length < 1)
            return;
            
        var eList = (this.emailList != null) 
                        ? this.emailList.find( el => el.userName === userName)
                        : null;
        if(eList != null) {
            eList.emailList = eList.emailList.filter( el => !emailIdList.includes(el.eid));
        }
        window.localStorage.email = JSON.stringify(this.emailList);
    }

    getSentEmailList = () => {
        var emails = this.getSentEmail();        
        this.mySentEmailList = emails != null 
                 ? emails.find( el => el.userName === this.userName)
                 : null;
        return this.mySentEmailList != null 
            ? this.mySentEmailList.emailList 
            : [];
    }
}

export default EmailService;