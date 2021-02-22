import './SplashPage.css'
import LoginFormModal from '../LoginFormModal'
import SignupFormModal from '../SignupFormModal'
import DemoUser from '../DemoUser'



const SplashPage = () => {

  return(
    <div className='whole-splash'>
      <div className='title'>
        <h1>Welcome to Shift-Bunny!</h1>
        <img src='/images/shift-bunny-logo.png'/>
      <div className='logo'>
      </div>
      </div>  
      <div className='buttons'>
        <LoginFormModal />
        <SignupFormModal />
        <DemoUser />
      </div>
    </div>
  )
}
export default SplashPage