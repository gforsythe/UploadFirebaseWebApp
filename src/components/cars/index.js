import React, { useEffect, useState } from "react";
import { db } from "../../Utils/firebase";
import { collection, getDocs, onSnapshot} from "firebase/firestore";
import { firebaseLooper } from "../../Utils/tools";
import Form from './Form';
function Cars() {
  const [cars, setCars] = useState([{name: "PLEASE STAND BY", id:"LOADING ..."}]);
  const carRef = collection(db, "cars");

  useEffect(
      () => {
  //           //gets all id and data - onSnapshot is a live call to database, getDocs does not => snapshot shoots through requests.

  //     //  onSnapshot(carRef, (snapshot) => setCars(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
  //     // )

    getDocs(carRef).then((snapshot) => {
      
      setCars(snapshot.docs.map((doc) => 
      
      ({...doc.data(), id: doc.id})))
   
  })
      },[]);

  
  return (
    <>
    <Form/>
    <hr/>
      <table className="table table-dark">
        <thead>
        
            
          <tr>
            <th>ID</th>
           
            <th>BRAND</th>
           
            <th>COLOUR</th>
            <th>PRICE</th>
            <th>Taken</th>
           <th>
          
           </th>
          </tr>
     
        </thead>
        <tbody>
        {cars.map((car )=> (
                
                <tr key={car.id} >
                    <td  href="#">{car.id}</td>
                    <td  href="#">{car.brand}</td>
                    <td  href="#">{car.colour}</td>
                    <td  href="#">{car.price}</td>
                    <td  href="#">{car.taken}</td>
                </tr>  
                
            ))}
        </tbody>
      </table>
      
    </>
  );
}

export default Cars;
