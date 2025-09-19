


export function pokeHeader(index, name, url){

    const article = document.createElement('article')
    article.classList.add('pokeHeader')
  
    const div = document.createElement('div')
    
    const span = document.createElement('span')
    
    span.textContent = index.toString().padStart(3,'0')
    

    const img = document.createElement('img')
    img.src = url
    img.alt = name

    const h1 = document.createElement('h1')
    h1.textContent = name.charAt(0).toUpperCase() + name.slice(1)

    div.appendChild(span)
    div.appendChild(h1)
    article.appendChild(div)
    article.appendChild(img)

    return article
}