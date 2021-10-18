import React,{useState} from 'react';
import './GridPrint.css';



function GridPrint (props){

    const color = props.selectedColor; // color que proviene del padre
    const [mouseDown, setMouseDown] = useState(false); // estado para saber cuando el mouse esta presionado
    
    const updateGrid = (event) =>{ // actualizar la tabla
      props.setGridState(prevState => { // prevstate contiene el estado anterior antes que se ejecute el setGridSate
          return prevState.map(element => {
            if(element.id === Number(event.target.name))  // se verifica que el numero del elemento corresponda al nombre
               element.color = color // asignacion del color
            return element // en caso contrario se regresa el elemento sin modificaciones
          })
        })    
    }
    
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
    
    return(
        <div id="Grid">
            
            <div id="GridLeft"   >
                {props.divimg}
                <div  ref={props.img}>

                </div>
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