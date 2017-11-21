import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as patientActions from '../../actions/patientActions';

import { Link, IndexLink } from 'react-router';
import NumberInput from './NumberInput';
import RadioInput from './RadioInput';

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            startWeight: "",
            currentWeight: "",
            height: "",
            age: "",
            gender: ""             
        };

        this.onStartWeightChange = this.onStartWeightChange.bind(this);        
        this.onCurrentWeightChange = this.onCurrentWeightChange.bind(this);        
        this.onHeightChange = this.onHeightChange.bind(this);    
        this.onAgeChange = this.onAgeChange.bind(this);    
        this.onGenderChange = this.onGenderChange.bind(this);    
    }

    componentDidUpdate(prevProps, prevState) {
        //debugger;    
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

    onAgeChange(event) {        
        let age = event.target.value;
        this.setState({age: age});        
    }

    onGenderChange(event) {        
        let gender = event.target.value;
        this.setState({gender: gender});        
    }

    render() {
        return (
            <div>
                <h1>Patient Details</h1>
                <div style={{
                        marginBottom: '20px',
                        marginTop: '20px',
                        maxWidth: '400px'
                    }}>
                    <NumberInput onChange={this.onStartWeightChange} value={this.state.startWeight} text="Start Weight (kg)"/>    
                    <NumberInput onChange={this.onCurrentWeightChange} value={this.state.currentWeight} text="Current Weight (kg)"/>    
                    <NumberInput onChange={this.onHeightChange} value={this.state.height} text="Height (m)"/>                                             
                    <NumberInput onChange={this.onAgeChange} value={this.state.age} text="Age (years)"/>                                             
                    <RadioInput onChange={this.onGenderChange} values={[{id: "m", text: "Male"},{id: "f", text: "Female"}]} text="Gender"/>                                             
                </div>                    
                <nav>            
                    <IndexLink to="/" activeClassName="active">Bariatric</IndexLink>            
                    {" | "}
                    <Link to="/energy" activeClassName="active">Energy</Link>                
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

export default connect(null, mapDispatchToProps, null, {pure:false})(Header);
