import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./random.css";
export default function RandomOne(prop) {
    const [memes, setmemes] = useState([]);
    const [imageURL, setimageURL] = useState("");
    let result;
    useEffect(() => {
        async function fetchData() {
            try {
                await Axios.get("https://api.memegen.link/images").then(
                    (res) => {
                        console.log(res.data);
                        setmemes(res.data);
                    }
                );
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    const data = JSON.stringify({ destination: imageURL });
    const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        data,
        url: "http://localhost:8080/api",
    };
    const save = async (e) => {
        e.preventDefault();
        await Axios(options)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log("error is:" + err);
            });
    };
    const caller = (e, url) => {
        setimageURL(url);
        save(e);
    };

    result = memes.map((item) => {
        return (
            <div key={item.url}>
                <img
                    src={item.url}
                    alt="meme"
                    onClick={(e) => caller(e, item.url)}
                />
            </div>
        );
    });
    return (
        <div className="random">
            <div className="head">
                <h1>
                    Just Tap on the meme that suits you to download it in your
                    device!
                </h1>
            </div>

            {result}
        </div>
    );
}
