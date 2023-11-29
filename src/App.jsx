import { useState } from "react";
import Counter from "./Counter";



function App() {
    const [isShown, setIsShown] = useState(true)

    return (
        <div>
            <button
                onClick={() => {
                    setIsShown(!isShown)
                }}
            >show/hide counter</button>
            {
                isShown && <Counter />
            }
        </div>
    )
}
export default App;
