import tokenData from "../mockApiData/AllTokensData";
const mountPoint = "Token";
const SET_DATA = 'SET_DATA';

const initialState = {
    data: []
}

const setData = data => ({
    type: SET_DATA,
    data
});

const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                data: action.data
            }
        default:
            return state;
    }
};

export default {
    mountPoint,
    selectors: {
        getData: state => state[mountPoint].data
    },
    actionCreators: {
        setData
    },
    reducer: tokenReducer
}