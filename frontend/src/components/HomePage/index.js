import {useSelector} from 'react-redux'
import {Redirect, useHistory} from 'react-router-dom'
import UpcomingShiftsModals from '../UpcomingShiftsModals'
import RecentShifters from '../RecentShifters'
import './HomePage.css'

function HomePage() {
  const history = useHistory()
  const sessionUser = useSelector((state) => state.session.user)
  
  if(!sessionUser){ 
    return <Redirect to='/'/>
    
  }

  const newFormhandle = e => {
    e.preventDefault()
    history.push('/newShiftForm')
  }

  return (
  <>
    <h2>{`${sessionUser.username}'s dashboard`}</h2>
    <div className='big3Components'>
      <button onClick={newFormhandle}>create a new shift</button>
      <UpcomingShiftsModals />
      <RecentShifters />
    </div>
  </>
  )
  
}

export default HomePage