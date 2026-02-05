import { useState } from "react";

function App() {
    const [inp, setINP] = useState("");
    const [name, setName] = useState("");

    const clk = () => {
        setName(inp);
        setINP("");
    };

    return (
        <div className="App">
            <h1>GeeksForGeeks</h1>
            {name ? <h2>Your Name: {name}</h2> : null}
            <input
               type="text"
               placeholder="Enter Your Name..."
               onChange={(e) => setINP(e.target.value)}
               value={inp}/>

            <button onClick={clk}>Save</button>   
        </div>
    );
}

export default App;