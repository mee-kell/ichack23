import React, { useState } from 'react';
import { db } from '../firebase'
import { collection, addDoc } from "firebase/firestore"; 

const AddProject = () => {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const changeTitle = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    }

    const changeDescription = (e) => {
        e.preventDefault();
        setDesc(e.target.value);
    }

    const submitProject = async (e) => {
        e.preventDefault(); 
        try {
            const docRef = await addDoc(collection(db, "projects"), {
              title: title,    
              desc: desc,
              votes: 0
            }).then(() => {
                window.location.reload()
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
    
    return (
        <div className="nes-container is-rounded" id="suggestForm">
        <form className="addExperienceForm" onSubmit={submitProject}>
        <div class="nes-field">
          <h4>Suggest a project!</h4>
          <label>
            Title:
            <input
              type="text"
              name="title"
              class="nes-input"
              required
              onChange={changeTitle}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="desc"
              class="nes-input"
              required
              onChange={changeDescription}
            />
          </label>
          {/* <a class="nes-btn" href="#"> */}
            <input className="nes-btn" type="submit" value="Submit" />
          {/* </a> */}
        </div>
      </form>
      </div>
    );
}

export default AddProject;