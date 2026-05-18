import React from "react";
import { Link } from "react-router-dom";
import { Code, Monitor, Database, Calculator, GitBranch, Repeat, List, Hash, FunctionSquare, Type, Users, Sparkles, Zap, BookOpen } from "lucide-react";

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

const projects = [
  {
    id: "1",
    title: "Python开发环境搭建",
    description: "学习安装Python和开发环境配置",
    difficulty: "初级",
    icon: <Monitor className="h-8 w-8 text-blue-500" />,
    tasks: ["安装Python 3.x", "配置开发环境", "第一个Hello World程序"]
  },
  {
    id: "2",
    title: "变量和数据类型",
    description: "掌握Python基本数据类型",
    difficulty: "初级",
    icon: <Hash className="h-8 w-8 text-green-500" />,
    tasks: ["整数和浮点数", "字符串操作", "布尔值与数据类型转换"]
  },
  {
    id: "3",
    title: "运算符和表达式",
    description: "学习各种运算符的使用",
    difficulty: "初级",
    icon: <Calculator className="h-8 w-8 text-purple-500" />,
    tasks: ["算术运算符", "比较和逻辑运算符", "成绩评级程序"]
  },
  {
    id: "4",
    title: "条件语句",
    description: "掌握if-elif-else条件判断",
    difficulty: "初级",
    icon: <GitBranch className="h-8 w-8 text-orange-500" />,
    tasks: ["if语句基础", "多重条件判断", "猜数字游戏"]
  },
  {
    id: "5",
    title: "循环结构",
    description: "学习for和while循环",
    difficulty: "初级",
    icon: <Repeat className="h-8 w-8 text-red-500" />,
    tasks: ["for循环遍历", "while循环", "九九乘法表"]
  },
  {
    id: "6",
    title: "列表和元组",
    description: "掌握序列数据结构",
    difficulty: "初级",
    icon: <List className="h-8 w-8 text-indigo-500" />,
    tasks: ["列表增删改查", "切片操作", "学生成绩管理系统"]
  },
  {
    id: "7",
    title: "字典和集合",
    description: "学习映射和集合类型",
    difficulty: "初级",
    icon: <Database className="h-8 w-8 text-cyan-500" />,
    tasks: ["字典操作", "集合运算", "通讯录管理系统"]
  },
  {
    id: "8",
    title: "函数和模块",
    description: "掌握函数定义和模块使用",
    difficulty: "初级",
    icon: <FunctionSquare className="h-8 w-8 text-pink-500" />,
    tasks: ["函数定义与参数", "返回值和作用域", "计算器模块"]
  },
  {
    id: "9",
    title: "字符串处理",
    description: "学习字符串常用操作",
    difficulty: "初级",
    icon: <Type className="h-8 w-8 text-yellow-500" />,
    tasks: ["字符串索引切片", "查找和替换", "词频统计程序"]
  },
  {
    id: "10",
    title: "综合项目 - 学生信息管理系统",
    description: "综合运用所学知识",
    difficulty: "初级",
    icon: <Users className="h-8 w-8 text-teal-500" />,
    tasks: ["增删改查功能", "数据持久化", "异常处理"]
  }
];

