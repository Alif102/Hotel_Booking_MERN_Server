import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import SocialLogin from "../Register/SocialLogin";
import { Helmet } from "react-helmet";

 
const Login = () => {
  const {signIn} = UseAuth();
  const location = useLocation();
  const navigate = useNavigate();


  const HandleLogin = (e)=>{
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = (form.get('email'));
   
    const password = (form.get('password'))
    console.log(email, password)

    signIn(email,password)
    .then(res=> {
      console.log(res.user)
      
          
      navigate(location?.state ? location.state : '/')

    })

    .catch(error => console.error(error))
  }

  return (
    <div >
      <Helmet>
        <title>Login - Hotel Room Booking</title>
        <meta name="description" content="This is Home" />
      </Helmet>
      <h1 className="text-2xl text-center ">Please Login </h1>
      <form onSubmit={HandleLogin}
       className="card-body md:w-3/4 lg:w-1/2 mx-auto ">
       
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>Dont have an account ? <Link to='/register'> <button>Register</button></Link></p>
            <SocialLogin/>

      </form>
    </div>
  )
}

export default Login