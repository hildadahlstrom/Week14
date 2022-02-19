import React from 'react'
import {TiStarOutline} from 'react-icons/ti';
import {TiStarFullOutline} from 'react-icons/ti';
import {TiStarHalfOutline} from 'react-icons/ti';

let index = 0;
const emptyStar = <TiStarOutline />;
const fullStar = <TiStarFullOutline />;
const halfStar = <TiStarHalfOutline />;

function makeStarArray(num){
    let arr = [];
    let half = false;
    for(let i = 1; i <= 5; i++){
        if( i <= num){//number is less than or equal to i
            arr[i] = <TiStarFullOutline key ={`star-${i}-${Math.random()*1000}`}/>
        }
        else{//number is greater than i
            if((num*10)%10 >=5 && !half){
                arr[i] = <TiStarHalfOutline key = {`star-${i}-${Math.random()*1000}`}/>;
                half = true;

            }
            else{
                arr[i] = <TiStarOutline key = {`star-${i}-${Math.random()*1000}`}/>;
            }
        }
    }
    return arr;
}

function Stars({number}) {
    
    const array = makeStarArray(number);

    return (
      <span>
          {array}
      </span>
    )
}
export default Stars