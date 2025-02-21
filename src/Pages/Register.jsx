import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const {createUser,googleSignIn,manageProfile}=useContext(AuthContext)
    const [errorMessage,setErrorMessage]=useState('')
    const navigate=useNavigate()
    const handleSubmit=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const photo=e.target.photo.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        setErrorMessage('');

        const passwordPattern=/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if(!passwordPattern.test(password)){
          toast.error("Must have an Uppercase and Must have an Lower Case and Password long at least 6 character")
            setErrorMessage('Must have an Uppercase and Must have an Lower Case and Password long at least 6 character')
            return;
        }
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            e.target.reset(); 
            toast.success("Register Succesfully")
            manageProfile(name,photo) 
        //     const user={email : email}
        //     axios.post(`https://service-review-system-server-flax.vercel.app/jwt`,user, { withCredentials:true })
        //    .then(res=>{
        //     console.log(res.data)
        //   })
            navigate("/")
        })
        .catch(err=>{
            toast.error(err.message)
            console.log(err)
        })

    }
    const handleGoogleSign=()=>{
        googleSignIn()
        .then(result=>{
          toast.success("Google signIn success")
          console.log(result.user)
            navigate("/")
        })
        .catch(error=>{
            console.log(error)
          toast.error(error.message)
        })

    }
    return (
        <div className="min-h-screen mt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 md:py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
                    {/* Left Side - Image/Banner */}
                    <div className="md:w-1/2 bg-gradient-to-br from-primary to-secondary p-8 text-white hidden md:flex flex-col justify-center items-center">
                        {/* ... existing code ... */}
                    </div>

                    {/* Right Side - Form */}
                    <div className="md:w-1/2 p-6 md:p-12">
                        <h2 className="text-3xl font-bold text-center mb-8 text-white">
                            Create Account
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-300 font-medium mb-2">Full Name</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        placeholder="John Doe" 
                                        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none placeholder-gray-400" 
                                        required 
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 font-medium mb-2">Photo URL</label>
                                    <input 
                                        type="text" 
                                        name="photo" 
                                        placeholder="https://your-photo-url.com" 
                                        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none placeholder-gray-400" 
                                        required 
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 font-medium mb-2">Email Address</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="you@example.com" 
                                        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none placeholder-gray-400" 
                                        required 
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 font-medium mb-2">Password</label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        placeholder="••••••••" 
                                        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none placeholder-gray-400" 
                                        required 
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <input 
                                    type="checkbox" 
                                    className="checkbox checkbox-primary" 
                                    required 
                                />
                                <span className="text-sm text-gray-300">
                                    I agree to the <a href="#" className="text-primary hover:underline font-medium">Terms & Conditions</a>
                                </span>
                            </div>

                            {errorMessage && (
                                <div className="bg-red-900/50 text-red-400 text-sm py-2 px-4 rounded-lg">
                                    {errorMessage}
                                </div>
                            )}

                            <button 
                                type="submit" 
                                className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
                            >
                                Create Account
                            </button>

                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-700"></div>
                                </div>
                                <div className="relative flex justify-center">
                                    <span className="bg-gray-800 px-4 text-sm text-gray-400">Or continue with</span>
                                </div>
                            </div>

                            <button 
                                onClick={handleGoogleSign}
                                type="button" 
                                className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors duration-300 text-white"
                            >
                                <img 
                                    src="https://www.google.com/favicon.ico" 
                                    alt="Google" 
                                    className="w-5 h-5"
                                />
                                <span className="font-medium text-gray-300">Continue with Google</span>
                            </button>

                            <p className="text-center text-gray-400 mt-6">
                                Already have an account?{" "}
                                <Link 
                                    to="/login" 
                                    className="text-primary font-semibold hover:underline"
                                >
                                    Sign in
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;