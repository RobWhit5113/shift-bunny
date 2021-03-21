import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

function RecentShifters() {
  const reviews = useSelector((state) => state?.reviews)
  const workers = useSelector((state) => state?.workers)

  
  
  return (
    <div>
      
    </div>
  )
}

export default RecentShifters