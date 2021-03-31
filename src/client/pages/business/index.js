
import { useRouter } from 'next/router'
import Head from 'next/head'
import api from '../../../utils/api'


const BusinessListing = (props) => {

    if(!props.loaded) {
        return <p>Loading...</p>
    }
    if(!props.success) {
        return <p>Error: {props.error || ""}</p>
    }

    // if(!props.loaded) {
    //     return <p>Loading...</p>
    // }
    // if(!props.success) {
    //     return <p>Error: {props.error || ""}</p>
    // }
    const { stores } = props

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
                <title>Listings | Square Mile Market</title>
                {/* <meta name="description" key="description" value={description} /> */}
            </Head>
            <h1>Our partners</h1>
            <ul>
                {
                    stores.map(({displayname, shortname},c) => <li key={`store${c}`}><a href={`/business/${shortname}`}>{displayname}</a></li>)
                }
            </ul>
            <p>Loaded {stores.length} stores</p>
        </>
    )
}
// switch to other lifecycle event if handling personal data.
// this is run serverside
BusinessListing.getInitialProps = async function (context) {
    try {
        const req = await api.getAllStores()
        console.log("BBBBBBBBBBBBBBBBBBBBBBBB" + req)
        return {
            loaded: true,
            success: true,
            error: false,
            stores: req
        }
    }catch(e) {
        console.log(e)
        return {
            loaded: true,
            success: false,
            error: e + ""
        }
    }
    return {
        
    }
}

export default BusinessListing