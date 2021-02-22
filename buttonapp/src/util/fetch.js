// import fetch from 'isomorphic-unfetch'

// uses browser fetch
// or polimorfic fetch

// GET, POST, PUT, PATCH, DEL, RAW
// automatically pass appkey to your requests

// addQuery :: Object => String
const addQuery = (obj) => {
    let result = ''
    for (const prop in obj) {
        result = result + genQuery(prop, obj[prop])
    }
    return result
}
// genQuery :: (String, String) => String
const genQuery = (key, value) => `&${key}=${value}`
// stringify :: Object => String
const stringify = (body) => JSON.stringify(body)
// form :: Object => FormData
const form = (form) => new FormData(form)

// raw :: ?String -> String -> Object => Promise
const raw = (method = 'GET') => (uri) => ({
    body = {},
    body_type = 'json',
} = {}) => {
    const encode = body_type === 'json' ? stringify : form
    const defaultOptions = {
        // cookies sent
        // mode: 'cors', // do not use the cors because we redirect on nginx to correct end point
        // credentials: 'include', // Server doesn't like this, use of * is
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            // ,'X-XSRF-TOKEN': getCookieValue('XSRF-TOKEN') // this is once we have XSRF token in place
        },
    }
    const options =
        method === 'GET'
            ? defaultOptions
            : { ...defaultOptions, method: method, body: encode(body) }

    return fetch(uri, options).then((data) => {
        try {
            return data.json().catch((e) => {
                return data || {}
            })
        } catch (e) {
            return data || {}
        }
    })
}

// method = 'GET' || 'POST' || 'PUT' || 'PATCH' || 'DELETE'
// path = 'ping'
// opt ={
//        body: { name: 'example' },
//        body_type: 'form' || 'json'
//      }

// request_ :: String -> String -> String -> ?Object => Promise
const request_ = (envapikey) => (method) => (path) => (opt = {}) => {
    const { body, body_type, ...rest } = opt
    let options = {}
    if (body) options = { ...options, body: body }
    if (body_type) options = { ...options, body_type: body_type }

    const apikey = '?appkey=' + envapikey
    const qs = rest !== undefined ? apikey + addQuery(rest) : ''
    // example.com/api/ + ping + ?appkey=XXXXXX
    const uri = process.env.REACT_APP_DOMAIN + path + qs
    return raw(method)(uri)(options)
}

// Use for all the API calls,
// request :: String -> String -> ?Object => Promise
const request = request_(process.env.REACT_APP_APPKEY_EXTENSTION)

// // Use in case you got token from the web, and you need to call to get for your app
// // DO not use this otherwise
// // browser_request :: String -> String -> ?Object => Promise
// const browser_request = request_(process.env.REACT_APP_APPKEY_WEB)

// get :: String -> ?Object => Promise
const get = request('GET')
// post :: String -> ?Object => Promise
const post = request('POST')
// put :: String -> ?Object => Promise
const put = request('PUT')
// patch :: String -> ?Object => Promise
const patch = request('PATCH')
// del :: String -> ?Object => Promise
const del = request('DELETE')

// // browserGet :: String -> ?Object => Promise
// const browserGet = browser_request('GET')
// // browserPost :: String -> ?Object => Promise
// const browserPost = browser_request('POST')
// // browserPut :: String -> ?Object => Promise
// const browserPut = browser_request('PUT')
// // browserPatch :: String -> ?Object => Promise
// const browserPatch = browser_request('PATCH')
// // browserDel :: String -> ?Object => Promise
// const browserDel = browser_request('DELETE')

const uploadS3 = (signUrl, data) => {
    return fetch(signUrl, {
        method: 'PUT',
        body: data,
        headers: {
            'Content-Type': 'image/jpeg',
            'Cache-Control': 'max-age=31536000',
        },
    })
}

export {
    get,
    post,
    put,
    patch,
    del,
    raw,
    // browserGet,
    // browserPost,
    // browserPut,
    // browserPatch,
    // browserDel,
    uploadS3,
}
