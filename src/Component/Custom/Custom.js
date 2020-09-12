import React, { useEffect, useState } from "react";
import ParticlesBg from "particles-bg";
import "./custom.css";
export default function Custom(props) {
    const [param, setparam] = useState("");
    const [top, settop] = useState("Your Text");
    const [bottom, setbottom] = useState("Goes Here..");
    // const [name, setname] = useState("React");
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

    // const download = (e) => {
    //     console.log(e.target.href);
    //     fetch(e.target.href, {
    //         method: "GET",
    //         headers: {},
    //     })
    //         .then((response) => {
    //             response.arrayBuffer().then(function (buffer) {
    //                 const url = window.URL.createObjectURL(new Blob([buffer]));
    //                 const link = document.createElement("a");
    //                 link.href = url;
    //                 link.setAttribute("download", "image.png"); //or any other extension
    //                 document.body.appendChild(link);
    //                 link.click();
    //             });
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };
    const download = () => {
        var element = document.createElement("a");
        var file = new Blob(
            [
                `https://api.memegen.link/images/${param}/${top}/${bottom}.png?height=350&width=300`,
            ],
            { type: "image/PNG" }
        );
        element.href = URL.createObjectURL(file);
        element.download = "image.PNG";
        element.click();
    };
    return (
        <div className="major">
            <div className="custom">
                <div>
                    <img
                        id="123456"
                        src={`https://api.memegen.link/images/${param}/${top}/${bottom}.png?height=350&width=300`}
                        alt="fetched"
                    >
                        {/* {`https://api.memegen.link/images/${prop.name}/${prop.top}/${prop.down}.png?height=350&width=300`}{" "} */}
                    </img>
                </div>
                <div className="edits-container">
                    <form onSubmit={submitHandler}>
                        <input placeholder="text at Top" />
                        <input placeholder="text at Bottom" />
                        <input type="submit" />
                    </form>
                    <a
                        href={`https://api.memegen.link/images/${param}/${top}/${bottom}.png?height=350&width=300`}
                        // target="_blank"
                        download
                        // ="myfile.jpg"
                        // onClick={(e) => downloadQR()}
                    >
                        <button>download</button>
                    </a>
                    <a
                        href={`https://api.memegen.link/images/${param}/${top}/${bottom}.png?height=350&width=300`}
                        download
                        onClick={() => download()}
                    >
                        <i className="fa fa-download" />
                        download
                    </a>
                </div>
                <ParticlesBg type="circle" bg={true} />
            </div>
        </div>
    );
}
