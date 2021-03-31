import React from 'react';
import styleRegistry from "../../../css/constants/styles"

function backgroundStyles(background) {
    if(backgroundStyles == "")
        return {
            backgroundColor: "red"
        }
    return { 
        backgroundImage: `url(${background})`,
        borderRadius: 18,
        backgroundPosition: "center"
    }
}

const styles = (inverted, background) => ({
    textAlign: (inverted ? "right" : "left"),
    display: 'flex',
    padding: 40,
    paddingLeft: 40,
    paddingRight: 40,
    color: styleRegistry.invert_white,
    flexDirection: (!inverted ? "row-reverse" : "row"),
    ...backgroundStyles(background)
})

const h1Styles = {
    padding: 0,
    margin: 0,
    marginBottom: 10
}

const h2Styles = {
    padding: 0,
    margin: 0,
    marginBottom: 20
}
 
class Jumbotron extends React.Component {
  
    renderHeadings(header, subheader, inverted) {
        if(inverted) {
            return (
                <>
                    <h2 style={h2Styles}>{subheader}</h2>
                    <h1 style={h1Styles}>{header}</h1>
                </>
            )
        }

        return (
            <>
                <h1 style={h1Styles}>{header}</h1>
                <h2 style={h2Styles}>{subheader}</h2>
            </>
        )
    }



    render() {
        const { header="", subheader="", inverted=false, background="" } = this.props
        return (
            <div>
                <div style={styles(inverted, background)}>
                    <div style={{width: "100%"}}>
                            {this.renderHeadings(header, subheader, inverted)}
                            {this.props.children}
                    </div>
                </div>
                
            </div>

        );
    }
}
export default Jumbotron