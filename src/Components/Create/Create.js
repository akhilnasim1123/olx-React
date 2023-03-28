import React, { Fragment,useContext,useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext,FirebaseContext } from '../../store/FirebaseContext';
import { useHistory } from 'react-router-dom';
const Create = () => {
  const {user}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  const [name,setName]=useState('')
  const [category,setCategory]=useState('')
  const [Price,setPrice]=useState('')
  const [image,setImage]=useState(null)
  const history = useHistory()
  const date = new Date()
  const handleFormSubmit=()=>{
      firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
        ref.getDownloadURL().then((url)=>{
          console.log(url)
          firebase.firestore().collection('products').add({
            name,
            category,
            Price,
            url,
            userId:user.uid,
            createAt:date.toDateString()
          })
          history.push('/')
        })
      })
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              onChange={(e)=>{
                setName(e.target.value)
              }}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price"               
            onChange={(e)=>{
                setPrice(e.target.value)
              }}/>
            <br />
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image):""}></img>
            <br />
            <input type="file" onChange={(e)=>{
              setImage(e.target.files[0])
            }}/>
            <br />
            <button onClick={handleFormSubmit} className="uploadBtn">upload and Submit</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
