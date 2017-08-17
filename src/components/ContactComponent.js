import React, {Component} from "react"

import Header from "./../dumb/Header"
import HeaderImage from "./assets/header_3.jpg"

import Footer from "./../dumb/Footer"


export default class ContactComponent extends Component {
    
    shouldComponentUpdate() {
        return true;
    }

    submitForm(e) {
        e.preventDefault();


        console.log(e)
    }
    
    render() {

        return (
            <div>
                <Header image={HeaderImage} title="Напишите нам пожалуйста, и мы Вам ответим" />

                <div className="little-line margin black"></div>

                <h1 className="header-index">
                    Напишите нам!
                    <br/>
                    <span>
                        Мы Вам объязательно ответим
                    </span>
                </h1>

                <form onSubmit={this.submitForm.bind(this)} className="form">
                    <div>
                        <label>Ваше имя: <span>*</span></label>
                        <input required type="text" placeholder="Введите имя и фамилию"/>
                    </div>
                    <div>
                        <label>Ваша почтовый адрес: <span>*</span></label>
                        <input required type="email" placeholder="Введите ваш почтовый адрес"/>
                    </div>
                    <div>
                        <label>Сообщение: <span>*</span></label>
                        <textarea required placeholder="Введите Ваше сообщение"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="button-submit">
                            Отправить
                        </button>
                    </div>
                </form>

                <div className="little-line margin black"></div>

                <Footer />

            </div>
        )

    }
}