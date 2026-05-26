// console.log("Hello Redux");
// import { ADD_ACCOUNT, GETALL_ACCOUNT, HIDE_INPUT_FORM, SHOW_INPUT_FORM } from "./Constants/ActionType";
import { actionHideInputForm, actionShowInputForm } from "./Actions/FormAction";
import { actionAddAccount } from "./Actions/AccountAction";
import { store } from "./Store/storeRedux";
// // Khai báo giá trị ban đầu cho các state
// let initialState = {
//     showForm: false,
//     listAccount: [],
// }
// // Bước 2: Tạo reducer
// let reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SHOW_INPUT_FORM:
//             return {
//                 ...state,
//                 showForm: true,
//             }
//         case HIDE_INPUT_FORM:
//             return {
//                 ...state,
//                 showForm: false,
//             }
//         case ADD_ACCOUNT:
//             let accountNew = action.payload;
//             return {
//                 ...state,
//                 listAccount: [...state.listAccount, accountNew],
//             }
//         case GETALL_ACCOUNT:
//             return {
//                 ...state,
//             };



//         default:
//             return { ...state }
//     }
// }
// Bước 1: Khai báo store
// let store = createStore(RootReducer);

// Bước 4: Khai báo action
// let actionShowInputForm = {
//     type: SHOW_INPUT_FORM,
// }

// let actionHideInputForm = {
//     type: HIDE_INPUT_FORM,
// }


console.log("State showForm trước khi thay đổi", store.getState());

store.dispatch(actionShowInputForm());

console.log("State showForm Sau khi thay đổi", store.getState());

store.dispatch(actionHideInputForm());

console.log("State showForm Sau khi thay đổi Hide Input Form", store.getState());

// Thêm mới Account

// let actionAddAccount1 = {
//     type: ADD_ACCOUNT,
//     payload: {
//         id: 1,
//         username: "daonq1",
//         fullname: "NguyenDao1",
//     }
// }

// let actionAddAccount2 = {
//     type: ADD_ACCOUNT,
//     payload: {
//         id: 2,
//         username: "daonq2",
//         fullname: "NguyenDao2",
//     }
// }
let account1 = {
    id: 1,
    username: "daonq1",
    fullname: "NguyenDao1",
}

let account2 = {
    id: 2,
    username: "daonq2",
    fullname: "NguyenDao2",
}

let account3 = {
    id: 3,
    username: "daonq3",
    fullname: "NguyenDao3",
}



store.dispatch(actionAddAccount(account1));
store.dispatch(actionAddAccount(account2));
store.dispatch(actionAddAccount(account3));
console.log("State listAccount Sau khi thêm mới account", store.getState());


