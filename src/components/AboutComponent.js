import React, {Component} from "react"

import Header from "./../dumb/Header"
import HeaderImage from "./assets/header_4.jpg"

import Footer from "./../dumb/Footer"

export default class AboutComponent extends Component {
    shouldComponentUpdate() {
        return false;
    }
    render() {
        return (
            <div className="transition-item">
                <Header image={HeaderImage} title="Прочитайте о нас, узнайте больше и начните доверять нам уже сегодня" />
                <div className="little-line margin black"></div>
                <div className="container text-center">
                    
                    <div className="flex">
                        <div className="flex-1" style={{padding: "0 10px"}}>
                            <h2 className="header-index">
                                О нас
                                <br/>
                                <span>
                                    Все что Вам нужно знать о нас
                                </span>
                            </h2>
                            <p>
                                Мы, команда "Baker Street LTD.", работаем с 2011 года и уже имеем
                                большое кол-во заказов по всему Киеву. В день мы получаем около 
                                20-ти заказов на торты, пирожки и прочее.
                            </p>
                            <p>
                                С 2013 года мы имеем сертификат "Лучшая булочная Киева" и держим
                                этот престиж уже 4 года. 
                            </p>
                        </div>
                        <div className="flex-1">
                            <iframe title="dpasdasod" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.8974879111197!2d-75.75820118463963!3d45.391238679100184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce06a9e4c79409%3A0xc0fa83513bc58558!2sBaker+Street+Cafe!5e0!3m2!1sen!2sua!4v1501623924872" width="100%" height="450" frameborder="0" style={{border: 0}} allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div className="little-line margin black"></div>
                <Footer />
            </div>
        )
    }
}