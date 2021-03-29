
import { useRouter } from 'next/router'
import Head from 'next/head'
import api from '../../../utils/api'


const ProductPage = (props) => {
    if(!props.loaded) {
        return <p>Loading...</p>
    }
    if(!props.success) {
        return <p>Error: {props.error || ""}</p>
    }
    const { product } = props

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
        <>
            <Head>
                <title>{displayname} | Square Mile Market</title>
                <meta name="description" key="description" value={description} />
            </Head>
            <h1>{displayname}</h1>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{width: 'fit-content'}}>
                    <img src={image} width="300px"/>
                </div>
                <div style={{width: 'fit-content'}}>
                    
                    <div>{formattedPrice} <a href={url} target="_blank">on external site</a></div>
                    <div>{description.split('\n').join('\\n').split('. ').map(a=><p>{a + "."}</p>)}</div>
                </div>
            </div>
        </>
    )
    }

ProductPage.getInitialProps = async function (context) {
    const name = context.query.id
    try {
        const req = await api.getProductByShortCode({ shortcode: name })
        return {
            loaded: true,
            success: true,
            error: false,
            product: req
        }
    }catch(e) {
        return {
            loaded: true,
            success: false,
            error: e + ""
        }
    }
    return {
        name: name
    }
}

export default ProductPage