// In React, you can nest components inside other components to build a modular and hierarchical structure.
// Components can be reused multiple times within the same or different components.
// Props can be passed to nested components for dynamic content.



function header() {
    return <h1>Welcome To My site</h1>
}

function Footer(){
    return <p>@ 2026 My Company</p>
}

function App(){
    return (
        <div>
            <Header/>
            <p>This is the Main Content.</p>
            <Footer/>
        </div>
    );
}

export default App;