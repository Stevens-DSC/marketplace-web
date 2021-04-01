import '../css/general.css'
import Header from '../components/general/Header'
import Footer from '../components/general/Footer'
import Head from 'next/head'

function app({ Component, pageProps }) {
    return (<>
                <Head>
                    <title>Square Mile Market - Local Hoboken Shopping</title>
                    <meta name="description" key="description" value={`We are dedicated to helping you discover local businesses in Hoboken.`} />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" type="image/png" href="https://i.imgur.com/Ze1CbVZ.png" />
            </Head>
            <Header />
            <div className="app-container">
                <Component {...pageProps} />
                <Footer />
            </div>
            
    </>)
}

export default app 