import { deleteMenu, getMenu, getMenuList, modifyMenu, registMenu } from "../moduls/MenuModule";
import { request } from "./Api";

export function callGetMenuListAPI() {
    console.log('getMenuList API Calls');

    return async (dispatch, getState) => {
        const result = await request('GET', '/menu');
        console.log('getMenuList result : ', result);

        dispatch(getMenuList(result));
    }
}


export function callRegistMenuAPI(menu) {
    console.log('registMenu api calls...');

    return async (dispatch, getState) => {
        const result = await request('POST', `/menu`, menu);
        console.log('registMenu result : ', result);
        dispatch(registMenu(result));
    }
}

export function callGetMenuAPI(id) {
    console.log('getMenu api calls...');

    return async (dispatch, getState) => {
        const result = await request('GET', '/menu/'+id);
        console.log('getMenu result : ', result);
        dispatch(getMenu(result));
    }
}


export function callModifyMenuAPI(menu) {
    console.log('ModifyMenu Api Call');

    return async (dispatch, getState) => {
        const result = await request('PUT', `/menu/${menu.id}`, menu);
        console.log('ModifyMenu result : ', result);
        dispatch(modifyMenu(result));
    }
}

export function callDeleteMenuAPI(id) {
    console.log('delete Menu api calls...');

    return async (dispatch, getState) => {
        const result = await request('DELETE', '/menu/'+id);
        console.log('deleteMenu result : ', result);

        dispatch(deleteMenu(result));
    }
}