import React, {PropTypes} from 'react';
import { Slider, Col, Row } from 'antd';
import Knob from '../common/Knob';

class BariatricOutputKnob extends React.Component { 
        render() {       
        return (
            <Row type="flex" justify="center" align="middle">
                <Col span={6}>
                    <label>{this.props.text}</label>
                </Col>                
                <Col span={6}>                
                    <Knob
                        value={this.props.knobValue}
                        onChange={this.props.onChange}                        
                        step={0.1}
                        min={1.2}
                        max={1.5}
                        angleArc={120}
                        angleOffset={-60}
                        height={25}
                        width={50}   
                        cursor={true}                     
                    />               
                </Col>    
                <Col span={12}>
                    <label>{this.props.value ? this.props.value.toFixed(1) : ""}</label>                                        
                </Col>
                           
                
            </Row>    
        );
    }
}

BariatricOutputKnob.propTypes = {      
    onChange: PropTypes.func.isRequired,      
    value: PropTypes.string,
    text: PropTypes.string.isRequired,
    knobValue: PropTypes.number.isRequired
};

export default BariatricOutputKnob;