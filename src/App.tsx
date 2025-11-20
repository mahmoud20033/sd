import  { useState } from 'react'

const App = () => {
  const [sum, setSum] = useState(0);
  return <div>
    <button onClick={()=>setSum(Math.random() *100)}>
      {sum}
    </button>
  </div>
}
export default App