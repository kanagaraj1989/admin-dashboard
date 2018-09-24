import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DashboardHeaderView from './DashboardHeaderView'

class DashboardHeaderContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const props = Object.assign({}, this.props,{});
        return(
            <DashboardHeaderView {...props}/>
        );
    }
} 
DashboardHeaderContainer.propTypes = {
    updateUnreadEmailCountRef: PropTypes.func.isRequired
}
export default DashboardHeaderContainer;