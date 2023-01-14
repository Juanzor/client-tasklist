import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="bg-neutral-800 flex justify-between px-16 py-5">
            <Link to="/">
                <h1 className="text-white font-bold">React Mysql</h1>
            </Link>

            <ul className="flex gap-7">
                <li>
                    <Link className="bg-slate-200 px-3 py-2" to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="bg-slate-200 px-3 py-2" to="/new">
                        Create a task
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
