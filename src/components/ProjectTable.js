import React, { useEffect, useState } from 'react';
import { db } from '../firebase'
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import Backend from '../Backend';

const ProjectTable = () => {

    const [data, setData] = useState([]);
    const [entry, setEntry] = useState();

    const getProjects = async () => {
        await getDocs(collection(db, "projects"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setData(newData);
                console.log(data, newData);
            })
    }

    useEffect(() => {
        getProjects();
    }, []);

    const upvote = (doc) => {
        setEntry(doc);
        console.log(entry)
    }

    useEffect(() => {
        console.log("use")
        async function fetchData() {
            const docRef = doc(db, "projects", entry.id);
            console.log(docRef);
            const newVotes = entry.votes + 1;
            console.log(newVotes);
            await updateDoc(docRef, {
                votes: newVotes
            });
        }
        fetchData();
    }, [entry])

    const buildRow = (project) => {
        return (
            <div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <p>{project.votes}</p>
                <button onClick={() => upvote(project)}>Upvote</button>
                <Backend subject={project.desc}/>
            </div>
        )
    }

    return (
        <div className="table">
            {data.map((project, i) => buildRow(project))}
        </div>
    );
}

export default ProjectTable;