export const firebaseLooper = (snapshot) => {


return snapshot.docs.map(doc => doc.data())


}