import React, { useState } from 'react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setErrorMessage('Please fill in both fields.');
    } else {
      console.log('Login submitted with:', email, password);
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-indigo-500 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Admin Panel</h2>
        <p className="text-center text-gray-600 mb-6">Elan və ya xəbərləri idarə etmək üçün hesabınıza daxil olun</p>

        {errorMessage && (
          <div className="text-red-500 text-sm mb-4 text-center">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition ease-in-out duration-200"
              placeholder="Emailinizi daxil edin"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">Şifrə</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition ease-in-out duration-200"
              placeholder="Şifrənizi daxil edin"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ease-in-out duration-200"
          >
            Daxil ol
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
