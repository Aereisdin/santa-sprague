import React, { useState, useContext, useEffect} from "react";
import API from "../utils/API";
import UserContext from "../utils/UserContext";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// needs useEffect to re-render page as well as api call checked and radio buttons messed with
function EditProfileModal() {
    const [modal, setModal] = useState(false);

    const {user, update} = useContext(UserContext);

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
    update({
        color: Color,
        animal: Animal,
        sportTeam: SportTeam,
        waistSize: WaistSize,
        shirtSize: ShirtSize,
        shoeSize: ShoeSize,
        hobbies: Hobbies,
        note: Note,
    })
    setModal(false)
  }
    
    return (
        <>
        <Button onClick={()=>setModal(true)}>Edit Profile</Button>

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
                            <input className="form-input" type="text" id="animal" defaultValue={Animal} onChange={event => setAnimal(event.target.defaultValue)} />
                        </div>
                        <div className="col">
                            <label htmlFor="sportTeamLabel">Favorite Sports Team:</label>
                            <input className="form-input" type="text" id="sportTeam" defaultValue={SportTeam} onChange={event => setSportTeam(event.target.defaultValue)} />
                        </div>
                        <div className="col">
                            <label htmlFor="hobbiesLabel">Hobbies:</label>
                            <input className="form-input" type="text" id="hobbies" defaultValue={Hobbies} onChange={event => setHobbies(event.target.defaultValue)} />
                        </div>
                        <div className="col">
                            <label htmlFor="waistSizeLabel">Waist Size:</label>
                            <input className="form-input" type="text" id="waistSize" defaultValue={WaistSize} onChange={event => setWaistSize(event.target.defaultValue)} />
                        </div>
                        <div className="col">
                            <label htmlFor="shirtSizeLabel">Shirt Size:</label>
                            <input className="form-input" type="text" id="shirtSize" defaultValue={ShirtSize} onChange={event => setShirtSize(event.target.defaultValue)} />
                        </div>
                        <div className="col">
                            <label htmlFor="shoeSizeLabel">Shoe Size:</label>
                            <input className="form-input" type="text" id="shoeSize" defaultValue={ShoeSize} onChange={event => setShoeSize(event.target.defaultValue)} />
                        </div>
                    </section>
                    
                    <section className="row plant_edit_3">
                        <div className="col-12">
                            <label htmlFor="note">Note:</label>
                            <textarea name="note" id="note" cols="45" defaultValue={Note} onChange={event => setNote(event.target.defaultValue)}></textarea>
                        </div>
                    </section>
                    <Modal.Footer>
                        <Button  onClick={() => updateProfile()}>Save</Button>
                        <Button  onClick={()=>setModal(false)}>Close</Button>
                    </Modal.Footer>
                </form>
            </Modal.Body>
        </Modal>
        </>
    );
}

export default EditProfileModal;