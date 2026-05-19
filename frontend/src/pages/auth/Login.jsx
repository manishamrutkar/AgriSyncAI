import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Leaf } from "lucide-react";

import { loginUser } from "../services/authService";

import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const handleLogin = async () => {
    try {
      setLoading(true);

      const response =
        await loginUser(
          formData.email,
          formData.password
        );

      login(
        response.user,
        response.token
      );

      navigate("/farmer/dashboard");
    } catch (error) {
      console.log(error);

      alert(
        "Invalid credentials"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#08120D] flex items-center justify-center px-6">
      <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-10 shadow-2xl">
        <div className="flex flex-col items-center mb-10">
          <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-5">
            <Leaf
              className="text-green-400"
              size={40}
            />
          </div>

          <h1 className="text-4xl font-bold text-white">
            AgriSync AI
          </h1>

          <p className="text-gray-300 mt-3 text-lg">
            Smart Agriculture Platform
          </p>
        </div>

        <div className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email:
                  e.target.value,
              })
            }
            className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none text-white"
          />

          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({
                ...formData,
                password:
                  e.target.value,
              })
            }
            className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none text-white"
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 transition-all p-4 rounded-2xl font-bold text-lg text-white"
          >
            {loading
              ? "Signing In..."
              : "Login"}
          </button>
        </div>

        <div className="mt-8 text-center text-gray-400">
          Demo Credentials:
          <br />
          farmer@agrisync.ai
          <br />
          123456
        </div>
      </div>
    </div>
  );
}

export default Login;