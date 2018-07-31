import React, { Component } from 'react';
import axios from 'axios'
class Class extends Component {

    state = {
        user: {},
        disciplines: {}
    }
    componentDidMount() {
        this.fetchUser()
        this.fetchClass()
      }

    fetchClass = () => {
        axios.get(`/api/disciplines/${this.this.props.match.params.classId}`)
            .then((res) => {
                this.setState({
                    discipline: res.data
                })
            })
    }
    
    fetchUser = () => {
        axios.get(`/api/user/${this.this.props.match.params.userId}`)
            .then((res) => {
                this.setState({
                    user: res.data
                })
            })
    }
    render() {


        

        return (
            <div>
                
                
            </div>
        )
    }
}

export default Class;