import "./perfil.css"

const Perfil = () => {
    const usuario = {
        nome: "villanelle3",
        avatar: "https://avatars.githubusercontent.com/u/106897289?v=4"
    }
    return(
        <div>
            <img className="avatar" src={usuario.avatar} alt="" />
            <h3>{usuario.nome}</h3>
        </div>
    )
}

export default Perfil