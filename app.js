function data(result, word){
    console.log(result)
}

function fetchApi(word){
    let url = 'https://api.datamuse.com/words?sp=?????'
    fetch(url).then(res => res.json()).then(result => data(result, word))
}