import { useState } from "react"

const SearhBox = ({setImgUrl}) => {
    const [emojiName, setEmojiName] = useState('');

    const onChangeHandler = (e) => {
        setEmojiName(e.target.value)
    }

    const onClickHandler = () => {
        fetch('https://api.github.com/emojis')
            .then(r => r.json())
            .then(result => setImgUrl(result[emojiName]))
    }

    return (
        <>
            <input type="text" onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>검색</button>
        </>
    )
}

const ImageBox = ({imgUrl}) => {
    return !!imgUrl? <img src={imgUrl}/>:<h1>텅</h1> 
}

const EmojiContainer = () => {
    const [imgUrl, setImgUrl] = useState('');
    return (
        <>
            <SearhBox setImgUrl={setImgUrl} />
            <br/>
            <ImageBox imgUrl={imgUrl} />
        </>
    )
}

export default EmojiContainer;