import { getAll, getType , getDetails, getRegion, changeDiv} from "./main.js";

const selectGen = document.getElementById("selectGen")
selectGen.addEventListener("change", async (e) => {
    const selectedValue = e.target.value;
    await getAll(selectedValue);
});

const selectType = document.getElementById("selectType")
selectType.addEventListener("change", async (e) => {
    const selectedValue = e.target.value;

    await getType(selectedValue);
});

const selectRegion = document.getElementById("selectRegion")
selectRegion.addEventListener("change", async (e) => {
    const selectedValue = e.target.value;
    
    await getRegion(selectedValue);
});


document.getElementById("pokelist").addEventListener("click", async (e)=>{
    const card = e.target.closest('.card')
    if(!card) return

    await getDetails(card.dataset.name)
    
    changeDiv() 
})

let moves = document.querySelector('.pokeMoves')
if(moves){
    moves.querySelectorAll('li').forEach(li =>{
        console.log('li')
    li.addEventListener('click', async (e)=>{
        
        console.log(e.target.dataset.url)
    })
})
}


document.getElementById('btnSearch').addEventListener('click', async () => {
    let searchInput = document.getElementById('search').value;
    await getDetails(searchInput.toLowerCase())
    changeDiv()
})