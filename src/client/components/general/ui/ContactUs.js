import React from 'react';
import styleRegistry from "../../../css/constants/styles"

const styles = () => ({
    display: "flex",
    flexDirection: 'row',
    alignItems:"center",
    justifyContent: "center",
    padding: "30px"
})



class ContactUs extends React.Component {

    render() {
        return (
            <div style={styles()}>
                <div style={{display:'flex', flexDirection:"column", textAlign:"right", marginRight:"10px", alignItems:"flex-end"}}>
                    <div style={{display:"flex", alignItems:"center", padding:"6px 3px 6px 3px"}}>
                        <a href="">Instagram</a>
                        <img src="http://simpleicon.com/wp-content/uploads/rocket.png" style={{maxWidth:"24px"}}/>
                    </div>
                    <div style={{display:"flex", alignItems:"center", padding:"6px 3px 6px 3px"}}>
                        <a href="">Facebook</a>
                        <img src="http://simpleicon.com/wp-content/uploads/rocket.png" style={{maxWidth:"24px"}}/>
                    </div>
                    <div style={{display:"flex", alignItems:"center", padding:"6px 3px 6px 3px"}}>
                        <a href="">Snapchat</a>
                        <img src="http://simpleicon.com/wp-content/uploads/rocket.png" style={{maxWidth:"24px"}}/>
                    </div>
                    <div style={{display:"flex", alignItems:"center", padding:"6px 3px 6px 3px"}}>
                        <a href="">AOL</a>
                        <img src="http://simpleicon.com/wp-content/uploads/rocket.png" style={{maxWidth:"24px"}}/>
                    </div>
                    <div style={{display:"flex", alignItems:"center", padding:"6px 3px 6px 3px"}}>
                        <a href="">Twitter</a>
                        <img src="http://simpleicon.com/wp-content/uploads/rocket.png" style={{maxWidth:"24px"}}/>
                    </div>
                    <div style={{display:"flex", alignItems:"center", padding:"6px 3px 6px 3px"}}>
                        <a href="">Fax</a>
                        <img src="http://simpleicon.com/wp-content/uploads/rocket.png" style={{maxWidth:"24px"}}/>
                    </div>
                </div>
                <h1 name="ContactUs" style={{marginLeft:"10px"}}>Contact Us</h1>
            </div>

        );
    }
}
export default ContactUs