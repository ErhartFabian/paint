import './App.css';
import React,{useState,useRef} from 'react';
import HeaderColor from './HeaderColor'
import GridPrint from './GridPrint'


function App() {

  let grid = [];
  for(let i = 1; i<=100; i++){
    // añade los 100 elementos al arreglo con un id y un color
    grid.push({id: i, color:'white'})}

  const [selectedColor,setSelectedColor ] = useState('white'); // estado del color de la paleta
  const [gridState, setGridState] = useState(grid);  // estado de la tabla (arreglo)
  const [selected,setSelected] = useState(false);
  


  const ss = useRef(); //apunta al area que se tomara img
  const img = useRef(); //lugar en el DOM donde se posiciona la imagen


  return (
    <div className="App">
      <HeaderColor selectedColor={selectedColor} setSelectedColor={setSelectedColor} setGridState={setGridState} grid={grid} ss={ss} img={img} setSelected={setSelected} selected={selected} />
      <GridPrint selectedColor={selectedColor} gridState={gridState} setGridState={setGridState} ss={ss} img={img} selected={selected} />

    </div>
  );
}

export default App;
