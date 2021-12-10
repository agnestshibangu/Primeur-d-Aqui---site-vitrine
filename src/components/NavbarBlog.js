import React, {useState} from 'react'
import '../style/SASS/blog.scss'
import { FaSearch } from 'react-icons/fa'

export default function NavbarBlog() {

    const [toggleBlogList, setToggleBlogList] = useState(false)

    const hideShowBlogList =() => {
        setToggleBlogList(!toggleBlogList)
    }

    return (
        <div>
            <div className="navbar-blog">
                <div className="navbar-blog-link">acceuil</div>
                <div className="navbar-blog-link" onClick={hideShowBlogList}>categories</div>
                <div className="navbar-blog-link" onClick={hideShowBlogList}>Archives</div>
                <div className="navbar-blog-searchbar-box">
                    <input className="navbar-blog-searchbar" type="text" placeholder="Search.." />
                    <button className="navbar-blog-searchbar-button"><FaSearch /></button>
                </div>

            </div>

            <div className={toggleBlogList ? "navbar-blog-list" : "display-none"}></div>

        </div>
    )
}
