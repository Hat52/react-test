import React from 'react';
import './pageOne.css'
import PageTwo from './pageTwo'
import Helmet from 'react-helmet'

class App extends React.Component {
constructor(props){
 super()
  this.state={
    pageTwo:false,
    pageOne:true
  }
  this.turnToPageTwo = this.turnToPageTwo.bind(this)
}
  turnToPageTwo(){
  this.setState({pageOne:false})
  this.setState({pageTwo:true})    
  }
 render(){
 return (
    <div className="App">
      <Helmet>
          <title>Test</title>
          
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Helmet>
      {this.state.pageOne && <div class="topnav">
        <a className="Jicasr" onClick={this.turnToPageTwo}>Jifcast</a>
        <div className="links">
          <a href="https://www.google.com/" target="_blank">Google</a>
          <a href="https://www.yahoo.com/" target="_blank">Yahoo</a>
          <a href="http://amazon.com/" target="_blank">Amazon</a>
        </div>
      </div>}
      
      {this.state.pageTwo && <PageTwo/>}
    </div>
  );
 }
}

export default App;
