import React, {PropTypes} from 'react';
import Header from './common/Header';
import { Col, Row } from 'antd';
import { Link, IndexLink } from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <div style={{
                        margin: '20px auto',
                        maxWidth: '600px'
                        }}>
                    <Row>
                        <Col span={8} style={{textAlign: 'right'}}>
                            <Row style={{marginBottom: '20px'}}>
                            <IndexLink to="/" activeClassName="active" style={{paddingRight: '30px'}}>bariatric</IndexLink> 
                            </Row>
                            <Row>
                            <Link to="/energy" activeClassName="active" style={{paddingRight: '30px'}}>energy</Link>                
                            </Row>
                        </Col>
                        <Col span={16} style={{borderLeft: '1px solid black', paddingLeft: '30px'}}>
                        {this.props.children}
                        </Col>
                    </Row>
                </div>                                                      
            </div>        
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;