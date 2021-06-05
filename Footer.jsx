import React from "react";

function Footer() {
    var currvear = new Date().getFullYear();

    return (
        <footer>
            <p>Copyright @ {currvear}</p>
        </footer>
    );
}

export default Footer;