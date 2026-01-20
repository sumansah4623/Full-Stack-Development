// Class components are ES6 classes in React that extend React.Component and support state and lifecycle handling.
// Manage component data using the this.state property.
// Use lifecycle methods such as componentDidMount and componentDidUpdate.





class Greet extends React.Component                           //Class component extending React.Component
{
    render()                                                  //Required method that returns JSX
    {                                   
        return <h1>Hello, {this.props.name}!</h1>;            //Access props using this.props
    }
}