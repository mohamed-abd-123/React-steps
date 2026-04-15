import { useState } from "react";

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
//       <span>{count===0 ? "today is" 
//       : count >0 ? `${count} day from today is` 
//       :`${Math.abs(count)} days was ago`} </span>
//       <span>  {date.toDateString()}</span>
//     </div>
//   );
// }
// export default Challange;






function Challange() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
   const [result, setResult] = useState("");

  function handleSomme() {
    const somme = Number(num1) + Number(num2);
      setResult(somme);
  }
  function retour(){
     setNum1("")
     setNum2("")
     setResult("")
  }

  return (
    <div>
      <input
        type="number"
        placeholder="number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      /><br/>

      <input
        type="number"
        placeholder="number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      /><br/>

      <button onClick={handleSomme}>click</button>
      <button  onClick={retour}>retour</button>

      <p>
        {result ==="" ? "entrer deux nombres" :
        `la somme de ${num1} +${num2} est = ${result}`}
      </p>
    </div>
  );
}

export default Challange;