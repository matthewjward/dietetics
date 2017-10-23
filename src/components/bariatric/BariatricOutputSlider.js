import React, {PropTypes} from 'react';
import { Slider, Col, Row } from 'antd';


class BariatricOutputSlider extends React.Component { 
        render() {       
        return (
            <Row type="flex" justify="center" align="middle">
                <Col span={12}>
                    <label>{this.props.text}</label>
                </Col>                
                <Col span={4}>
                    <label>{this.props.value ? this.props.value.toFixed(1) : ""}</label>                                        
                </Col>
                <Col span={8}>
                <div className="slider-wrapper">
                    <label className="bariatric-slider-label">{1.2}</label>    
                    <Slider className="bariatric-slider" min={1.2} max={1.5} step={0.1} value={this.props.sliderValue} onChange={this.props.onChange}/>
                    <label className="bariatric-slider-label">{1.5}</label>
                </div>    
                </Col>                
                
            </Row>    
        );
    }
}

BariatricOutputSlider.propTypes = {      
    onChange: PropTypes.func.isRequired,      
    value: PropTypes.string,
    text: PropTypes.string.isRequired,
    sliderValue: PropTypes.number.isRequired
};

export default BariatricOutputSlider;