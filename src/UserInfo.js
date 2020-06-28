import React from 'react';

export default class UserInfo extends React.Component {
    state = {
        users: [],
    }
    async componentDidMount() {
        let prom = await fetch('http://localhost:4000/users');
        if(prom.ok){
          let info = await prom.json();
          this.setState({ users: info.data || []});
        } 
    }

    render() {
        return (
            <div>
                <h1>User Info</h1>
                <ul>
                    {this.state.users.length  && this.state.users.map((item, index) => (
                        <li key={index}>{item.first_name+' '+item.last_name}</li>
                    ))}
                    </ul>
                
            </div>
        )
    }
}
