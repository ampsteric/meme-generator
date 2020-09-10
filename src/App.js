import React, { useState } from "react";
import Image from "./Component/Image/Image";
import Random from "./Component/RandomOnes/RandomOne";
import Custom from "./Component/Custom/Custom";
import Upload from "./Component/ImageUpload/ImageUpload";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sky from "react-sky";
import Home from "./Component/Home/Home";
import myImage14 from "./utils/memes/1.jpg";
import myImage from "./utils/memes/2.jpg";
import myImage1 from "./utils/memes/3.jpg";
import myImage2 from "./utils/memes/4.jpg";
import myImage3 from "./utils/memes/5.jpg";
import myImage4 from "./utils/memes/6.jpg";
import myImage5 from "./utils/memes/7.jpg";
import myImage6 from "./utils/memes/8.jpg";
import myImage7 from "./utils/memes/9.jpg";
import myImage8 from "./utils/memes/10.jpg";
import myImage9 from "./utils/memes/11.jpg";
import myImage10 from "./utils/memes/12.jpg";
import myImage11 from "./utils/memes/13.jpg";
import myImage12 from "./utils/memes/14.jpg";
import myImage13 from "./utils/memes/15.jpg";
import cover from "./utils/rocket.png";
import "./App.css";
const names = [
    "buzz",
    "awkward",
    "winter",
    "awkward-awesome",
    "awesome",
    "ackbar",
    "xy",
    "money",
    "badchoice",
    "dwight",
    "philosoraptor",
    "officespace",
    "regret",
    "ermg",
    "aag",
    "ants",
    "winter",
    "center",
    "icanhas",
    "bender",
    "success",
    "bad",
    "boat",
    "afraid",
    "doge",
    "tenguy",
    "crazypills",
    "apcr",
    "atis",
    "older",
    "tried",
    "biw",
    "stew",
    "blb",
    "bihw",
    "cbg",
    "ch",
    "bd",
    "kermit",
    "wonka",
    "cb",
    "gandalf",
    "live",
    "keanu",
    "disastergirl",
    "dsm",
    "trump",
    "drake",
    "facepalm",
    "firsttry",
    "fmr",
    "fbf",
    "fa",
    "fwp",
    "grumpycat",
    "ggg",
    "fry",
    "harold",
    "feelsgood",
    "hipster",
    "mw",
    "noidea",
    "sohappy",
    "hagrid",
    "regret",
    "captain",
    "inigo",
    "iw",
    "happening",
    "joker",
    "ive",
    "leo",
    "lrv",
    "ll",
    "jd",
    "away",
    "morpheus",
    "mb",
    "mini-keanu",
    "mmm",
    "mordor",
    "red",
    "imsorry",
    "spongebob",
    "oprah",
    "oag",
    "jetpack",
    "jw",
    "rollsafe",
    "sad-bush",
    "remembers",
    "sadfrog",
    "sad-clinton",
    "sad-obama",
    "sad-biden",
    "sad-boehner",
    "sarcasticbear",
    "saltbae",
    "patrick",
    "persian",
    "soup-nazi",
    "sb",
    "ss",
    "soa",
    "snek",
    "money",
    "sf",
    "sk",
    "dodgson",
    "sohot",
    "nice",
    "fetch",
    "stop-it",
    "scc",
    "ski",
    "toohigh",
    "aint-got-time",
    "interesting",
    "officespace",
    "bs",
    "fine",
    "sparta",
    "puffin",
    "yodawg",
    "ugandanknuck",
    "gears",
    "yallgot",
    "yuno",
    "whatyear",
    "elf",
];
// const custom_link =
//     "https://api.memegen.link/images/custom/_/my_background.png?background=http://www.gstatic.com/webp/gallery/1.png";

// const link =
//     "https://memegen.link/crazypills/your_text/goes_here.jpg?preview=true&watermark=none&share=true";
//     const down_link = 'https://memegen.link/stew/_/baby,_you've_got_a_stew_going!.jpg?preview=true&watermark=none&share=true';

function App() {
    const [name, setname] = useState();
    const res = names.map((item) => {
        return (
            <Image
                name={item}
                top={"Your Text"}
                down={"Goes Here.."}
                click={setname}
            />
        );
    });
    return (
        <div className="App">
            <Router>
                <Route path="/mywords" exact>
                    {res}
                </Route>
                <Route path="/home" exact>
                    <Home />
                </Route>
                <Route path="/latest" exact>
                    <Random />{" "}
                </Route>
                <Route path="/customBackground" exact>
                    <Upload />
                </Route>

                <Route exact path="/customize/:id" component={Custom} />
                <Route path="/" exact>
                    <Sky
                        images={{
                            0: myImage1,
                            1: myImage,
                            2: myImage2,
                            3: myImage4,
                            4: myImage5,
                            5: myImage6,
                            6: myImage7,
                            7: myImage8,
                            8: myImage9,
                            9: myImage10,
                            10: myImage11,
                            11: myImage12,
                            12: myImage13,
                            13: myImage14,
                            14: myImage3,
                        }}
                        how={130}
                        time={40}
                        size={"100px"}
                        background={"#C3AED6"}
                    />
                    <div className="modal1">
                        <div>
                            <p>Welcome to MEMErchandise.</p>
                            <a
                                class="waves-effect waves-light btn-large"
                                href="/home"
                            >
                                <i class="material-icons right">
                                    arrow_forward
                                </i>
                                Get Started
                            </a>
                        </div>
                        <div>
                            <img src={cover} alt="cover" />
                        </div>
                    </div>
                </Route>
            </Router>{" "}
        </div>
    );
}

export default App;
