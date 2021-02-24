
import SearchboxClass from '../components/general/ui/SearchBoxClass'
import React from 'react'
import Jumbotron from '../components/general/ui/Jumbotron'
import TrendingSection from '../components/general/ui/TrendingSection'
import ProductBox from '../components/general/ui/ProductBox'


const testFunction = () => {
    console.log('hello')
}
const Index = props => (

    <div>
       <Jumbotron inverted={false} 
            header="LOOK LOCAL, FIND STORES NEAR YOU." 
            subheader="Square Mile Market is dedicated to helping you discover local businesses..." 
       >
            <SearchboxClass onChange={() => {}} onSubmit={() => {}} placeholder="testtest" value="testtest" />
        </Jumbotron>
       <TrendingSection header="Test">
       <ProductBox />
       <ProductBox />
       <ProductBox />
       <ProductBox />
       <ProductBox />
       <ProductBox />
       <ProductBox />
        </TrendingSection>
       <Jumbotron inverted={true} 
            header="EXPLORE & DISCOVER" 
            subheader="Take a look at our curated list of businesses..." 
       />
    </div>
)

// Index.getInitialProps = async function () {
//     // const res = await fetch(something)

//     return {}
// }

export default Index