import React, {PropTypes} from 'react';
import { Col, Row } from 'antd';
import _ from 'lodash';

class NumberInput extends React.Component {
    componentWillMount() {
        const id = _.uniqueId("input-");
        this.setState({id: id});
    }

    render() {       
        return (
            <Row>
                <Col span={12}>
                    <label htmlFor={this.state.id}>{this.props.text}</label>
                </Col>
                <Col span={12}>
                    <input
                        id={this.state.id} 
                        type="number"
                        onChange={this.props.onChange}
                        value={this.props.value} />                                
                </Col>
            </Row>    
        );
    }
}

NumberInput.propTypes = {        
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default NumberInput;