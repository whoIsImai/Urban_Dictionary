let searchbox = document.querySelector(".textbox");
const info = document.querySelector(".info");
const errorMsg = document.querySelector(".error");
const button = document.querySelector('.search');

require('dotenv').config();

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key':process.env.APIKEY,
    'X-RapidAPI-Host':process.env.HOST,
    "content-type": "application/json;charset=utf-8"
  }
};
button.addEventListener('click',async function GetDefinition(){
 

  try {
    let Search_term =searchbox.value;
    const url = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${Search_term}`;
    const response = await fetch(url, options);
      if(!response.ok){
          throw new Error("Could not get definition");
      }
    const result = await response.json();
  
    //I Want Only Two 
    const term1 = result.list[0];
    const term2 = result.list[1];
  
      info.innerHTML=`<div style = "
        width: fit-content;
        height: fit-content;
        margin: 0.5em;
        border: 1px solid black;
      ">
        <h3>Definition of ${term1.word}</h3>
        <p>${term1.definition}</p>
        <h3>Example of ${term1.word}</h3>
        <p>${term1.example}</p>
      </div>
      
      <div style = "
      width: fit-content;
      height: fit-content;
      margin: 0.5em;
      padding-left:0.3em;
      border: 1px solid black;
    ">
      <h3>Definition of ${term2.word}</h3>
      <p>${term2.definition}</p>
      <h3>Example of ${term2.word}</h3>
      <p>${term2.example}</p>
      </div>
      `;
      
  } catch (error) {
    errorMsg.innerHTML = error;
  }
  } )

