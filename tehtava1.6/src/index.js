import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        counterhyva: 0,
        counterneutraali: 0,
        counterhuono: 0,
        counterkeskiarvo: 0,
        counterpospros: 0,
        yht: 0
      }
    }
  

    lisaahyva() {
      this.setState({ counterhyva: this.state.counterhyva + 1 })
      this.laskekeskiarvo()
    }
    lisaaneutraali() {
      this.setState({ counterneutraali: this.state.counterneutraali + 1 })
      this.laskekeskiarvo()
    }
    lisaahuono() {
        this.setState({ counterhuono: this.state.counterhuono + 1 })
        this.laskekeskiarvo()
      }

    laskekeskiarvo() {
        this.setState({ yht: this.state.counterhyva + this.state.counterneutraali + this.state.counterhuono})
    }
    laskepospros() {

    }
  
    render() {
      return (
        <div>
          <div><h3>anna palautetta</h3></div>
          <div>
            <button onClick={ () => this.lisaahyva()}>
              hyvä
            </button>
            <button onClick={ () => this.lisaaneutraali()}>
              neutraali
            </button>
            <button onClick={ () => this.lisaahuono()}>
              huono
            </button>
          </div>
          <div><h3>statistiikka</h3></div>
          <div>hyvä {this.state.counterhyva}</div>
          <div>neutraali {this.state.counterneutraali}</div>
          <div>huono {this.state.counterhuono}</div>
          <div>keskiarvo {this.state.yht}</div>
          <div>huono {this.state.counterhuono}</div>
        </div>
      )
    }
  }
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
  
