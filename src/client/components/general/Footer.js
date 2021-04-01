import React, { Component } from "react"
import Link from 'next/link'
import styleRegistry from "../../css/constants/styles"

const styles = {
    marginTop: 20,
    paddingTop: 20,
    borderTop: `1px solid ${styleRegistry.grayscale_text}`,
    paddingBottom: 40,
    opacity: 0.4,
    filter: 'grayscale(1)'
}

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div style={styles}>
                    <span>Made with ❤️ in Hoboken by Stevens Google DSC</span>
                </div>
            </footer>
        );
    }
}