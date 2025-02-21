import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import axios from 'axios';
import { motion } from 'framer-motion';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const {login,googleSignIn}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    const handleLoginSubmit=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password)
        login(email,password)
        .then(result=>{
            console.log(result.user)
            e.target.reset();
            navigate(location?.state ? location.state:"/")
            toast.success("Login succesFully")
        //     const user={email : email}
        //     axios.post(`https://service-review-system-server-flax.vercel.app/jwt`,user, { withCredentials:true })
        //    .then(res=>{
        //     console.log(res.data)
        //   })

        })
        .catch(error=>{
            e.target.reset();
            toast.error(error.message)
            console.log("Error",error.message)
        })

    }
    const handleGoogleSign=()=>{
        googleSignIn()
        .then(result => {
            toast.success("Google signIn success")
            console.log(result.user)
            const data = result.user;

            axios.post(`http://localhost:5000/user/${data?.email}`, {
                name: data?.displayName,
                photo: data?.photoURL,
                email: data?.email,
            })
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.error('Error saving user data:', error);
            });
            navigate("/")
        })
        .catch(error => {
            console.log(error)
            toast.error(error.message)
        })

    }
    return (
        <div className="min-h-screen mt-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8 md:py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row bg-base-100 rounded-3xl shadow-2xl overflow-hidden">
                    {/* Left Side - Form */}
                    <div className="md:w-1/2 p-6 md:p-12">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Welcome Back
                        </h2>

                        <form onSubmit={handleLoginSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block font-medium mb-2">Email Address</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="you@example.com" 
                                        className="input input-bordered w-full" 
                                        required 
                                    />
                                </div>

                                <div>
                                    <label className="block font-medium mb-2">Password</label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        placeholder="••••••••" 
                                        className="input input-bordered w-full" 
                                        required 
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="checkbox checkbox-sm" />
                                    <span className="ml-2 text-sm">Remember me</span>
                                </label>
                                <a href="#" className="text-sm link link-hover">
                                    Forgot Password?
                                </a>
                            </div>

                            <button 
                                type="submit" 
                                className="btn btn-primary w-full"
                            >
                                Sign In
                            </button>

                            <div className="divider">Or continue with</div>

                            <button 
                                onClick={handleGoogleSign}
                                type="button" 
                                className="btn btn-outline w-full"
                            >
                                <img 
                                    src="https://www.google.com/favicon.ico" 
                                    alt="Google" 
                                    className="w-5 h-5 mr-2"
                                />
                                Continue with Google
                            </button>

                            <p className="text-center mt-6">
                                Don't have an account?{" "}
                                <Link 
                                    to="/register" 
                                    className="link link-hover font-semibold"
                                >
                                    Sign up
                                </Link>
                            </p>
                        </form>
                    </div>

                    {/* Right Side - Banner */}
                    <div className="md:w-1/2 bg-base-300 p-8 text-center hidden md:flex flex-col justify-center items-center">
                        <div className="max-w-sm">
                            <h1 className="text-4xl font-bold mb-4">Hello, Friend!</h1>
                            <p className="text-lg mb-6">Enter your personal details and start your journey with us</p>
                            <div className="w-3/4 mx-auto">
                                <img 
                                    src="https://illustrations.popsy.co/amber/graphic-design.svg" 
                                    alt="Login"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;