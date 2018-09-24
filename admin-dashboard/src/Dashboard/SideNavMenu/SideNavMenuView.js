import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './SideNavMenu.scss';
const SideNavMenuView = props => {

    return (
        <div className="SideNavMenu">
            <div className="compose-mail">
                <button className="compose-mail-btn"
                    onClick={(e) =>props.openComposeMailHandler(e)}>
                    Compose Mail
                </button>

                <div className="email-option">
                    <div className="folders">Folders</div>
                    <div className="inbox-email">
    	                <button className="inbox-btn"
                            onClick={(e) =>props.openInboxEmailHandler(e)}>
                            Inbox
                        </button>
                    </div>
                    <div className="sent-email">
    	                <button className="sent-btn"
                            onClick={(e) =>props.opensentEmailHandler(e)}>
                            Sent
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

SideNavMenuView.propTypes = {
    openComposeMailHandler: PropTypes.func.isRequired,
    opensentEmailHandler: PropTypes.func.isRequired,
    openInboxEmailHandler: PropTypes.func.isRequired
}

export default SideNavMenuView;