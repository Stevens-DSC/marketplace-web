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
                    <Link href="/"><a style={styleLinkElement}><img className="logoitem" src={'https://i.imgur.com/kVmwZoI.png'} height={40} /></a></Link>
                        <ul className="header-options">
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