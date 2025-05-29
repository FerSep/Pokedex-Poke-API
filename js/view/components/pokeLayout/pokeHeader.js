


export function pokeHeader(index, name, url){

    const article = document.createElement('article')
    article.classList.add('pokeHeader')
  

    const span = document.createElement('span')
    span.textContent = index
    

    const img = document.createElement('img')
    img.src = url
    img.alt = name

    const h1 = document.createElement('h1')
    h1.textContent = name

    article.appendChild(span)
    article.appendChild(img)
    article.appendChild(h1)
    
    return article
}