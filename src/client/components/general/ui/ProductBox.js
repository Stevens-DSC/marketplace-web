import React from 'react';
import styleRegistry from "../../../css/constants/styles"
import Link from 'next/link'
import template from '../../../css/constants/styles'

const styles = () => ({
    border: "1px solid gray",
    padding: 10,
    border: '1px solid lightgray',
    borderRadius: "10px",
    marginLeft: "5px",
    marginRight: "5px",
    width: 180,
    height: 260
})

const priceContainer = {
    fontSize: 18,
    color: template.almost_black,
    fontWeight: 'bold',
    marginBottom: -20,
    zIndex: 100,
    position: 'relative',
    // backgroundColor: 'rgba(255,255,255,0.8)'

}

const currencyStringPrefix = { 
    fontWeight: 400,
    marginRight: 2,
    color: template.grayscale_text,
    verticalAlign: "super",
    fontSize: 18 
}

const primaryBox = {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'wrap',
    paddingBottom: 18,
    zIndex: 1,
    paddingTop: 28
}

const productName = {
    fontWeight: 400,
    color: template.almost_black
}

function changeTitle(s) {
    let len = 50
    if(s.length<len){
        return s;
    }
    return s.slice(0, -1 * (s.length-len)) + "..."
}

class ProductBox extends React.Component {

    render() {
        const { product } = this.props

        const { 
            displayname,
            price,
            seller,
            url, 
            currency,
            image,
            tags,
            description
        } = product

        const formatter = new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency
        })
    
        const formattedPrice = formatter.format(price)

        return (
            <div style={styles()}>
                <Link href={`/product/${product.shortcode}`}>
                    <a>
                        <div style={priceContainer}>
                            <span style={currencyStringPrefix}>{formattedPrice.charAt(0)}</span>
                            <span>{formattedPrice.substring(1)}</span> 
                        </div>
                        <div style={primaryBox}>
                            <img src={image} height="120" maxWidth="80" />

                        </div>
                        <span style={productName}>{changeTitle(product.displayname)}</span>
                    </a>   
                </Link>
            </div>
        )
    }
}

export default ProductBox