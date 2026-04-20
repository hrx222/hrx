import React from "react";
import { Link } from "react-router-dom";
import { Book, Code, BarChart3, PieChart, TrendingUp, MessageSquare, Heart, Database, Zap, Layers } from "lucide-react";

// 模拟项目数据
const projects = [
  {
    id: "1",
    title: "数据清洗与预处理",
    description: "处理真实世界的脏数据，学习数据清洗技巧",
    difficulty: "初级",
    icon: <Database className="h-8 w-8 text-blue-500" />,
    tasks: ["识别并处理缺失值", "处理重复数据", "数据类型转换", "异常值检测与处理"]
  },
  {
    id: "2",
    title: "探索性数据分析",
    description: "分析销售数据，发现业务洞察",
    difficulty: "初级",
    icon: <BarChart3 className="h-8 w-8 text-green-500" />,
    tasks: ["数据概览与描述性统计", "销售趋势分析", "产品类别分析", "客户细分分析"]
  },
  {
    id: "3",
    title: "数据可视化",
    description: "创建交互式数据图表，提升数据表达能力",
    difficulty: "中级",
    icon: <PieChart className="h-8 w-8 text-purple-500" />,
    tasks: ["创建基本图表", "自定义图表样式", "多图表组合", "交互式图表"]
  },
  {
    id: "4",
    title: "统计分析",
    description: "应用统计方法分析学生成绩数据",
    difficulty: "中级",
    icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
    tasks: ["描述性统计分析", "假设检验", "方差分析", "相关性分析"]
  },
  {
    id: "5",
    title: "机器学习入门",
    description: "使用分类算法预测客户流失",
    difficulty: "中级",
    icon: <Brain className="h-8 w-8 text-red-500" />,
    tasks: ["数据预处理", "特征工程", "模型训练与评估", "模型优化"]
  },
  {
    id: "6",
    title: "时间序列分析",
    description: "分析股票价格数据，预测趋势",
    difficulty: "高级",
    icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
    tasks: ["时间序列可视化", "平稳性检验", "ARIMA模型", "预测与评估"]
  },
  {
    id: "7",
    title: "自然语言处理",
    description: "情感分析社交媒体数据",
    difficulty: "高级",
    icon: <MessageSquare className="h-8 w-8 text-green-600" />,
    tasks: ["文本预处理", "特征提取", "情感分类", "结果可视化"]
  },
  {
    id: "8",
    title: "推荐系统",
    description: "基于用户行为构建电影推荐系统",
    difficulty: "高级",
    icon: <Heart className="h-8 w-8 text-red-600" />,
    tasks: ["数据预处理", "协同过滤", "内容推荐", "混合推荐"]
  },
  {
    id: "9",
    title: "数据管道构建",
    description: "设计自动化数据处理流程",
    difficulty: "高级",
    icon: <Layers className="h-8 w-8 text-purple-600" />,
    tasks: ["数据采集", "数据转换", "数据存储", "流程调度"]
  },
  {
    id: "10",
    title: "大数据分析",
    description: "处理和分析大规模数据集",
    difficulty: "高级",
    icon: <Zap className="h-8 w-8 text-yellow-500" />,
    tasks: ["数据加载与处理", "分布式计算", "内存优化", "结果分析"]
  }
];

// 学习路径数据
const learningPath = [
  { stage: "阶段一", title: "数据基础", description: "学习Python基础和数据处理库", skills: ["Python基础", "Pandas", "NumPy"] },
  { stage: "阶段二", title: "数据分析", description: "掌握数据清洗、可视化和统计分析", skills: ["数据清洗", "Matplotlib", "Seaborn", "统计分析"] },
  { stage: "阶段三", title: "机器学习", description: "学习机器学习算法和模型评估", skills: ["Scikit-learn", "模型训练", "模型评估"] },
  { stage: "阶段四", title: "高级应用", description: "探索NLP、时间序列和大数据分析", skills: ["NLP", "时间序列", "推荐系统", "大数据处理"] }
];

// 自定义Brain图标
const Brain = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 18a2 2 0 0 0 2-2V5a2 2 0 0 0-4 0v11a2 2 0 0 0 2 2z"/>
    <path d="M16 3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2"/>
    <path d="M8 3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2"/>
  </svg>
);

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* 导航栏 */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">Python数据分析训练平台</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium">首页</Link>
            <Link to="/profile" className="text-gray-600 hover:text-blue-600 font-medium">个人中心</Link>
            <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">登录</Link>
            <Link to="/register" className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">注册</Link>
          </div>
        </div>
      </nav>

      {/* 英雄区 */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Python数据分析技术训练</h1>
              <p className="text-xl mb-8">通过10个实战项目，掌握数据分析核心技能，提升就业竞争力</p>
              <div className="flex space-x-4">
                <Link to="/register" className="px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-gray-100 transition-colors">立即注册</Link>
                <Link to="#projects" className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:text-blue-600 transition-colors">浏览项目</Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-xl">
                <Book className="h-16 w-16 mb-4" />
                <h3 className="text-2xl font-bold mb-2">10个实战项目</h3>
                <p className="text-blue-100">从基础到高级，覆盖数据分析全流程</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 学习路径 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">学习路径</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {learningPath.map((path, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
                <div className="text-blue-600 font-semibold mb-2">{path.stage}</div>
                <h3 className="text-xl font-bold mb-3">{path.title}</h3>
                <p className="text-gray-600 mb-4">{path.description}</p>
                <div className="space-y-2">
                  {path.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="h-2 w-2 bg-blue-600 rounded-full mr-2"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 训练项目列表 */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">训练项目</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {project.icon}
                    <div className="ml-3">
                      <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                      <div className={`inline-block px-2 py-1 rounded text-xs font-medium mt-1 ${
                        project.difficulty === "初级" ? "bg-green-100 text-green-800" :
                        project.difficulty === "中级" ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {project.difficulty}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">任务：</h4>
                    <ul className="space-y-1">
                      {project.tasks.slice(0, 2).map((task, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {task}
                        </li>
                      ))}
                      {project.tasks.length > 2 && (
                        <li className="text-sm text-gray-500">+{project.tasks.length - 2} 更多任务</li>
                      )}
                    </ul>
                  </div>
                  <Link to={`/project/${project.id}`} className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    开始项目
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2">
                <Code className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">Python数据分析训练平台</span>
              </div>
              <p className="mt-2 text-gray-400">专为大学生设计的数据分析学习平台</p>
            </div>
            <div className="flex space-x-6">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">首页</Link>
              <Link to="/profile" className="text-gray-400 hover:text-white transition-colors">个人中心</Link>
              <Link to="/login" className="text-gray-400 hover:text-white transition-colors">登录</Link>
              <Link to="/register" className="text-gray-400 hover:text-white transition-colors">注册</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© 2026 Python数据分析训练平台. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;