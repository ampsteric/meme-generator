import React from "react";
import { Swing, Jello } from "react-motions";
import { ReactComponent as Blob } from "../utils/blob.svg";

const ComponentWithShake = () => (
    <Jello duration={10} infinite>
        <Blob />{" "}
    </Jello>
);

export default ComponentWithShake;
