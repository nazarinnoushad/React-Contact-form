/*import React, { useRef } from "react"

function App() {

const input = useRef ()
const ChangePlaceholder = (e) =>{
  e.preventDefault()
  console.log(input);
  input.current.placeholder="Hey there"
  input.current.focus()
  input.current.value="hi"
}
  return (
<div className=" ">

<div>
<form className="">
          <input value="myname" ref ={input}  className="" type="text" placeholder="Enter Something...."/>
          <button className=" " onClick={ChangePlaceholder}>Change the placeholder</button>
          </form>
</div>



</div>
    
  )
}

export default App*/




import Contact from "./components/Contact";
const App = () => {
  return (
    <div>
   
      <Contact/>
    </div>
  );
};

export default App;
