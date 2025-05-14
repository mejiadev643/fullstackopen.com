import { useState } from 'react'
import './App.css'
function StatisticLine({ text, value, unit }) {
  return (

    <tr>
      <td>{text}</td>
      {/* <td>: </td> */}
      <td>{value} {unit}</td>
    </tr>

  )
}
function Statistics({ good, neutral, bad }) {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given</p>
  }
  return (
    <>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + neutral + bad} />
          <StatisticLine
            text="average"
            value={((good * 1) + (neutral * 0) + (bad * -1)) / (good + neutral + bad) || 0}
            unit=""
          />
          <StatisticLine
            text="positive"
            value={((good) / (good + neutral + bad)) * 100 || 0}
            unit="%"
          />
        </tbody>
      </table>
    </>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)} className='green'>good</button>
      <button onClick={() => setNeutral(neutral + 1)} className='blue'>neutral</button>
      <button onClick={() => setBad(bad + 1)} className='red'>bad</button>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
