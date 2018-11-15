
//Declaro todas la variables
let inputSearch = document.getElementById('search');
let meaning = document.getElementById('meaning');
let examplesList = document.getElementById('examplesList');
let SynonymList = document.getElementById('SynonymList');
let buttonSearch = document.getElementById('buttonSearch');
let examples = document.getElementById('examples');
let synonymous = document.getElementById('synonymous');

//Request
function hiRequest(event){
    let response = event.target.response;
    // response.results
    meaning.innerHTML = "";
    for(let i of response.results){
        meaning.innerHTML += `<li>${i.definition}</li>`;
    }
    synonymous.addEventListener('click', ()=>{
        SynonymList.innerHTML = "";
        for(let i of response.results){
            if(i.synonyms){
                SynonymList.innerHTML += `<li>${i.synonyms}</li>`; 
            }
            
        }
    });
    console.clear();
    console.log(response);
}
function hiExamples(event){
    let response = event.target.response;
    // response.results
    examplesList.innerHTML = "";
    for(let i of response.examples){
        examplesList.innerHTML += `<li>${i}</li>`;
    }
    console.clear();
    console.log(response);
}
function giveMeResponse(url, bool = false){
    if(bool == false){
        const request = new XMLHttpRequest();
        request.addEventListener('load', hiRequest);
        request.open('GET', url);
        request.setRequestHeader('X-Mashape-Key', 'yXxXKmLJptmshzPhorPTinLPPr3qp1KBrwGjsnoUUtvgRX0RKt');
        request.setRequestHeader("X-Mashape-Host", "wordsapiv1.p.rapidapi.com");
        request.responseType = 'json';
        request.send(); 
    }else if(bool == true){
        const request = new XMLHttpRequest();
        request.addEventListener('load', hiExamples);
        request.open('GET', url);
        request.setRequestHeader('X-Mashape-Key', 'yXxXKmLJptmshzPhorPTinLPPr3qp1KBrwGjsnoUUtvgRX0RKt');
        request.setRequestHeader("X-Mashape-Host", "wordsapiv1.p.rapidapi.com");
        request.responseType = 'json';
        request.send(); 
    }
    
}
search.addEventListener('change', ()=>{
    examplesList.innerHTML = "";
    SynonymList.innerHTML = "";
    giveMeResponse('https://wordsapiv1.p.mashape.com/words/'+inputSearch.value);
});
examples.addEventListener('click', ()=>{
    giveMeResponse('https://wordsapiv1.p.mashape.com/words/'+inputSearch.value+'/examples', true);
});


