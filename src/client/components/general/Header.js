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
                <div class="primary-header">
                    <ul class="header-options" >
                        <li><Link href="/"><a style={styleLinkElement}>Home</a></Link></li>
                        <li><Link href="/"><a style={styleLinkElement}>Partners</a></Link></li>
                        <li><Link href="/product/test"><a style={styleLinkElement}>Test Product</a></Link></li>
                    </ul>
                </div>

                <div class="spacer-center"></div>
                <div class="secondary-header">
                    <input />
                </div>
            </div>
        );
    }
}