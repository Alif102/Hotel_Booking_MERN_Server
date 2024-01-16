import { Link, useNavigate } from "react-router-dom";
// import UseAuth from "./Hooks/UseAuth";
import { useState } from "react";
// import toast from "react-hot-toast";
import toast from "react-hot-toast";
import UseAuth from "../../Hooks/UseAuth";
import SocialLogin from "./SocialLogin";
import { Helmet } from "react-helmet";
import { imageUpload } from "../../api/utils";
 
const Register = () => {
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState('');
  const [sucess, setSuccess] =useState('');

  const {createUser, handleUpdateProfile} = UseAuth();

  const handleRegister = async(e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget)

    const name = (form.get('name'));
    const email = (form.get('email'));
    const photo = (form.get('photo'));
    const password = (form.get('password'))
    console.log(name, email, photo, password)
    const imageForm = e.target;
    const image = imageForm.image.files[0]
    console.log(image)
    const imageData = await imageUpload(image)
    console.log(imageData)
    const picc = imageData?.data?.display_url;
    // const formData = new FormData()
    // formData.append('image', image)


    
// rester error
    setRegisterError('');
    setSuccess('');

    // validation
    // if (password.length < 6) {
    //   setRegisterError("toast.error('six char')")
    //   return;
      
    // }
     if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{6,}$/.test(password)){
      setRegisterError('Password should be minimum six characters, at least one letter and one special character')
      return;
    }
    
  

    

   createUser(email,password,name,imageData?.data?.display_url)
   .then(result => {
    console.log(result.user);
    const user = {email,password,name,picc};
    fetch('http://localhost:5000/user',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        console.log('add dtbs')
      }
    })
   })
   .catch(error => { 
    console.log(error)

   })
  
 // save user data in database
      // const dbResponse = await saveUser(result?.user)
      // console.log(dbResponse)
  

    .then(res => {
      console.log(res.user)
      handleUpdateProfile(name,imageData?.data?.display_url)
      .then(()=>{
        setSuccess('user created sucessfully')
        toast.success('User created successfully');
        navigate('/')
      })

    })
    .catch(error => {
      console.error(error);
      setRegisterError(error.message)
    })


  }
  return (
    <>
      
  
    
    <div >
    <Helmet>
        <title>Register - Hotel Room Booking</title>
        <meta name="description" content="This is Home" />
      </Helmet>
      <h1 className="text-2xl text-center ">Please Register </h1>
      {
        registerError && <p className="text-red-700">{registerError}</p>
      }
      {
        // sucess && <p className="text-green-600"> {sucess}</p>
        sucess && <h2 className="text-green-700 text-center text-2xl mt-3 mb-3">{sucess}</h2>
      }
      <form onSubmit={handleRegister}
       className="card-body md:w-3/4 lg:w-1/2 mx-auto ">

<div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your name" name="name" className="input input-bordered" />
        </div>

        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" placeholder="photo" name="photo" className="input input-bordered" />
        </div> */}

<div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>
        {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" placeholder="image url" className="input input-bordered" name='photo' />
                            </div> */}


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
          <input type="text" placeholder="password" name="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p>Already have an account ? <Link to='/'> <button>Login</button></Link></p>

            <SocialLogin/>

      </form>
     
    </div>
 
    </>
  )
}

export default Register