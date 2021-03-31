import template from '../../css/constants/styles'

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
        "font-family": "'Lexend', sans-serif",
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
        "font-family": "'Lexend', sans-serif",
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
        "font-family": "'Lexend', sans-serif",
        fontSize: 16,
    },
    fromDescriptionText: {
        color: template.grayscale_text,
        "font-family": "'Lexend', sans-serif",
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

    }
}

export default styles 