// console.log("Hello Redux");
import { createStore } from "redux";
// Khai báo giá trị ban đầu cho các state
let initialState = {
    showForm: false,
    listAccount: [],
}
// Bước 2: Tạo reducer
let reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_INPUT_FORM":
            return {
                ...state,
                showForm: true,
            }


        default:
            return { ...state }
    }
}
// Bước 1: Khai báo store
let store = createStore(reducer);

// Bước 4: Khai báo action
let actionShowInputForm = {
    type: "SHOW_INPUT_FORM",
}

console.log("State showForm trước khi thay đổi", store.getState());

store.dispatch(actionShowInputForm);

console.log("State showForm Sau khi thay đổi", store.getState());
