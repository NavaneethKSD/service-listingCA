import React from "react";
import ServiceCard from "./components/ServiceCard";

const App = () =>{
  return (
    <div >
      <ServiceCard
        title="Web Development"
        description= "Web development is the future"
      />

      <ServiceCard
        title="Full Stack"
        description= "Full Stack is a highly paid job"
      />
    </div>
  )
};

export default App;