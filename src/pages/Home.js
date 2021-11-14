import React from 'react'
import '../style/SASS/home.scss'
import Image1 from '../style/images-logos/salad.webp'
import Arrow from '../style/images-logos/arrow.png'
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
            <img className="arrow-img" src={Arrow} alt="" />

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


            <div className="main-container2">

                <h2 className="main2-text-title">Fermeture de la page de commandes de Paniers</h2>

                <p className="paragraphe-container2">
                    Comme vous le savez peut-être déjà, PRIMEUR D'AQUI est une petite graine dont la germination a commencé fin 2019 avec pour cœur d'activité de servir les restaurants.

                    Passionnés, pleins d'espoir, d'optimisme, et surtout convaincus, malgré l'entrée dans le premier confinement, nous avons fait le pari un peu fou de maintenir notre lancement! C'est ainsi que nous avons commencé à servir les restaurateurs en juillet 2020 !

                    L'activité de vous proposer des paniers en livraison directe à domicile est née à l'entrée dans le second confinement au mois d'octobre suivant.Nous sommes infiniment reconnaissants pour chaque panier livré qui sont autant de rencontres et de liens tissés.

                    Cependant ça y est, le temps de la reprise est venu pour le monde de la restauration.

                    Comme vous le savez, les restaurant rouvrent leurs terrasses aujourd'hui mercredi 19 mai, et cela fait quelques semaines que nous participons au bouillonnement qui précède ces retrouvailles.

                    Malheureusement, nous réalisons que notre activité, qui n'a même pas un an, n'est pas encore assez développée pour continuer la livraison de paniers à domicile et en même temps approvisionner vos tables préférées.

                    C'est donc à regret que nous vous annonçons la fermeture de notre page de réservation de paniers le vendredi 28 mai prochain.

                    Un GRAND merci à toutes celles et ceux qui nous ont passé commande.

                    Au revoir donc ?... Oui, mais pas que !

                    Ces circonvolutions inattendues dans notre aventure naissante ont fait naître un nouvel objectif et Primeur d'Aqui a de nouveaux projets dans ses paniers !

                    Nous espérons vous retrouver dès cet automne, pour vous proposer de nouveau des fruits et légumes bios, locaux, toujours de saison et préparés avec cœur!Ce n'est donc qu'un aurevoir...

                    En attendant, restez connectés, et retrouvez nous également tous les dimanche matins, au marché de Corneilla-Del-Vercol à partir du mois de Juin!

                    A bientôt !

                    Adrien et Éléonore.

                </p>

            </div>


        </div>
    )
}
