import React, { Component } from "react"
import Link from 'next/link'
import styleRegistry from "../../css/constants/styles"

const styles = {
    marginTop: 20,
    paddingTop: 20,
    borderTop: `1px solid ${styleRegistry.grayscale_text}`,
    paddingBottom: 40
}

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div style={styles}>
                    <span>Made with ❤️ in Hoboken by Stevens DSC</span>
                </div>
            </footer>
        );
    }
}