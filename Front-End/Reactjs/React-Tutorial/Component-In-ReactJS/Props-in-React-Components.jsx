// Props (short for properties) are read-only inputs passed from a parent component to a child component. 
// They enable dynamic data flow and reusability.
// Props are immutable.
// They enable communication between components.



function Greet(props) {
    return <h2>Welcome, {props.username}</h2>
}


//Usage
<Greet username = "Adam" />