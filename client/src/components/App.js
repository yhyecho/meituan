import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import '../css/App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header-wrap">
          <Header />
        </div>
        <div className="main-wrap">
          <Main />
        </div>
        <div className="footer-wrap">
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
