import React, { useState, useRef } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../Utils/firebase";

function Upload() {
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState();
  const pauseRef = useRef();
  const resumeRef = useRef();
  const cancelRef = useRef();

  const handleUpload = (e) => {
    e.preventDefault();
    console.log("Clicked");
    let fileRef = ref(storage, `images/${selectedFile.name}`);
    
    const uploadTask = uploadBytesResumable(fileRef, selectedFile);
    

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        switch (snapshot.state) {
          case "paused":
            console.log("upload is paused");
            break;
          case "running":
            console.log("upload is running");
            break;
          case "success":
            console.log("upload is successful");
            break;
          default:
            break;
        }

        setProgress(progress);
      },
      (error) => {
        console.log(error);
        setProgress(progress)
      },

      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl)=>{
          console.log(`Check out the file ${downloadUrl}`);
        })
     
      }
    );

    pauseRef.current.addEventListener('click',()=>{
      uploadTask.pause();
    });
    resumeRef.current.addEventListener('click', ()=>{
      uploadTask.resume();
    });
    cancelRef.current.addEventListener('click', ()=>{
      uploadTask.cancel();
    });

    
  };
  const handleChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  

  return (
    <>
      <form onSubmit={(e) => handleUpload(e)}>
        <div className="form-group">
          <label>File</label>
          <h3>{progress}%</h3>
          <progress value={progress} max="100git"></progress>
          <input   className="form-control" type="file" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">
          Upload File
        </button>
      </form>
      <hr/>
      <div className="form-group">
      <button className="btn btn-warning" ref={pauseRef}>PAUSE</button>
      <br/>
      <button className="btn btn-success" ref={resumeRef}>RESUME</button>
      <br/>
      <button className="btn btn-danger" ref={cancelRef}>CANCEL</button>


      </div>
    </>
  );
}

export default Upload;
