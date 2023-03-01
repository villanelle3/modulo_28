import "../../App.scss"

const Text = () => {
    return (
        <>
            <div className="container text-container">
                <h2 className="titulo-sm text-left">Cálculo IMC</h2>
                <hr />
                <p className="text-left">IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
                <p className="text-left">O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.</p>
                <p className="text-left">Quer descobrir seu IMC? Insira seu peso e sua altura nos campos abaixo e compare com os índices da tabela.</p>
            </div>
        </>  
    )
}

export default Text