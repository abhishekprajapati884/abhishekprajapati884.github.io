const paragraph1 = document.getElementById("paragraph1");
const paragraph2 = document.getElementById("paragraph2");
const paragraph3 = document.getElementById("paragraph3");
const paragraph4 = document.getElementById("paragraph4");
const paragraph5 = document.getElementById("paragraph5");
const paragraph6 = document.getElementById("paragraph6");
const paragraph7 = document.getElementById("paragraph7");
const paragraph8 = document.getElementById("paragraph8");
const paragraph9 = document.getElementById("paragraph9");
const paragraph10 = document.getElementById("paragraph10");
const paragraph11= document.getElementById("paragraph11");
const paragraph12 = document.getElementById("paragraph12");
const paragraph13 = document.getElementById("paragraph13");
const paragraph14 = document.getElementById("paragraph14");
const paragraph15 = document.getElementById("paragraph15");
const special = /[\\[{().+*?|^$]/g; 

function search(){
    
    let texttosearch = document.getElementById("search").value;
    if(texttosearch !== ""){
        if(special.test(texttosearch))
        texttosearch = texttosearch.replace(special, "\\$&");
        let regExp= new RegExp(texttosearch, "gi");
        paragraph1.innerHTML = (paragraph1.textContent).replace(regExp, "<mark>$&</mark>");
        paragraph2.innerHTML = (paragraph2.textContent).replace(regExp, "<mark>$&</mark>");
        paragraph3.innerHTML = (paragraph3.textContent).replace(regExp, "<mark>$&</mark>");
        paragraph4.innerHTML = (paragraph4.textContent).replace(regExp, "<mark>$&</mark>");
        paragraph5.innerHTML = (paragraph5.textContent).replace(regExp, "<mark>$&</mark>");
        paragraph6.innerHTML = (paragraph6.textContent).replace(regExp, "<mark>$&</mark>");
        paragraph7.innerHTML = (paragraph7.textContent).replace(regExp, "<mark>$&</mark>");
        paragraph8.innerHTML = (paragraph8.textContent).replace(regExp, "<mark>$&</mark>");
        paragraph9.innerHTML = (paragraph9.textContent).replace(regExp, "<mark>$&</mark>");
        paragraph10.innerHTML = (paragraph10.textContent).replace(regExp, "<mark>$&</mark>");
        paragraph11.innerHTML = (paragraph11.textContent).replace(regExp, "<mark>$&</mark>");
        paragraph12.innerHTML = (paragraph12.textContent).replace(regExp, "<mark>$&</mark>");
        paragraph13.innerHTML = (paragraph13.textContent).replace(regExp, "<mark>$&</mark>");
        paragraph14.innerHTML = (paragraph14.textContent).replace(regExp, "<mark>$&</mark>");
        paragraph15.innerHTML = (paragraph15.textContent).replace(regExp, "<mark>$&</mark>");
    }
   
    //else{
      //  alert("No search found..");
    //}
}
/*function removehl(){
    document.getElementsByTagName("mark")[0].style.backgroundColor= "transparent";
}*/