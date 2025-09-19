export function card(name, index){
    const div = document.createElement('div')
    div.classList.add('card')
    div.dataset.name = name

    const span = document.createElement('span')
    span.textContent = index

    const h2 = document.createElement('h2')
    h2.textContent = name

    div.appendChild(span)
    div.appendChild(h2)
    
    return div
}