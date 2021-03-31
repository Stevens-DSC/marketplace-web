import React from 'react';
import styleRegistry from "../../../css/constants/styles"

const styles = () => ({
    display: "flex",
    flexDirection: 'row'
})



class TrendingSection extends React.Component {

    render() {
        const { header } = this.props
        return (
            <div>
                <h1>{header}</h1>
                <div style={styles()}>
                    {this.props.children}
                </div>
                
            </div>

        );
    }
}
export default TrendingSection