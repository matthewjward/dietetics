import React, {PropTypes} from 'react';
import { Col, Row } from 'antd';

class BariatricOutputStandard extends React.Component { 
    render() {       
        return (
            <Row>
                <Col span={12}>
                    <label className="bariatric-label">{this.props.text}</label>
                </Col>
                <Col span={12}>
                    <label>{this.props.value ? this.props.value.toFixed(1) : ""}</label>                                        
                </Col>
            </Row>    
        );
    }
}

BariatricOutputStandard.propTypes = {            
    value: PropTypes.string,
    text: PropTypes.string.isRequired
};

export default BariatricOutputStandard;