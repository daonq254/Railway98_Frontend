import { CLOSE_INPUT_FORM_, SHOW_INPUT_FORM } from "../Constant/ActionType"

// Khai báo giá trị ban đầu cho các state
let initialState = {
    showForm: false,
}
// Bước 2: Tạo reducer
export let formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_INPUT_FORM:
            return {
                ...state,
                showForm: true,
            }
        case CLOSE_INPUT_FORM_:
            // 
            
            return {
                ...state,
                showForm: false,
            }

        default:
            return { ...state }
    }
}