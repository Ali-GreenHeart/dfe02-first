import { useCallback, useMemo, useState } from "react";
import Items from "./Items";

function lang(l) {
    console.log('language changed...')
    switch (l) {
        case 'en':
            return 'number';
        case 'ru':
            return 'chislo';
        case 'az':
            return 'eded';
    }
}

const Memoization = () => {
    const [n, setN] = useState(0)
    const [lng, setLng] = useState('az')
    const [mode, setMode] = useState('light')

    const newLang = useMemo(() => {
        return lang(lng)
    }, [lng])

    const result = useMemo(() => {
        console.log('calculating...')
        return n ** 2
    }, [n])

    const getItems = useCallback(() => {
        console.log('getItems been called...')
        return [n + 2, n, n - 2]
    }, [n])

    return (
        <div style={{
            backgroundColor: mode === 'dark' ? "black" : "white",
            color: mode === 'dark' ? "white" : "black",
        }}>
            <h1 style={{ textAlign: 'center' }}>Memoization 😅</h1>
            <h3 style={{ textAlign: 'center' }}>{newLang} {result}</h3>
            <input
                onChange={({ target }) => {
                    setN(+target.value)
                }}
                type="text" />
            <button
                onClick={() => {
                    setLng(prompt('dili daxil edin:'))
                }}
            >
                change lang
            </button>
            <button
                onClick={() => {
                    setMode(mode === 'dark' ? 'light' : 'dark')
                }}
            >
                change mode
            </button>

            <Items getItems={getItems} />
        </div>
    )
}
export default Memoization
