import React, {Component} from "react"
import {Link} from "react-router"

import Routes from "./../config/NavRoutes"


export default class Navigator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            links: Routes,
            classNameChanged: "nav"
        }
    }

    shouldComponentUpdate() {
        return true;
    }

    componentWillMount(){

        var self = this;

        window.onscroll = function (e) {
            var scroll = document.body.scrollTop

            if(scroll >= 150) {
                self.setState(() => {
                    return {classNameChanged: "nav changed-nav"}
                })
            }
            else {
                self.setState(() => {
                    return {
                        classNameChanged: "nav"
                    }
                })
            }
        }

    }
    
    render() {
        return (
            <nav className={this.state.classNameChanged}>
                <ul>
                    {this.state.links.map((el, index) => {
                        return (<li key={index}>
                            {el.url === "/" ? 
                                <Link title={el.text} className="Logo" to={el.url}>
                                    {el.text}
                                </Link> :
                                <Link title={el.text} to={el.url}>
                                    {el.text}
                                </Link>
                            }
                            
                        </li>)
                    })}
                </ul>
            </nav>
        )
    }
}