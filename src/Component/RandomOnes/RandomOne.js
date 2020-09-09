// import React, { useEffect, useState } from "react";
// import Axios from "axios";
// import "./random.css";

// const imgflip_link = "https://api.imgflip.com/get_memes";
// const memegen_link = "https://api.memegen.link/images";

// export default function RandomOne(prop) {
//     const [memes, setmemes] = useState([]);
//     let result;
//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const res = await Axios.get(
//                     "https://api.imgflip.com/get_memes"
//                 ).then((res) => {
//                     console.log(res.data.data.memes);
//                     setmemes(res.data.data.memes);
//                 });
//             } catch (err) {
//                 console.log(err);
//             }
//         }
//         fetchData();
//     }, []);
//     result = memes.map((item) => {
//         return (
//             <div>
//                 <img src={item.url} />
//             </div>
//         );
//         // console.log(item.url);
//     });
//     return <div className="random">{result}</div>;
// }

import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./random.css";

// const imgflip_link = "https://api.imgflip.com/get_memes";
// const memegen_link = "https://api.memegen.link/images";

export default function RandomOne(prop) {
    const [memes, setmemes] = useState([]);
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
    result = memes.map((item) => {
        return (
            <div>
                <img src={item.url} alt="meme" />
            </div>
        );
        // console.log(item.url);
    });
    return <div className="random">{result}</div>;
}
