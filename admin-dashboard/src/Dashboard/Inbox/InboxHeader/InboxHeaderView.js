import React from 'react';
import PropTypes from 'prop-types';

const InboxHeaderView = props => {
    return(
        <div id="inbox-header-body">
            <div>
                <div className="inbox-lbl">
		            <span className="label-name">Inbox (</span>
		            <span className="mail-cnt">16</span>
		            <span className="lable-cls">)</span>
	            </div>
	            <div className="search-email">
		            <label className="search-email-lbl">Search email</label>
		            <input type="button" value="Search" className="search-btn" />
	            </div>
            </div>
            <div className="header-two">
                <div className="inbox-action-btn">
                    <button className="refresh-btn">
                        <i className="fa fa-refresh"></i>
                        <span className="refresh-lbl">Refresh</span>
                    </button>
                    <button className="eye-btn"><i className="fa fa-eye"></i></button>
                    <button className="excl-btn"><i className="fa fa-exclamation"></i></button>
                    <button className="del-btn"
                        onClick={(e)=>props.emailDeleteHandler(e)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </div>
                <div className="inbox-moving-btn">
                    <button className="arrow-btn prev-btn">
                        <i className="fa fa-arrow-left"></i>
                    </button>
                    <button className="arrow-btn next-btn">
                        <i className="fa fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

InboxHeaderView.propTypes = {
    emailDeleteHandler: PropTypes.func.isRequired
}

export default InboxHeaderView;