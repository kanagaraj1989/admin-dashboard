import React from 'react';
import PropTypes from 'prop-types';
import './DashboardHeader.scss';

const DashboardHeaderView = props => { 

        return (
            <div id="header-body">
                <div className="bar-icon">
                    <i className="fa fa-bars"></i>
                </div>
                <label className="search-lable">Search for something...</label>
                <div className="unread-email">
                    <div className="unread-email-count">
                        <label ref={props.updateUnreadEmailCountRef}></label>
                    </div>
                    <div className="envelope">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="alert-notification">
                    <div className="alert-lbl-count">8</div>
	                <div className="mail-alert">
                        <i className="fa fa-bell"></i>
                    </div>
                </div>
                <div className="logout-body">
                    <button className="logout-label"
                        onClick={(e)=>props.onLogoutHandler(e)}> 
                        <i className="fa fa-sign-out"></i>
                        &nbsp;&nbsp;Log out
                    </button>
                </div>
            </div>
        );
}

DashboardHeaderView.propTypes = {
    updateUnreadEmailCountRef: PropTypes.func.isRequired,
    onLogoutHandler: PropTypes.func.isRequired
}

export default DashboardHeaderView;