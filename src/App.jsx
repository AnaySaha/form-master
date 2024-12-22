
import './App.css'
import Grandpa from './assets/components/Grandpa/Grandpa';
// import ReuseableForm from './assets/components/ReuseableForm/ReuseableForm'
// import HookFrom from './assets/components/HookForm/HookFrom'
// import RefFrom from './assets/components/RefFrom/RefFrom'
// import StatefulForm from './assets/StatefulForm/StatefulForm'
// import SimpleFrom from './assets/components/SimpleFrom/SimpleFrom'

function App() {

  const handleSingUpSubmit = data =>{
    console.log('sign up data', data);
  }

  const handleUpdateProfile = data =>{
   console.log('update profile', data);
  }

  return (
    <>

      <h1>Vite + React</h1>
      <Grandpa></Grandpa>
      {/* <SimpleFrom></SimpleFrom> */}
      {/* <StatefulForm></StatefulForm>
      <RefFrom></RefFrom> */}
    {/* <HookFrom></HookFrom> */}
    {/* <ReuseableForm formTitle={'Sign Up'}
    handleSubmit={handleSingUpSubmit}> */}
      {/* <div>
        <h2>Sign up</h2>
        <p>nfhbhbfj</p>
      </div>
    </ReuseableForm> */}
    {/* <ReuseableForm formTitle={'Profile Update'}
    handleSubmit={handleUpdateProfile}
    submitBtnText='Update '></ReuseableForm> */}
    </>
  )
}

export default App
