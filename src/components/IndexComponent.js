import React, { Component } from "react"

import Header from "./../dumb/Header"
import Footer from "./../dumb/Footer"

import Overlay from "./../dumb/Overlay"

import HeaderImage from "./assets/header.jpg"


import ChefImage from "./assets/chev.jpg"

import CookieImage from "./assets/cookie.jpg"
import BreadImage from "./assets/bread.jpg"
import SendwichImage from "./assets/send.jpg"
import CakeImage from "./assets/curas.jpg"
import OverlayImage from "./assets/overlay_1.jpg"

import MaffinImage from "./assets/maffin.jpg"
import PancakeImage from "./assets/pancake.jpg"

var images = [
    CookieImage,
    BreadImage,
    SendwichImage,
    CakeImage
]

var allRecipes = [
    MaffinImage,
    BreadImage,
    PancakeImage
]

var recipes = [
                {
                    id: 0,
                    title: "Вкусные кексы",
                    subTitle: "быстро и вкусно от нашего шеф-повара",
                    description: `Возьмите чашку и добавьте в неё: 2 яйца, ложку масла, 2 ложки сахара и 1 ложку какао. 
                                Перемешайте и поставьте в микроволновку. Через 3 минуты у Вас будет Кекс!`,
                    image: MaffinImage
                },
                {
                    id: 1,
                    title: "Пышный хлеб",
                    subTitle: "быстро и вкусно от нашего шеф-повара",
                    description: `Готовим пышний хлеб вместе. Нужно взять несколько стаканов муки, воды, и молока. Кидаем на сковородку и жарим.`,
                    image: BreadImage
                },
                {
                    id: 2,
                    title: "Красивый панкейки",
                    subTitle: "быстро и вкусно от нашего шеф-повара",
                    description: `Возьмите ложку сахара и киньте в неё уксус, два стакана молока и два яйца.
                    Перемешайте и ждите.`,
                    image: PancakeImage
                }
            ]




export default class IndexComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            recipes: recipes,
            selectedRecipe: {
                title: "",
                subTitle: "",
                id: 0,
                description: "",
                image: ""
            },
            selectedImageId: 0
        }

        this.changeRecipe = this.changeRecipe.bind(this)
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this)
    }
    
    forceUpdateHandler() {
        this.forceUpdate()
    }
    
    componentWillMount() {
        this.changeRecipe(this.state.selectedImageId)
    }

    selectRecipe(id) {


        this.changeRecipe(id)

        return this;
    }

    changeRecipe(id) {

        var recipe = this.state.recipes.filter(el => {
            return el.id === id;
        })[0]
            console.log(recipe)

        this.setState(() => {


            return {
                selectedRecipe: recipe,
                selectedImageId: id
            }

         })

         this.forceUpdateHandler()

    }


    render() {
        return (
            <div className="transition-item">
                <Header image={HeaderImage} title="Добро пожаловать на сайт Киевской булочной Baker Street ltd." />
                <div className="little-line black margin"></div>
                <div className="about-index">
                       
                    <div className="flex flex-center">
                        <div className="block center border-none">
                            <h1 className="header-index">
                                Творчество выпечки    
                                <br/>
                                <span>
                                    выпечка - это вид исскуства, а не просто еда
                                </span>
                            </h1>
                            <p>
                            Я, булочник Люсьи Франсуа, обещаю Вам, что Вы получите только самую свежую и
                            вкусную выпечку, которую когда либо сможете найти. Выпечка на заказ, подарки от меня
                            и многое другое
                            </p>
                            <h2>Шеф-повар</h2>
                            <div className="chef">
                                <h3>
                                    Люсьи
                                </h3>
                                <figure>
                                    <img src={ChefImage} alt="Chef Cooker" width="75px" height="75px"/>
                                </figure>
                                <h3>
                                    Франсуа
                                </h3>
                            </div>
                        </div>
                        <div className="image-set">
                            <div className="image-set--images">
                                {images.map((el, index) => {
                                    return (
                                        <div key={index}>
                                            <img src={el} alt="Our Bakery" />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="little-line black margin"></div>
                <Overlay image={OverlayImage}>
                    <div className="recipe-panel">
                        <div className="recipe-image">
                            <img src={this.state.selectedRecipe.image} alt="Bread"/>
                        </div>
                        <div className="recipe-text">
                            <h2 className="header-sub">
                                {this.state.selectedRecipe.title}
                                <br/>
                                <span>
                                    {this.state.selectedRecipe.subTitle}    
                                </span>    
                            </h2>
                            <p>
                                {this.state.selectedRecipe.description}
                            </p>
                            <div className="all-recipes">
                                <ul>
                                {
                                    allRecipes.map((el, index) => {
                                        return (<li key={index} onClick={this.selectRecipe.bind(this, index)}>
                                            {index === this.state.selectedImageId
                                            ?
                                            <img src={el} className="active-recipe" alt="Cookie" width="100px" height="100px" />
                                            :
                                            <img src={el} alt="Cookie" width="100px" height="100px" />
                                            }
                                        </li> )
                                })
                                }
                                </ul>
                            </div>
                        </div>
                        <div className="recipe-time">
                            <h4 className="gold">
                                Готовится за :
                            </h4>
                            <h4 className="gold-big">
                                4
                                <br/>
                                <span>
                                    минуты
                                </span>
                            </h4>
                            
                        </div>
                        
                    </div>
                </Overlay>
                <div className="little-line black margin"></div>
                <Footer />
            </div>
        )
    }
}