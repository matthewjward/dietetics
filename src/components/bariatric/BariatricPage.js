import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as bariatricActions from '../../actions/bariatricActions';
import { Col, Row } from 'antd';
import BariatricInput from './BariatricInput';
import BariatricOutputStandard from './BariatricOutputStandard';
import BariatricOutputSlider from './BariatricOutputSlider';

class BariatricPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            startWeight: "",
            currentWeight: "",
            height: "",
            proteinMultiplier: 1.3                      
        };

        this.onStartWeightChange = this.onStartWeightChange.bind(this);        
        this.onCurrentWeightChange = this.onCurrentWeightChange.bind(this);        
        this.onHeightChange = this.onHeightChange.bind(this);    
        this.onProteinMultiplierChange = this.onProteinMultiplierChange.bind(this);        
    }

    componentDidUpdate(prevProps, prevState) {
        //debugger;    
        if (prevState != this.state) {
            this.props.actions.updateBariatrics(this.state);
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

    onProteinMultiplierChange(value) {        
        let proteinMultiplier = value;
        this.setState({proteinMultiplier: proteinMultiplier});        
    }

    render() {       
        //debugger;    
        return (
            <div>
                <h1>Bariatric</h1>
                <div id="bariatric-inputs">
                    <BariatricInput onChange={this.onStartWeightChange} value={this.state.startWeight} text="Start Weight (kg)"/>    
                    <BariatricInput onChange={this.onCurrentWeightChange} value={this.state.currentWeight} text="Current Weight (kg)"/>    
                    <BariatricInput onChange={this.onHeightChange} value={this.state.height} text="Height (m)"/>                                             
                </div>                    
                <div id="bariatric-outputs">
                    <BariatricOutputStandard value={this.props.bariatric.startBMI} text="Start BMI"/>    
                    <BariatricOutputStandard value={this.props.bariatric.currentBMI} text="Current BMI"/>    
                    <BariatricOutputStandard value={this.props.bariatric.IBW} text="IBW"/>    
                    <BariatricOutputStandard value={this.props.bariatric.EWL} text="EWL"/>
                    <BariatricOutputStandard value={this.props.bariatric.goalWeight} text="Goal Weight"/>
                    <BariatricOutputStandard value={this.props.bariatric.weightLoss} text="Weight Loss"/>
                    <BariatricOutputStandard value={this.props.bariatric.percentWeightLoss} text="% Weight Loss"/>    
                    <BariatricOutputSlider value={this.props.bariatric.protein} text="Protein" sliderValue={this.state.proteinMultiplier} onChange={this.onProteinMultiplierChange}/>    
                                                                    
                </div>                    
            </div>
        );
    }
}

BariatricPage.propTypes = {        
    actions: PropTypes.object.isRequired,
    bariatric: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    //debugger;
    return {        
        bariatric: state.bariatric
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(bariatricActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BariatricPage);