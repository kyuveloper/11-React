import { useState } from "react"
import { styles } from "./style"


const Header = ({isDark}) => {
    return (
        <header style={
            {
                ...styles.header,
                backgroundColor : isDark? 'black':'lightGrey',
                color: isDark? 'white':'black'
            }
        }
        >
            <h1>Welcome to greedy World!</h1>
        </header>
    )
}

const Content = ({isDark}) => {
    return (
        <>
            <div style={{
                ...styles.content,
                backgroundColor : isDark? 'grey':'white',
                color: isDark? 'white':'black'
            }}
            >
                <p>내용 입니다.</p>
            </div>
        </>
    )
}

const Footer = ({isDark, setIsDark}) => {
    const toggleHeader = () => setIsDark(!isDark)

    return (
        <>
            <footer
                style={{
                    backgroundColor : isDark? 'black':'lightGrey',
                    color: isDark? 'white':'black'
                }}
            >
                <button onClick={toggleHeader}>{isDark? 'Light Mode':'Dark Mode'}</button>
            </footer>
        </>
    )
}

const Page = ({}) => {
    const [isDark, setIsDark] = useState(false)

    return (
        <>
            <div
                style={{
                    ...styles.page
                }}
            >
                <Header isDark={isDark}/>
                <Content isDark={isDark}/>
                <Footer isDark={isDark} setIsDark={setIsDark}/>
            </div>
        </>
    )
}

export default Page;