import './App.css'
import Menu from './components/Menu'
import Form from './components/Form'
import Card from './components/Card'
import { buscaProdutos } from './service/requisicao.js'
import { useState, useEffect } from 'react'

function App() {

  const [image, setImage] = useState('')
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [precoAntigo, setPrecoAntigo] = useState('')
  const [precoAtual, setPrecoAtual] = useState('')
  const [precoParcelado, setPrecoParcelado] = useState('')

  useEffect(() => {
    buscaProdutos().then(data => {
      setImage(data.image)
      setNome(data.name)
      setDescricao(data.description)
      setPrecoAntigo(`R$${data.oldPrice}`)
      setPrecoAtual(`R$${data.prices}`)
      setPrecoParcelado(`${data.count}x de R$${data.value}`)
    })
  }, [])

  return (
    <div className='App'>
      <div className='menu-father'>
        <div className='menu-pos'>
          <Menu />
        </div>
      </div>
      <div className='hero'>
        <div className='heroRight'>
          <h2>Ajude o algoritmo a ser mais certeiro</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend. <br></br><br></br>Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus.</p>
        </div>
        <div className='heroLeft'>
          <Form />
        </div>
      </div>
      <div className='selecaoProdutos'>
        <div className='titulo'>
          <h3><span>Sua seleção especial</span></h3>
        </div>
        <Card image={image}
        nome={nome}
        descricao={descricao}
        precoAntigo={precoAntigo}
        precoAtual={precoAtual}
        precoParcelado={precoParcelado}
        cta='COMPRAR'/>
      </div>
    </div>
  )
}

export default App
