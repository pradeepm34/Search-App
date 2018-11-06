import React from 'react';
import './../App.css';

const Search =(props)=>{
return(
    <div>
     <p className = "pish"> Search:</p>
     <form  onSubmit={props.click}>
     <input className = "Input" type="text" name="search" placeholder="Search list with React"/>    
     </form>   
     <br/>
     <div>
     {props.output !==undefined ? <div className = "Names">{ props.output.map((name,index)=>{ return <li key={index}>{name}</li>})}</div>
      :<div className = "Names">{ props.fetch_data}</div>}
     </div>
    </div>
);
};

export default Search;

