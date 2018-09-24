import React from 'react';
import PropTypes from 'prop-types'

const ComposeMailView = props =>{
    return (
        <div className="email-form">
            <div className="email-form-body">
                <button className="compose-mail-close-btn" 
                    onClick={(e)=>props.ComposeMailcloseHandler(e)}>
                    Close
                 </button>
                <form  onSubmit={(e) =>props.mailSendHandler(e)}>
                    <div className="emailBox">
                        <label className="mail-addr-lbl" htmlFor="toAddress">To</label>
                        <input name='toEmail' 
                            id="toAddress" type="email" 
                            size="64" maxLength="64" required
                            placeholder="kana@gmail.com"
                            onChange={(e) => props.handleChange(e)} 
                            /><br/>
                        <label className="mail-addr-lbl" htmlFor="ccAddress">Cc</label>    
                        <input name='ccEmail' id="ccAddress" type="email" 
                            size="64" maxLength="64"
                            onChange={(e) => props.handleChange(e)} />
                        <input name='subject' id="mailSubject"  size="67" 
                            maxLength="100" placeholder="Subject"
                            onChange={(e) => props.handleChange(e)} />
                    </div>

                    <div className="messageBox">
                        <textarea name='mailBody' id="message" cols="80" rows="8" 
                            placeholder="Write something"
                            onChange={(e) => props.handleChange(e)} ></textarea>
                    </div>
                    <input type="submit" value="Send"/>
                </form>
            </div>
        </div>
    );
}
ComposeMailView.propTypes = {
    mailSendHandler: PropTypes.func.isRequired,
    ComposeMailcloseHandler: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default ComposeMailView;