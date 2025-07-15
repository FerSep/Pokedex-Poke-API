
export function notFound() {
    const div = document.createElement('div')
    div.classList.add('notFound')

    const h1 = document.createElement('h1')
    h1.textContent = '404'

    div.appendChild(h1)

    return div 
} 