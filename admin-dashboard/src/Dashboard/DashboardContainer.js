import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SideNavMenuConainer from './SideNavMenu/SideNavMenuContainer'
import DashboardHeaderContainer from './DashboardHeader/DashboardHeaderContainer'
import InboxContainer from './Inbox/InboxContainer'
import './Dashboard.scss';

class DashboardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailList: this.props.emailList,
            userName: '',
            displaySentMail: false,
            sentEmailList: [],
            displayInbox: true,
            displayEmail: false
         }

        this.unreadEmailCount = this.props.unreadEmailCount;
        this.updateUnreadEmailCount = this.updateUnreadEmailCount.bind(this);
        this.updateUnreadEmailCountRef = this.updateUnreadEmailCountRef.bind(this);
        this.reloadUnreadEmailCount = this.reloadUnreadEmailCount.bind(this);
        this.opensentEmailHandler = this.opensentEmailHandler.bind(this);
        this.openInboxEmailHandler = this.openInboxEmailHandler.bind(this);
    }

    unreadEmailCountElement = null;


    componentDidMount() {
       this.unreadEmailCountElement.innerText = this.unreadEmailCount;
    }

    updateUnreadEmailCount = (emailID, isRead) => {
        if(isRead === false) {
            this.props.emailService.updateEmailRead(emailID);
            this.unreadEmailCountElement.innerText = this.props.emailService.getUnreadEmailCount(this.props.userName);
        }
    }

    reloadUnreadEmailCount = () => {
        this.unreadEmailCountElement.innerText = this.props.emailService.getUnreadEmailCount(this.props.userName);
    }
    
    updateUnreadEmailCountRef = element => this.unreadEmailCountElement = element;

    opensentEmailHandler = (event) => {
        this.setState({
            displaySentMail: true,
            displayInbox: false,
            displayEmail: false,
            sentEmailList: this.props.emailService.getSentEmailList()
        });
    }

    openInboxEmailHandler = (event) => {
        this.setState({
            displaySentMail: false,
            displayInbox: true,
            displayEmail: false
        });
    }

    render() {
        const props = Object.assign({},this.props, {
            updateUnreadEmailCount: this.updateUnreadEmailCount,
            updateUnreadEmailCountRef: this.updateUnreadEmailCountRef,
            reloadUnreadEmailCount: this.reloadUnreadEmailCount,
            opensentEmailHandler: this.opensentEmailHandler,
            openInboxEmailHandler: this.openInboxEmailHandler,
            sentEmailList: this.state.sentEmailList,
            displaySentMail: this.state.displaySentMail,
            displayEmail: this.state.displayEmail,
            displayInbox: this.state.displayInbox
        });
        return (
            <div className="dashboard-body">
                <DashboardHeaderContainer {...props}/>
                <div id="nav-inbox-id">
                    <SideNavMenuConainer {...props} />
                    <InboxContainer {...props}/>
                </div>
            </div>
        );
    }
}

export default DashboardContainer;