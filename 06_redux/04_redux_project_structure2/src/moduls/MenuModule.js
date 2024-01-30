import { createActions, handleActions } from "redux-actions";

const initialState = {};

/* 
    언더바(_)를 인식하여 카멜케이스로 변경
    GET_MENULIST -> getMenulist
    GET_MENU_LIST -> getMenuList
*/

const GET_MENU_LIST = 'menu/GET_MENU_LIST';
const GET_MENU = 'menu/GET_MENU';
const REGIST_MENU = 'menu/REGIST_MENU';
const MODIFY_MENU ='menu/MODIFY_MENU';
const DELETE_MENU = 'menu/DELETE_MENU';


// 액션 함수 정의
export const {menu : {getMenuList, getMenu, registMenu, modifyMenu, deleteMenu}} = createActions({
    [GET_MENU_LIST] : (res) => ({menuList : res}),
    [GET_MENU] : (res) => ({menu : res}),
    [REGIST_MENU] : (res) => ({regist : res}),
    [MODIFY_MENU] : (res) => ({modify : res}),
    [DELETE_MENU] : (res) => ({delete : res})
});


// 리듀서 함수
const menuReducer = handleActions(
    {
        [GET_MENU_LIST] : (state, {payload}) => {
            return payload
        },
        [GET_MENU] : (state, {payload}) => {
            return payload
        },
        [REGIST_MENU] : (state, {payload}) => {
            return payload
        },
        [MODIFY_MENU] : (state, {payload}) => {
            return payload
        },
        [DELETE_MENU] : (state, {payload}) => {
            return payload
        }
    }, initialState
)

export default menuReducer;