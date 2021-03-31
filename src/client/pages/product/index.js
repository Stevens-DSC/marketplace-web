
import { useRouter } from 'next/router'
import Head from 'next/head'
import api from '../../../utils/api'


const ProductListing = (props) => {
    // if(!props.loaded) {
    //     return <p>Loading...</p>
    // }
    // if(!props.success) {
    //     return <p>Error: {props.error || ""}</p>
    // }
    // const { store } = props

    // const { 
    //     cityname,
    //     displayname,
    //     description,
    //     phone, 
    //     location,
    //     homepage,
    //     shortname,
    //     email
    // } = store

    return (
        <>
            <Head>
                <title>Search | Square Mile Market</title>
                {/* <meta name="description" key="description" value={description} /> */}
            </Head>
            <h1>Search</h1>
            <p>Loading...</p>
        </>
    )
}

ProductListing.getInitialProps = async function (context) {
    // const name = context.query.id
    // try {
    //     const req = await api.getStoreByShortName({ shortname: name })
    //     return {
    //         loaded: true,
    //         success: true,
    //         error: false,
    //         store: req
    //     }
    // }catch(e) {
    //     return {
    //         loaded: true,
    //         success: false,
    //         error: e + ""
    //     }
    // }
    return {
        
    }
}

export default ProductListing