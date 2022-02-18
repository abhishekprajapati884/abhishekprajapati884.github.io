

burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
});
function seasons(){
    swal("Seasons!", "There are 3 seasons of Daredevil.");
}

function episodes(){
    swal("Episodes!", "There are 13 episodes in each  season of Daredevil.\nTherefore, there are total 39 episodes.");
}

function fn(){
    names=document.getElementById("name").value;
    phones=document.getElementById("phone").value;
    emails=document.getElementById("email").value;
    texts=document.getElementById("text").value;
    yesn=document.getElementById("Yes");
    noy=document.getElementById("No");
    let str;
    if(yesn.checked==true)
    str=yesn.value;
    else if(noy.checked==true) str=noy.value;
    swal({
        title: "Good job!",
        text: "You Form has been submitted!\nYour inputs were:\n"+names+"\n"+phones+"\n"+emails+"\n"+texts+"\n"+str,
        icon: "success",
        button: "Aww yiss!",
      });
      document.contactform.reset();
}
/*
let btnclear = document.querySelector('button');
let inputs = document.querySelectorAll('input');
btnclear.addEventListener('click', ()=>{
    inputs.forEach(input => input.value = '');
})*/

/*
removehl=document.querySelector('.removehl');
removehl.addEventListener('click', ()=>{
    mark.classList.toggle(mark);
})*/