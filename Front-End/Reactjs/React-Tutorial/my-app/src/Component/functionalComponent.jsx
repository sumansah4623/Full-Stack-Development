// function MyButton() {
//     return (
//         <button>
//             I'm a Button
//         </button>
//     );
// }

// export default function MyApp() {
//     return (
//         <div>
//             <h1>Welcome to my app</h1>
//             <MyButton/>
//         </div>
//     );
// }




//Passing props to a component 
function Avatar() {
    return (
        <img
           className="avatar"
           src = "https://i.pinimg.com/736x/1a/e0/28/1ae0289b4aa8103b3a313b5cd89444dc.jpg"
           alt = "girls avatar"
           width = {100}
           height= {100}
        />   
    );
}

export default function Profile() {
    return (
        <Avatar/>
    );
}