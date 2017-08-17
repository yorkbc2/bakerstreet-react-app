import React, {Component} from "react"

import Header from "./../dumb/Header"
import HeaderImage from "./assets/header.jpg"

var styles = {
    header: {
        padding: "50px 100px"
    }
}

export default class NotFound extends Component {

    render() {
        return (
            <div>
                <Header image={HeaderImage} title="СТРАНИЦА НЕ НАЙДЕНА !" />
                <h1 style={styles.header}>404. Страница не найдена!</h1>
            </div>
        )
    }

}