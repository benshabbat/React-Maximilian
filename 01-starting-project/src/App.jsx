import Header from "./components/Header"
import Data from "./components/Data"
import UserInputs from "./components/UserInputs"
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(e) {
    const { value, name } = e.target;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }
  return (
    <>
    <Header/>
    <UserInputs data={data} handleChange={handleChange}/>
    <Data data={data} />
    </>
  )
}

export default App
