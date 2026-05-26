import { HIDE_INPUT_FORM, SHOW_INPUT_FORM } from "../Constants/ActionType"

// Khai báo giá trị ban đầu cho các state
let initialState = {
    showForm: false,
    nameForm: "Add Form",
}
// Bước 2: Tạo reducer
export let formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_INPUT_FORM:
            return {
                ...state,
                showForm: true,
            }
        case HIDE_INPUT_FORM:
            return {
                ...state,
                showForm: false,
            }
       
        default:
            return { ...state }
    }
}