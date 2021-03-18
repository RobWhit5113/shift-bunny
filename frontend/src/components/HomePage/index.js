import {useSelector, useDispatch} from 'react-redux'
import {Redirect, useHistory} from 'react-router-dom'
import UpcomingShiftsModals from '../UpcomingShiftsModals'
import RecentShifters from '../RecentShifters'
import Button from '@material-ui/core/Button';
import {getUserReviews} from '../../store/reviews'
import './HomePage.css'

function HomePage() {
  const history = useHistory()
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user)
  
  if(!sessionUser){ 
    return <Redirect to='/'/>
    
  }

  const newFormhandle = e => {
    e.preventDefault()
    history.push('/newShiftForm')
  }
  const recentShiftersHandle = async(e) => {
    e.preventDefault()
    await dispatch(getUserReviews())
    
    history.push('/recentShifters')

  }

  return (
  <>
    <h2>{`${sessionUser.username}'s dashboard`}</h2>
    <div className='big3Components'>
      <Button variant="contained" color="primary" onClick={newFormhandle}>create a new shift</Button>
      <UpcomingShiftsModals />
      <Button variant="contained" color="primary" onClick={recentShiftersHandle}>see your recent shifters here!</Button>
    </div>
  </>
  )
  
}

export default HomePage