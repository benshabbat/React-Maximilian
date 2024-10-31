import Header from "./components/Header"
import Data from "./components/Data"
import UserInputs from "./components/UserInputs"
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleChange(e) {
    const { value, name } = e.traget;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }
  return (
    <>
    <Header/>
    <UserInputs handleChange={handleChange}/>
    <Data/>
    </>
  )
}

export default App
