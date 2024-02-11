

function handle(){
word=document.getElementById('word').value;
fetch('https://dummyjson.com/posts/user/'+word)
      .then(response => response.json())
      .then(json => {
        console.log(json);
       let y=document.getElementById('fetch');
       y.innerHTML='';
       let jsonString = JSON.stringify(json, null, 3);
       let jsonElement = document.createElement('pre');
       jsonElement.innerHTML = jsonString;
       y.appendChild(jsonElement);
      })
}