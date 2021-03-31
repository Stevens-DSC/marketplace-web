import template from '../constants/styles'

const containerElement = {
    padding: 10
}

const styles = {
    sideBySideContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    
    imageBox: {
        ...containerElement,
        width: 'fit-content'
    },
    contentBox: {
        ...containerElement,
        width: 'fit-content'
    },
    primaryTitle: {
        fontFamily: "'Lexend', sans-serif",
        color: template.almost_black,
        fontSize: 26
    },
    priceContainer: {
        fontSize: 25,
        color: template.almost_black,
        fontWeight: 'bold'
    },
    primaryDescriptionBox: {
        color: template.darker_grayscale_text,
        fontFamily: "'Lexend', sans-serif",
        fontWeight: 500,
        marginBottom: 28
    },
    currencyStringPrefix: { 
        fontWeight: 400,
        marginRight: 5,
        color: template.grayscale_text,
        verticalAlign: "super",
        fontSize: 20 
    },
    fromSection: {
        paddingLeft: 8,
        fontWeight: 600,
        fontFamily: "'Lexend', sans-serif",
        fontSize: 16,
    },
    fromDescriptionText: {
        color: template.grayscale_text,
        fontFamily: "'Lexend', sans-serif",
        fontWeight: 600,
    },
    secondaryDescriptionBox: {
        maxWidth: 800,
        margin: 'auto'
    },
    sellerBox: {
        minWidth: 400,
        ...containerElement,
        // border: '1px solid black',

    },
    sellerInfo: {
        border: `2px solid ${template.nav_back}`,
        padding: "16px",
        borderRadius: "6px",
        backgroundColor: "#d2d2fb",
        color: "#000000"
    },
    sellerInfoTitle: {
        margin: 0,
        padding: "0 0 4px 0",
        fontWeight: "bold",
        fontSize: "1.25em"
    },
    sellerInfoProperty: {
        margin: 0,
        padding: "0 0 8px 0"
    },
    sellerInfoPropertyName: {
        margin: 0,
        fontWeight: "bold",
        display: "inline"
    },
    sellerNameLink: {
        color: "#000000",
        textDecoration: "none"
    }
}

export default styles 