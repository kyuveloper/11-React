import { getMenuList } from "../moduls/MenuModule";
import { request } from "./Api";

export function callGetMenuListAPI() {
    console.log('getMenuList API Calls');

    return async (dispatch, getState) => {
        const result = await request('get', '/menu');
        console.log('getMenuList result : ', result);

        dispatch(getMenuList(result));
    }
}