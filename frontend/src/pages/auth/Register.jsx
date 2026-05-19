function Register() {
  return (
    <div className="min-h-screen bg-[#08120D] flex items-center justify-center text-white">
      <div className="w-[450px] backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-8 shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Create Account
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-4 p-3 rounded-xl bg-white/10 border border-white/10 outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded-xl bg-white/10 border border-white/10 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 rounded-xl bg-white/10 border border-white/10 outline-none"
        />

        <button className="w-full bg-green-600 hover:bg-green-700 transition-all p-3 rounded-xl font-semibold">
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;