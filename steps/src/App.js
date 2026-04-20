// import { useState } from "react";

// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

// function App() {
//   const [step, setStep] = useState(1);
//   const [open, setOpen] = useState(true);
//   // const[test , setTest]=useState({name:"peter"})
//   ///////const name={name:"peter"}

//   // const step=3

//   function handlenext() {
//     if (step ===3) {
//       ///// bad practice
//       // setStep(step + 1);
//       // setStep(step + 1);
//       /////good practice
//       setStep(1)
//     }else{
//       setStep((current)=>current+1)

//     }
//     ///////bad methofd
//     // test.name="fred";
//     ///////good methood
//     // setTest({name :"fred"})
//   }
//   function handleprevious() {
//     if (step === 1){
//       setStep(3)
//     }else{
//     setStep((current)=>current-1)
//     } 
      
//   }

//   return (
//     <div>
      

       
      
//       {!open && (
//     <button onClick={() => setOpen(true)} className="close">
//       v
//     </button>
//   )}
  
//       {open  && (
//         <div className="steps">
//           <button onClick={()=> setOpen(false)} className="close">&times;</button>
//           <div className="numbers">
//             <div className={`${step >= 1 ? "active" : ""}`}>1</div>
//             <div className={`${step >= 2 ? "active" : ""}`}>2</div>
//             <div className={`${step >= 3 ? "active" : ""}`}>3</div>
//           </div>
//           <p className="message">
            
//             step : {step} {messages[step - 1]}
//             {/* {test.name} */}
//           </p>
//           <div className="buttons">
//             <button
//               style={{ backgroundColor: "purple", color: "white" }}
//               onClick={handleprevious}
//               disabled={step===1}
//               // onMouseEnter={() => console.log("mouse enter")}
//               // onMouseLeave={() => console.log("mouse leaved")}
//             >
//             previous
//             </button>
//             <button
//               style={{ backgroundColor: "purple", color: "white" }}
//               onClick={handlenext}
//              disbled={step===3}
             
//             >
//              {step===3 ? "finish" :"next"}
//             </button>
//           </div>
//         </div>
//       )}
     
//     </div>
//   );
// }
// export default App;
