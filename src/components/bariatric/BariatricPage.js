import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as bariatricActions from '../../actions/bariatricActions';
import { Col, Row } from 'antd';
import BariatricOutputStandard from './BariatricOutputStandard';
import BariatricOutputSlider from './BariatricOutputSlider';

class BariatricPage extends React.Component {
    constructor(props, context) {
        super(props, context);        
        
        this.onProteinMultiplierChange = this.onProteinMultiplierChange.bind(this);        
    }

    onProteinMultiplierChange(value) {             
        this.props.actions.updateBariatrics({proteinMultiplier: value});        
    }

    render() {       
        //debugger;    
        return (
            <div>                
                <h1>Bariatric</h1>
                <div id="bariatric-outputs">
                    <BariatricOutputStandard value={this.props.bariatric.startBMI} text="Start BMI"/>    
                    <BariatricOutputStandard value={this.props.bariatric.currentBMI} text="Current BMI"/>    
                    <BariatricOutputStandard value={this.props.bariatric.IBW} text="IBW"/>    
                    <BariatricOutputStandard value={this.props.bariatric.EWL} text="EWL"/>
                    <BariatricOutputStandard value={this.props.bariatric.goalWeight} text="Goal Weight"/>
                    <BariatricOutputStandard value={this.props.bariatric.weightLoss} text="Weight Loss"/>
                    <BariatricOutputStandard value={this.props.bariatric.percentWeightLoss} text="% Weight Loss"/>    
                    <BariatricOutputSlider value={this.props.bariatric.protein} text="Protein" sliderValue={this.props.bariatric.proteinMultiplier} onChange={this.onProteinMultiplierChange}/>                                       
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