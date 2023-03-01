import "../../App.scss"

const Form = () => {
    return (
        <>
            <div className="container container-form">
                <form>
                    <div className="row mb-2">
                        <div className="col">
                            <div className="form-outline">
                                <input type="number" min={0} step="0.1" id="form3Example1" className="form-control" required />
                                <label className="form-label" htmlFor="form3Example1">Altura (ex.: 1,70)</label>
                            </div>
                        </div>
                        <div className="col">
                        <div className="form-outline">
                            <input type="number" id="form3Example2" className="form-control" required />
                            <label className="form-label" htmlFor="form3Example2">Peso (ex.: 69,2)</label>
                        </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary me-4">Calcular <i className="bi bi-chevron-right"></i></button>
                    <button type="submit" className="btn btn-clean">Limpar <i className="bi bi-chevron-right"></i></button>
                </form>
            </div>
        </>  
    )
}

export default Form