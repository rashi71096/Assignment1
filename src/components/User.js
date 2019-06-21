import React from 'react';
import Cards from './Cards';

const User=(props)=>
{
    const data=props.data.map((info)=>{
        return <Cards data={info}/>
    });
    return <div>{data}</div>
};

export default User;