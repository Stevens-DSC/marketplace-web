import Head from 'next/head'
import SearchboxClass from '../components/general/ui/SearchBoxClass'
import React from 'react'
import Jumbotron from '../components/general/ui/Jumbotron'
import TrendingSection from '../components/general/ui/TrendingSection'
import ProductBox from '../components/general/ui/ProductBox'
import PrimarySearchBox from '../components/general/ui/PrimarySearchBox'
import Link from 'next/link'
import styleRegistry from "../css/constants/styles"


const testFunction = () => {
    console.log('hello')
}

const sideBySideBox = {
    display: 'flex',
    fontFamily: styleRegistry.font_accent
}


const sideBySideInner = {
    padding: 10,
    paddingTop: 0,
    paddingBottom: 0,
    flex: 1,
    margin: 20
}

const paragraph = {
    color: styleRegistry.darker_grayscale_text,
    fontFamily: styleRegistry.font_accent
}
const Index = props => (
    <>

        <div style={{marginTop: 40}}>
        <Jumbotron
            header={"Let's shop local!"}
            subheader={"We are dedicated to helping you discover local businesses in Hoboken."}
            background={"https://firebasestorage.googleapis.com/v0/b/dsc-marketplace.appspot.com/o/homePage2.png?alt=media&token=1b87bfdd-5d13-4e57-a8ce-9eb4aecde35e"}
        >
            <PrimarySearchBox />
        </Jumbotron>
            <div className="mobile-become-cols" style={sideBySideBox}>
                <div style={sideBySideInner}>
                <h1>Our goals</h1>
                <p style={paragraph}>We are focused on addressing the United Nations Sustainable Development Goal #8 by making shopping local convenient and easy and hope to promote small businesses through our website.</p>
                <Link href="/about">
                    <a style={{color: "#2778e8"}}>Learn more ›</a>
                </Link>
                </div>
                <div className={'mobile-hide'} style={sideBySideInner}>
                    <img style={{
                        maxWidth: '100%',
                        borderRadius: 20,
                        opacity: 0.9,
                        filter: 'grayscale(0.7)',
                        margin: 30,
                    }} src="https://i.imgur.com/QFsf2PS.png" />
                </div>
            </div>

           


        </div>
        
    </>
)

// TODO fix colors

export default Index
