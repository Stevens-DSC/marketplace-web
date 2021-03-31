import '../css/general.css'
import Header from '../components/general/Header'
import Footer from '../components/general/Footer'
function app({ Component, pageProps }) {
    return (<>
            <Header />
            <div className="app-container">
                <Component {...pageProps} />
                <Footer />
            </div>
            
    </>)
}

export default app 