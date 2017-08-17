// React component importing

import React, {Component} from "react"

// Import image from assets

import SocialLinks from "./../config/SocialLinks"

import Navigator from "./Navigator"

// Creating component

// Styles

const styles = {
    main: {
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        minHeight: "480px",
        color: "white",
        textAlign: "center",
        padding: "100px 15px 0 15px"
    },
    header: {
        h1: {
            fontSize: "56pt",
            fontWeight: "lighter",
            fontFamily: "'Dancing Script', cursive"
        },
        h2: {
            fontFamily: "'Roboto Slab', sans-serif",
            fontSize: "22px",
            fontWeight: "lighter",
            width: "440px",
            margin: "0 auto"
        }
    }
}

export default class Header extends Component {
    shouldComponentUpdate() {
        return false;
    }
    render() {
        return (
            <div className="header-shell">
                <Navigator />
                <header className='FadeIn' style={Object.assign(styles.main, {
                    backgroundImage: `url(${this.props.image})`
                })}>
                    <div>
                        <h1 style={styles.header.h1}>Baker Street</h1>
                        <h2 style={styles.header.h2}>{this.props.title}</h2>
                    </div>
                    <div>
                        <a href="#contact" className="bordered-button">
                            написать нам
                        </a>
                    </div>
                    <div className="little-line"></div>
                    <div className="social">
                        <ul>
                            {SocialLinks.map((el, index) => {
                                return (
                                    <li key={index}>
                                        <a href={el.url}>
                                            <i className={'fa fa-' + el.icon}></i>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </header>
            </div>
        )
    }
}