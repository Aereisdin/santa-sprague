import React, { useContext, useState } from 'react';
import UserContext from '../utils/UserContext';
import API from '../utils/API';
import { Container, Row, Col, Image, Button, Modal } from 'react-bootstrap';

export default function Users() {

    const { user } = useContext(UserContext);

    const [modal, setModal] = useState(false);

    const [Color, setColor] = useState(user.color);
    const [Animal, setAnimal] = useState(user.animal);
    const [SportTeam, setSportTeam] = useState(user.sportTeam);
    const [WaistSize, setWaistSize] = useState(user.waistSize);
    const [ShirtSize, setShirtSize] = useState(user.shirtSize);
    const [ShoeSize , setShoeSize]= useState(user.shoeSize);
    const [Hobbies, setHobbies] = useState(user.hobbies);
    const [Note, setNote] = useState(user.note);

    const updateProfile = async ()=> {
        const body = {
         color: Color ,
         animal: Animal , 
         sportTeam: SportTeam , 
         waistSize: WaistSize , 
         shirtSize: ShirtSize , 
         shoeSize: ShoeSize , 
         hobbies: Hobbies , 
         note: Note , 
         }

         API.updateUser(user.id , body)  
         .catch(err => { console.error(err) })

         setModal(false)
    }
         
    return (
        <>
        <Container className="user" fluid>
            <Row className="filler"></Row>   
            <Row className="justify-content-around">
                <Col xs={10} sm={10} md={4} lg={4} className="profile-photo">
                    { user.photo ? <Image src={user.photo} thumbnail fluid/>:
                    <Image src="./photos/image.png" className="profile-photo" thumbnail /> }
                </Col>
            <Col>
            <Row className="justify-content-around">
                <Col xs={10} sm={10} md={8} lg={7} className="profile-head text-center">
                    <h1>{user.name}'s Profile</h1><br/>
                    <h4>This is where you have a chance to influence the person shopping for you.</h4>
                </Col>
            </Row>
            <Row className="filler"></Row>  
                    <Row className="justify-content-around">  
                        <Col xs={10} sm={10} md={10} lg={4} className="profile-list text-start">
                            <h3>Favorite Color:</h3>
                            <ul>
                                <li><h4>{Color}</h4></li>
                            </ul>
                            <h3>Favorite Animal:</h3>
                            <ul>
                                <li><h4>{Animal}</h4></li>
                            </ul>
                
                            <h3>Favorite Sports Team:</h3>
                            <ul>
                                <li><h4>{SportTeam}</h4></li>
                            </ul>
                
                            <h3>Hobbies:</h3>
                            <ul>
                                <li><h4>{Hobbies}</h4></li>
                            </ul>
                        
                            <h3>Waist Size:</h3>
                            <ul>
                                <li><h4>{WaistSize}</h4></li>
                            </ul>
                    
                            <h3>Shirt Size:</h3>
                            <ul>
                                <li><h4>{ShirtSize}</h4></li>
                            </ul>
                    
                            <h3>Shoe Size:</h3>
                            <ul>
                                <li><h4>{ShoeSize}</h4></li>
                            </ul>
                        </Col>
                        <Col xs={10} sm={10} md={10} lg={6} className="profile-list"><h2 className="text-start">Note:</h2><h4>{Note}</h4></Col>
                </Row>
                     <Row className="justify-content-around">
                     <Row className="filler"></Row>  
                     <Button style={{width: "50%", fontSize: "1.75em", color: "#ffee59"}} onClick={()=>setModal(true)}>Edit Profile</Button>

                        <Modal aria-labelledby="contained-modal-title-vcenter" centered show={modal} onHide={() => setModal(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                    <h5 className="modal-title" id="modal2{user.id}Label">Editor ... {user.name}'s Profile</h5>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form>
                                    <section className="row profile_edit_1">
                                        <div className="col">
                                            <label htmlFor="colorLabel">Favorite Color:</label>
                                            <input className="form-input" type="text" id="color" defaultValue={Color} onChange={event => setColor(event.target.value)} />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="animalLabel">Favorite Animal:</label>
                                            <input className="form-input" type="text" id="animal" defaultValue={Animal} onChange={event => setAnimal(event.target.value)} />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="sportTeamLabel">Favorite Sports Team:</label>
                                            <input className="form-input" type="text" id="sportTeam" defaultValue={SportTeam} onChange={event => setSportTeam(event.target.value)} />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="hobbiesLabel">Hobbies:</label>
                                            <input className="form-input" type="text" id="hobbies" defaultValue={Hobbies} onChange={event => setHobbies(event.target.value)} />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="waistSizeLabel">Waist Size:</label>
                                            <input className="form-input" type="text" id="waistSize" defaultValue={WaistSize} onChange={event => setWaistSize(event.target.value)} />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="shirtSizeLabel">Shirt Size:</label>
                                            <input className="form-input" type="text" id="shirtSize" defaultValue={ShirtSize} onChange={event => setShirtSize(event.target.value)} />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="shoeSizeLabel">Shoe Size:</label>
                                            <input className="form-input" type="text" id="shoeSize" defaultValue={ShoeSize} onChange={event => setShoeSize(event.target.value)} />
                                        </div>
                                    </section>
                                    
                                    <section className="row plant_edit_3">
                                        <div className="col-12">
                                            <label htmlFor="note">Note:</label>
                                            <textarea name="note" id="note" cols="45" defaultValue={Note} onChange={event => setNote(event.target.value)}></textarea>
                                        </div>
                                    </section>
                                    <Modal.Footer>
                                        <Button  onClick={() => updateProfile()}>Save</Button>
                                        <Button  onClick={()=>setModal(false)}>Close</Button>
                                    </Modal.Footer>
                                </form>
                            </Modal.Body>
                        </Modal>
                     </Row>
                </Col>
            </Row>
            <Row className="spark"></Row>
        </Container>
        </>
    )
}

