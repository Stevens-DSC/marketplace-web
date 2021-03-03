import '../css/general.css'
import Header from '../components/general/Header'

function app({ Component, pageProps }) {
    return (<>
            <Header />
            <Component {...pageProps} />
    </>)
}

export default app