import { useState } from "react";

const ReactCalculator = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [isError, setIsError] = useState(true);
    const [result, setResult] = useState(null);
    const[reasonError,setReason] = useState("Num1 Or Num2 Cannot Be Empty");
    const calcualte = (opr) => {
        switch (opr) {
            case '+':
                setResult(parseFloat(num1) + parseFloat(num2));
                break;
            case '-':
                setResult(parseFloat(num1) - parseFloat(num2))
                break;
            case '*': setResult(parseFloat(num1) * parseFloat(num2)); break;
            case '/': setResult(parseFloat(num1) / parseFloat(num2))
                break;

            default:
                setResult(null);
                break;
        }
    }
    return (<div className="calculator">
        <h2>React Calculator</h2>
        <input type="text" value={num1} placeholder="Num1" onChange={e => {
             setReason("Num1 cannot be Empty");
           
            if(!parseFloat(e.target.value)){
                setIsError(true);
                setReason("Num1 Or Num2 Cannot be a String Value");
                setNum1(e.target.value);
            }else{
            setIsError(false);
            setNum1(e.target.value)
            }
            }} />
        <input type="text" value={num2} placeholder="Num2" onChange={e => {
             setReason("Num1 cannot be Empty");
           
           if(!parseFloat(e.target.value)){
               setIsError(true);
               setReason("Num1 Or Num2 Cannot be a String Value");
               setNum1(e.target.value);
           }else{
           setIsError(false);
           setNum2(e.target.value)}
        }} />
        <div className="btns">
            <button disabled={!num1 && num2} onClick={() => { calcualte('+'); }}>+</button>
            <button disabled={!num1 && num2} onClick={() => { calcualte('-'); }}>-</button>
            <button disabled={!num1 && num2} onClick={() => { calcualte('*'); }}>*</button>
            <button disabled={!num1 && num2} onClick={() => { calcualte('/'); }}>/</button>
        </div>

        {isError ? <><div className="error">Error!</div> <div className="result"> {reasonError}</div></>: (result || result==0) && <div className="success">Success!</div>}


        {(result || result==0) && <div className="result">Result: {result}  </div>}
    </div>);
}
export default ReactCalculator;