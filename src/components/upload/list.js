import React, { useState, useEffect } from "react";
import { storage } from "../../Utils/firebase";
import { ref, listAll, getDownloadURL, deleteObject } from "firebase/storage";
function ListUploads() {
  const [image, setImage] = useState([]);
  const listRef = ref(storage, "images");
  useEffect(() => {
    grabImages();

    return () => {};
  }, [image]);

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

  function handleDelete(){
  
  }

  return (
    <ul>
      {image.map((item, i) => (
        <li key={i}>
          {item.name}
          <br/>
          <a className="btn btn-info" href={item.link}>Open me</a>
          <br/>
          <button onClick={() => handleDelete(i)} className="btn btn-warning">DELETE</button>
          <br/>
          <br/>
        </li>
      ))}
    </ul>
  );
}

export default ListUploads;
