import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InboxBodyContainer from './InboxBody/InboxBodyContainer'
import InboxHeaderContainer from './InboxHeader/InboxHeaderContainer'
import InboxBodyView from './InboxBody/InboxBodyView';
import './Inbox.scss';

class InboxContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayHeader: true,
            displayBody: true,
            displayEmail: this.props.displayEmail,
            reloadInbox: true,
            displaySentMail: this.props.displaySentMail,
            displayInbox: this.props.displayInbox 
        };
        this.checkedEmailList = {};

        this.openEmail = this.openEmail.bind(this);
        this.openSentEmail = this.openSentEmail.bind(this);
        this.closeEmail = this.closeEmail.bind(this);
        this.emailCheckHandler = this.emailCheckHandler.bind(this);
        this.emailDeleteHandler = this.emailDeleteHandler.bind(this);
    }

    openEmail = (event, email) => {
        this.setState({
            displayEmail: true,
            displayInbox: false,
            displaySentMail: false,
            mailData: email,
            displayHeader: false,
            displayBody: false
        });
        this.props.updateUnreadEmailCount(email.eid, email.isRead);
    }

    openSentEmail = (event,email) => {
        this.setState({
            displayEmail: true,
            displayInbox: false,
            displaySentMail: false,
            mailData: email,
            displayHeader: false,
            displayBody: false
        });
    }

    closeEmail = (event) => {
        this.setState({
            displayEmail: false,
            displayInbox: true,
            displaySentMail: false,
            displayHeader: true,
            displayBody: true
        });
    }

    emailCheckHandler = (event) => {
        this.checkedEmailList[event.target.name] = event.target.checked;
    }

    emailDeleteHandler = (event) => {
        var emailIDList = Object.keys(this.checkedEmailList).filter( el => this.checkedEmailList[el] === true);
        this.props.emailService.deleteEmails(emailIDList, this.props.userName);
        this.props.reloadUnreadEmailCount();

        this.setState({
            reloadInbox: true,
            displayInbox: true,
            displaySentMail: false,
            displayEmail: false,
        });
    }

    componentWillMount() {
        this.checkedEmailList= {};
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.displaySentMail === true) {
            this.setState({
                displayEmail: false,
                displayInbox: false,
                displaySentMail: true,
            });
        } else if(nextProps.displayInbox === true) {
            this.setState({
                displayEmail: false,
                displayInbox: true,
                displaySentMail: false,
            });
        }
    }
    render() {
        
        const props = Object.assign({},this.props, {
            email: this.state.mailData,
            openEmail: this.openEmail,
            closeEmail: this.closeEmail,
            displayEmail: this.state.displayEmail,
            emailCheckHandler: this.emailCheckHandler,
            emailDeleteHandler: this.emailDeleteHandler,
            myEmailList: this.props.emailService.getMyEmailList(this.props.userName),
            displayInbox: this.state.displayInbox,
            displaySentMail: this.state.displaySentMail,
            openSentEmail: this.openSentEmail
        });

        return(
            <div id="inbox-id">
                {this.state.displayHeader &&<InboxHeaderContainer {...props}/>}
                <InboxBodyContainer {...props}/>
            </div>
        );
    };
}

InboxContainer.propTypes = {
    updateUnreadEmailCount: PropTypes.func.isRequired,
    reloadUnreadEmailCount: PropTypes.func.isRequired
}

export default InboxContainer;
