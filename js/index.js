import { getAll, getType , getDetails} from "./controller/main.js";

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


document.getElementById("pokelist").addEventListener("click", async (e)=>{
   
    const card = e.target.closest('.card')
    if(!card) return

    console.log(card.dataset.name)
    
    await getDetails(card.dataset.name) 
    
})



function obtenerSeleccionado() {
    const seleccionado = document.querySelector('input[name="nav"]:checked');
    if (seleccionado) {
      console.log("ID seleccionado:", seleccionado.id);
    }
  }