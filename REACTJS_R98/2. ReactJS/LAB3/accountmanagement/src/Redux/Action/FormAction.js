import { CLOSE_INPUT_FORM_, SHOW_INPUT_FORM } from "../Constant/ActionType"

export let actionShowInputForm = () => {
    return {
        type: SHOW_INPUT_FORM,
    }
}


export let actionClose_InputForm = () => {
    return {
        type: CLOSE_INPUT_FORM_,
    }
}