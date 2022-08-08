import { useState } from "react"

function Coffee() {
  const [coffeeList, setCoffeeList] = useState()
  const getCoffee = (temperature) => {
    //fetch coffee api
    fetch(`https://api.sampleapis.com/coffee/${temperature}`)
      .then((results) => results.json())
      .then((data) => setCoffeeList(data))
      .catch((err) => alert(err));
    //`https://api.sampleapis.com/coffee/${temperature}`
    //results dump into setCoffeList
  }

 // const getCoffeeSync = async (temperature) => {
   // try {

//const result = await fetch(`https://api.sampleapis.com/coffee/${temperature}`);
//const data = await result.json();
//setCoffeeList(data);
 // }
  //catch(err){
   // alert(err);
 // }
 // }
  return (
    <>
      <button onClick={() => getCoffee("hot")}>HOT</button> //add sync to getCoffeeSync
      <button onClick={() => getCoffee("iced")}>ICED</button> //add sync to getCoffeeSync

      <section>
        <h2>Coffee List</h2>
        {!coffeeList ? (
          <p>Loading...</p>
        ) : (
          coffeeList.map((coffee) => <p key={coffee.id}>{coffee.title}</p>)
        )}
      </section>
    </>
  )
}

export default Coffee
