const initialState = {
    name: ""
}

const sayNameReducer = (state=initialState, action) => {
    switch(action.type){
        case 'SAY_NAME':
            return {
                ...state,
                name: action.payload
            }

        default: return  state
    }
}

export default sayNameReducer;