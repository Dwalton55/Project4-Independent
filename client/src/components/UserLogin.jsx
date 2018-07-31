import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

class UserLogin extends Component {
    state ={
        users: [],
    }

    componentDidMount() {
        this.fetchUsers()
      }

    fetchUsers = () => {
        axios.get(`/api/users`)
            .then((res) => {
                this.setState({
                    users: res.data
                })
            })
    }
    
    render() {
        return (
            <div>
                {this.state.users.map((user)=>{
                    return(
                        <Link to={`/users/${user.id}`} >{user.name}</Link>
                    )
                })}
            </div>
        );
    }
}

export default UserLogin