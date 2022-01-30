import client from "../../config";
import axios from 'axios';
import {
    WORD_LIST_REQUEST,
    WORD_LIST_SUCCESS,
    WORD_LIST_FAIL,

    WORD_DETAIL_REQUEST,
    WORD_DETAIL_SUCCESS,
    WORD_DETAIL_FAIL,

    WORD_DELETE_REQUEST,
    WORD_DELETE_SUCCESS,
    WORD_DELETE_FAIL,

    WORD_CREATE_REQUEST,
    WORD_CREATE_SUCCESS,
    WORD_CREATE_FAIL,
} from "../constants/wordConstants";

//action to load WORDs from server
export const listWords = () => async (dispatch) => {
    console.log('get list executed')
    try {
        dispatch({ type: WORD_LIST_REQUEST });

        const { data } = await client.get('/words');

        dispatch({
            type: WORD_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: WORD_LIST_FAIL,
            payload: error
        });
    }
};

// //action to pull WORD detail based on WORD id
// export const WORDDetail = (id) => async (dispatch) => {
//     try {
//         dispatch({ type: WORD_DETAIL_REQUEST });

//         const { data } = await axios.get(`https://jsonplaceholder.typicode.com/WORDs/${id}`);

//         dispatch({
//             type: WORD_DETAIL_SUCCESS,
//             payload: data,
//         });
//     } catch (error) {
//         dispatch({
//             type: WORD_DETAIL_FAIL,
//             payload: error
//         });
//     }
// };

// //action to create a WORD
// export const createWORD = (WORD) => async (dispatch) => {
//     console.log(WORD)
//     try {
//         dispatch({ type: WORD_CREATE_REQUEST });

//         const { data } = await axios.WORD('https://jsonplaceholder.typicode.com/WORDs/', WORD);

//         dispatch({
//             type: WORD_CREATE_SUCCESS,
//             payload: data,
//         });
//     } catch (error) {
//         dispatch({
//             type: WORD_CREATE_FAIL,
//             payload: error
//         });
//     }
// };

// //action to delete a WORD by id
// export const deleteWORD = (id) => async (dispatch) => {
//     try {
//         dispatch({ type: WORD_DELETE_REQUEST });

//         const { data } = await axios.delete(`https://jsonplaceholder.typicode.com/WORDs/${id}`);

//         dispatch({
//             type: WORD_DELETE_SUCCESS,
//             payload: data,
//         });
//     } catch (error) {
//         dispatch({
//             type: WORD_DELETE_FAIL,
//             payload: error
//         });
//     }
// };
