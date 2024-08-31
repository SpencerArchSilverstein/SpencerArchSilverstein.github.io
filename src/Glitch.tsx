import React from "react";
import "./gif.css";
import anim1 from "./gifs/gif1.gif";
import anim2 from "./gifs/gif2.gif";
import anim3 from "./gifs/gif3.gif";
import anim4 from "./gifs/gif4.gif";
import anim5 from "./gifs/gif5.gif";
import anim6 from "./gifs/gif6.gif";
import anim7 from "./gifs/gif7.gif";
import BlackButton from "./BlackButton";

const anims = [
  [anim1, "https://archie-silverstein-a2.glitch.me", "Animations Project"],
  [anim2, "https://archie-silverstein-a3.glitch.me", "Drawing Project"],
  [anim3, "https://archie-silverstein-a4.glitch.me", "Swarmns Project"],
  [
    anim4,
    "https://archie-silverstein-a5.glitch.me",
    "PARAMETRIC SPACES PROJECT",
  ],
  [anim5, "https://archie-silverstein-a6.glitch.me", "CHATBOT PROJECT"],
  [
    anim6,
    "https://archie-silverstein-a7.glitch.me",
    "DATA VISUALIZATION PROJECT",
  ],
  [anim7, "https://archie-silverstein-a8.glitch.me", "MASKS PROJECT"],
];

function gifCont(index: number) {
  let GIF_INDEX: number = 0;
  let LINK_INDEX: number = 1;
  let BUTTON_TEXT: number = 2;
  return (
    <div className="gif_item">
      <img src={anims[index][GIF_INDEX]} alt="Animate"></img>
      <a
        href={anims[index][LINK_INDEX]}
        target="_blank"
        rel="noopener noreferrer"
      >
        <BlackButton buttonText={anims[index][BUTTON_TEXT]}></BlackButton>
      </a>
    </div>
  );
}

function MyGif() {
  return (
    <div>
      <div className="gif_container">
        {anims.map((_, index) => gifCont(index))}
      </div>
    </div>
  );
}
export default MyGif;
