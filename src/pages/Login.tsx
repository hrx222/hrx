import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Code, Home, User, LogIn, Mail, Lock } from "lucide-react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 模拟登录验证
    if (email === "test@example.com" && password === "password123") {
      // 登录成功，跳转到个人中心
      window.location.href = "/profile";
    } else {
      setError("邮箱或密码错误");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">Python数据分析训练平台</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium flex items-center">
              <Home className="h-4 w-4 mr-1" /> 首页
            </Link>
            <Link to="/register" className="text-gray-600 hover:text-blue-600 font-medium">注册</Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <LogIn className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">登录</h1>
            <p className="text-gray-600 mt-2">欢迎回来，继续你的数据分析学习之旅</p>
          </div>

          {error && (
            <div className="mb-6 p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                邮箱
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="请输入邮箱"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                密码
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="请输入密码"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  记住我
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  忘记密码？
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                登录
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                还没有账号？
                <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500 ml-1">
                  立即注册
                </Link>
              </p>
            </div>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">测试账号</span>
              </div>
            </div>
            <div className="mt-4 bg-gray-50 p-4 rounded-md">
              <p className="text-sm text-gray-600">邮箱: test@example.com</p>
              <p className="text-sm text-gray-600">密码: password123</p>
            </div>
          </div>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 Python数据分析训练平台. 保留所有权利.</p>
        </div>
      </footer>
    </div>
  );
};

export default Login;