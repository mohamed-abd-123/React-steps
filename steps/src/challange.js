// import { useState } from "react";




// function Challange() {
//   const [step, setStep] = useState(1);
//   const [count, setCount] = useState(0);
//   const date = new Date();
//   date.setDate(date.getDate() +count );
//   function stepplus() {
//     setStep(step + 1);
//   }
//   function stepmoins() {
//     if (step > 1) setStep(step - 1);
//   }
//   function countplus() {
//     setCount(count + step);
//   }
//   function countmoins() {
//     setCount(count - step);
//   }
//   return (
//     <div style={{ margin: " 0px 600px" }}>
//       <button onClick={stepmoins}>-</button>
//       <span>Step : {step}</span>
//       <button onClick={stepplus}> +</button>
//       <br />
//       <button onClick={countmoins}>-</button>
//       <span>Count : {count}</span>
//       <button onClick={countplus}>+</button>
//       <br/>
//       {/* <span>{count===0 ? "today is" 
//       : count >0 ? `${count} day from today is` 
//       :`${Math.abs(count)} days was ago`} </span>
//       <span>  {date.toDateString()}</span> */}
//       <footer>{new Date().toLocaleDateString()}</footer>
//     </div>
//   );
// }
// export default Challange;






// function Challange() {
//   const [num1, setNum1] = useState("");
//   const [num2, setNum2] = useState("");
//    const [result, setResult] = useState("");

//   function handleSomme() {
//     const somme = Number(num1) + Number(num2);
//       setResult(somme);
//   }
//   function retour(){
//      setNum1("")
//      setNum2("")
//      setResult("")
//   }

//   return (
//     <div>
//       <input
//         type="number"
//         placeholder="number 1"
//         value={num1}
//         onChange={(e) => setNum1(e.target.value)}
//       /><br/>

//       <input
//         type="number"
//         placeholder="number 2"
//         value={num2}
//         onChange={(e) => setNum2(e.target.value)}
//       /><br/>

//       <button onClick={handleSomme}>click</button>
//       <button  onClick={retour}>retour</button>

//       <p>
//         {result ==="" ? "entrer deux nombres" :
//         `la somme de ${num1} +${num2} est = ${result}`}
//       </p>
//     </div>
//   );
// }

// export default Challange;








// function Challange(){
    
//     const [open,Setopen]=useState(false)
//     const[name,Setname]=useState("tttt")
//     const[mail,Setmail]=useState("tttt")
//     function show(){
// Setopen(open =>!open)
//     }
//      function retour(){
// Setname("")
// Setmail("")
//     }
//     return(
// <div>
//     <button  onClick={show}>
//        {!open ? "show" :"hidden"}  
//         </button>
//       <button onClick={retour}>retour</button>  
        
//     <br/>
//      {open &&
//     <div>
//         <input type="text" placeholder="name" value={name}/>  <br/>
//         <input  type="mail"  placeholder="mail" value={mail}/>
//     </div>
//      }
// </div>
        
//     )
// }
// export default Challange;
















import { useState } from "react";

const Cards = [
  {
    id: 3457,
    question: "What language is React Based on ?",
    answer: "javascript",
  },
  {
    id: 7336,
    question: "What are the building blocks of react apps ?",
    answer: "Components",
  },
  {
    id: 8832,
    question:
      "What's the name of the syntaxe we use to describe a ui in React ?",
    answer: "JSX",
  },

  {
    id: 1297,
    question: "How to pass data from parent to child components ?",
    answer: "Props",
  },

  {
    id: 9103,
    question: "How to give components memory ?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completly synchronised with state ?",
    answer: "Controlled element",
  },
];


////////méthode 1
function App (){
  return(
<div className="box">
  {Cards.map((ele)=>{
  return  <Card cardobj={ele}/>

  })}
   
</div>

  )
}
function Card(props){
  const [clic , Setclic]=useState(true)
  function verif(){
    Setclic(clic=>!clic)
  }
  return(
    <div className="card" onClick={verif} style={{backgroundColor : clic ? "" :"green"}}>
      <p>{ clic ? props.cardobj.question : props.cardobj.answer}</p>
    </div>
  )
}
export default App;



////////méthode 2

// function App(){
//   return(
//     <div className="box">
// {Cards.map((ele)=>{
//  return <Card ele={ele}/>
// })}
//     </div>
//   )
// }
// function Card({ele}){
//   const[clic ,Setclic]=useState(true)
//   function verif(){
//     Setclic(clic=>!clic)
//   }
//  return(
// <div className="card" onClick={verif} style={{backgroundColor : clic ? "" :"green"}}>
// <p>{ clic ? ele.question : ele.answer}</p>
//   </div>
//  ) 
// }
// export default App;