import '../css/general.css'
import Header from '../components/general/Header'

function app({ Component, pageProps }) {
    return (<>
            <Header />
            <div className="app-container">
                <Component {...pageProps} />
            </div>
    </>)
}

export default app 