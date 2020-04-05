import React, { Component } from 'react'
import './pageTwo.css'
import Helmet from 'react-helmet'
export class pageTwo extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>pAGE 2</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                </Helmet>
                <div class="topnav">
                    <a className="Jicasr" onClick={this.turnToPageTwo}>Jifcast</a>
                    <div className="links">
                         <a href="https://web.facebook.com/" target="_blank">Facebook</a>
                         <a href="https://www.instagram.com/" target="_blank">Instagram</a>
                         <a href="https://twitter.com/login?lang=en" target="_blank">Twitter</a>
                    </div>
                </div>
                <div className="pageTwodescriptionDiv">
                    <h1>
                        this is page 2
                    </h1>

                    <p>This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description.</p>
                </div>
            </div>
        )
    }
}

export default pageTwo
