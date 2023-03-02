import "../../App.scss"
import { useState } from 'react';
import { useEffect } from "react";

const List = () => {
    const [isMobile, setIsMobile] = useState(false)
    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }
    // create an event listener
    useEffect(() => {window.addEventListener("resize", handleResize)})

    const titulos = ["IMC", "CLASSIFICAÇÃO", "OBESIDADE (GRAU)"];
    const linha1 = ["Menor que 18,5", "Magreza", "0"];
    const linha2 = ["Entre 18,5 e 24,9", "Normal", "0"];
    const linha3 = ["Entre 25,0 e 29,9", "Sobrepeso", "I"];
    const linha4 = ["Entre 30,0 e 39,9", "Obesidade", "II"];
    const linha5 = ["Maior que 40,0", "Obesidade grave", "III"];

    const [count, setCount] = useState(0); //initial value of this 

    useEffect(() => {
        setCount((count) => count + 1);
    }, []); //empty array as second argument.

    return (
        <>
            <div className="container container-form" >
                <ul className="list-group">
                    <li className="list-group-item text-uppercase list-title">VEJA A INTERPRETAÇÃO DO IMC</li>
                    {isMobile ? (
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
                                            return <td key="{item}" className="me-3 mobile-text-size text-center">{item}</td>;
                                        })}
                                    </tr>
                                    <tr>
                                        {linha2.map(item => {
                                            return <td key="{item}" className="me-3 mobile-text-size text-center">{item}</td>;
                                        })}
                                    </tr>
                                    <tr>
                                        {linha3.map(item => {
                                            return <td key="{item}" className="me-3 mobile-text-size text-center">{item}</td>;
                                        })}
                                    </tr>
                                    <tr>
                                        {linha4.map(item => {
                                            return <td key="{item}" className="me-3 mobile-text-size text-center">{item}</td>;
                                        })}
                                    </tr>
                                    <tr>
                                        {linha5.map(item => {
                                            return <td key="{item}" className="me-3 mobile-text-size text-center">{item}</td>;
                                        })}
                                    </tr>
                                </tbody>
                                </table>
                        </div>
                    ) : (
                        <div>
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-sm-4 text-center text-uppercase list-title__item">IMC</div>
                                    <div className="col-sm-4 text-center text-uppercase list-title__item">CLASSIFICAÇÃO</div>
                                    <div className="col-sm-4 text-center text-uppercase list-title__item">OBESIDADE (GRAU)</div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-sm-4 text-center">Menor que 18,5</div>
                                    <div className="col-sm-4 text-center">Magreza</div>
                                    <div className="col-sm-4 text-center">0</div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-sm-4 text-center">Entre 18,5 e 24,9</div>
                                    <div className="col-sm-4 text-center">Normal</div>
                                    <div className="col-sm-4 text-center">0</div>
                                </div>
                            </li>
                            <li className="list-group-item active">
                                <div className="row">
                                    <div className="col-sm-4 text-center">Entre 25,0 e 29,9</div>
                                    <div className="col-sm-4 text-center">Sobrepeso</div>
                                    <div className="col-sm-4 text-center">I</div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-sm-4 text-center">Entre 30,0 e 39,9</div>
                                    <div className="col-sm-4 text-center">Obesidade</div>
                                    <div className="col-sm-4 text-center">II</div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-sm-4 text-center">Maior que 40</div>
                                    <div className="col-sm-4 text-center">Obesidade grave</div>
                                    <div className="col-sm-4 text-center">III</div>
                                </div>
                            </li>
                        </div>
                    )} 
                </ul>
                
            </div>
        </>  
    )
}

export default List








