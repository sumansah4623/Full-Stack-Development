// Functional components are JavaScript functions that return React elements 
// and are the preferred way to build modern React applications.
// Can manage state and lifecycle logic using React Hooks.
// Use a simpler syntax, making them ideal for reusable components.
// Offer better performance by avoiding the use of the this keyword.




function Greet(props)
{
    return <h1>Hello, {props.name}!</h1>;
}