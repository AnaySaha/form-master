
import './App.css'
import ReuseableForm from './assets/components/ReuseableForm/ReuseableForm'
// import HookFrom from './assets/components/HookForm/HookFrom'
// import RefFrom from './assets/components/RefFrom/RefFrom'
// import StatefulForm from './assets/StatefulForm/StatefulForm'
// import SimpleFrom from './assets/components/SimpleFrom/SimpleFrom'

function App() {

  return (
    <>

      <h1>Vite + React</h1>
      {/* <SimpleFrom></SimpleFrom> */}
      {/* <StatefulForm></StatefulForm>
      <RefFrom></RefFrom> */}
    {/* <HookFrom></HookFrom> */}
    <ReuseableForm formTitle={'Sign Up'}></ReuseableForm>
    <ReuseableForm formTitle={'Sign Up'}></ReuseableForm>
    </>
  )
}

export default App
