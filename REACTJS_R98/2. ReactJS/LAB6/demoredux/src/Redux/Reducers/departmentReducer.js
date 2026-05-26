import { ADD_ACCOUNT, GETALL_ACCOUNT } from "../Constants/ActionType";

// Khai báo giá trị ban đầu cho các state
let initialState = {
    listDepartment: [],
}
// Bước 2: Tạo reducer
export let departmentReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return { ...state }
    }
}