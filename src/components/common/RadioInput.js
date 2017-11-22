import React, {PropTypes} from 'react';
import { Radio, Col, Row } from 'antd';
import _ from 'lodash';
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

class RadioInput extends React.Component {
    render() {       
        return (
            <Row>                
                <Col span={12}>
                    <label>{this.props.text}</label>
                </Col>
                <Col span={12}>
                    <RadioGroup onChange={this.props.onChange}>
                        {this.props.values.map((item) =>
                            <RadioButton value={item.id}>{item.text}</RadioButton>
                        )}                                           
                    </RadioGroup>                              
                </Col>
            </Row>    
        );
    }
}

RadioInput.propTypes = {        
    onChange: PropTypes.func.isRequired,
    values: PropTypes.array.isRequired
};

export default RadioInput;