
import Head from 'next/head'


const About = (props) => {
    return (
        <>
            <Head>
                <title>About | Square Mile Market</title>
                {/* <meta name="description" key="description" value={description} /> */}
            </Head>
            <h1>About us</h1>
            <p>Lorem ipsum</p>
        </>
    )
}

// About.getInitialProps = async function (context) {
//     // const name = context.query.id
//     // try {
//     //     const req = await api.getStoreByShortName({ shortname: name })
//     //     return {
//     //         loaded: true,
//     //         success: true,
//     //         error: false,
//     //         store: req
//     //     }
//     // }catch(e) {
//     //     return {
//     //         loaded: true,
//     //         success: false,
//     //         error: e + ""
//     //     }
//     // }
//     return {
        
//     }
// }

export default About