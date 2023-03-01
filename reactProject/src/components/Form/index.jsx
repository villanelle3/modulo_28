import "../../App.scss"

const Form = () => {
    return (
        <>
            <div className="container">
                <form>
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <input type="text" id="form3Example1" className="form-control" />
                                <label className="form-label" for="form3Example1">First name</label>
                            </div>
                        </div>
                        <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form3Example2" className="form-control" />
                            <label className="form-label" for="form3Example2">Last name</label>
                        </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>
                </form>
            </div>
        </>  
    )
}

export default Form