import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";



const Search = () => {

    const [activity, setActivity] = useState('');
    const [err, setErr] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    async function getAcitivity () {
        fetch('http://www.boredapi.com/api/activity/')
            .then(response => response.json())
            .then(data => setActivity(data.activity))
    }
    
    async function getImage() {
        fetch(`https://pixabay.com/api/?key=42015727-bd19eee378f976dcc4cdfcd0f&q=${activity}&image_type=photo`)
            .then(response => response.json())
            .then(data => setImgUrl(data.hits[0].largeImageURL))
            .catch(err => setErr(err));
        console.log(imgUrl);
        if (err) {
            setImgUrl('');
        }
        
    }
    
    getAcitivity();
    getImage();

    const ImageBox = ({imgUrl}) => {
        return !!imgUrl? <img src={imgUrl}/>:<h1>'텅'</h1> 
    }


    return (
        <>
            <Outlet/>
            <h2>뭐할지 골라줄게</h2>
            <button onClick={getAcitivity}>ㄱㄱ</button>
            <h3>{activity}</h3>
            <ImageBox imgUrl={imgUrl} />
            <NavLink to={'/test'}>Test</NavLink>
        </>
    )
}

export default Search;