import React from 'react'
import '../style/SASS/home.scss'
import '../style/SASS/index.scss'
import Image1 from '../style/images-logos/salad-cut.png'
import Image2 from '../style/images-logos/image-02.jpeg'
import Image3 from '../style/images-logos/carottes.jpeg'
import Image4 from '../style/images-logos/planche.jpeg'
import Image5 from '../style/images-logos/baies.jpg'
import Image6 from '../style/images-logos/concombres.jpg'
import Image7 from '../style/images-logos/poivrons.jpg'


export default function Home() {

    return (
        <div className="main">

            <div className="top-page">
                <img className="home-img1" src={Image1} alt="" />

                <div className="container-text-img1">
                    <h1 className="text-img1">Paniers de fruits et légumes <span className="accent">bios</span> et <span className="accent">locaux</span> </h1>
                    {/* <h2 className="paragraph-img1">En livraison gratuite</h2> */}
                </div>
            </div>



            <div className="top-container">

                <div className='categories-background' />


                <div className="categories-img-box">
                    <div className="first-category category">
                        <img className="category-img" src={Image5} alt="" />
                        <div className="category-description-box"></div>
                    </div>

                    <div className='second-category category'>
                        <img className="category-img" src={Image6} alt="" />
                        <div className="category-description-box"></div>
                    </div>

                    <div className='third-category category'>
                        <img className="category-img" src={Image7} alt="" />
                        <div className="category-description-box"></div>
                    </div>
                </div>



            </div>




            <div className="main-container">

                <div className="main-container1">

                    <svg className='wave-top' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#799085" fill-opacity="1" d="M0,128L48,144C96,160,192,192,288,181.3C384,171,480,117,576,96C672,75,768,85,864,122.7C960,160,1056,224,1152,229.3C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>

                    <div className="main-container1-text">
                        <div className="slide1-anim slide1-anim-translate ">
                            <h1 className="main-text-title">LE MÉTIER</h1>
                        </div>
                        <div className="slide2-anim slide2-anim-translate ">
                            <div className="text-slide2">
                                <p className="paragraphe-slide2">Des Paniers de producteurs labellisés en agriculture biologique que nous vous livrons gratuitement, à domicile, sur les communes de Bages, Montescot, Villeneuve-de-la-Raho, Elne, Latour-Bas-Elne, Saint-Cyprien, Canet, et Perpignan Technosud.
                                    Les résidents des autres communes peuvent acheter en ligne leur Panier et les récupérer dans notre point relais du Catalogne Café, 56 bvd Goerges Clémenceau à Perpignan, le vendredi de 9h à 14h. </p>
                            </div>
                        </div>
                    </div>

                    <svg className='wave-bottom' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#799085" fill-opacity="1" d="M0,160L40,170.7C80,181,160,203,240,208C320,213,400,203,480,170.7C560,139,640,85,720,96C800,107,880,181,960,213.3C1040,245,1120,235,1200,213.3C1280,192,1360,160,1400,144L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
                    </svg>

                </div>






                <div className="main-container3">

                    <div className="section1 section">
                        <img className="home-img2" src={Image2} alt="" />
                        <div className="text-step1">
                            <div className="number1-faded">01</div>
                            <h3 className="title-overlap title-overlap1">Publication du listing</h3>
                            <p className="step-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                        </div>
                    </div>



                    <div className="section2 section">
                        <img className="home-img3" src={Image3} alt="" />
                        <div className="text-step2">
                            <div className="number2-faded">02</div>
                            <h3 className="title-overlap title-overlap1">Commande au producteur</h3>
                            <p className="step-paragraph step-paragraph2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                        </div>
                    </div>



                    <div className="section3 section">
                        <img className="home-img4" src={Image4} alt="" />
                        <div className="text-step3">
                            <div className="number3-faded">03</div>
                            <h3 className="title-overlap title-overlap3">Livraison gratuite</h3>
                            <p className="step-paragraph step-paragraph3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                        </div>
                    </div>



                </div>

            </div>



        </div>
    )
}
