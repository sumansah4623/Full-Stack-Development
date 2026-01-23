import { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [showName, setShowName] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setShowName(true);
    }

    return (
        <div className="App">
            <form>
                <label>Name:</label>
                <input
                   name="name"
                   value={name}
                   onChange={ (e) => setName(e.target.value)}
                />

                <button 
                   onClick={handleSubmit} 
                   type="submit">
                    Submit
                </button>   
            </form>

            {showName === true &&  <p>You have Submitted. Name: {name}</p>}
        </div>
    );

}

export default App;