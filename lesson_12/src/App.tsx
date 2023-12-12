import './App.css'

import Accordion from './components/Accordion/Accordion'
import Counter from './components/Counter/Counter'

function App() {
  return (
    <>
      <Accordion title={"Title"}>
        <h3>Content</h3>
      </Accordion>
      <Counter />
    </>
  )
}

export default App
