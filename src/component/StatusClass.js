import React, { Component } from "react";
import Container_ from "./Container_";
import StatusReact from "./StatusReact";

class StatusClass extends Component {
    state = {};
    render() {
        return (
            <Container_>
                <h2>{this.props.title}</h2>
                <p>
                    Bangaldesh is my motherland. Proud to be bangadeshi. Islam
                    is our religion. Love islam more than life
                </p>
                <StatusReact />
            </Container_>
        );
    }
}

export default StatusClass;
