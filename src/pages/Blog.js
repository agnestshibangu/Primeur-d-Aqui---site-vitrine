import React from 'react'
import Navbarsecond from '../components/Navbarsecond'
import NavbarBlog from '../components/NavbarBlog'
import '../style/SASS/blog.scss'
import { TiArrowSortedDown } from 'react-icons/ti'


export default function Blog() {
    return (
        <div>
            <Navbarsecond />
            <NavbarBlog />

            <div className="top-article">
                <div className="top-article-single top-article1"></div>
                <div className="top-article-single top-article1"></div>
            </div>

            <div className="bar-top-article" />

            <div className="dashboard">

                <div className="blog-container">

                    <article className="article">
                        <img className="article-img" src="" alt="" />
                        <div className="article-text">
                            <h3 className="article-title">titre d'article</h3>
                            <p className="article-short-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p className="date">le 10/12/2012</p>
                        </div>
                        <div className="article-bar" />
                    </article>

                    <article className="article">
                        <img className="article-img" src="" alt="" />
                        <div className="article-text">
                            <h3>titre d'article</h3>
                            <p className="article-short-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p className="date">le 10/12/2012</p>
                        </div>
                        <div className="article-bar" />
                    </article>

                    <article className="article">
                        <img className="article-img" src="" alt="" />
                        <div className="article-text">
                            <h3>titre d'article</h3>
                            <p className="article-short-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p className="date">le 10/12/2012</p>
                        </div>
                        <div className="article-bar" />
                    </article>

                    <article className="article">
                        <img className="article-img" src="" alt="" />
                        <div className="article-text">
                            <h3>titre d'article</h3>
                            <p className="article-short-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p className="date">le 10/12/2012</p>
                        </div>
                        <div className="article-bar" />
                    </article>




                </div>

                <div className="instagram-container">
                    <div className="instagram-header">
                        <div className="instagram-title">instagram</div>
                        <TiArrowSortedDown className="instagram-arrow-down" />
                    </div>



                </div>


            </div>



        </div>
    )
}
