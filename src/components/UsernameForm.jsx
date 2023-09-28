import { useState } from "react";

export const UsernameForm = ({ search, handleChange, usernameInput }) => {
    const [value, setValue] = useState("");
    const handleChildChange = (e) => {
        setValue(e.target.value);
        handleChange(e);
    };

    return (
        <>
            <nav className="navbar" style={{width: "100vw", fontSize: "10px"}} role="navigation" aria-label="main navigation">
                <div className="navbar-brand" style={{alignItems:"center"}}>
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="../public/images/git-icon.webp" width="auto" height="28" />
                    </a>
                    <form>
                        <input type="text" placeholder="enter username" className="iput" value={value} onChange={(e) => { handleChildChange(e) }} />
                        <button type="button" className="buton" onClick={() => search()}>Search</button>
                    </form>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>

                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">
                            Home
                        </a>

                        <a className="navbar-item">
                            Documentation
                        </a>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                More
                            </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    About
                                </a>
                                <a className="navbar-item">
                                    Jobs
                                </a>
                                <a className="navbar-item">
                                    Contact
                                </a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item">
                                    Report an issue
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>


        </>
    )
};