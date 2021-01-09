import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export class StatsCardImg extends Component {
    render() {
        return (
            <div className="card card-stats">
                <div className="content">
                    <Row>
                        <Col md={4} xs={12} style={{ alignItems: "center"}}>
                            <div>
                                <img src={this.props.image} alt="farmer" style={{ width: '240px' }} />
                            </div>
                            <div className="numbers">
                                <p>{this.props.statsText}</p>
                                <p>{this.props.statsValue}</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default StatsCardImg;
