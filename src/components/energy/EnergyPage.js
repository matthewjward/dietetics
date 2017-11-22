import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as energyActions from '../../actions/energyActions';
import BariatricOutputStandard from '../bariatric/BariatricOutputStandard';

class EnergyPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Energy</h1>
                <div id="energy-outputs">
                    <BariatricOutputStandard value={this.props.energy.MSJ} text="Mifflin-St Jeor"/>    
                    <BariatricOutputStandard value={this.props.energy.Schofield} text="Schofield"/>    
                    <BariatricOutputStandard value={this.props.energy.HB} text="Harris-Benedict"/>    
                </div>
            </div>
        );
    }
}


EnergyPage.propTypes = {        
    actions: PropTypes.object.isRequired,
    energy: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {        
        energy: state.energy
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(energyActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EnergyPage);