const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("Joke");

const apikey = "LXvICn6uMBszCyQ0ps4Lrw==tc6YyjfOjfvImGx1";

const option ={
    method:"GET",
    headers:{
        "X-Api-Key": apikey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getjoke(){


    try {
        
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading..."
 const response = await fetch (apiURL, option)  
   const data = await response.json();
   btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    jokeEl.innerText = data[0].joke;
         } catch (error) {
        jokeEl.innerText ="An error happened, try again later"
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
    }
}
    

btnEl.addEventListener("click",getjoke);
