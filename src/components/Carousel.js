import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [count,Setcount]=useState(0)

    const back=()=>{
        if(count===0){
            Setcount(2)
        }
        else{
            Setcount(count-1)
        }
    }
    const front=()=>{
        if(count===2){
            Setcount(count*0)
        }
        else{
            Setcount(count+1)
        }
    }
    return(
        <div>
            <div className="container">
                <ArrowBackIosIcon onClick={back} className="arrowback"/>
                    <div className="imgCard">
                        <h2>{images[count].title}</h2>
                        <h2>{images[count].subtitle}</h2>
                        <img src={images[count].img} alt="" />
                    </div>
                <ArrowForwardIosIcon onClick={front} className="arrowfront"/>
            </div>
        </div>
    )
}

export default Carousel;