var scoreList= "<ol type='1'>";
console.log(localStorage.key);
for(var i =0;i< localStorage.length;i++){
    scoreList += "<li>" +localStorage.key(i) + " - "+localStorage.getItem(localStorage.key(i))+"</li>";
}
scoreList += "</ol>"
document.getElementById('scoreList').innerHTML= scoreList;

function handleSubmit(){
    var name = document.getElementById('clear');
    console.log("hii");
    localStorage.clear();
    location.reload();
}