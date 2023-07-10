var arrayList = [];
for(var i =0;i< localStorage.length;i++){
    arrayList.push({name: localStorage.key(i),score:localStorage.getItem(localStorage.key(i))})
}
arrayList.sort((a,b) => b.score - a.score);

var scoreList= "<ol type='1'>";
for(var i =0;i< arrayList.length;i++){
    scoreList += "<li>" +arrayList[i].name + " - "+arrayList[i].score+"</li>";
}
scoreList += "</ol>"


document.getElementById('scoreList').innerHTML= scoreList;

function handleSubmit(){
    var name = document.getElementById('clear');
    localStorage.clear();
    location.reload();
}