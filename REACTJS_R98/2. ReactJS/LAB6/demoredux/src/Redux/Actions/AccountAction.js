import { ADD_ACCOUNT } from "../Constants/ActionType";

// export let actionAddAccount1 = {
//     type: ADD_ACCOUNT,
//     payload: {
//         id: 1,
//         username: "daonq1",
//         fullname: "NguyenDao1",
//     }
// }

// export let actionAddAccount2 = {
//     type: ADD_ACCOUNT,
//     payload: {
//         id: 2,
//         username: "daonq2",
//         fullname: "NguyenDao2",
//     }
// }


export let actionAddAccount = (accountNew) => {
    return {
        type: ADD_ACCOUNT,
        payload: accountNew
    }
}