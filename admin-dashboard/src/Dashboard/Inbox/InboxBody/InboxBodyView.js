import React from 'react';
import PropTypes from 'prop-types';

const InboxBodyView = props => {
    const emailRender = (emailList) => emailList.map( email => (
        <tr id={email.eid} key={email.eid} className="mail-row" onClick={(e)=>props.openEmail(e,email)}>
            <td className="mail-check" onClick={(e)=>props.checkBoxClick(e)}>
                <input className="email-check" type="checkbox" name={email.eid}></input>
            </td>
            <td className="from-add">
                {email.fromAddress}
            </td>
            <td className="mail-label">
                {email.emailList}
            </td>
            <td className="mail-sub">
                {email.subject}
            </td>
            <td className="mail-attach">
            </td>
            <td className="mail-rec-time">
                {email.receivedTime}
            </td>
        </tr>
    ));

    const showNoEmailMessage = () =>(
        <tbody>
            <tr className="empty-inbox-container">
                <td className="empty-inbox">
                    Your Inbox is empty.
                    <br/>Nothing to see there 
                </td>
            </tr>
        </tbody>
    );

     return (
         <div id="inbox-body-id">
            <table className="inbox-tbl">
              {props.myEmailList.length === 0 &&
                showNoEmailMessage()
              }
              {props.myEmailList.length > 0 &&
                <tbody className="inbox-body-tbl">
                    {emailRender(props.myEmailList)}
              </tbody> }
            </table>
         </div>
     );
}

InboxBodyView.propTypes = {
    myEmailList: PropTypes.arrayOf(PropTypes.shape({
        eid: PropTypes.string,
        fromAddress: PropTypes.string,
        toAddress: PropTypes.string,
        subject: PropTypes.string,
        mailBody: PropTypes.string,
        receivedTime: PropTypes.string,
        lableType: PropTypes.string
    })),
    openEmail: PropTypes.func.isRequired,
    checkBoxClick: PropTypes.func.isRequired
}

InboxBodyView.defaultProps = {
    myEmailList: []
}

export default InboxBodyView ;