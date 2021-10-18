import './HeaderColor.css';
import React from 'react';
import Button from '@mui/material/Button';
import html2canvas from 'html2canvas';

function HeaderColor(props) {

  const colors = ['#264653','#2A9D8F','#E9C46A','#F4A261','#E76F51','#D63230','#AFBBF2']; 
   
  const handleClick = (event) =>{
    props.setSelectedColor(event.target.name);
  }

  const newgame = () =>{
   props.setGridState(props.grid); 
   props.setSelected(false);
   props.img.current.remove();
   // !!!!!!!!!!!!!revisar porque en segunda impresion no jala
}


    function print(){
    props.setSelected(true);
    setTimeout(()=>{html2canvas(props.ss.current).then(canvas => {
      props.img.current.appendChild(canvas)
    });},10)
  }


  return (
    <div className="menu">
      
      <div id="menuRight">
      <Button onClick={newgame} variant="contained" className="st"
      sx={{
          height:60,
          marginRight:4,
          marginLeft:2,
          borderRadius:3,
      }}
      >New Game</Button>
      <Button onClick={print}  variant="contained"
      sx={{
        height:60,
        marginRight:4,
        borderRadius:3,
    }}
      >Print</Button>
      </div>
        <h1>Choose color to start painting:</h1>

      <div id="menuLeft" >
        <ul style={{display: 'flex', listStyle:'none'}}>
            {/* seleccionar un color */}
            {colors.map((color) => {
              const isSelected = color === props.selectedColor;
              const borderStyle = isSelected ? '5px solid #66abf4':'2px solid #FFFFFF'
            
              return (
                  

                  <button 
                      key={color}
                      type="button" 
                      onClick={handleClick} 
                      name={color} 
                      style={{
                          width:'70px', 
                          height: '70px', 
                          border: borderStyle,
                          color: 'white', 
                          background: color,
                      }}
                  >          

                  {/* {color} */}
              
                  </button>
              )
          
              })}
            </ul>
        </div>
    </div>
  );
}

export default HeaderColor;
