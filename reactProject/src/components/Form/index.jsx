import "../../App.scss"
import { useState } from 'react';
import List from "../List";

const Form = () => {
    const [Altura, setAltura] = useState('');
    const [Peso, setPeso] = useState('');
    const [IMC, setIMC] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setAltura(parseFloat(Altura));
        setPeso(parseFloat(Peso));
        setIMC((Peso / (Altura * Altura)).toFixed(2));
    };

    const handleChange=()=>setIMC(" ")

    return (
        <>
            <div className="container container-form">
                <form onSubmit={handleSubmit}>
                    <div className="row mb-2">
                        <div className="col">
                            <div className="form-outline">
                                <input type="number" min={0} step="0.01" id="form3Example1" className="form-control" required onChange={(event) =>setAltura(event.target.value)} />
                                <label className="form-label" htmlFor="form3Example1">Altura (ex.: 1,70)</label>
                            </div>
                        </div>
                        <div className="col">
                        <div className="form-outline">
                            <input type="number"  min={1} step="0.01" id="form3Example2" className="form-control" required onChange={(event) =>setPeso(event.target.value)} />
                            <label className="form-label" htmlFor="form3Example2">Peso (ex.: 69,2)</label>
                        </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary me-4">Calcular <i className="bi bi-chevron-right"></i></button>
                    <button type="reset" className="btn btn-clean" onClick={handleChange}>Limpar <i className="bi bi-chevron-right"></i></button>
                </form>
            </div>
            <List/>
            <div className="container container-form" >
                <div className="btn btn-danger disabled" id="result">SEU IMC: <strong>{IMC}</strong></div>
            </div> 
        </>  
    )
}

export default Form
