import { useState } from "react";
import css from './app.module.css'


function App() {
  const [count,setCount] = useState(0)
const [count2,setCount2] = useState(0)
  const asds = (count)=>{
    if(count>10){
      const divs= Array.from({length:10},()=>{
      return(
        <div style={{width:'250px',height:'250px',border:'1px solid black'}}>

        </div>
      )
    })

    return divs
    }else{
      const divs= Array.from({length:count},()=>{
        return(
          <div style={{width:'250px',height:'250px',border:'1px solid black'}}>
  
          </div>
        )
      })
  
      return divs
    }
   
  }
  return (
    <div className="App">

   <input type="text" onChange={(e)=>{setCount(e.target.value)}}/>
   <button onClick={()=>setCount2(count)}>  create</button>
   {
    asds(count2)
   }
    </div>
  );
}

export default App;
