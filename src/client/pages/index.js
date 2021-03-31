import Head from 'next/head'
import SearchboxClass from '../components/general/ui/SearchBoxClass'
import React from 'react'
import Jumbotron from '../components/general/ui/Jumbotron'
import TrendingSection from '../components/general/ui/TrendingSection'
import ProductBox from '../components/general/ui/ProductBox'
import PrimarySearchBox from '../components/general/ui/PrimarySearchBox'


const testFunction = () => {
    console.log('hello')
}
const Index = props => (
    <>
     <Head>
                <title>Home | Square Mile Market</title>
                {/* <meta name="description" key="description" value={description} /> */}
    </Head>
        <div style={{marginTop: 40}}>
        <Jumbotron
            header={"Let's shop local"}
            subheader={"We are dedicated to helping you discover local businesses in Hoboken..."}
            background={"/img/homePage2.png"}
        >
            <PrimarySearchBox />

        </Jumbotron>
        </div>
    </>
)
export default Index
