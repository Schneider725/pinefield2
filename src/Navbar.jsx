import { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="nav">
                <div className="title">Disco</div>
                <button className="burger" onClick={() => setIsOpen(true)}>☰</button>
            </div>

            {isOpen && (
                <div className="modal" onClick={() => setIsOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setIsOpen(false)}>✕</button>
                        <ul>
                            <li><a href="/pinegrove" onClick={() => setIsOpen(false)}>Pinegrove</a></li>
                            <li><a href="/fieldmedic" onClick={() => setIsOpen(false)}>Field Medic</a></li>
                            <li><a href="/dijon" onClick={() => setIsOpen(false)}>Dijon</a></li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;
