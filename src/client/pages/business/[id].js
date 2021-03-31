
import { useRouter } from 'next/router'
import Head from 'next/head'
import api from '../../../utils/api'


const BusinessPage = (props) => {
    if(!props.loaded) {
        return <p>Loading...</p>
    }
    if(!props.success) {
        return <p>Error: {props.error || ""}</p>
    }
    const { store, products } = props

    const { 
        cityname,
        displayname,
        description,
        phone, 
        location,
        homepage,
        shortname,
        email
    } = store
    

    return (
        <>
            <Head>
                <title>{displayname} | Square Mile Market</title>
                <meta name="description" key="description" value={description} />
            </Head>
            <h1>{displayname}</h1>
            <p>{description}</p>
            <h2>Products</h2>
            <ul>
                {products.map((product, c) => <li key={`product${c}`}><a href={`/product/${product.shortcode}`}>{product.displayname}</a></li>)}
            </ul>
        </>
    )
}

BusinessPage.getInitialProps = async function (context) {
    const name = context.query.id
    try {
        const req = await api.getStoreByShortName({ shortname: name })
        const products = await api.getProductsBySeller({ seller: name })

        return {
            loaded: true,
            success: true,
            error: false,
            store: req,
            products
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

export default BusinessPage