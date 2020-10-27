
import { useRouter } from 'next/router'


const ProductPage = ({name, a}) => (
    <>
        <h1>Info page for {name}</h1>
        <p>Coming soon....</p>
        <code>{a}</code>
        <div>
            
        </div>
    </>
)

ProductPage.getInitialProps = async function (context) {
    const name = context.query.id
    return {
        name: name
    }
}

export default ProductPage