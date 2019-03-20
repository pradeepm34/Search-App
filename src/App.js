import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Search from  './components/search';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      text:'',
      data:[]
    };
  }
  handlegetName=(e)=>{
  e.preventDefault();
  this.setState({
    text:e.target.elements.search.value.trim().toLowerCase()
  })
  };
  componentDidMount(){
  fetch("https://gist.githubusercontent.com/anonymous/1295788c7bff052a1e8a/raw/6e109604c7a7f3efe77c8048bb2fe2f3e1cdcb7b/gistfile1.json",{})
  .then((response)=>{
  if(response.status===200){
   return response.json()
  }else {
    throw new Error('Unable to fetch');
  }
  }).then((data)=>{
  this.setState({
    data:data.Reggae
  })
  }).catch((error)=>{
    console.log(error);
  });
 }
  render() {
    const names_list = this.state.data;
    const input_name = this.state.text;
    var result;
    if(input_name.length >0){
       result = names_list.filter((name)=>{
        return name.toLowerCase().match(input_name)
        });
        console.log(result);
    } 
    return (
      <div className="App">
      <Header />
      <Search  fetch_data={this.state.data.map((name,index)=>{
      return   <li key={index}>{name}</li>
      })}
       click={this.handlegetName}
       output={result}
      />     
     </div>
    );
  }
}

export default App;


// new feature