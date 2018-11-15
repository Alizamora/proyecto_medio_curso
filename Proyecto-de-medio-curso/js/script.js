function hiRequest(event){
    let response = event.target.response;
    console.clear();
    console.log(response);
}
function giveMeResponse(url){
    const request = new XMLHttpRequest();
    request.addEventListener('load', hiRequest);
    request.open('GET', url);
    request.setRequestHeader('X-Mashape-Key', 'yXxXKmLJptmshzPhorPTinLPPr3qp1KBrwGjsnoUUtvgRX0RKt');
    request.setRequestHeader("X-Mashape-Host", "wordsapiv1.p.rapidapi.com");
    request.responseType = 'json';
    request.send();
}
giveMeResponse('https://wordsapiv1.p.mashape.com/words/');

document.getElementById('search');



