import { api } from "./api"

let getListAcccountAPI = () => {
    return api("GET", "accounts/", null)
}

export {
    getListAcccountAPI
}