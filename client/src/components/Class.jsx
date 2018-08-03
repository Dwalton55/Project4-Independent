import React, { Component } from 'react';
import axios from 'axios'
import { Radio,ControlLabel, FormGroup, FormController, FormControl,FieldGroup,Form,Jumbotron, Grid, Row, Col, Image, Button, Modal } from 'react-bootstrap'
class Class extends Component {

    state = {
        user: {},
        discipline: {},
        annoucement:{
            body: '',
            user_id: this.props.match.params.userId,
            discipline_id: this.props.match.params.classId,

        }
    }
    componentDidMount() {
        this.fetchUser()
        this.fetchClass()
      }

    fetchClass = () => {
        axios.get(`/api/disciplines/${this.props.match.params.classId}`)
            .then((res) => {
                this.setState({
                    discipline: res.data
                })
            })
    }

    fetchUser = () => {
        axios.get(`/api/user/${this.props.match.params.userId}`)
            .then((res) => {
                this.setState({
                    user: res.data
                })
            })
    }


    handleChange = (event) => {
        let discipline = 0
        const inputToTarget = event.target.name
        const userInput = event.target.value
        console.log(inputToTarget, userInput)
        const newState = { ...this.state }
        if(inputToTarget === "discipline_id"){
            discipline = userInput
            console.log(discipline)
            newState.annoucement.discipline_id = Number(discipline)
        } else {
            newState.annoucement[inputToTarget] = userInput
        }
        
        this.setState(newState)
      }


    handleSubmit = (event) => {
        event.preventDefault()
        axios.post(`/api/users/${this.state.user.id}/posts`, this.state.annoucement)
     
      }

    render() {

        

        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup controlId="formControlsTextarea">
                                    <ControlLabel>Textarea</ControlLabel>
                                    <FormControl componentClass="textarea" 
                                     name="body"
                                     type="text"
                                     placeholder="annoucements"
                                     value={this.state.annoucement.body}
                                     onChange={(event) => this.handleChange(event)}
                                     />
                                    </FormGroup>


                                <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Button type="submit" onclick={this.handleSubmit}>Post</Button>
                                </Col>
                                </FormGroup>
                                </Form>;
                    {/* {this.state.discipline.posts.map((annoucement)=>{
                        return(
                            <div>
                            <h3></h3>
                            <h1>{annoucement.body}</h1>
                            

                            </div>
                        )
                    })} */}
            </div>
        )
    }
}

export default Class;