import React from 'react';
import styleRegistry from "../../../css/constants/styles"

const styles = () => ({
    display: "flex",
    flexDirection: 'column',
    background: styleRegistry.jumbotron_back,
    color: "white",
    alignItems:"center",
    borderRadius: "16px",
    padding: "30px 0 30px 0",
    margin: "30px"
})

const entryCSS = () => ({
    marginBottom: "46px"
})

const questionCSS = () => ({
    marginBottom: "11px"
})

const answerCSS = () => ({
    marginTop: "5px"
})



class FAQ extends React.Component {

    render() {
        return (

            <div style={styles()}>
                <h1 name="FAQ" style={{textAlign:"center", marginTop:"20px", fontSize:"60px"}}>FAQ</h1>
                <div class="faqBody" style={{textAlign:"center", marginTop:"20px"}}>
                    <div class="entry" style={entryCSS()}>
                        <h2 class="question" style={questionCSS()}>How do I login?</h2>
                        <p class="answer" style={answerCSS()}>Use your username and password</p>
                    </div>
                    <div class="entry" style={entryCSS()}>
                        <h2 class="question" style={questionCSS()}>Whats the greates app ever?</h2>
                        <p class="answer" style={answerCSS()}>Forkist. Get it now on ios and android</p>
                    </div>
                    <div class="entry" style={entryCSS()}>
                        <h2 class="question" style={questionCSS()}>Tacos?</h2>
                        <p class="answer" style={answerCSS()}>Yum</p>
                    </div>
                </div>
            </div>

        );
    }
}
export default FAQ