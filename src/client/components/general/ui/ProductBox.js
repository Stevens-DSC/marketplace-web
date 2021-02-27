import React from 'react';
import styleRegistry from "../../../css/constants/styles"

const styles = () => ({
    border: "1px solid gray",
    borderRadius: "10px",
    marginLeft: "5px",
    marginRight: "5px",
    width: "100px",
    height: "100px"
})



class ProductBox extends React.Component {

    render() {
        const { } = this.props
        return (
            <div style={styles()}>
                
            </div>

        );
    }
}
export default ProductBox