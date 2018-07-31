import React, { Component } from 'react';
import axios from 'axios'
import { Grid, FormGroup, FormController, FormControl, Checkbox, ControlLabel, FieldGroup, Button, Form, Col } from 'react-bootstrap'
import styled, { consolidateStreamedStyles } from 'styled-components'

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr );
`

class SignUp extends Component {
  state = {
    user: {
      name: '',
      email: '',
      password: '',
      package_id: 0

    },
    packages: [],
  }

  componentDidMount() {
    this.fetchPackages()
  }

  fetchPackages = () => {
    axios.get(`/api/packages`)
      .then((pack) => {
        this.setState({
          packages: pack.data,
        })
      }).catch((err) => {
        console.error(err)
      })
  }

  
  
  


  handleChange = (event) => {
    const inputToTarget = event.target.name
    const userInput = event.target.value
    console.log(inputToTarget, userInput)
    const newState = { ...this.state }
    newState.user[inputToTarget] = userInput
    this.setState(newState)
  }

  handleSubmit = (event) => {
    const city_id = this.props.match.params.city_id
    event.preventDefault()
    axios.post(`api/users`, this.state.user)
      // .then((res) => {
      //   this.props.history.push(`/`)
      // }).catch((err) => {
      //   console.error(err)
      // })
  }

  render() {
    const user = this.state.user
    const packages = this.state.packages
    return (
      <div>
        <List>
          {this.state.packages.map((deal) => {
            return (
              <div>
                <h1>{deal.name}</h1>
                <h2>{deal.price}</h2>
                {deal.classes.map((dealclass)=>{
                  return(
                    <div>{dealclass.name}</div>
                  )
                })}
              </div>
            )
          })}
        </List>
        <Form onSubmit={this.handleSubmit}>

          <FormGroup  controlId="formControlsSelect">
            <ControlLabel>Select</ControlLabel>
            <FormControl 
            componentClass="select" 
            name= 'package' 
            placeholder="select"
            onChange={(event) => this.handleChange(event)}
            >
              <option value={0}>package</option>
              {this.state.packages.map((deal,i) => {
            return (
              <option value={deal.id}>{deal.name}</option>
            )
          })}
            </FormControl>
          </FormGroup>


          <FormGroup controlId="name">
            <Col componentClass={ControlLabel} sm={2}>

    </Col>
            <Col sm={10}>
              <FormControl
                name="name"
                type="text"
                placeholder="Name"
                value={user.name}
                onChange={(event) => this.handleChange(event)}
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
                onChange={(event) => this.handleChange(event)}
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
                onChange={(event) => this.handleChange(event)} />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
            </Col>
            <Col sm={10}>
              <FormControl
                placeholder="confirm password"
              />
            </Col>
          </FormGroup>


          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit" onclick={this.handleSubmit}>Sign Up</Button>
            </Col>
          </FormGroup>
        </Form>;
            </div>
    );
  }
}

export default SignUp;