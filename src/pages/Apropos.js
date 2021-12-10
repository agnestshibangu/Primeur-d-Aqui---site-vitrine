import React from 'react'
import Navbarsecond from '../components/Navbarsecond'
import '../style/SASS/about.scss'

export default function Apropos() {
    return (
        <div>
            <Navbarsecond />

            <div className="main-container">

                {/* FAQ title --start */}
                <div className="title-container">
                    <h1 className="about-main-title">A propos</h1>
                    <p className="about-faded">About</p>
                </div>

                {/* FAQ title --end */}

                <div className="about-container">

                    <div className="about-img" src="" alt="" />

                    <p className="about-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </p>

                </div>



            </div>

        </div>
    )
}
