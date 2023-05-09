import './App.css';
import { Basket } from './components/basket';
import { data } from './data';

export const App=()=>{
  return(
    <div classname="App">
      {data.map((el,id)=>{
       return <Basket con={el} key={id}/>
      })}
    </div>
  )
}



  
 

