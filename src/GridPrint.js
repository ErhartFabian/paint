import React,{useState} from 'react';
import './GridPrint.css';
import Button from '@mui/material/Button';


function GridPrint (props){

    const color = props.selectedColor; // color que proviene del padre
    const [mouseDown, setMouseDown] = useState(false); // estado para saber cuando el mouse esta presionado
    
    const updateGrid = (event) =>{ // actualizar la tabla
      props.setGridState(
        props.gridState.map(element => {
          if(element.id === Number(event.target.name))  // se verifica que el numero del elemento corresponda al nombre
              element.color = color // asignacion del color
          return element // en caso contrario se regresa el elemento sin modificaciones
          }
        )
      )    
    }
//comentariio
    const  handleHover = (event) =>{
        if(!mouseDown) return 
        updateGrid(event)
    } 
    
    const handleMouseDown = (event) => {
      setMouseDown(true);
      updateGrid(event);
    }
    
    const handleMouseUp = () => {
      setMouseDown(false);
      
    }
    let arrayestrella = [5,6,14,15,16,17,23,24,25,26,27,28,32,33,34,35,36,
                    37,38,39,41,42,43,44,45,46,47,48,49,50,51,52,53,
                    54,55,56,57,58,59,60,62,63,64,65,66,67,68,69,73,
                    74,75,76,77,78,84,85,86,87,95,96];

    let arraycaritafeliz = [22,23,28,29,32,33,38,39,52,59,63,64,65,66,67,68];

    let arraycirculo = [14,15,16,17,23,28,32,39,42,49,52,59,63,68,74,75,76,77];

    function circulo(event){
      props.setGridState(
        props.gridState.map(element => {
            if(arraycirculo.includes(element.id))  // se verifica que el numero del elemento corresponda al nombre
               element.color = "#E76F51" // asignacion del color
            else{
              element.color = "#AFBBF2";
            }
            return element
          })
        )
    }

    function estrella(event){
      props.setGridState(
        props.gridState.map(element => {
            if(arrayestrella.includes(element.id))  // se verifica que el numero del elemento corresponda al nombre
               element.color = "#E9C46A" // asignacion del color
            else{
              element.color = "#264653";
            }
            return element
          })
        )
    }

    function caritafeliz(event){
        props.setGridState(
          props.gridState.map(element => {
              if(arraycaritafeliz.includes(element.id))  // se verifica que el numero del elemento corresponda al nombre
                 element.color = "#2A9D8F" // asignacion del color
              else{
                element.color = "#F4A261";
              }
              return element
            })
          )
    }   

    
    return(
        <div id="Grid">
            
            <div id="GridLeft"   > 
                <div  ref={props.img}>
                </div>
            </div>

            <div id="plantillas">
            <Button onClick={caritafeliz} variant="contained" className="st"
               sx={{
                height:60,
                margin: "20px",
                borderRadius:3,
                backgroundColor: "green"  
              }
            }>Carita Feliz </Button> 
            <Button onClick={estrella} variant="contained" className="st"
               sx={{
                height:60,
                margin: "20px",
                borderRadius:3,
                backgroundColor: "orange"  
              }
            }>Estrella </Button>
            <Button onClick={circulo} variant="contained" className="st"
               sx={{
                height:60,
                margin: "20px",
                borderRadius:3,
                backgroundColor: "light blue"  
              }
            }>Circulo </Button>

            </div>    


            <div id="GridRight" ref={props.ss} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onClick={updateGrid}  >
                    {props.gridState.map((element) => // pinta los 100 cuadros.         
                        {   
                            return (
                            <button
                            style={{background: element.color,
                                border: props.selected ?  "0": "1px solid black"}}
                            disabled={props.selected}
                            className="square" 
                            name={element.id} 
                            key={element.id}
                            onMouseOver={handleHover} 
                            
                            >      
                                          
                            </button>
                        )}
                    )}    
            </div>
        </div>
        
        )
    }

export default GridPrint;