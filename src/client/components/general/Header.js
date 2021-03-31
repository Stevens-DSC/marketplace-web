import React, { Component } from "react"
import Link from 'next/link'
import styleRegistry from "../../css/constants/styles"

const styles = {
    backgroundColor: styleRegistry.nav_back
}

const styleLinkElement = {
    color: "white"
}

export default class Header extends Component {
    render() {
        return (
            <div class="header-bar" style={styles}>
                <div class="header-content">
                    <div class="primary-header">
                    <Link href="/"><a style={styleLinkElement}><img className="logoitem" src={'/img/logo-large.png'} height={40} /></a></Link>
                        <ul class="header-options">
                            <li><Link href="/business"><a style={styleLinkElement}>Businesses</a></Link></li>
                            <li><Link href="/product"><a style={styleLinkElement}>Products</a></Link></li>
                            <li><Link href="/about"><a style={styleLinkElement}>About Us</a></Link></li>
                        </ul>
                    </div>

                    {/* <div class="spacer-center"></div>
                    <div class="secondary-header">
                        <input />
                    </div> */}
                </div>
            </div>
        );
    }
}