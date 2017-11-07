import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as patientActions from '../../actions/patientActions';

import { Link, IndexLink } from 'react-router';
import TextInput from './TextInput';

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            startWeight: "",
            currentWeight: "",
            height: ""             
        };

        this.onStartWeightChange = this.onStartWeightChange.bind(this);        
        this.onCurrentWeightChange = this.onCurrentWeightChange.bind(this);        
        this.onHeightChange = this.onHeightChange.bind(this);    
    }

    componentDidUpdate(prevProps, prevState) {
        debugger;    
        if (prevState != this.state) {
            this.props.actions.updatePatientDetails(this.state);
        }
    }

    onStartWeightChange(event) {                
        let startWeight = event.target.value;
        this.setState({startWeight: startWeight});
    }

    onCurrentWeightChange(event) {        
        let currentWeight = event.target.value;
        this.setState({currentWeight: currentWeight});
    }

    onHeightChange(event) {        
        let height = event.target.value;
        this.setState({height: height});        
    }

    render() {
        return (
            <div>
                <h1>Patient Details</h1>
                <div id="bariatric-inputs">
                    <TextInput onChange={this.onStartWeightChange} value={this.state.startWeight} text="Start Weight (kg)"/>    
                    <TextInput onChange={this.onCurrentWeightChange} value={this.state.currentWeight} text="Current Weight (kg)"/>    
                    <TextInput onChange={this.onHeightChange} value={this.state.height} text="Height (m)"/>                                             
                </div>                    
                <nav>            
                    <IndexLink to="/" activeClassName="active">Bariatric</IndexLink>            
                    {" | "}
                    <Link to="/bmr" activeClassNme="active">BMR</Link>                
                </nav>
            </div>
        );
    }
}

Header.propTypes = {        
    actions: PropTypes.object.isRequired    
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(patientActions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(Header);