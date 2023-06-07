import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'


const App = () => {

  // let url = "https://newsapi.org/v2/everything?q=Apple&from=2023-04-08&sortBy=popularity&apiKey=d43b77bd276d4b7caa5e4d6f8e630c33";

  // let req = new Request(url);
  
  //   fetch(req)
  //     .then(function(response) {
  //       console.log(response.json());
  //     })

  // // const [backData, setBackData] = useState([{}])

  // // useEffect(() => {
  // //   fetch("/api").then(
  // //     response => response.json()
  // //     ).then(
  // //       data => {
  // //         setBackData(data)
  // //       }
      
  // //   )
  // // },[] )
  return (
    <div>

    <Home />
    <Navbar />

    </div>
  )
}

export default App