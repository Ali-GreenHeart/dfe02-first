import { useState } from "react";
import Counter from "./Counter";
import Users from "./Users";



function App() {
    const [isShown, setIsShown] = useState(true)

    return (
        <>
            <button onClick={() => setIsShown(!isShown)}>show hide </button>
            {
                isShown && <Users />
            }
        </>
    )
}
export default App;
