import React from 'react';

const SentEmailView = props => {
    const emailRender = (emailList) => emailList.map( email => (
        <tr id={email.eid} key={email.eid} className="mail-row" onClick={(e)=>props.openSentEmail(e,email)}>
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
                    Your Sent Mail is empty.
                    <br/>Nothing to see there 
                </td>
            </tr>
        </tbody>
    );

     return (
         <div id="inbox-body-id">
            <table className="inbox-tbl">
              {props.sentEmailList.length === 0 &&
                showNoEmailMessage()
              }
              {props.sentEmailList.length > 0 &&
                <tbody className="inbox-body-tbl">
                    {emailRender(props.sentEmailList)}
              </tbody> }
            </table>
         </div>
     );
}

export default SentEmailView;