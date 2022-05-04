import React,{useState ,useEffect} from 'react'
import '../IfoodCounter/ifoodConter.css'

export default function IfoodCounter() {
     const [value, setValue] = useState(1)
     const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active")

     useEffect(()=>{
       /*  document.getElementById("moeda").innerHTML = 2.00 * value; */
      /*  alert('Atenção você não pde diminuir mais intens') */
      alert(`O estilo do botao atuel é: ${buttonStyle}`)
     },[buttonStyle])

  /* podemos utilizar assim as funcoes */

     function down(){
        if (value <=1){
           setButtonStyle("counter-button-minus-desactive")
        }


        if(value > 0){
            setValue(value-1)
        }
     }

     function up(){
         setValue(value+1)
         setButtonStyle("counter-button-minus-active")
     }


  return (
    <div className='countex-wrapper'>
        <button className='counter-button-plus-active'
         /*  onClick={()=> setValue(value + 1)} */ 
         onClick={up}>
            +
        </button>
        <p>{value}</p>
        <button className={buttonStyle}
          /*  onClick={()=> setValue(value - 1)} */
          onClick={down}> 
            -
        </button>

       <button id='moeda'>22,00</button>
    </div>
  )
}
