
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
    const { store } = props

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
            <code>
                {JSON.stringify(store, null, 4)}
            </code>
        </>
    )
}

BusinessPage.getInitialProps = async function (context) {
    const name = context.query.id
    try {
        const req = await api.getStoreByShortName({ shortname: name })
        return {
            loaded: true,
            success: true,
            error: false,
            store: req
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