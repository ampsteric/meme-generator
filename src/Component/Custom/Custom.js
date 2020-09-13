import React, { useEffect, useState } from "react";
import ParticlesBg from "particles-bg";
import "./custom.css";
import Filesaver from "../Filesaver/filesaver";

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

    const submitHandler = (e) => {
        e.preventDefault();
        const toptext = e.target[0].value;
        const bottomtext = e.target[1].value;
        settop(toptext);
        setbottom(bottomtext);
    };

    return (
        <div className="major">
            <div className="custom">
                <div className="custom-flex">
                    <div>
                        <img
                            id="123456"
                            src={`https://api.memegen.link/images/${param}/${top}/${bottom}.png?height=350&width=300`}
                            alt="fetched"
                        ></img>
                    </div>
                    <div className="edits-container">
                        <form onSubmit={submitHandler}>
                            <input placeholder="text at Top" />
                            <input placeholder="text at Bottom" />
                            <input id="submit" type="submit" value="Preview" />
                        </form>
                    </div>
                </div>

                <Filesaver
                    url={`https://api.memegen.link/images/${param}/${top}/${bottom}.png?height=350&width=300`}
                />
                <ParticlesBg type="circle" bg={true} />
            </div>
        </div>
    );
}
