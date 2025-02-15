import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import BioData from './components/BioData';
import IncDec from './components/incDec';
import ToDoList from './components/ToDoList';

const bioDataInfo= [
  {
    user: "Mohammad",
    email: "MohammadBayajeed@gmail.com",
    phone: "01700000000",
    skills: ["HTML", "CSS", "JS", "React", "Node"],
    interest: ["Web Development", "AI"]
  },
  {
    user: "Bayajeed",
    email: "bayajeedbd@gmail.com",
    phone: "01700000000",
    skills: ["HTML", "CSS", "JS", "React", "Node"],
    interest: ["Web Development", "AI"]
  }
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToDoList />
      <IncDec />
      {bioDataInfo.map((bioData)=>(
        <BioData
          user = {bioData.user}
          email = {bioData.email}
          phone = {bioData.phone}
          skills = {bioData.skills}
          interest = {bioData.interest}
        />
      ))}

        <hr />

      {/* <h1>Welcome to our React Jurny</h1>
      <BioData
        user = "Mohammad"
        email = "bayajeedbdj@gmail.com"
        skills = {['HTML', 'CSS', 'JS', 'React', 'Node']}
        interest = {['Web Development', 'AI']}
      />
      <hr />
      <BioData
        user = "Bayajeed"
        phone = "01700000000"
        skills = {["HTML", "CSS", '"JS"', '"React"', '"Node"']}
        interest = {['"Web Development"', '"App Development"', 'A"I']}
      /> */}
    </>
  )
}

export default App

/**
 * 3 rules to be a component
 * 1. It should be a function
 * 2. That function should return something
 * 3. That something should be a JSX / html-ish code
 * 
 */
