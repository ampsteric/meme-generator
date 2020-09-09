import React, { useEffect, useState } from "react";
import "./custom.css";
export default function Custom(props) {
    const [param, setparam] = useState("");
    const [top, settop] = useState("Your Text");
    const [bottom, setbottom] = useState("Goes Here..");
    useEffect(() => {
        async function check() {
            setparam(await props.match.params.id.substring(1));
        }
        check();
        console.log(props.match.params.id.substring(1));
    }, []);

    return (
        <div className="custom">
            <div>
                <img
                    src={`https://api.memegen.link/images/${param}/${top}/${bottom}.png?height=350&width=300`}
                    // {`https://api.memegen.link/images/${prop.name}/${prop.top}/${prop.down}.png?height=350&width=300`}
                />
            </div>
            <div className="edits-container">
                <form>
                    <input placeholder="text at Top" />
                    <input placeholder="text at Bottom" />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
}
