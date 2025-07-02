import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/auth';
import { FcGoogle } from "react-icons/fc";
import { Wallet } from "lucide-react";

const LoginPage = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await loginUser({ email, password });

      // Save token (optional)
      localStorage.setItem('token', response.token);

      // Redirect to dashboard
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
    if (error) setError(error.message)
  };

  return (
    <main className="inter min-h-screen bg-gradient-to-r from-[#0c0c24] to-[#0a0a1c] flex items-center justify-center px-6">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md py-8 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Welcome Back</h2>
        <p className="text-gray-600 text-center mb-6">Sign in to your SuiVent account</p>

        <div className="space-y-4 mb-8">
          <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-50"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle className="text-xl mr-2" />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center border border-blue-600 text-blue-600 rounded-lg px-4 py-2 text-sm font-medium hover:bg-blue-50">
            <Wallet className="w-5 h-5 mr-2" />
            Connect to your Sui Wallet
          </button>
        </div>

        <form className="space-y-6 " onSubmit={handleLogin}>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
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
              required
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
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{' '}
          <a href="/register" className="text-blue-600 hover:underline">
            Create one
          </a>
        </p>

        <p className="text-center text-sm text-gray-600 mt-6">{' '}
          <a href="/dashboard" className="text-blue-600 hover:underline">
            Dashboard
          </a>
        </p>

      </div>
    </main>
  );
};

export default LoginPage;
