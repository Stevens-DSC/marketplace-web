
import { useRouter } from 'next/router'
import Head from 'next/head'
import api from '../../../utils/api'
import styles from './styles'
import ShopButton from '../../components/ui/ShopButton'


const ProductPage = (props) => {
    if(!props.loaded) {
        return <p>Loading...</p>
    }
    if(!props.success) {
        return <p>Error: {props.error || ""}</p>
    }
    const { product, sellerInfo } = props

    const { 
        displayname,
        price,
        seller,
        url, 
        currency,
        image,
        tags,
        description
    } = product

    const sellerName = sellerInfo.displayname

    const formatter = new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency
    })

    const formattedPrice = formatter.format(price)

    const [firstDesc, secondDesc] = formatDescription(description)

    return (
        <>
            <Head>
                <title>{displayname} | Square Mile Market</title>
                <meta name="description" key="description" value={description} />
            </Head>
            
            <div style={styles.sideBySideContainer}>
                <div style={styles.imageBox}>
                    <img src={image} width="300px"/>
                </div>
                <div style={styles.contentBox}>
                     <h1 style={styles.primaryTitle}>{displayname}</h1>
                    <div style={styles.priceContainer}>
                        <span style={styles.currencyStringPrefix}>{formattedPrice.charAt(0)}</span>
                        <span>{formattedPrice.substring(1)}</span> 
                        <span style={styles.fromSection}>
                            <span style={styles.fromDescriptionText}>from </span>
                            {sellerName}
                        </span>
                     </div>
                    <div style={styles.primaryDescriptionBox}>{firstDesc.split('\n').map(a=><p>{a}</p>)}</div>
                    <ShopButton to={url} text={`+ Buy from ${sellerName}`} />
                </div>
            </div>

            <div style={styles.secondaryDescriptionBox}>
                <div style={styles.primaryDescriptionBox}>{secondDesc.split('\n').map(a=><p>{a}</p>)}</div>
            </div>
        </>
    )
    }
let ignore = [['oz.', 'oz']]
function formatDescription(s) {
    for(let i of ignore)
        while(s.includes(i[0]))
            s = s.replace(i[0], i[1])
    var re = /\b(\w\.\w\.)|([.?])\s+(?=[A-Za-z])/g; 
    var result = s.replace(re, function(m, g1, g2){
    return g1 ? g1 : g2+"\r";
    });
    var arr = result.split("\r");
    if(arr.length < 2) {
        return [arr.join('\n'), ""]
    }
    let newArr = [arr.shift()]
    return [newArr.join('\n'), arr.join('\n')]
}
 
ProductPage.getInitialProps = async function (context) {
    const name = context.query.id
    try {
        const req = await api.getProductByShortCode({ shortcode: name })
        const sellerInfo = await api.getStoreByShortName({ shortname: req.seller })
        return {
            loaded: true,
            success: true,
            error: false,
            product: req,
            sellerInfo
        }
    }catch(e) {
        return {
            loaded: true,
            success: false,
            error: e + ""
        }
    }
    return {
        name: name
    }
}

export default ProductPage