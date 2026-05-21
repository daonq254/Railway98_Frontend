import { api } from "./api"

let getListAcccountAPI = () => {
    return api("GET", "accounts/", null)
}

// Add New Account
const addAccountNewAPI = (AccountNew) => {
    return api("POST", "accounts/", AccountNew);
};

// Delete Account
const deleteAccountAPI = (id) => {
    let url = "accounts/" + id;
    return api("DELETE", url, null);
};

// Update Account
const updateAccountAPI = (accountUpdate) => {
    let url = "accounts/" + accountUpdate.id;
    return api("PUT", url, accountUpdate);
};

export {
    getListAcccountAPI, addAccountNewAPI, deleteAccountAPI, updateAccountAPI
}