import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SideNavMenuView from './SideNavMenuView';
import ComposeMailContainer from './ComposeMail/ComposeMailContainer'

class SideNavMenuConainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openComposeMail: false,
            openSentEmail: false
        }
        this.openComposeMailHandler = this.openComposeMailHandler.bind(this);
        this.closeComposeMailHandler = this.closeComposeMailHandler.bind(this);
        this.opensentEmailHandler = this.opensentEmailHandler.bind(this);
        this.openInboxEmailHandler = this.openInboxEmailHandler.bind(this);
    }

    openComposeMailHandler = (event) => {
        this.setState({
            openComposeMail: true
        });
    }

    closeComposeMailHandler = (event) => {
        this.setState({
            openComposeMail: false
        });
    }

    opensentEmailHandler = (event) => {
        this.props.opensentEmailHandler(event);
    }

    openInboxEmailHandler =(event) => {
        this.props.openInboxEmailHandler(event);
    }

    render() {
        const props = Object.assign({}, this.props,{
            closeComposeMailHandler: this.closeComposeMailHandler,
            openComposeMailHandler: this.openComposeMailHandler,
            openComposeMail: this.state.openComposeMail,
            opensentEmailHandler: this.opensentEmailHandler,
            openInboxEmailHandler: this.openInboxEmailHandler
        });
        return(
            <div id="SideNavMenu">
                <SideNavMenuView {...props}/>
                {this.state.openComposeMail && <ComposeMailContainer {...props}/>}
            </div>
        );
    }
}

export default SideNavMenuConainer;