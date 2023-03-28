import React,{useContext,useEffect,useState} from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import {PostDetailsContext} from '../../store/PostContext';
import './View.css';
function View() {
  const [userDetails,setUserDetails]=useState()
  const {firebase} = useContext(FirebaseContext)
  const {postDetails}=useContext(PostDetailsContext)
  useEffect(()=>{
    const {userId} = postDetails
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc=>{
        setUserDetails(doc.data())
      })
    })
  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.Price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createAt}</span>
        </div>
     {userDetails &&   <div className="contactDetails">
        <p>Seller details</p>
          <p>{postDetails.username}</p>
          <p>{postDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
