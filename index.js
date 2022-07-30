const root = document.getElementById('root')
const input=  document.getElementById('fake-press')

const animationDuration = 4000 + 500
const randomLeft = ()=> Math.random() * 80 + 10
const rotate = ()=> {
    const neg = Math.random() * 2 > 1 ? -1 : 1  
    const r = Math.random() * 360

    return neg * r
}

const removeFromDom = (node)=>{
    root.removeChild(node)
}
document.addEventListener('keyup',function(event){
    const { key } = event
    const span = document.createElement('span')
    span.innerHTML = key
    span.className = 'keyword'

    span.style.left = `${randomLeft()}%`
    span.style.transform = `rotate(${rotate()}deg)`
    root.appendChild(span)
    
    setTimeout(() => removeFromDom(span), animationDuration);
})

document.addEventListener('click',function(){
    input.click()
})