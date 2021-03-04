import {useHistory} from 'react-router-dom'


function CreationSuccess() {
  const history = useHistory()

  const backHome = (e) =>{
    e.preventDefault()
    history.push('/home')
  } 

  return (
    <>
      <h1>You have created a new Shift!</h1>
      <button onClick={backHome}>Back to home</button>
    </>
    )

  
}

export default CreationSuccess