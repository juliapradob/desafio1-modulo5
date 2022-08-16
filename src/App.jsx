import './App.css'
import Menu from './components/Menu'

function App() {
  return (
    <div className='App'>
      <div className='menu'>
        <Menu />
      </div>
      <div className='hero'>
        <div className='heroRight'>
          <h2>Ajude o algoritmo a ser mais certeiro</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend. <br></br><br></br>Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus.</p>
        </div>
        <div className='heroLeft'>
          <form>
            <label>Seu nome:</label>
            <input className='campo'></input>
            <label>E-mail:</label>
            <input className='campo'></input>
            <label>CPF:</label>
            <input className='campo'></input>
            <div className='heroLeftSexo'>
              <div>
                <input type='radio' value='Masculino' id='masculino' name='sexo'></input>
                <label for='masculino'>Masculino</label>
              </div>
              <div>
                <input type='radio' value='Feminino' id='feminino' name='sexo'></input>
                <label for='feminino'>Feminino</label> 
              </div>
            </div>
            <button>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
