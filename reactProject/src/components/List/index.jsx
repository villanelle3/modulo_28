import "../../App.scss"
// import React, { useState } from 'react';

// const [isMobile, setIsMobile] = useState(false)

// //choose the screen size 
// const handleResize = () => {
//     if (window.innerWidth < 720) {
//         setIsMobile(true)
//     } else {
//         setIsMobile(false)
//     }
// }

// // create an event listener
// useEffect(() => {
//     window.addEventListener("resize", handleResize)
// })


const List = () => {
    return (
        <>
            <div className="container container-form" >
                <ul className="list-group">
                    <li className="list-group-item text-uppercase list-title">VEJA A INTERPRETAÇÃO DO IMC</li>
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
                </ul>
                <div className="btn btn-danger">SEU IMC: </div>
            </div>
        </>  
    )
}

export default List