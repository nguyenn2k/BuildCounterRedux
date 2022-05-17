import { LIKE,UNLIKE } from "./actionTypes";

export const like = () =>({
    type:LIKE, //Kiểu: Like
})
export const unlike = () =>({
    type:UNLIKE, // Kiểu: Không Like
})