import React, {Component} from "react"


export default class Overlay extends Component {
    constructor(props) {
        super(props)

        this.state = {
            styles: {
                backgroundImage: `url(${props.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "520px",
                maxWidth: "100%",
                minWidth: "100%",
                padding: "100px 0 0 0"
            }
        }
    }

    render() {
        return (
            <div style={this.state.styles}>
                {this.props.children}
            </div>
        )
    }
}