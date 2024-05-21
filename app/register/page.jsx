'use client';

const RegisterPage = () => {
  return (
    <>
      {/* Content */}
      <div className="flex flex-col justify-center items-center mx-auto p-8 mt-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Register</h2>

        {/* Register Form */}
        <form>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-600 mb-2">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              className="input input-bordered w-full"
              placeholder="First Name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-600 mb-2">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              className="input input-bordered w-full"
              placeholder="Last Name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="input input-bordered w-full"
              placeholder="example@example.com"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="input input-bordered w-full"
              placeholder="Password"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-600 mb-2">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="input input-bordered w-full"
              placeholder="Confirm Password"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-600 mb-2">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              className="input input-bordered w-full"
              placeholder="Phone Number"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-600 mb-2">
              <input type="checkbox" id="terms" className="mr-2"/>
              I agree to the <a href="#" className="text-blue-600">terms and conditions</a>
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full rounded-full bg-purple-500 hover:bg-purple-600"
          >
            Create Account
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;