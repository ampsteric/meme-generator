import React, { useRef } from "react";
import axios from "axios";
// const url =
//     "https://api.memegen.link/images/happening/yomain/ohhbhaiii.png?height=350&width=300";

function Filesaver(props) {
    const data = JSON.stringify({ destination: props.url });
    const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        data,
        url: "http://localhost:8080/api",
    };
    const save = async (e) => {
        e.preventDefault();
        await axios(options)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log("error is:" + err);
            });
    };
    return (
        <div id="my-node">
            <a class="waves-effect waves-light btn" onClickk={(e) => save(e)}>
                <i class="material-icons right">file_download</i>button
            </a>

            {/* <button onClick={(e) => save(e)}>Download</button> */}
        </div>
    );
}

export default Filesaver;
