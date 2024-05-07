import React from "react"
import './gif.css'
import anim1 from './gifs/gif1.gif'
import anim2 from './gifs/gif2.gif'
import anim3 from './gifs/gif3.gif'
import anim4 from './gifs/gif4.gif'
import anim5 from './gifs/gif5.gif'
import anim6 from './gifs/gif6.gif'
import anim7 from './gifs/gif7.gif'



function gifList(){
    return [[anim1,"https://archie-silverstein-a2.glitch.me","ANIMATIONS PROJECT"],
            [anim2,"https://archie-silverstein-a3.glitch.me","DRAWING PROJECT"],
            [anim3,"https://archie-silverstein-a4.glitch.me","SWARMS PROJECT"],
            [anim4,"https://archie-silverstein-a5.glitch.me","PARAMETRIC SPACES PROJECT"],
            [anim5,"https://archie-silverstein-a6.glitch.me","CHATBOT PROJECT"],
            [anim6,"https://archie-silverstein-a7.glitch.me","DATA VISUALIZATION PROJECT"],
            [anim7,"https://archie-silverstein-a8.glitch.me","MASKS PROJECT"]
        ];
}

function gifCont(index:number){
    let GIF_INDEX:number = 0;
    let LINK_INDEX:number = 1;
    let BUTTON_TEXT:number = 2;
    return (
        <div className="gif_item">
            <img src={gifList()[index][GIF_INDEX]} alt="Animate"></img>
            <a href={gifList()[index][LINK_INDEX]}
                target="_blank" 
                rel="noopener noreferrer">
                    <button>{gifList()[index][BUTTON_TEXT]}</button>
            </a>
        </div>
    )
}

function MyGif(){
    return(
        <div>
            <div className="gif_container">
            {gifList().map((_, index) => gifCont(index))} 
            {/*Don't use the stuff inside the list, but for every index in said list, use that number on this 
            function. How did you get it's length? Who cares! SO COOL!!*/}
            </div>
        </div>
    )
}
export default MyGif;