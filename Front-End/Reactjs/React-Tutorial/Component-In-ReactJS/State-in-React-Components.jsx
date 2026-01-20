// State is a component-controlled JavaScript object used to store and manage dynamic data over time.
// Updating state automatically triggers a re-render.
// Functional components manage state using the useState hook.




function Counter() {
    const [count, setCount] = React.useState(0);                    // State variable and updater

    return (
        <div>
            <p>Count : {count}</p>                                 {/* Display current count */}
            <button onClick={() => 
                setCount(count + 1)}>Increment
            </button>                                               {/* Increase count on click */}
        </div>
    );
}