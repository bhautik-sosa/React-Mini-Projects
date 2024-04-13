import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("0")

  const calculteRes = (input) =>{
    let res;
    try {
      const operators = ['+' , '-' , '/' , '%' , '*'];
      let opr = null;

      for( let i=0 ; i < input.length ; i++){
        if( operators.includes(input[i])){
          opr = input[i];
          break;
        }
      }
        if(!opr){
          setInput(parseFloat(input).toString());
        }
      const [oprand1 , oprand2] = input.split(opr).map(parseFloat);
      switch(opr){
        case '+' : res = oprand1 + oprand2;
          break;
        case '-' : res = oprand1 - oprand2;
          break;
        case '*' : res = oprand1 * oprand2;
          break;
        case '/' : res = oprand1 / oprand2;
          break;
        case '%' : res = oprand1 % oprand2;
          break;

        default :
            throw new Error('Invalid Oprator')
      }
      setInput(res.toString());
    } catch (error) {
       setInput('Error')
    }
  }

  const handleButtonClick = (value) => {
     if( value === 'C') {
        setInput('0');
     }
     else if( value === '<' ){
        setInput(input.slice(0, -1));
     }
     else if( value === '='){
      // try {
      //   setInput(eval(input).toString()); 
      // } catch (error) {
      //    setInput('Error')
      // }
        calculteRes(input);
     }
     else {
        setInput( (prevValue) => prevValue + value)
     }
  }

  return (
    <div className='container'>
       <div className="cal">
          <h1 id='input'>{input}</h1>
          <hr />
          <div>
            <button onClick={()=> handleButtonClick('C')}>C</button>
            <button onClick={()=> handleButtonClick('<')}>{"<"}</button>
            <button onClick={()=> handleButtonClick('%')}>%</button>
            <button onClick={()=> handleButtonClick('/')}>/</button>
          </div>
          <div>
            <button onClick={()=> handleButtonClick('7')}>7</button>
            <button onClick={()=> handleButtonClick('8')}>8</button>
            <button onClick={()=> handleButtonClick('9')}>9</button>
            <button onClick={()=> handleButtonClick('*')}>*</button>
          </div>
          <div>
            <button onClick={()=> handleButtonClick('4')}>4</button>
            <button onClick={()=> handleButtonClick('5')}>5</button>
            <button onClick={()=> handleButtonClick('6')}>6</button>
            <button onClick={()=> handleButtonClick('-')}>-</button>
          </div>
          <div>
            <button onClick={()=> handleButtonClick('1')}>1</button>
            <button onClick={()=> handleButtonClick('2')}>2</button>
            <button onClick={()=> handleButtonClick('3')}>3</button>
            <button onClick={()=> handleButtonClick('+')}>+</button>
          </div>
          <div>
            <button onClick={()=> handleButtonClick('0')}>0</button>
            <button onClick={()=> handleButtonClick('00')}>00</button>
            <button onClick={()=> handleButtonClick('.')}>.</button>
            <button onClick={()=> handleButtonClick('=')}>=</button>
          </div>
       </div>
    </div>
  )
}

export default App
