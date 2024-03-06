import { GoogleLogin } from '@react-oauth/google';

const clientId = '561113172158-hqkceca5j9ths3qebkcb0b70cn7mf0dk.apps.googleusercontent.com';

function Login() {

  const onSuccess = (res) => {
    console.log("Login OK", res);
    console.log(res.profileObj)
  }

  const onFailure = (res) => {
    console.log("Failure", res);
  }

  return(
    <div className='content-center'>
      <div id="signInButton">
      <GoogleLogin 
        clientId={clientId}
        buttonText='Login'
        onSuccess={onSuccess}
        onFailure={onFailure}
        // cookiePolicy='single-host-origin'
        isSignedIn={true}
      />
    </div>
    </div>
  )

}

export default Login;