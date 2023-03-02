import "../../App.scss"
import { useState } from 'react';
// import List from "../List";
import { IMaskInput } from 'react-imask';

const Form = () => {
    // const [Altura, setAltura] = useState('');
    // const [Peso, setPeso] = useState('');
    const [IMC, setIMC] = useState('');
    const [Inicial, setInicial] = useState(true);
    const handleSubmit = (event) => {
        event.preventDefault();
        setInicial(false)
        const altura = event.target.altura.value;
        const peso = event.target.peso.value;
        setIMC((peso / (altura * altura)).toFixed(2));
    };

    const handleChange=()=>{
        setIMC(" ")
        setInicial(true) 
    }

    return (
        <>
            <div className="container container-form">
                <form onSubmit={handleSubmit}>
                    <div className="row mb-2">
                        <div className="col">
                            <div className="form-outline">
                                <IMaskInput
                                    mask="0.00"
                                    className="form-control omri"
                                    name="altura"
                                    required 
                                />
                                <label className="form-label" htmlFor="form3Example1">Altura (ex.: 1,70)</label>
                            </div>
                        </div>
                        <div className="col">
                        <div className="form-outline">
                            <input type="number"  min={1} step="0.01" name="peso" className="form-control omri" required />
                            {/* onChange={(event) =>setPeso(event.target.value)} */}
                            <label className="form-label" htmlFor="form3Example2">Peso (ex.: 69,2)</label>
                        </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary me-4">Calcular <i className="bi bi-chevron-right"></i></button>
                    <button type="reset" className="btn btn-clean" onClick={handleChange}>Limpar <i className="bi bi-chevron-right"></i></button>
                </form>
            </div>
            {TableDestacada(IMC, Inicial)}
            {/* {Inicial ? ( <List/>) : ( TableDestacada(IMC) )} */}
            <div className="container container-form" >
                <div className="btn btn-danger disabled" id="result">SEU IMC: <strong>{IMC}</strong></div>
            </div> 
        </>  
    )
}

function TableDestacada (IMC, Inicial){
    let index = "";
    const titulos = ["IMC", "CLASSIFICAÇÃO", "OBESIDADE (GRAU)"];
    const linha1 = ["Menor que 18,5", "Magreza", "0"];
    const linha2 = ["Entre 18,5 e 24,9", "Normal", "0"];
    const linha3 = ["Entre 25,0 e 29,9", "Sobrepeso", "I"];
    const linha4 = ["Entre 30,0 e 39,9", "Obesidade", "II"];
    const linha5 = ["Maior que 40,0", "Obesidade grave", "III"];

    if (!Inicial){
        if (IMC < 18.5){
            index = 0
        } else if (IMC >= 18.5 && IMC < 24.9 ){
            index = 1
        } else if (IMC >= 24.9 && IMC < 29.9 ){
            index = 2
        } else if (IMC >= 29.9 && IMC < 39.9 ){
            index = 3
        }
        else if (IMC >= 39.9 ){
            index = 4
        }  
    }
    
    return(
        <>
            <div className="container container-form" >
                <ul className="list-group">
                    <li className="list-group-item text-uppercase list-title">VEJA A INTERPRETAÇÃO DO IMC</li>
                        <div>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        {titulos.map(item => {
                                            return <td key="{item}" className="me-3 mobile-text-size list-title__item text-center">{item}</td>;
                                        })}
                                    </tr>
                                    <tr>
                                        {linha1.map(item => {
                                            return <td key="{item}" className={index === 0 ? "me-3 mobile-text-size text-center active" : "me-3 mobile-text-size text-center"}>{item}</td>;
                                        })}
                                    </tr>
                                    <tr>
                                        {linha2.map(item => {
                                            return <td key="{item}" className={index === 1 ? "me-3 mobile-text-size text-center active" : "me-3 mobile-text-size text-center"}>{item}</td>;
                                        })}
                                    </tr>
                                    <tr>
                                        {linha3.map(item => {
                                            return <td key="{item}" className={index === 2 ? "me-3 mobile-text-size text-center active" : "me-3 mobile-text-size text-center"}>{item}</td>;
                                        })}
                                    </tr>
                                    <tr>
                                        {linha4.map(item => {
                                            return <td key="{item}" className={index === 3 ? "me-3 mobile-text-size text-center active" : "me-3 mobile-text-size text-center"}>{item}</td>;
                                        })}
                                    </tr>
                                    <tr>
                                        {linha5.map(item => {
                                            return <td key="{item}" className={index === 4 ? "me-3 mobile-text-size text-center active" : "me-3 mobile-text-size text-center"}>{item}</td>;
                                        })}
                                    </tr>
                                </tbody>
                                </table>
                        </div>
                </ul>
            </div>
        </>  
    )
}

export default Form
