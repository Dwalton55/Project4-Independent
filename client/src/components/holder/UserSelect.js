import React, { Component } from 'react';
import axios from 'axios'

class UserSelect extends Component {

    state = {
        users: [],
    }


    componentDidMount() {
        this.getusers()
     }

    getusers = () => {
        axios.get('/api/users')
            .then((res) => {
                this.setState({
                    users: res.data
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }

    render() {
        return (
            <div>
                Working in user select
                {this.state.users.map((user)=>{
                    return(
                        <div>
                            <h1>{user.name}</h1>
                            <h1>{user.email}</h1>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default UserSelect;