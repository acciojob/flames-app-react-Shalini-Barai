import React ,{useState}from 'react';

const relationMap={
    0:"Siblings",
    1:"Friends",
    2:"Love",
    3:"Affection",
    4:"Marriage",
    5:"Enemy"
};
//to store
const App=()=>{
    const [str1,setStr1]=useState("");
    const [str2,setStr2]=useState("");
    const [isError,setIsError]=useState(false);
    const [relation,setRelation]=useState("");

    //Functions
const handleOnChange1=(event)=>{
             setStr1(event.target.value);
    }
    const handleOnChange2=(event)=>{
        setStr1(event.target.value);
}
const handleCalculate=()=>{
   if(!str1 || !str2){
    setIsError(true);
   }
   let newStr1="";
   let newStr2="";

   for(let i=0;i<str1.length;i++){//HOLA AMI
    if(str2.includes(str1[i])){
   newStr2=str2.replace(str1[i],"");//MI
      break;
   }
      newStr1=newStr1+str1[i];//HOL
      
}
 const relationIndex=(newStr1.length+newStr2.length)%6;
 setRelation(relationMap[relationIndex]);
}

const handleClear=()=>{
    setStr1("");
    setStr2("");
    setRelation("");
}
//JSX
    return(
        <div>
            <input type="text" data-testid="input1" value={str1} onChange={handleOnChange1}/><br/>
            <input type="text" data-testid="input2" value={str2} onChange={handleOnChange2}/><br/>
            <button data-testid="calculate_relationship" onClick={handleCalculate}>Calculate</button>
            <button data-testid="clear"onClick={handleClear}>Clear</button>
            <h3 data-testid="answer">{isError ? "Please Enter valid input" : relation}</h3>
        </div>
    )
    
}
export default App;