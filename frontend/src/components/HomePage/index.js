import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import UpcomingShifts from '../UpcomingShifts'
import NewShiftFormModal from '../NewShiftFormModal'
import RecentShifters from '../RecentShifters'
import './HomePage.css'

function HomePage() {
  const sessionUser = useSelector((state) => state.session.user)
  
  if(!sessionUser){ 
    return <Redirect to='/'/>
  }

  return (
  <>
    <h1>{`${sessionUser.username}'s dashboard`}</h1>
    <div className='big3Components'>
      <NewShiftFormModal />
      <UpcomingShifts />
      <RecentShifters />
    </div>
  </>
  )
  
}

export default HomePage