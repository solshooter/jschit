function bgChange(){
    let para = document.getElementById('para');
    if(para.style.backgroundColor != "red")
    para.style.backgroundColor = "red"
    else 
    para.style.backgroundColor = "white"

    if(para.style.backgroundColor != "red")
    para.style.color="Blue"
    else 
    para.style.color="black"
}
function change(){
    let x = Math.floor((Math.random() * 9) + 1);
    let y = 'imgs/'+ x + '.jpg'
    let imgs = document.getElementById('imgs').src=y;
}