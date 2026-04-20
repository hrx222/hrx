import React from "react";
import { Link } from "react-router-dom";
import { Code, Home, User, LogOut, CheckCircle, BarChart3, Award, Clock } from "lucide-react";

// 模拟用户数据
const userData = {
  name: "张三",
  email: "zhangsan@example.com",
  joinedAt: "2026-01-15",
  totalProjects: 10,
  completedProjects: 3,
  learningHours: 12.5
};

// 模拟完成的项目
const completedProjects = [
  {
    id: "1",
    title: "数据清洗与预处理",
    completedAt: "2026-01-20",
    score: 95
  },
  {
    id: "2",
    title: "探索性数据分析",
    completedAt: "2026-01-25",
    score: 92
  },
  {
    id: "3",
    title: "数据可视化",
    completedAt: "2026-02-01",
    score: 88
  }
];

// 模拟技能评估
const skills = [
  { name: "数据清洗", level: 85 },
  { name: "数据可视化", level: 78 },
  { name: "统计分析", level: 65 },
  { name: "机器学习", level: 50 },
  { name: "NLP", level: 30 },
  { name: "大数据分析", level: 25 }
];

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">Python数据分析训练平台</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium flex items-center">
              <Home className="h-4 w-4 mr-1" /> 首页
            </Link>
            <Link to="/profile" className="text-blue-600 font-medium flex items-center">
              <User className="h-4 w-4 mr-1" /> 个人中心
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-blue-600 font-medium flex items-center">
              <LogOut className="h-4 w-4 mr-1" /> 退出
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* 用户信息卡片 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="h-12 w-12 text-blue-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">{userData.name}</h1>
              <p className="text-gray-600 mb-4">{userData.email}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{userData.completedProjects}</div>
                  <div className="text-sm text-gray-500">已完成项目</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{userData.totalProjects}</div>
                  <div className="text-sm text-gray-500">总项目数</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{userData.learningHours}h</div>
                  <div className="text-sm text-gray-500">学习时长</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{Math.round((userData.completedProjects / userData.totalProjects) * 100)}%</div>
                  <div className="text-sm text-gray-500">完成率</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 学习进度 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-6">
            <BarChart3 className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-bold text-gray-800">学习进度</h2>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">整体进度</span>
                <span className="text-sm font-medium text-blue-600">{Math.round((userData.completedProjects / userData.totalProjects) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${(userData.completedProjects / userData.totalProjects) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">初级项目</h3>
                <div className="flex justify-between mb-2">
                  <span className="text-xs text-gray-500">2/2 完成</span>
                  <span className="text-xs font-medium text-blue-600">100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">中级项目</h3>
                <div className="flex justify-between mb-2">
                  <span className="text-xs text-gray-500">1/3 完成</span>
                  <span className="text-xs font-medium text-blue-600">33%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "33%" }}></div>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">高级项目</h3>
                <div className="flex justify-between mb-2">
                  <span className="text-xs text-gray-500">0/5 完成</span>
                  <span className="text-xs font-medium text-blue-600">0%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: "0%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 完成的项目 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-800">完成的项目</h2>
            </div>
            <Link to="/" className="text-sm text-blue-600 hover:text-blue-800">查看全部项目</Link>
          </div>
          <div className="space-y-4">
            {completedProjects.map((project) => (
              <div key={project.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-800">{project.title}</h3>
                    <p className="text-sm text-gray-500">完成于: {project.completedAt}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-blue-600">{project.score}/100</div>
                  <div className="text-xs text-gray-500">优秀</div>
                </div>
              </div>
            ))}
            {completedProjects.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                还没有完成任何项目，开始你的第一个项目吧！
              </div>
            )}
          </div>
        </div>

        {/* 技能评估 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-6">
            <Award className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-bold text-gray-800">技能评估</h2>
          </div>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                  <span className="text-sm font-medium text-blue-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="h-2.5 rounded-full" 
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.level >= 80 ? '#10B981' : 
                                     skill.level >= 60 ? '#3B82F6' : 
                                     skill.level >= 40 ? '#F59E0B' : '#EF4444'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 学习统计 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <Clock className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-bold text-gray-800">学习统计</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">学习时长分布</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-gray-600">数据清洗与预处理</span>
                    <span className="text-xs font-medium text-gray-700">3.5h</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "30%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-gray-600">探索性数据分析</span>
                    <span className="text-xs font-medium text-gray-700">4h</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "35%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-gray-600">数据可视化</span>
                    <span className="text-xs font-medium text-gray-700">5h</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "35%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">项目完成时间</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-24 text-xs text-gray-600">2026-01-20</div>
                  <div className="flex-1 mx-4">
                    <div className="h-1 bg-gray-200 rounded-full">
                      <div className="h-1 bg-green-500 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                  <div className="w-32 text-xs font-medium text-gray-700">数据清洗与预处理</div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-xs text-gray-600">2026-01-25</div>
                  <div className="flex-1 mx-4">
                    <div className="h-1 bg-gray-200 rounded-full">
                      <div className="h-1 bg-green-500 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                  <div className="w-32 text-xs font-medium text-gray-700">探索性数据分析</div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-xs text-gray-600">2026-02-01</div>
                  <div className="flex-1 mx-4">
                    <div className="h-1 bg-gray-200 rounded-full">
                      <div className="h-1 bg-green-500 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                  <div className="w-32 text-xs font-medium text-gray-700">数据可视化</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 Python数据分析训练平台. 保留所有权利.</p>
        </div>
      </footer>
    </div>
  );
};

export default Profile;