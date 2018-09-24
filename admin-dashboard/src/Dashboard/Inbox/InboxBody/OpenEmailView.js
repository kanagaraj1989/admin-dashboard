import React from 'react';
import PropTypes from 'prop-types';
import './OpenEmail.scss';

const OpenEmailView = props => {
    var mailBody = props.email.mailBody.replace('\\n','\n');
    return(
        <div id="inbox-body-id"> 
            <div className="open-email-close-body">
                <button className="close-btn" onClick={(e)=>props.closeEmail(e)}>
                    Close
                </button>
            </div>
            <div className="open-email-header-one">
                {props.email.subject}
            </div>
            <div id="open-email-header-two">
                <span className="from-addr">{props.email.fromAddress}</span><br/>
                <span className="to-addr">to:me</span>
                <span className="received-time">{props.email.receivedTime}</span>
            </div>
            <div id="open-email-body">
                <textarea disabled id="email-body-id" value={mailBody}>
                </textarea> 
            </div>
        </div>
    )
}

OpenEmailView.propTypes = {
    email: PropTypes.objectOf(PropTypes.shape({
        eid: PropTypes.string,
        fromAddress: PropTypes.string,
        toAddress: PropTypes.string,
        subject: PropTypes.string,
        mailBody: PropTypes.string,
        receivedTime: PropTypes.string,
        lableType: PropTypes.string
    })),
    closeEmail: PropTypes.func
}

export default OpenEmailView;