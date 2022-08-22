const Form = () => {
    return (<form>
        <label>Seu nome:</label>
        <input className='campo'></input>
        <label>E-mail:</label>
        <input className='campo'></input>
        <label>CPF:</label>
        <input className='campo'></input>
        <div className='heroLeftSexo'>
            <div>
                <input type='radio' value='Masculino' id='masculino' name='sexo'></input>
                <label>Masculino</label>
            </div>
            <div>
                <input type='radio' value='Feminino' id='feminino' name='sexo'></input>
                <label>Feminino</label> 
            </div>
        </div>
        <button>Enviar</button>
        </form>)
}

export default Form