const togglenav = document.querySelector('.btn-style');
let data = document.querySelectorAll('.nav-items');


togglenav.addEventListener('click' , ()=>{
    document.body.classList.toggle('nav-open')
    console.log("sidebar oprn");
})


data.forEach(linkss =>{
    linkss.addEventListener('click' ,()=>{
        document.body.classList.remove('nav-open')
    })
})
