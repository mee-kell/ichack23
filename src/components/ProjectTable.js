import React, { useEffect, useState } from 'react';
import { db } from '../firebase'
import { collection, getDocs } from "firebase/firestore";

const ProjectTable = () => {

    const [data, setData] = useState([]);

    // db.collection('projects').onSnapshot(function (querySnapshot) {
    //     const data = [];
    //     querySnapshot.forEach( doc => {
    //         data.push({ name: doc.data().title, desc: doc.data().desc })
    //     })
    //     setdata(data);
    // })
  

    const getProjects = async () => {
        // let projects = [];
        // const querySnapshot = await getDocs(collection(db, "projects"));
        // querySnapshot.forEach((doc) => {
        //     // doc.data() is never undefined for query doc snapshots
        //     console.log(doc.id, " => ", doc.data());
        //     projects.push(doc.data());
        // });
        // setdatabase(projects);
        await getDocs(collection(db, "projects"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setData(newData);                
                console.log(data, newData);
            })
    }

    useEffect(() => {
        getProjects();
    }, []);

    const buildRow = (project) => {
        return (
            <div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <p>{project.votes}</p>
            </div>
        )
    }

    return (
        <div className="table">

            <p>{data.map((project, i) => buildRow(project))}</p>

        {/* <h1> Table of Community Projects </h1>  
            
        <table BORDER CELLPADDING="4">
        <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        </tr>
        </table> */}
            
        </div>
    );
}

export default ProjectTable;