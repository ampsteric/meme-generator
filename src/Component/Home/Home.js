import React from "react";
import "./Home.css";
import { ReactComponent as Divider } from "../../utils/darkcloud.svg";
import { ReactComponent as Divider1 } from "../../utils/wavedown.svg";
import { ReactComponent as Divider2 } from "../../utils/Blackwavedown.svg";
import { ReactComponent as Divider3 } from "../../utils/Bluewave.svg";
import { ReactComponent as ReactIcon } from "../../utils/speak.svg";
import { ReactComponent as Find } from "../../utils/welcome.svg";
import { ReactComponent as Laying } from "../../utils/laying.svg";
import mockup from "../../utils/mockup.png";
import Icon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";

export default function Home() {
    return (
        <div className="home">
            <div className="protest">
                <div className="left">
                    <Find />{" "}
                </div>{" "}
                <div>
                    <p>
                        Welcome Home<span> Memers</span>!
                    </p>
                    <a
                        id="yellow"
                        class="waves-effect waves-light btn-large"
                        href="/latest"
                    >
                        <i class="material-icons right">arrow_forward</i>
                        Get Latest memes
                    </a>
                </div>
            </div>
            <Divider />
            <div className="speak">
                <div className="left">
                    <ReactIcon />{" "}
                </div>{" "}
                <div>
                    <p>
                        <span>Memes</span> help you <span> speak </span>for
                        yourself<span>.</span>
                    </p>
                    <a
                        id="yellow"
                        class="waves-effect waves-light btn-large"
                        href="/mywords"
                    >
                        <i class="material-icons right">arrow_forward</i>
                        Give them Your Words
                    </a>
                </div>
            </div>
            <div className="speak"> </div>
            <div className="position">
                {" "}
                <Divider1 />
            </div>
            <div className="mockup">
                <div className="display">
                    <img src={mockup} />{" "}
                </div>{" "}
                <div>
                    <p>
                        We are<span id="color"> Proud</span> to
                        <span id="color"> lead </span>the
                        <span id="color"> Community </span>when it comes to
                        merchandising
                        <span id="color"> memes.</span>
                    </p>
                </div>
            </div>
            <div className="position1">
                {" "}
                <Divider2 />
            </div>{" "}
            <div className="aboveall">
                <div className="make">
                    <div className="left1">
                        <Laying />{" "}
                    </div>
                    <div>
                        <p>
                            <span id="color1">Tired</span> of scrolling through
                            same
                            <span id="color1"> old school </span>memes
                            <span id="color1">?</span>
                        </p>
                        <a
                            id="pink"
                            class="waves-effect waves-light btn-large"
                            href="/customBackground"
                        >
                            <i class="material-icons right">arrow_forward</i>
                            Make your Own
                        </a>
                    </div>
                </div>
                <div className="position1">
                    {" "}
                    <Divider3 />
                </div>
            </div>
            <footer class="page-footer">
                <div class="container">
                    <div class="row">
                        <div class="col l6 s12">
                            <p class="white-text">MEMERCHANDISE.</p>
                            <p class="grey-text text-lighten-4">
                                We Promise to stay commited to providing are
                                customers with the best experience when it comes
                                to <span id="dark-pink">memes</span>.
                            </p>
                        </div>
                        <div class="col l4 offset-l2 s12" id="links">
                            <h5 class="white-text">
                                Don't be shy! Lets Connect.
                            </h5>
                            <ul>
                                <li>
                                    <a
                                        class="grey-text text-lighten-3"
                                        href="#!"
                                    >
                                        <Icon></Icon>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="grey-text text-lighten-3"
                                        href="#!"
                                    >
                                        <FacebookIcon />{" "}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="grey-text text-lighten-3"
                                        href="#!"
                                    >
                                        <InstagramIcon />{" "}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="grey-text text-lighten-3"
                                        href="#!"
                                    >
                                        <TelegramIcon />{" "}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        Made with 🩸 and 💦 by Shashwat Mishra.
                    </div>
                </div>
            </footer>
        </div>
    );
}
