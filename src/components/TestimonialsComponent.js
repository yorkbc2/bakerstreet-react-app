import React, {Component} from "react"

import HeaderImage from "./assets/header_5.jpg"
import Header from "./../dumb/Header"
import Footer from "./../dumb/Footer"

import Slick from "react-slick"

export default class TestimonialsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            settings: {
            }
        }
    }
    render() {
        return (
            <div>   
                <Header image={HeaderImage} title="Прочитайте о нас в отзывах наших клиентов" />

                <div className="little-line margin black"></div>

                <Slick className="testimonial-slick" {...this.state.settings}>
                    <div className="testimonial">
                        <h2>
                            Лучший сервис в Киеве
                        </h2>
                        <img src="http://www.eastfab.com/images/joomgallery/thumbnails/fotografen_2/best_of_karl_kramer_46/people__lifestyle_49/people_and_lifestyle_18_20170110_1039789404.jpg" alt="Karl Kramer"/>
                        <p>
                            Лучшая выпечка в Киеве и вообще во всей Украине. Хорошо, что есть филиалы ещё в Одессе и Херсоне, потому что когда 
                            поехал отдыхать, то очень скучал по моим любимым панкейкам. Очень люблю мою любимую булочную
                            "Baker Street"
                        </p>
                    </div>
                    <div className="testimonial">
                        <h2>
                            Лучшие печеньки
                        </h2>
                        <img src="http://shoottheframe.com/wp-content/uploads/2015/04/Matt-Loughrey-500x500.jpg" alt="Child"/>
                        <p>
                            Моя любимаю булочная и мой любимый повар. Очень люблю их панкейки и прочие вкусности.
                            Также, очень люблю их шоколадные печеньки. Очень уж они вкусные. Спасибо Вам за все
                        </p>
                    </div>
                    <div className="testimonial">
                        <h2>
                            Сендвичи - это их все!
                        </h2>
                        <img src="https://i1.wp.com/sandwichvideo.com/wp-content/uploads/2014/08/joshuaallen21.jpg?fit=500%2C500&ssl=1" alt="Sandwich"/>
                        <p>
                            Ох, как же я обожаю их сендвичи - это что-то с чем-то. Очень люблю когда они немного поджаривают
                            корочку тоста. Также они всегда делают вкусные сендвичи "Сделай сам", инградиенты которых,
                            мы подсказываем им. Спасибо за хороший сервис.
                        </p>
                    </div>
                </Slick>
                
                <div className="little-line margin black"></div>

                <Footer />
            </div>
        )
    }
}