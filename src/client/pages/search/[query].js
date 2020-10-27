
import { useRouter } from 'next/router'
import Loading from '../../components/general/Loading'
import { wait } from '../../misc/timings'

let temp = 0
const items = [
    {
        "id": "AtM2gMp4fxEQl8oQRT4a" + (temp++),

    }
]

const SearchItem = ({}) => {
    <>Item</>
}

const SearchContainer = ({items = []}) => (
    <>
        {items.map(item => <SearchItem key={item.id || 'generic'} {...items} />)}
    </>
)


const SearchPage = ({name, a, loaded, items}) => {

    if(!loaded) 
        return <Loading />

    return (
        <>
            <h1>Search: {name}</h1>
            <code>{items.length} results</code>
            <SearchContainer products={items}/>
        </>
    )
}


SearchPage.getInitialProps = async function (context) {
    // fake a load time, pretend this is fetching from db
    await wait(5000)

    const name = context.query.query
    return {
        loaded: true,
        name: name,
        items
    }
}

export default SearchPage