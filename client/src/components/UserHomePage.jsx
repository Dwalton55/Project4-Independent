import React, { Component } from 'react';
import { Radio,ControlLabel, FormGroup, FormController, FormControl,FieldGroup,Form,Jumbotron, Grid, Row, Col, Image, Button, Modal } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'


class UserHomePage extends Component {
    state = {
        editmode: false,
        user: {},
        classes: [],
        show: false,
        posts: [],
        annoucement: {
            body: '',
            user_id: 0,
            discipline_id: 0,
        },
        
    }


// ≠≠≠============================================================================
// SETTING STATE
// ≠≠≠============================================================================
    componentDidMount() {
        this.fetchUserinfo()
        
        this.fetchProgram()
      }
    
      fetchUserinfo = async() => {
        const user = await axios.get(`/api/users/${this.props.match.params.userId}`)
        this.setState({
            user: user.data,
            annoucement: {
                user: user.data.id,
            }

        })
      }
      
      fetchProgram = async() => {
        const classes = await axios.get(`/api/disciplines`)
        this.setState({
            classes: classes.data
        })
      }

// ≠≠≠============================================================================
// SETTING STATE
// ≠≠≠============================================================================


// ≠≠≠============================================================================
// MODAL
// ≠≠≠============================================================================
    handleClose =()=> {
        this.setState({ show: false });
    }

    handleShow =(id)=> {
        
        this.setState({ show: true });
    }
// ≠≠≠============================================================================
//  Modal
// ≠≠≠============================================================================

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

  handleUserChange = (event) => {
    const inputToTarget = event.target.name
    const userInput = event.target.value
    console.log(inputToTarget, userInput)
    const newState = { ...this.state }
        newState.user[inputToTarget] = userInput
    
    
    this.setState(newState)
  }
  handleSubmit = (event) => {
    event.preventDefault()
    axios.post(`/api/users/${this.state.user.id}/posts`, this.state.annoucement)
 
  }

  showForm = () => {
    this.state.editmode? this.setState({ editmode: false }) : this.setState({ editmode: true })
    console.log(this.state.editmode)

}

updateUser = () => {
    
    
    axios.patch(`/api/users/${this.props.match.params.userId}`, this.state.user).then((res) => {

        this.setState({
            user: res.data
        })
    })
}
    render() {
        const user = this.state.user
        return (
            <div>

                {this.state.editmode ?
                         <Row>
                         <Jumbotron>
                               <Form onSubmit={this.handleSubmit}>

<FormGroup controlId="name">
  <Col componentClass={ControlLabel} sm={2}>

</Col>
  <Col sm={10}>
    <FormControl
      name="name"
      type="text"
      placeholder="name"
      value={user.name}
      onChange={(event) => this.handleUserChange(event, this.state.user)}
      onBlur={() => this.updateUser(this.state.user)}
    />
  </Col>
</FormGroup>

<FormGroup controlId="formHorizontalEmail">
  <Col componentClass={ControlLabel} sm={2}>
  </Col>
  <Col sm={10}>
    <FormControl
      name="email"
      type="email"
      placeholder="email"
      value={user.email}
      onChange={(event) => this.handleUserChange(event, this.state.user)}
      onBlur={() => this.updateUser(this.state.user)}
    />
  </Col>
</FormGroup>

<FormGroup controlId="formHorizontalEmail">
  <Col componentClass={ControlLabel} sm={2}>
  </Col>
  <Col sm={10}>
    <FormControl
      name="password"
      type="password"
      placeholder="password"
      value={user.password}
      onChange={(event) => this.handleUserChange(event, this.state.user)}
      onBlur={() => this.updateUser(this.state.user)} />
  </Col>
</FormGroup>
                             
                             <Button bsStyle="primary" onClick={this.showForm}>  Edit</Button>
                             
                            </Form>
                         </Jumbotron>
                     </Row>
                :
                                <Row>
                    <Jumbotron>
                        <h2>Welcome back {user.name}</h2>
                        <h1>Email: {user.email}!</h1>
                        <h1>Would you like to edit?</h1>
                        
                        <Button bsStyle="primary" onClick={this.showForm}>  Edit</Button>
                        
                       
                    </Jumbotron>
                </Row>
                        }




                <Row className="show-grid text-center">

                    {this.state.classes.map((discipline) => {
                        return (

                            <Col xs={12} sm={3} className="person-wrapper" eventKey={discipline.id}>
                                <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                                <Image src='https://www.placecage.com/200/200' className="profile-pic" />
                                </Button>
                                <h3>{discipline.name}</h3>
                                {/* <p>{discipline.description}</p> */}
                                
                                        <p>{discipline.description}</p>

                                <Form onSubmit={this.handleSubmit}>

                                <FormGroup>
                                 <Radio 
                                  name="discipline_id"
                                  value={discipline.id}
                                  onChange={(event) => this.handleChange(event)}>
                                         {discipline.name}
                                </Radio>{' '}
                                </FormGroup>

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
                            </Col>


                        )
                    })}
                </Row>
                
            </div>
        );
    }
}

export default UserHomePage;