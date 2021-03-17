import {useSelector} from 'react-redux'
import {Redirect, useHistory} from 'react-router-dom'
import UpcomingShiftsModals from '../UpcomingShiftsModals'
import RecentShifters from '../RecentShifters'
import Button from '@material-ui/core/Button';
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
      <Button variant="contained" color="primary" onClick={newFormhandle}>create a new shift</Button>
      <UpcomingShiftsModals />
      <RecentShifters />
    </div>
  </>
  )
  
}

export default HomePage