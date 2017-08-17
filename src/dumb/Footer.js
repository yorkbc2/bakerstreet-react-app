import React, {Component} from "react"
import Links from "./../config/NavRoutes.js"
import {Link} from "react-router"


export default class Footer extends Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <footer>
                <ul>
                    {Links.map((el, index) => {
                        return (<li key={index}>
                            {el.url === "/" ? 
                                <Link className="Logo" to={el.url}>
                                    {el.text}
                                </Link> :
                                <Link to={el.url}>
                                    {el.text}
                                </Link>
                            }
                            
                        </li>)
                    })}
                </ul>
            </footer>
        )
    }
}