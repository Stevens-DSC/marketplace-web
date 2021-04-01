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
            <div className="header-bar" style={styles}>
                <div className="header-content">
                    <div className="primary-header">
                    <Link href="/"><a style={styleLinkElement}><img className="logoitem" src={'https://firebasestorage.googleapis.com/v0/b/dsc-marketplace.appspot.com/o/logo-large.png?alt=media&token=6be2f5b7-f112-4e30-b298-c44b0a4ad43f'} height={40} /></a></Link>
                        <ul className="header-options">
                            {/* <li><Link href="/business"><a style={styleLinkElement}>Businesses</a></Link></li> */}
                            <li><Link href="/search"><a style={styleLinkElement}>Products</a></Link></li>
                            <li><Link href="/about"><a style={styleLinkElement}>About Us</a></Link></li>
                        </ul>
                    </div>

                    {/* <div className="spacer-center"></div>
                    <div className="secondary-header">
                        <input />
                    </div> */}
                </div>
            </div>
        );
    }
}