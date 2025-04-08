import Display from "./Display.jsx";
import Field from "./pages/Field.jsx";
import Pine from "./pages/Pine.jsx";
import './index.css'
import Navbar from "./Navbar.jsx";
function App(){
    let Component
    switch(window.location.pathname){
        case"/":
            Component = Field()
            break
        case"/pinegrove":
            Component = Pine()
            break
        case"/fieldmedic":
            Component = Field()
    }
    return(
        <>
            <div className={"container"}>
                <Navbar />
                <Display link={Component.link} artist={Component.artist} albums={Component.albums} />
            </div>
        </>
    )
}
export default App
