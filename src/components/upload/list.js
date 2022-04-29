import React, {useState, useEffect } from 'react';
import { storage, } from '../../Utils/firebase';
import {ref, listAll} from 'firebase/storage';
function ListUploads() {
const [image, setImage] = useState([])
const listRef = ref(storage, 'images');
    useEffect(() => {
     grabImages()
    
      return () => {
        
      };
    }, [])

    function grabImages() {
        listAll(listRef)
        .then((res) =>{
            
            res.items.forEach((itemRef) =>{
               image.push(itemRef)
        
            })
            setImage(image);
        
        }).catch((error)=>{
            console.log(error);
        })
    }

    

  return (
    <ul>
    {image.map((item, i) =>(
        <li key={i}>{item.name}</li>
    )) 
    }</ul>
  )
}

export default ListUploads;