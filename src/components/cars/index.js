import React, { useEffect, useState } from "react";
import { db } from "../../Utils/firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { firebaseLooper } from "../../Utils/tools";
function Cars() {
  const [cars, setCars] = useState(null);
  const carRef = collection(db, "cars");

  useEffect(() => {
      const unsub = onSnapshot(collection(db, 'cars'), (snapshot) => {
          snapshot.docs.map(doc => doc.data());
      });

      return unsub;
    // getDocs(carRef).then((snapshot) => {
    //   const cars = firebaseLooper(snapshot);
    //   setCars(cars);
    //   cars.map((data, i, doc) => {
    //     console.log( "getDocs",data.taken, data.brand, data.price, data.colour);
      
    //   })
    // });
  }, []);

  
  return (
    <>
      <table className="table table-dark">
        <tbody>
            
          <tr>
            <th>ID</th>
            <th>BRAND</th>
            <th>COLOUR</th>
            <th>PRICE</th>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Cars;
