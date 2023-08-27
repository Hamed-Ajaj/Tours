import { useState,useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = 'https://course-api.com/react-tours-project'
function App() {


  // @ variable
  const [tours,setTours] = useState()
  const [isLoading,setLoading] = useState(true)
  // delete tour
  const deleteTour = (id) =>{
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }
  // fetch tour
  const FetchTour = ()=>{
    try{
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setTours(data)
      setLoading(false)
    })
   
    }catch(err){
      setLoading(false)
      console.log(err);
    }
  }
  useEffect(() =>{
    FetchTour()
  },[])

// return values
 if(isLoading){
  return(
    <main>
      <Loading />
    </main>
  )
 }
 if(tours.length === 0){
  return(
    <main>
      <div className="title">
        <h2>No Tours Left</h2>
        <button className="btn" onClick={FetchTour}>Refresh</button>
      </div>
    </main>
  )
 }

  return (
    <main>
      <Tours tours={tours} deleteTour={deleteTour}/>
    </main>
  );
}

export default App;
