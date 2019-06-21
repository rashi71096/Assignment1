import React from 'react';
import axios from 'axios';
import User from './User';
import Loader from './Loader';

class App extends React.Component
{
   state={data:[],Loader:true};
   componentDidMount=async()=>
   {
       const res=await axios.get('https://jsonplaceholder.typicode.com/users');
       console.log(res.data);
       this.setState({data:res.data,Loader:false});
   }
   
   
    render()
  
   {
       if(this.state.Loader)
       {
           return(
               <Loader />
           );
       }
       else{

       
        return(
           <div className="ui container" style={{marginTop:'px'}}>
            <User data={this.state.data}/>
            </div>
        );
       }
       
   }
}
export default App;