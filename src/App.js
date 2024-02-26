import axios from "axios";
import { useEffect, useState } from "react";
import UseReff from "./Ref";

const App = () => {
  const [request, setRequest] = useState([])

  useEffect(() => {
    const Fn = async () => {
      await axios.get('https://jsonplaceholder.typicode.com/posts?limit=30')
        .then(data => {
          setRequest(data.data)
        })
    }
    Fn()
  },[])

  return (
    <div className="">
      <div className="body">
        {request.map(title => {
            return(
              <p>{title.title}</p>
            )
          })}
      </div>
        <UseReff/>
    </div>
  )
}

export default App