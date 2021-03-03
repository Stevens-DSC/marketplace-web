import React from 'react';
import styleRegistry from "../../../css/constants/styles"

const styles = () => ({
    display: "flex",
    flexDirection: 'row',
    width:"100%",
    alignItems:"center"
})



class AboutUs extends React.Component {

    render() {
        const { header } = this.props
        return (
            // <div>
            //     <h1>{header}</h1>
            //     <div style={styles()}>
            //         {this.props.children}
            //     </div>

            // </div>
            <div style={styles()}>
                <h1 name="AboutUs" style={{width:"100%", display: "flex", flexGrow:"2", padding:"20px", textAlign:"center"}}>About Us</h1>
	            <div style={{display: "flex", textAlign:"justify", flexGrow:"2", padding:"20px"}}>
                    We're a group of students from Stevens doing this awesome thing. Look at all this placeholder text! Isn't it awesome.
                    At Stevens we have the Honor System. Another thing that makes Stevens so great is the location. We're not too far from New York City.
                    You can't swim across the Hudson River. That's against the Honor System. Square Mile Market. I can't believe it's not butter. After giving it
                    a quick stir, add in the flour and two cups of sugar. Preheat the oven to 350 and sing the alphabet.</div>
                </div>

        );
    }
}
export default AboutUs