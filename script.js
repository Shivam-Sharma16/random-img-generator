var btn=document.querySelector('button')
var body =document.querySelector('body')

var arr=[
    {
        image:'./chutki.png'
    },
    {
        image:'./ben.png'
    },
    {
        image:'./chota.png'
    },
    {
        image:'./doraemon.png'
    },
    {
       image:'./gian.png' 
    },
    {
        image:'./mogli.png'
    },
    {
        image:'./motu.png'
    },
    {
        image:'./nobita.png'
    },
    {
        image:'./oggy.png'
    },
    {
        image:'./shizuka.png'
    }
]


btn.addEventListener('click',function(){

let r=Math.floor(Math.random()*10)
let win=arr[r]

console.log(win);

let x=Math.random()*90

let y=Math.random()*90
let rot=Math.random()*360
   var img=document.createElement("img")
   img.setAttribute('src',`${win.image}`)
  
 img.style.height='100px'
 img.style.position='absolute'
 img.style.left=x+'%'
 img.style.top=y+'%'
 img.style.rotate=rot+'deg'

    body.appendChild(img)
})