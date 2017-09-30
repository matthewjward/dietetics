import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as bariatricActions from '../../actions/bariatricActions';

class BariatricPage extends React.Component {
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

    render() {       
        //debugger;    
        return (
            <div>
                <h1>Bariatric</h1>
                <div id="bariatric-inputs">
                    <div>
                        <label htmlFor="startWeight" className="bariatric-label">Start Weight (kg)</label>
                        <input
                            id="currentWeight" 
                            type="text"
                            onChange={this.onStartWeightChange}
                            value={this.state.startWeight} />                                
                    </div>    
                    <div>
                        <label htmlFor="currentWeight" className="bariatric-label">Current Weight (kg)</label>
                        <input
                            id="currentWeight" 
                            type="text"
                            onChange={this.onCurrentWeightChange}
                            value={this.state.currentWeight} />                                
                    </div>                            
                    <div>    
                        <label htmlFor="height" className="bariatric-label">Height (m)</label>
                        <input
                            id="height" 
                            type="text"
                            onChange={this.onHeightChange}
                            value={this.state.height} />                                
                    </div>
                </div>                    
                <div id="bariatric-outputs">
                    <div>
                        <label className="bariatric-label">Start BMI</label>
                        <label>{this.props.bariatric.startBMI ? this.props.bariatric.startBMI.toFixed(2) : ""}</label>         
                    </div>    
                    <div>
                        <label className="bariatric-label">Current BMI</label>
                        <label>{this.props.bariatric.currentBMI ? this.props.bariatric.currentBMI.toFixed(2) : ""}</label>                              
                    </div>                                                
                    <div>
                        <label className="bariatric-label">IBW</label>
                        <label>{this.props.bariatric.IBW ? this.props.bariatric.IBW.toFixed(2) : ""}</label>                              
                    </div>                                                
                    <div>
                        <label className="bariatric-label">EWL</label>
                        <label>{this.props.bariatric.EWL ? this.props.bariatric.EWL.toFixed(2) : ""}</label>                              
                    </div>                                                
                    <div>
                        <label className="bariatric-label">Goal Weight</label>
                        <label>{this.props.bariatric.goalWeight ? this.props.bariatric.goalWeight.toFixed(2) : ""}</label>                              
                    </div>                                                
                    <div>
                        <label className="bariatric-label">Weight Loss</label>
                        <label>{this.props.bariatric.weightLoss ? this.props.bariatric.weightLoss.toFixed(2) : ""}</label>                              
                    </div>                                                
                    <div>
                        <label className="bariatric-label">% Weight Loss</label>
                        <label>{this.props.bariatric.percentWeightLoss ? this.props.bariatric.percentWeightLoss.toFixed(2) : ""}</label>                              
                    </div>                                                
                    <div>
                        <label className="bariatric-label">Protein</label>
                        <label>{this.props.bariatric.protein ? this.props.bariatric.protein.toFixed(2) : ""}</label>                              
                    </div>                                                
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