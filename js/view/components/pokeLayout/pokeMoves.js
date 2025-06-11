


export function pokeMoves(array){

    const section = document.createElement('section')
    section.classList.add('pokeMoves')
    section.style.display = 'none'
  
    const h3 = document.createElement('h3')
    h3.textContent = 'Moves: '

    const container = document.createElement('ul')
    section.appendChild(h3)
    array.forEach(element => {
        const moves = document.createElement('li')
        moves.textContent = element.name
        moves.dataset.url = element.url;
        
        container.appendChild(moves)
        
    });

    container.querySelectorAll('li').forEach(element => {
        element.addEventListener('click', async (e) => {
            const url = e.target.dataset.url
            console.log(url)
        })
    })
 
    section.appendChild(container)
    return section
    
}