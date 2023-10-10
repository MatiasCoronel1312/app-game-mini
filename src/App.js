import { useEffect, useState } from 'react';

function App() {

  const [win, setWin] = useState("Apreta click");  
  const [button1, setButton1] = useState("");
  const [button2, setButton2] = useState("");
  const [button3, setButton3] = useState("");
  const [premio, setPremio] = useState(null)
  
  var num = 0
  
  useEffect(() => {
    
  },[premio, num])
  
  function handleClick(){ 
    num = Math.floor(Math.random() * 3)
    setPremio(num);
    setWin("En que vaso esta la X?");
    display(num);
    return premio;
  }
  function display (num){
    if(num === 0){
      setButton1("x");
      setButton2("o");
      setButton3("o");
      setTimeout(() => {
        setButton1("");
        setButton2("");
        setButton3("");
      }, 100);
    }else if(num=== 1){
      setButton1("o");
      setButton2("x");
      setButton3("o");
      setTimeout(() => {
        setButton1("");
        setButton2("");
        setButton3("");
      }, 100);
    }else{
      setButton1("o");
      setButton2("o");
      setButton3("x");
      setTimeout(() => {
        setButton1("");
        setButton2("");
        setButton3("");
      }, 100);     
    }
  }
  function handleClickA(){
    if(premio === 0){
      setWin("Win");
      console.log("0")
    }else{
      setWin("Loser")
    }
  }
  function handleClickB(){
    if(premio===1){
      setWin("Win");
      console.log("1")
    }else{
      setWin("Loser")
    }
  }
  function handleClickC(){
    if(premio===2){
      setWin("Win"); 
      console.log("2");
    }else{
      setWin("Loser");
    }
  }

  return (
    <div className="bg-dark text-secondary p-5">
      <h1>Hola Fer y Fran</h1>
      <div className='m-5 h2'>{win}</div>
      <button onClick={handleClickA}  className='m-5 btn btn-danger p-4'>{button1}</button>
      <button onClick={handleClickB} className='m-5 btn btn-danger p-4'>{button2}</button>
      <button onClick={handleClickC} className='m-5 btn btn-danger p-4'>{button3}</button>
      <br/>
      <button onClick={handleClick} className='m-5 btn btn-danger p-4'>click</button>
    </div>
  );
}

export default App;
