import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Jumbotron, Grid, Row, Col, Image, Button, Modal } from 'react-bootstrap'
import './Home.css'
class Home extends Component {
    state = {
        show: false,
        disciplines: [],
        packages:[]

    }


    componentDidMount() {
        this.getDisciplines()
        this.getPackages()
    }

    getDisciplines = () => {
        axios.get('/api/disciplines')
            .then((res) => {
                this.setState({
                    disciplines: res.data
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }
    getPackages = () => {
        axios.get('/api/packages')
            .then((res) => {
                this.setState({
                    packages: res.data
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({ show: true });
    }


    render() {
        return (
            <Grid fluid={true} >
                <Row>
                    <Jumbotron>
                        <h2>Welcome to Independent</h2>
                        <h1> Add independent stuff here</h1>
                        <Link to="/SignUp">
                            <Button bsStyle="primary">  Sign Up</Button>
                        </Link>
                        <Link to="/login">
                            <Button bsStyle="primary">  log in</Button>
                        </Link>
                    </Jumbotron>
                </Row>

                <Row>
                    <Jumbotron>
                      
                        <h2>Try the 6 week Challenge!!</h2>
                        <h1> 6 weeks of motivation to kick start a lifestyle of healthy choices.</h1>
                        <h1>Get the body You've always wanted</h1>
                        <Link to="/SignUp">
                            <Button bsStyle="primary">  Sign up</Button>
                        </Link>

                    </Jumbotron>
                </Row>
                   
                {this.state.packages.map((program)=>{
                    return(
                        <Row>
                        <Jumbotron>
                          <div>
                            <h2>{program.name}</h2>
                            {program.classes.map((discipline)=>{
                                return(
                                    <div>
                                    <h3>{discipline.name}</h3>
                                    <h5>{discipline.description}</h5>
                                    {/* <h1>Annoucement!!:{discipline.posts.lengeth}</h1> */}
                                    </div>
                                )
                            })}
                            </div>

                            <h1>Get Started Today! </h1>

                            <Link to="/SignUp">
                                <Button bsStyle="primary">  Sign up</Button>
                            </Link>
    
                        </Jumbotron>
                    </Row>
                    )
                })}

                {/* <Row className="show-grid text-center">
                <div>
                    {this.state.disciplines.map((discipline) => {
                        return (
                            
                            <Col xs={12} sm={3} className="person-wrapper" eventKey={discipline.id}>
                                
                                 <Image src='https://www.placecage.com/200/200' className="profile-pic" />
                                <h3>{discipline.name}</h3>
                                <p>{discipline.description}</p>

                                {discipline.posts.map((annoucement)=>{
                                    return(
                                       <p>Annoucement: {annoucement.body}</p> 
                                    )
                                })}

                            </Col>
                           
                        )
                    })}
                   </div>
                </Row> */}
            </Grid>
        );
    }
}

export default Home;