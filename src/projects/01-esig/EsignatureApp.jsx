import React,{useState} from 'react'
import Title from '../components/Title';

export default function EsignatureApp() { 
   const [name, setName] = useState("Your Signature ");
   const [date, setDate] = useState("");
   const handleNameChange =(e) => {
    //console.log (e.target.value);
    setName(e.target.value);
  };
    const handleDateChange =(e) => {
      
      setDate(e.target.value);};
      
    
   
   const inputStyle={
    border:"none",
    borderBottom:"2px dotted",
    outline:"none",
    padding:" .35rem 0",
   };
   document.body.style.background ="#eee";
  return (
    <div className="container text-center">
      <Title classes={"main-subtitle"} text={name}/> 
      <Title classes={"subtitle" } text={!date ? "DoB" :date}/> 
      <p> 
        hello world 

      </p>
      <footer className='d-flex' style={{justifyContent:"space-around",position : "relative",
    top:"40vh",}}>
      <input type="date" value={date} style={inputStyle} 
      onChange={handleDateChange}/>
      <input type="text" value={name} style={inputStyle}
      onChange={handleNameChange} />
      </footer>
    </div>
  )
}
