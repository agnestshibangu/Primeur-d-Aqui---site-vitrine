import React from 'react'
import '../style/SASS/home.scss'
import Image1 from '../style/images-logos/salad.webp'
//import Image2 from '../style/images-logos/grille.png'

export default function Home() {

    // slides animation - start //
    // window.addEventListener('scroll', () => {
    //     const slide1 = document.querySelector('.slide1-anim');
    //     const slide2 =  document.querySelector('.slide2-anim');
 
    //     if(window.pageYOffset > 10) {
    //         slide1.classList.add('slide1-anim-translate');
    //         slide2.classList.add('slide2-anim-translate');

    //     } 
    //     // else if(this.window.pageYOffset < 0.5) { 


    //     // }



    // })


     // slides animation - end //




    return (
        <div>
            <img className="home-img1" src={Image1} alt="" />
            <h1 className="text-img1">Paniers de fruits et légumes bios et locaux en livraison gratuite</h1>

            <div className="main-container">

                <div className="main-container-text">

                    <div className="slide1-anim slide1-anim-translate ">
                        <h1 className="main-text-title">Primeur d'Aqui lance les Paniers d'Aqui</h1>
                    </div>
                
                    <div className="slide2-anim slide2-anim-translate ">
                        <p className="main-text-paragraph1">
                            Pendant le confinement, Primeur d'Aqui lance les Paniers d'Aqui. Des Paniers de producteurs labellisés en agriculture biologique que nous vous livrons gratuitement, à domicile, sur les communes de Bages, Montescot, Villeneuve-de-la-Raho, Elne, Latour-Bas-Elne, Saint-Cyprien, Canet, et Perpignan Technosud.
                        </p>

                        <p className="main-text-paragraph2">Les résidents des autres communes peuvent acheter en ligne leur Panier et les récupérer dans notre point relais du Catalogne Café, 56 bvd Goerges Clémenceau à Perpignan, le vendredi de 9h à 14h.</p>
                    </div>
                
                </div>


            </div>


        </div>
    )
}