const learningPath = [
  { stage: "第一阶段", title: "环境搭建", description: "配置Python开发环境", skills: ["Python安装", "IDE使用", "Hello World"] },
  { stage: "第二阶段", title: "语法基础", description: "掌握基本语法和数据类型", skills: ["变量", "运算符", "条件语句", "循环"] },
  { stage: "第三阶段", title: "数据结构", description: "学习Python核心数据结构", skills: ["列表", "元组", "字典", "集合"] },
  { stage: "第四阶段", title: "函数模块", description: "掌握函数和模块化编程", skills: ["函数定义", "参数传递", "模块导入"] },
  { stage: "第五阶段", title: "综合实战", description: "完成综合项目", skills: ["项目开发", "文件操作", "异常处理"] }
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Python基础训练</span>
                <p className="text-xs text-slate-500">专为大学生设计</p>
              </div>
            </Link>
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">首页</Link>
              <Link to="/profile" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">学习中心</Link>
              <Link to="/login" className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all">登录</Link>
              <Link to="/register" className="px-5 py-2.5 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors">注册</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
        <div className="container mx-auto px-4 py-24 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-white">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">零基础学习，从这里开始</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Python基础<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">AI训练平台</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
               专为大学生设计的Python学习平台，通过10个精心设计的实战项目，<br />
               让你从零基础到独立编程
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/register" className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all hover:shadow-xl hover:shadow-white/25 flex items-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>立即开始学习</span>
                </Link>
                <Link to="#projects" className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all flex items-center space-x-2">
                  <BookOpen className="h-5 w-5" />
                  <span>查看训练项目</span>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <pre className="text-sm font-mono">
                  <code className="text-blue-200">{'# 欢迎来到Python世界\n'}</code>
                  <code className="text-purple-200">{'def '}</code>
                  <code className="text-green-200">{'learn_python():\n'}</code>
                  <code className="text-yellow-200">{'    print("Hello, World!")\n'}</code>
                  <code className="text-pink-200">{'    return "Success!"\n'}</code>
                  <code className="text-cyan-200">{'# 开始你的编程之旅\n'}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">为什么学习Python？</h2>
            <p className="text-slate-600 text-lg">Python是当今最受欢迎的编程语言之一</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                <Type className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800">简洁易学</h3>
              <p className="text-slate-600 leading-relaxed">Python语法简洁清晰，接近自然语言，非常适合编程初学者快速入门。</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800">应用广泛</h3>
              <p className="text-slate-600 leading-relaxed">Web开发、数据分析、人工智能、科学计算、自动化运维等众多领域都有广泛应用。</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/30">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800">就业前景好</h3>
              <p className="text-slate-600 leading-relaxed">Python开发者薪资水平高，人才需求量大，是转行和就业的绝佳选择。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">学习路径</h2>
            <p className="text-slate-600 text-lg">从零基础到独立开发，五步搞定Python</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {learningPath.map((path, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-100 w-64">
                  <div className="text-blue-500 font-bold text-sm mb-2">{path.stage}</div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800">{path.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{path.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {path.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                {index < learningPath.length - 1 && (
                  <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">10个Python基础训练项目</h2>
            <p className="text-slate-600 text-lg">每个项目都包含详细的任务指导和AI智能助手</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link to={`/project/${project.id}`} key={project.id} className="group">
                <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all border border-slate-100 overflow-hidden hover:-translate-y-1">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        {project.icon}
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                        {project.difficulty}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="space-y-2">
                      {project.tasks.slice(0, 3).map((task, index) => (
                        <div key={index} className="flex items-center text-sm text-slate-500">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {task}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-purple-50 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-600">开始学习</span>
                    <Code className="h-5 w-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative">
          <Brain className="h-20 w-20 mx-auto mb-8 text-white/80" />
          <h2 className="text-4xl font-bold mb-6">AI智能助手全程陪学</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            遇到问题？AI助手随时为你解答，提供代码建议、错误修复和知识点讲解，让学习更高效
          </p>
          <Link to="/register" className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all hover:shadow-xl">
            <Sparkles className="h-5 w-5" />
            <span>免费开始使用AI助手</span>
          </Link>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">Python基础训练平台</span>
              </div>
              <p className="text-slate-400">专为大学生设计的Python学习平台</p>
            </div>
            <div className="flex space-x-6">
              <Link to="/" className="text-slate-400 hover:text-white transition-colors">首页</Link>
              <Link to="/profile" className="text-slate-400 hover:text-white transition-colors">学习中心</Link>
              <Link to="/login" className="text-slate-400 hover:text-white transition-colors">登录</Link>
              <Link to="/register" className="text-slate-400 hover:text-white transition-colors">注册</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
            <p>© 2026 Python基础训练平台. 让学习更简单</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
