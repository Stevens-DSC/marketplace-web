import '../css/general.css'
import Header from '../components/general/Header'
import { Div } from 'React'

function app({ Component, pageProps }) {
    return (<>
        <div>
            <Header />
            <Component {...pageProps} />
        </div>
    </>)
}

export default app