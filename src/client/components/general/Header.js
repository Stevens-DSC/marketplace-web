import React, { Component } from "react"
import Link from 'next/link'

export default class Header extends Component {
    render() {
        return (
            <div class="header-bar">
                <div class="primary-header">
                    <ul class="header-options">
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="/"><a>Partners</a></Link></li>
                        <li><Link href="/product/test"><a>Test Product</a></Link></li>
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