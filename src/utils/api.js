import fetch from 'node-fetch'
import { SymbolDisplayPartKind } from 'typescript'

const ENDPOINT = ep => `https://us-central1-dsc-marketplace.cloudfunctions.net/${ep}`

let seconds = ms => ms * 1000
let minutes = s  => s  * 60

let CACHE_ENABLED = true

function cachefile(id) {
    // if(!CACHE_ENABLED)
    //     return null
    // const key = JSON.stringify(id)
    try {
        if(localStorage) {
            if(localStorage[key]) {
                let { lastParse, value } = JSON.parse(localStorage[key])
                if(Date.now() - lastParse > seconds(10)) {
                    console.log("already in db but its been a while so skip")
                    return null
                }
                return value
            }
        }
    }catch(e) {
        return null
    }
}

const functions = {
    getAllStores: async function() {
        // const cacheid = 'PRODUCT-' + shortcode
        // let b = cachefile(cacheid)
        // if(b != null) {
        //     return b
        // }
        let url = ENDPOINT("stores")

        const res = await fetch(url)

        if(!res.ok) {
            throw "Could not fetch stores. Got error code " + status
        }

        const json = await res.json()
        console.log("AAAAAAAAAAAAAAAAAAAAA" + json)

        if(!json.result) {
            throw "Could not fetch stores. Reason: " + (json.reason || json.result || "Not found")
        }


        const { result } = json

        if(result.length < 1) {
            throw "Could not fetch stores. Reason: Not found"
        }

        return result
    },
    getProductByShortCode: async function({shortcode}) {
        // const cacheid = 'PRODUCT-' + shortcode
        // let b = cachefile(cacheid)
        // if(b != null) {
        //     return b
        // }

        const params = {
            shortcode
        }
        
        let url = ENDPOINT("products")

        url += '?' + Object.keys(params).map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
        ).join("&")

        const res = await fetch(url)

        if(!res.ok) {
            throw "Could not fetch product. Got error code " + status
        }

        const json = await res.json()

        if(!json.result) {
            throw "Could not fetch product. Reason: " + (json.reason || json.result || "Not found")
        }

        const { result } = json

        if(result.length < 1) {
            throw "Could not fetch product. Reason: Not found"
        }

        return result[0]
    }, 
    getProductsBySeller: async function({seller}) {
        // const cacheid = 'PRODUCT-' + shortcode
        // let b = cachefile(cacheid)
        // if(b != null) {
        //     return b
        // }

        const params = {
            seller: seller
        }
        
        let url = ENDPOINT("products")

        url += '?' + Object.keys(params).map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
        ).join("&")

        const res = await fetch(url)

        if(!res.ok) {
            throw "Could not fetch product. Got error code " + status
        }

        const json = await res.json()

        if(!json.result) {
            throw "Could not fetch product. Reason: " + (json.reason || json.result || "Not found")
        }

        const { result } = json

        if(result.length < 1) {
            return []
        }

        return result
    }, 
    getStoreByShortName: async function({shortname}) {
        // const cacheid = 'STORE-' + shortname
        // let b = cachefile(cacheid)
        // if(b != null) {
        //     return b
        // }

        const params = {
            shortname
        }

        let url = ENDPOINT("stores")
        
        url += '?' + Object.keys(params).map(
            key=> `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
        ).join("&")

        const res = await fetch(url)

        if(!res.ok) {
            throw "Could not fetch store. Got error code " + status
        }

        const json = await res.json()
        if(!json.result) {
            throw "Could not fetch store. Reason: " + (json.reason || json.result || "Not found")
        }

        const { result } = json

        if(result.length < 1) {
            throw "Could not fetch store. Reason: Not found"
        }

        return result[0]
    }
}
// await functions.getProductByShortCode({shortcode: "empire-hoboken-39-95-lovers-holiday-basket"})

export default functions