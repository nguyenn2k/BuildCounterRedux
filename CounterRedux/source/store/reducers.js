import { LIKE, UNLIKE } from "./actionTypes";

//Biến khởi tạo ban đầu:
const initialState ={
    counter : 0,
    name : 'Like'
};

export const mainReducer = (state = initialState, action) =>{
    switch (action.type) {
        case LIKE:
            return{
                ...state,
                counter: state.counter +1 //Khi nhấn nút LIKE thì 'giá trị khởi tạo ban đầu' sẽ cộng thêm 1
            }
        case UNLIKE:
            return{
                ...state,
                 counter: state.counter -1 //Khi nhấn nút UNLIKE thì 'giá trị khởi tạo ban đầu' sẽ trừ bớt 1
            }
    
        default:
            return state;
    }
}