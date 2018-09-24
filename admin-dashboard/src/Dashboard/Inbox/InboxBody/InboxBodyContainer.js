import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InboxBodyView from './InboxBodyView';
import OpenEmailView from './OpenEmailView';
import SentEmailView from './SentEmailView';
import './InboxBody.scss';

class InboxBodyContainer extends Component {
    constructor(props) {
        super(props);
        this.checkBoxClick = this.checkBoxClick.bind(this);
    }

    checkBoxClick = (event) => {
         event.stopPropagation();
         this.props.emailCheckHandler(event);
    }
  
    render() {
        const props = Object.assign({},this.props,{
            checkBoxClick: this.checkBoxClick,
        });
        return(
            <div>
                {this.props.displayEmail && <OpenEmailView {...props}/> }
                {this.props.displayInbox && <InboxBodyView {...props}/>}
                {this.props.displaySentMail && <SentEmailView {...props} />}
            </div>
        );
    }
} 

InboxBodyContainer.propTypes = {
    openEmail: PropTypes.func.isRequired,
    openSentEmail: PropTypes.func.isRequired,
    closeEmail: PropTypes.func.isRequired,
    displayEmail: PropTypes.bool,
    emailCheckHandler: PropTypes.func.isRequired
}

export default InboxBodyContainer;