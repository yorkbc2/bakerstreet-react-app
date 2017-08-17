import React, {Component} from "react"
import Slick from "react-slick"


import Header from "./../dumb/Header"
import HeaderImage from "./assets/header_2.jpg"

import menu from "./../config/Menu.js"

import Footer from "./../dumb/Footer.js"

export default class Menu extends Component {
    constructor(props) {

        super(props)

        this.state = {
            items: menu,
            selectedItem: menu[0],
            settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    }
    selectItem(id) {
        var item = this.state.items.filter(el => {
            return el.id === id;
        })[0]

        this.setState({selectedItem: item})

    }
    render() {
        return(
            <div>
                <Header image={HeaderImage} title="Наше меню! Посмотрите и удивитесь!" />
                <div className="little-line black margin"></div>
                <div className="container">
                    <Slick className="SlickSlider" {...this.state.settings}>
                        {this.state.items.map((el, index) => {
                            return (
                                <div key={el.id} onClick={this.selectItem.bind(this, el.id)}>
                                    {el.id === this.state.selectedItem.id ?
                                    <img className="Active" src={el.img} width="150px" height="150px" alt="Menu item" />
                                    :
                                    <img src={el.img} width="150px" height="150px" alt="Menu item" />
                                    }
                                    <h3>
                                        {el.title}
                                    </h3>
                                </div>
                            )
                        })}
                    </Slick>
                    <div className="flex-menu-item">
                        <div>
                            <h1>
                                {this.state.selectedItem.title}
                            </h1>
                            <p>
                                {this.state.selectedItem.description}
                            </p>
                            <div className="Price">
                                <h2>{this.state.selectedItem.price}</h2>
                                <br/>
                                <span>Грн.</span>

                            </div>
                        </div>
                        <div>
                            <div className="Image">
                                <img src={this.state.selectedItem.img} alt={this.state.selectedItem.title}/>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}