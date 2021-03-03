
import SearchboxClass from '../components/general/ui/SearchBoxClass'
import SignUpModal from '../components/general/ui/SignUpModal'
import React from 'react'
const testFunction = () => {
    console.log('hello')
}
const Index = props => (
    <div>
        <SignUpModal
            title="This is the signup Page"
            subtitle="subtitle"
        />
    </div>
)

// Index.getInitialProps = async function () {
//     // const res = await fetch(something)

//     return {}
// }

export default Index