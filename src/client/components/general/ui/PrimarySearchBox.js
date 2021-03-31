import styleRegistry from "../../../css/constants/styles"
import React, { useState } from 'react'
import { useRouter } from 'next/router'


const divStyles = {
    background: 'white',
    borderRadius: 12,
    padding: 12
}

const inputStyles = {
    width: "100%",
    fontSize: 16,
    background: 'none',
    border: 'none'
}

function handlePress(e, query) {
    if(e.keyCode === 13) {
        search(query)
        e.preventDefault()
        return false
    }
}

function search(query) {
    // const router = useRouter()
    window.location.href=`/search?query=${encodeURIComponent(query)}`
}
 
const PrimarySearchBox = function(props) {

    const [query, setQuery] = useState('')

    return (<>
        <div style={divStyles}>
            <input 
            placeholder={"Search..."} 
            value={query} 
            onChange={e => setQuery(e.target.value)} 
            style={inputStyles} 
            onKeyUp={e => handlePress(e, query)}
        />
        </div>
    </>)
}

export default PrimarySearchBox