import React from 'react';
import styleRegistry from "../../../css/constants/styles"

const styles = inverted => ({
    textAlign: (inverted ? "right" : "left"),
    display: 'flex',
    flexDirection: (!inverted ? "row-reverse" : "row")
})



class Jumbotron extends React.Component {
  
    renderHeadings(header, subheader, inverted) {
        if(inverted) {
            return (
                <>
                    <h2>{subheader}</h2>
                    <h1>{header}</h1>
                </>
            )
        }

        return (
            <>
                <h1>{header}</h1>
                <h2>{subheader}</h2>
            </>
        )
    }

    render() {
        const { header="", subheader="", inverted=false } = this.props
        return (
            <div>
                <div style={styles(inverted)}>
                    <div style={{width: "100%"}}>

                    </div>
                    <div style={{width: "100%"}}>
                            {this.renderHeadings(header, subheader, inverted)}
                    </div>
                </div>
                {this.props.children}
            </div>

        );
    }
}
export default Jumbotron