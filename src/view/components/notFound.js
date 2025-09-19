
export function notFound() {
    const div = document.createElement('div')
    div.classList.add('notFound')

    const h1 = document.createElement('h1')
    h1.textContent = 'Not Found Pokemon'

    div.appendChild(h1)

    return div 
} 