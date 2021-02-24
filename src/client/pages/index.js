
import SearchboxClass from '../components/general/widgets/SearchBoxClass'
import React from 'react'
const testFunction = () => {
    console.log('hello')
}
const Index = props => (

    <div>
        <SearchboxClass
            placeholder="Search"
            onChange={console.log('Firing')}
            onSubmit={testFunction} />
    </div>
)

// Index.getInitialProps = async function () {
//     // const res = await fetch(something)

//     return {}
// }

export default Index