import React, { useState, useEffect } from "react";
import { storage } from "../../Utils/firebase";
import { ref, listAll, getDownloadURL,deleteObject } from "firebase/storage";
function ListUploads() {
  const [image, setImage] = useState([]);
  const listRef = ref(storage, "images");
  useEffect(() => {
    
    return () => {
      
      grabImages() ;
    };
   
  }, []);
 
  function grabImages() {
    listAll(listRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          getDownloadURL(itemRef).then((downloadURL) => {
            image.push({
              name: itemRef.name,
              link: downloadURL,
            });
          });
        });
        setImage(image);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleDelete(name){
    let pictureRef = ref(storage, `images/${name}`);
    deleteObject(pictureRef).then(()=>{
      alert("Item is deleted")

    }).catch((error) =>{
      console.log("whoops this is the error",error);
    }) 
  }

  return (
    <ul>
      {image.map((item, i) => (
        <li key={i}>
          {item.name}
          <br/>
          <a className="btn btn-info" href={item.link}>Open me</a>
          <br/>
          <button onClick={() => handleDelete(item.name)} className="btn btn-warning">DELETE</button>
          <br/>
          <br/>
        </li>
      ))}
    </ul>
  );
}

export default ListUploads;
