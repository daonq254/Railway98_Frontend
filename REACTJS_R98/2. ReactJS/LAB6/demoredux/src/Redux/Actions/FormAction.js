import { HIDE_INPUT_FORM, SHOW_INPUT_FORM } from "../Constants/ActionType";

export let actionShowInputForm = () => {
    return {
        type: SHOW_INPUT_FORM,
    }
}

export let actionHideInputForm = () => {
    return {
        type: HIDE_INPUT_FORM,
    }
}
