import {useSelector} from 'react-redux'
import {Redirect, useHistory} from 'react-router-dom'

function HomePage() {
  const history = useHistory()
  const sessionUser = useSelector((state) => state.session.user)
  
console.log(sessionUser)
  if(!sessionUser){ 
    console.log('inside')
    console.log('redirect to splash page');
    // return <Redirect to='/'/>
  }

  return (
  <>
    <h1>Home sweet Home</h1>
  </>
  )
  
}

export default HomePage