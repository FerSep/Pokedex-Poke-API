


export function pokeMoves(array){

    const section = document.createElement('section')
    section.classList.add('pokeMoves')
    section.style.display = 'none'
  
    const container = document.createElement('ul')
    array.forEach(element => {
        const moves = document.createElement('li')
        moves.textContent = element.name
        moves.dataset.url = element.url;
        
        container.appendChild(moves)
        
    });

    container.querySelectorAll('li').forEach(element => {
        element.addEventListener('click', async (e) => {
            const url = e.target.dataset.url
        })
    })
 
    section.appendChild(container)
    return section
    
}