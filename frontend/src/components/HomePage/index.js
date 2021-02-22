import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import './HomePage.css'

function HomePage() {
  const sessionUser = useSelector((state) => state.session.user)
  
  if(!sessionUser){ 
    return <Redirect to='/'/>
  }

  return (
  <>
    <h1>Home sweet Home</h1>
  </>
  )
  
}

export default HomePage