import React, { useState } from "react";
import {ref,uploadBytesResumable} from "firebase/storage";
import {storage} from "../../Utils/firebase";

function Upload() {
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState();

  const handleUpload = (e) => {
    e.preventDefault();
    console.log("Clicked");
   let fileRef = ref(storage, `images/${selectedFile.name}`);

   const  uploadTask = uploadBytesResumable(fileRef, selectedFile)

   uploadTask.on('state_changed',(snapshot)=>{
     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
     setProgress(progress)
   })
    
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
          <input className="form-control" type="file" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">
          Upload File
        </button>
      </form>
    </>
  );
}

export default Upload;
