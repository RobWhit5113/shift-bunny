import './SplashPage.css'
import LoginFormModal from '../LoginFormModal'
import SignupFormModal from '../SignupFormModal'
import DemoUser from '../DemoUser'



const SplashPage = () => {

  return(
    <div className='whole-splash'>
      <div className='logo-splash'>
        <img src='/images/shift-bunny-logo.png'/>
      </div>  
      <div className='title'>
        <h2>...high quality talent, one hop away</h2>
      </div>
      <div className='buttons'>
        <div className='signup-splash'>
          <h3>click here to join us!</h3>
          <SignupFormModal />
        </div>
        <div className='demo-splash'>
          <h3> click here to give us a try</h3>
          <DemoUser />
        </div> 
      </div>
    </div>
  )
}
export default SplashPage