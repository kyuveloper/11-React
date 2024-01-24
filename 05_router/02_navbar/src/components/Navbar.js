

import { Link, NavLink } from "react-router-dom";

//  // const Navbar = () => {   /* 
//         react에서 a태그를 이용하여 페이지 이동을 하는 경우
//         single page application에서 관리하고 있는 상태를 잃어버리게 된다
//     */

//     // return (
//     //     <div>
//     //         <ul>
//     //             <li><a href={'/'}>Home</a></li>
//     //             <li><a href={'/main'}>main</a></li>
//     //             <li><a href={'/mypage'}>mypage</a></li>
//     //             <li><a href={'/login'}>login</a></li>
//     //         </ul>
//     //     </div>
//     // )
// }

// const Navbar = () => {

//     return (
//         <div>
//             <ul>
//                 <li><Link to={'/'}>Home</Link></li>
//                 <li><Link to={'/main'}>main</Link></li>
//                 <li><Link to={'/mypage'}>mypage</Link></li>
//                 <li><Link to={'/login'}>login</Link></li>
//             </ul>
//         </div>
//     )
// }

/* 
    <NavLink> 컴포넌트 사용
    NavLink 컴포넌트는 Link 컴포넌트와 사용이 거의 유사하다
    그러나 현재 nav의 상태가 active 인지에 대한 값을 이용하여 스타일을 조작하거나 클래스 이름을 변경할 수 있다
*/

const Navbar = () => {

    const activeStyle = {
        backgroundColor: 'blue'
    }

    return (
        <div>
            <ul>
                <li><NavLink to={'/login'} className={({isActive})=>isActive? 'active':''}>test</NavLink></li>
                <li><NavLink to={'/'} style={({isActive})=>isActive? activeStyle:undefined}>Home</NavLink></li>
                <li><NavLink to={'/main'} style={({isActive})=>isActive? activeStyle:undefined}>main</NavLink></li>
                <li><NavLink to={'/mypage'} style={({isActive})=>isActive? activeStyle:undefined}>mypage</NavLink></li>
                <li><NavLink to={'/login'} style={({isActive})=>isActive? activeStyle:undefined}>login</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;