import React, { useState } from "react";
import Image from "./Component/Image/Image";
import Random from "./Component/RandomOnes/RandomOne";
import Custom from "./Component/Custom/Custom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
    let value;
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
                <Route path="/" exact>
                    {res}
                </Route>
                {/* <Route path={`/customize/:id`} exact>
                    <Custom path={`/customize/:id`} />
                </Route> */}
                <Route exact path="/customize/:id" component={Custom} />
            </Router>

            {/* <Random /> */}
            {/* <Router> */}
            {/* <Switch> */}
            {/* <Route path="/" exact> */}
            {/* {res} */}
            {/* </Route> */}
            {/* <Route path="/customize" exact> */}
            {/* <Random name={name} /> */}
            {/* <Custom name={name} /> */}
            {/* </Route> */}
            {/* </Switch> */}
            {/* </Router> */}
        </div>
    );
}

export default App;
