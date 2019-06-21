import React from 'react';
import './Cards.css' ;

class Cards extends React.Component

{
    render()
    {
        const imgsrc =(`https://avatars.dicebear.com/v2/avataaars/${this.props.data.username}.svg?options[mood][]=happy`);

        return(
            <div className="ui fluid raised card">
        <div className="ui grid">
          <div className="ui row">
            <div className="three wide column">
              <img src={imgsrc} width="200px" height="200px" /></div>
            <div className="thirteen wide column setFont " >
            <h2>{this.props.data.name}</h2>
            
              <p className="setFont"><strong>Email :</strong>{this.props.data.email} </p>
              <p className="setFont"><strong>Phone :</strong>{this.props.data.phone}</p>
              <p className="setFont"><strong>Company :</strong>{this.props.data.company.name}</p>
              <p className="setFont"><strong>Website :</strong>{this.props.data.website}</p>
              <p className="setFont"><strong>Address :</strong>{this.props.data.address.street}, {this.props.data.address.suite}, {this.props.data.address.city}, {this.props.data.address.zipcode}</p>
            </div>
          </div>
        </div>
      </div>
        );
    }
}
export default Cards;