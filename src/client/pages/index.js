import Button from "../components/ui/Button"

import SearchboxClass from '../components/general/ui/SearchBoxClass'
import SignUpModal from '../components/general/ui/SignUpModal'
import React from 'react'
import Jumbotron from '../components/general/ui/Jumbotron'
import TrendingSection from '../components/general/ui/TrendingSection'
import ProductBox from '../components/general/ui/ProductBox'
import axios from 'axios';


const testFunction = () => {
    console.log('hello')
}

const Index = props => {
    let productImg = []
    const [productData, setProductData] = React.useState([]);
    const getProducts = async () => {
        try {
            const response = await axios.get("https://us-central1-dsc-marketplace.cloudfunctions.net/products");
            productImg = response.data.result
            setProductData(response.data.result)
            console.log(productData)
        } catch (e) {
            console.log(e.message)
        }
    }
    getProducts();
    return (<div>
        <SignUpModal
            title="This is the signup Page"
            subtitle="subtitle"
        />
        <Jumbotron inverted={false}
            header="LOOK LOCAL, FIND STORES NEAR YOU."
            subheader="Square Mile Market is dedicated to helping you discover local businesses..."
        >
            <SearchboxClass onChange={() => { }} onSubmit={() => { }} placeholder="Search" value="testtest" />
        </Jumbotron>
        <TrendingSection header="Test">
            {/* <ProductBox item={productImg[1].image.toString()} /> */}
            {/* <ProductBox item={productImg[2].image} />
            <ProductBox item={productImg[3].image} />
            <ProductBox item={productImg[4].image} />
            <ProductBox item={productImg[5].image} />
            <ProductBox item={productImg[6].image} />
            <ProductBox item={productImg[7].image} /> */}
        </TrendingSection>
        <Jumbotron inverted={true}
            header="EXPLORE & DISCOVER"
            subheader="Take a look at our curated list of businesses..."
        />
    </div>
    )
}
export default Index
