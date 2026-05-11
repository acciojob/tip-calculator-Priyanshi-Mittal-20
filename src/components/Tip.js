import React from 'react'
import { useState } from 'react'

const Tip = () => {
  const [bill,setBill]=useState(50)
  const [tipPercentage,setTipPercentage]=useState(18)
  const [people,setPeople]=useState(1)
  const [amt,setAmt]=useState(0)
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
  function handleClick()
  {
    setAmt((
    ((bill * tipPercentage) / 100) / people
  ).toFixed(2))
  }
  return (
    <div>
      <label htmlFor='billamt'>Bill:</label>
      <input type="number" id="billamt" value={bill} onChange={handleBill}/>
      <label htmlFor='serviceQual'>Tip Percentage:</label>
      <input type="number" id="serviceQual" value={tipPercentage} onChange={handleTipPercentage} />
      <label htmlFor='peopleamt'>Number of People:</label>
      <input type="number" id="peopleamt" value={people} onChange={handlePeople} />
      <button onClick={handleClick}>Calculate</button>
      <p id="totalTip">${amt} each</p>
    </div>
  )
}

export default Tip
