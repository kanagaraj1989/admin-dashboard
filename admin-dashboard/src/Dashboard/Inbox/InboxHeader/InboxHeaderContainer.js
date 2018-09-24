import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InboxHeaderView from './InboxHeaderView';
import './InboxHeader.scss';

class InboxHeaderContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const props = Object.assign({},this.props,{});
        return(
                <InboxHeaderView {...props}/>
        );
    }
}

export default InboxHeaderContainer;