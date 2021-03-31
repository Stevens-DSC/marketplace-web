
import Head from 'next/head'


const About = (props) => {
    return (
        <>
            <Head>
                <title>About | Square Mile Market</title>
                <meta name="description" key="description" value={`Get to know us and our mission a little better`} />
            </Head>
            <h1>About us</h1>
            <p>Get to know us and our mission a little better!</p>
            <h2>Who we are</h2>
            <p>We are the Google Developer Student Club at Stevens Institute of Technology in Hoboken, New Jersey. We are a collection of students from all different grades and majors, who have come together to use what we know to create a response to the Google Solution Challenge.</p>
            <h2>Our mission</h2>
            <p>We are focused on addressing the United Nations Sustainable Development Goal #8 which outlines “[promoted] sustainability, inclusive, and sustainable economic growth, full and productive employment, and work for all”. We hope that our site will encourage people to shop local and put money back into their community’s economy. We aim to make looking local convenient and easy and hope to promote small businesses through our website.</p>
        </>
    )
}
export default About