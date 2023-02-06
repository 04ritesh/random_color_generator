const c=()=>{
    const rn=Math.floor(Math.random() * 16777215);
    const rcc="#"+rn.toString(16);
    document.body.style.backgroundColor=rcc;
}

document.getElementById("btn").addEventListener("click",c);