const togglenav = document.querySelector('.btn-style');
let data = document.querySelectorAll('.navs-link');

togglenav.addEventListener('click' , ()=>{
    document.body.classList.toggle('nav-open')
    console.log("sidebar oprn")
})


data.forEach(link =>{
    link.addEventListener('click' ,()=>{
        document.body.classList.remove('nav-open');
        console.log("link")
    })
})