import React from 'react'
import { useState } from 'react'

const Tip = () => {
  const [bill,setBill]=useState(50)
  const [tipPercentage,setTipPercentage]=useState(18)
  const [people,setPeople]=useState(1)
  function handleBill(e)
  {
    setBill(e.target.value)
  }
  function handleTipPercentage(e)
  {
    setTipPercentage(e.target.value)
  }
  function handlePeople(e)
  {
    setPeople(e.target.value)
  }
  return (
    <div>
      <label htmlFor='bill'>Bill:</label>
      <input type="number" id="bill" value={bill} onChange={handleBill}/>
      <label htmlFor='tipPercentage'>Tip Percentage:</label>
      <input type="number" id="tipPercentage" value={tipPercentage} onChange={handleTipPercentage} />
      <label htmlFor='numberOfPeople'>Number of People:</label>
      <input type="number" id="numberOfPeople" value={people} onChange={handlePeople} />
      <p>Tip Per Person: ${((+bill+ +tipPercentage)/(+people)).toFixed(2)}</p>
    </div>
  )
}

export default Tip
