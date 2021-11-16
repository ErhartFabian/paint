import './HeaderColor.css';
import React,{useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import html2canvas from 'html2canvas';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


function HeaderColor(props) {

  var [colors,setColors] = useState([]);

  var [state,setState]=useState("START"); 
  
    // si color no esta seleccionado mandar mensaje de seleccionar color
    useEffect(() => {
      setState("LOADING");
      setTimeout(() => {} , 1000);
      console.log(state);
      axios.get(`https://www.colr.org/json/colors/random/7`)   
      .then(res => {
      var newcolors =[];
            //añadir los colores a un array
      for(var i = 0; i < res.data.colors.length; i++){
        newcolors.push("#"+ res.data.colors[i].hex);
      }
      setColors(newcolors);
      setState("END");
      })
      .catch(err   => {
        console.log(err);
      });
      
    },[]);
      
    

  const newgame = () =>{
   props.setGridState(props.grid); 
   props.setSelected(false);
  }


  async function print (){
    props.setSelected(true);
    setTimeout(()=>{html2canvas(props.ss.current).then(canvas => {
      
      props.img.current.innerHTML = "";
      props.img.current.appendChild(canvas);
    });},100)
  }

  const handleClick = (event) =>{
    props.setSelectedColor(event.target.name);
  }

    

  return (
    <div className="menu">
      
      <div id="menuRight">
      <Button onClick={newgame} variant="contained" className="st"
      sx={{
          height:40,
          marginRight:4,
          marginLeft:2,
          borderRadius:3,
      }}
      >New Game</Button>
      <Button onClick={print}  variant="contained"
      sx={{
        height:40,
        marginRight:4,
        borderRadius:3,
    }}
      >Print</Button>
      </div>
        <h3>Choose color to start painting:</h3>

      <div id="menuLeft" >
        <ul style={{display: 'flex', listStyle:'none'}}>
            {/* seleccionar un color */}
            {colors.map( (color) => {
            
            
              const isSelected = color === props.selectedColor;
              const borderStyle = isSelected ? '5px solid #66abf4':'2px solid #FFFFFF';
              if(state==="LOADING"){
                return (
                  <Box key={color} sx={{ display: 'flex' }}>
                      <CircularProgress />
                   </Box>
                  )
              }
              else{
                return(
                  <button 
                        key={color}
                        type="button" 
                        onClick={handleClick} 
                        name={color} 
                        style={{
                            width:'50px', 
                            height: '50px', 
                            border: borderStyle,
                            color: 'white', 
                            background: color,
                        }}
                    >          

                    {/* {color} */}
                
                    </button>
                );
              }
              
              
              })}
            </ul>
        </div>
    </div>
  );
}

export default HeaderColor;
