

function handle(){
word=document.getElementById('word').value;
fetch('https://dummyjson.com/posts/search?'+'q='+word)
      .then(response => response.json())
      .then(json => {
        console.log(json);
       let y=document.getElementById('fetch');
       let u=json.limit;
       y.innerHTML='';
       for(i=0;i<u;i++){
        let titlei=document.createElement('h');
        let titler=json.posts[i].title;
        let r=json.posts[i].body;
        let c=document.createElement('div');
        titlei.innerHTML='<b>'+titler+'<b>';
        c.innerHTML=r;
        y.appendChild(titlei);
        y.appendChild(c);
      }
       
       
      })
}