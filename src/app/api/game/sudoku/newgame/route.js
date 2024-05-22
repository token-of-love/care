import { NextResponse } from "next/server";


export const GET = async (request) => {
  try {
    let row=9;
    let column=9;
    let arr=[
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0]
    ];
    
    let arr1=[1,2,3,4,5,6,7,8,9]; 
    let flag=Math.floor((Math.random()*100)%2);
    //console.log(flag);
    shuffle(arr1);
    let box=0;
    for(let i=0; i<row; i++){
        
        for(let j=0; j<column;j++){
            arr[Math.floor(j/3)+3*Math.floor(box%3)][j%3+3*Math.floor(box/3)]=arr1[j];
        }
        if(flag===0){
            shiftRight(arr1);
        }
        else{
            shiftLeft(arr1);
        }
        box++;
    }
    console.table(arr);
    


    function shiftRight(arrr){
        let temp;
        let temp1;
        for(let i=0; i<arrr.length;i++){
            temp1=arrr[(i+1)%arrr.length];
            if(i===0){
                temp=arrr[i+1];
                arrr[i+1]=arrr[i];

            }else{
            arrr[(i+1)%arrr.length]=temp;
            temp=temp1;
            }
        }
    }
    function shiftLeft(arrr){
        let temp=arrr[0];
        
        for(let i=0; i<arrr.length;i++){
            if((i+1)===arrr.length){
                arrr[i]=temp;
            }else{
            arrr[i]=arrr[i+1];
            }
        }
    }

    function shuffle(array) {
        let currentIndex = array.length;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      }
    
    
    
    
      return NextResponse.json(arr, { status: 200 });
    
      } catch (error) {
    console.log("Error:", error);
    return NextResponse.error(error, { status: 500 });
  }
};
