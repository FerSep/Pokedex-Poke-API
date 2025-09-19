import { getAll, getType , getDetails, getRegion, changeDiv} from "./main.js";

const selectGen = document.getElementById("selectGen")
selectGen.addEventListener("change", async (e) => {
    const selectedValue = e.target.value;
    await getAll(selectedValue);
    
    resetSelect(e.target)
});

const selectType = document.getElementById("selectType")
selectType.addEventListener("change", async (e) => {
    const selectedValue = e.target.value;

    await getType(selectedValue);
    resetSelect(e.target)

});

const selectRegion = document.getElementById("selectRegion")
selectRegion.addEventListener("change", async (e) => {
    const selectedValue = e.target.value;
    
    await getRegion(selectedValue);
    resetSelect(e.target)
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
    li.addEventListener('click', async (e)=>{

        // cargar una card de move
        console.log(e.target.dataset.url)
    })
})
}


document.getElementById('btnSearch').addEventListener('click', async () => {
    let searchInput = document.getElementById('search').value;

    if(!searchInput){
        alert("ingrese un nombre")
    }

    await getDetails(searchInput.toLowerCase())
    changeDiv()
})

function resetSelect(e){
    const allSelects = document.querySelectorAll("select");
    allSelects.forEach(select => {
        if (select !== e) {
            select.selectedIndex = 0;
        }
    });
}