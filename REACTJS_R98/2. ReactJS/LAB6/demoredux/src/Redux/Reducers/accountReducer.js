import { ADD_ACCOUNT, GETALL_ACCOUNT } from "../Constants/ActionType";

// Khai báo giá trị ban đầu cho các state
let initialState = {
    listAccount: [],
    accountUpdateState: null,
}
// Bước 2: Tạo reducer
export let accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ACCOUNT:
            let accountNew = action.payload;
            return {
                ...state,
                listAccount: [...state.listAccount, accountNew],
            }
        case GETALL_ACCOUNT:
            return {
                ...state,
            };



        default:
            return { ...state }
    }
}