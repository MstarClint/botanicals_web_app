'use client';

const ForgotPasswordPage = () => {
  return (
    <>
      {/* Content */}
      <div className="flex flex-col justify-center items-center mx-auto p-8 mt-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Forgot Password</h2>

        {/* Forgot Password Form */}
        <form>
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

          <button
            type="submit"
            className="btn btn-primary w-full rounded-full bg-purple-500 hover:bg-purple-600 mb-4"
          >
            Reset Password
          </button>
        </form>

        <a href="/login" className="text-blue-600 hover:underline">
          Back to Login
        </a>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
