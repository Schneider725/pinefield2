function Navbar(){
    return(
        <div className={"nav"}>
            <a href={"/"} className={"title"}>Disco</a>
            <ul>
                <li><a href={"/pinegrove"}>pinegrove</a></li>
                <li><a href={"/fieldmedic"}>field medic</a></li>
                <li><a href={"/dijon"}>dijon</a></li>
            </ul>
        </div>
    )
}
export default Navbar