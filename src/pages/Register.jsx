import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Wallet } from "lucide-react";
import { supabase } from '../utils/supabaseClient'
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleSignUp = async (e) => {
        e.preventDefault()
        setError(null)

        if (!email || !username || !password || !confirmPassword) {
            setError('All fields are required.')
            return
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters.')
            return
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.')
            return
        }

        setLoading(true)

        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    username, 
                },
            },
        })

        setLoading(false)


        if (error) {
            setError(error.message)
        } else {
            navigate("/dashboard")
        }
    }


    const handleGoogleSignIn = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        })
          if (error) {
            setError(error.message)
        } else {
            navigate("/dashboard")
        }
    }
    return (
        <main className="min-h-screen bg-gradient-to-r from-[#0c0c24] to-[#0a0a1c] inter flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-4 my-5">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Create an Account</h2>
                <p className="text-gray-600 text-center mb-6">Register for your SuiVent account</p>

                <form onSubmit={handleSignUp} className="space-y-6">
                    <div>

                        <div className="space-y-4 mb-8">
                            <button
                                onClick={handleGoogleSignIn}
                                className="w-full flex items-center justify-center border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-50">
                                <FcGoogle className="text-xl mr-2" />
                                Continue with Google
                            </button>
                            <button className="w-full flex items-center justify-center border border-blue-600 text-blue-600 rounded-lg px-4 py-2 text-sm font-medium hover:bg-blue-50">
                                <Wallet className="w-5 h-5 mr-2" />
                                Connect to your Sui Wallet
                            </button>
                        </div>

                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-600 focus:border-blue-600"
                            placeholder="e.g. john (you'll get john.sui)"

                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-600 focus:border-blue-600"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-600 focus:border-blue-600"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-600 focus:border-blue-600"
                            placeholder="••••••••"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />


                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={loading}
                    >
                        {loading ? 'Signing up...' : 'Sign Up'}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{' '}
                    <a href="/login" className="text-blue-600 hover:underline">
                        Login here
                    </a>
                </p>
            </div>
        </main>
    );
};

export default RegisterPage;
