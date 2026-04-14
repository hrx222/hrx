import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// 学习数据类型
interface StudyRecord {
  id: string;
  date: string;
  duration: number; // 分钟
  content: string;
}

// 学习工具数据
const tools = [
  {
    id: 'python',
    name: 'Python',
    description: '编程语言，数据分析的基础工具',
    resources: ['Python官方文档', 'Python数据分析实战']
  },
  {
    id: 'numpy',
    name: 'NumPy',
    description: '数值计算库，用于高效处理数组和矩阵',
    resources: ['NumPy官方文档', 'NumPy快速入门']
  },
  {
    id: 'pandas',
    name: 'Pandas',
    description: '数据处理库，用于数据清洗、转换和分析',
    resources: ['Pandas官方文档', 'Pandas实战']
  },
  {
    id: 'matplotlib',
    name: 'Matplotlib',
    description: '数据可视化库，用于创建各种图表',
    resources: ['Matplotlib官方文档', 'Python数据可视化']
  },
  {
    id: 'seaborn',
    name: 'Seaborn',
    description: '高级数据可视化库，基于Matplotlib',
    resources: ['Seaborn官方文档', 'Seaborn教程']
  },
  {
    id: 'scikit-learn',
    name: 'scikit-learn',
    description: '机器学习库，用于数据建模和预测',
    resources: ['scikit-learn官方文档', '机器学习实战']
  }
];

// 学习大纲数据
const learningOutline = [
  {
    id: 'module1',
    title: '数据分析基础',
    topics: [
      '数据分析概述',
      'Python数据分析生态系统',
      '环境搭建与工具配置'
    ]
  },
  {
    id: 'module2',
    title: 'NumPy数值计算',
    topics: [
      'NumPy数组操作',
      '数学函数与统计计算',
      '线性代数运算'
    ]
  },
  {
    id: 'module3',
    title: 'Pandas数据处理',
    topics: [
      'Series与DataFrame对象',
      '数据读取与写入',
      '数据清洗与预处理',
      '数据聚合与分组'
    ]
  },
  {
    id: 'module4',
    title: '数据可视化',
    topics: [
      'Matplotlib基础',
      '常见图表类型',
      '图表美化与定制',
      'Seaborn高级可视化'
    ]
  },
  {
    id: 'module5',
    title: '统计分析',
    topics: [
      '描述性统计',
      '假设检验',
      '相关分析',
      '回归分析'
    ]
  },
  {
    id: 'module6',
    title: '实战项目',
    topics: [
      '电商销售数据分析',
      '客户行为分析',
      '销售预测模型'
    ]
  }
];

export default function LearningPage() {
  // 学习记录状态
  const [studyRecords, setStudyRecords] = useState<StudyRecord[]>([]);
  const [newRecord, setNewRecord] = useState({
    date: new Date().toISOString().split('T')[0],
    duration: 60,
    content: ''
  });
  const [isAddingRecord, setIsAddingRecord] = useState(false);

  // 从本地存储加载学习记录
  useEffect(() => {
    const savedRecords = localStorage.getItem('studyRecords');
    if (savedRecords) {
      setStudyRecords(JSON.parse(savedRecords));
    }
  }, []);

  // 保存学习记录到本地存储
  useEffect(() => {
    localStorage.setItem('studyRecords', JSON.stringify(studyRecords));
  }, [studyRecords]);

  // 处理添加学习记录
  const handleAddRecord = (e: React.FormEvent) => {
    e.preventDefault();
    if (newRecord.content.trim() === '') return;

    const record: StudyRecord = {
      id: Date.now().toString(),
      ...newRecord
    };

    setStudyRecords([...studyRecords, record]);
    setNewRecord({
      date: new Date().toISOString().split('T')[0],
      duration: 60,
      content: ''
    });
    setIsAddingRecord(false);
  };

  // 处理删除学习记录
  const handleDeleteRecord = (id: string) => {
    setStudyRecords(studyRecords.filter(record => record.id !== id));
  };

  // 计算总学习时间
  const totalStudyTime = studyRecords.reduce((total, record) => total + record.duration, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">数据分析技术学习中心</h1>
            <p className="text-xl">学习资源、工具指南与学习记录</p>
          </div>
        </div>
      </section>

      {/* 主要内容 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* 导航 */}
            <div className="flex justify-center mb-12">
              <nav className="flex space-x-4">
                <Link to="/" className="px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors">
                  首页
                </Link>
                <Link to="/learning" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                  学习中心
                </Link>
              </nav>
            </div>

            {/* 学习统计 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">学习统计</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-600">学习记录数</p>
                  <p className="text-2xl font-bold">{studyRecords.length}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-600">总学习时间</p>
                  <p className="text-2xl font-bold">{totalStudyTime} 分钟</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-600">平均每次学习</p>
                  <p className="text-2xl font-bold">
                    {studyRecords.length > 0 ? Math.round(totalStudyTime / studyRecords.length) : 0} 分钟
                  </p>
                </div>
              </div>
            </div>

            {/* 学习工具 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">学习工具</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tools.map((tool) => (
                  <div key={tool.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
                    <p className="text-gray-600 mb-3">{tool.description}</p>
                    <div className="text-sm">
                      <p className="font-medium mb-1">参考资源：</p>
                      <ul className="list-disc list-inside text-gray-600">
                        {tool.resources.map((resource, index) => (
                          <li key={index}>{resource}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 学习大纲 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">学习大纲</h2>
              
              {/* Python学习大纲 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Python学习大纲</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="text-lg font-semibold mb-2">第一部分：Python基础</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Python简介与环境搭建</li>
                      <li>基本数据类型（数字、字符串、布尔值）</li>
                      <li>复合数据类型（列表、元组、字典、集合）</li>
                      <li>控制流程（条件语句、循环语句）</li>
                      <li>函数定义与调用</li>
                      <li>模块与包的使用</li>
                      <li>文件操作</li>
                      <li>异常处理</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="text-lg font-semibold mb-2">第二部分：Python进阶</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>面向对象编程基础</li>
                      <li>类与对象</li>
                      <li>继承与多态</li>
                      <li>装饰器</li>
                      <li>生成器与迭代器</li>
                      <li>上下文管理器</li>
                      <li>正则表达式</li>
                      <li>多线程与多进程</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="text-lg font-semibold mb-2">第三部分：Python数据分析</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>NumPy数值计算</li>
                      <li>Pandas数据处理</li>
                      <li>Matplotlib数据可视化</li>
                      <li>Seaborn高级可视化</li>
                      <li>数据清洗与预处理</li>
                      <li>数据聚合与分组</li>
                      <li>统计分析基础</li>
                      <li>机器学习入门</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="text-lg font-semibold mb-2">第四部分：实战项目</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>电商销售数据分析</li>
                      <li>客户行为分析</li>
                      <li>销售预测模型</li>
                      <li>数据可视化 dashboard</li>
                      <li>网络爬虫与数据采集</li>
                      <li>自动化数据处理脚本</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* 数据分析技术大纲 */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">数据分析技术大纲</h3>
                <div className="space-y-4">
                  {learningOutline.map((module) => (
                    <div key={module.id} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="text-lg font-semibold mb-2">{module.title}</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {module.topics.map((topic, index) => (
                          <li key={index}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 学习记录 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">学习记录</h2>
                <button 
                  onClick={() => setIsAddingRecord(!isAddingRecord)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {isAddingRecord ? '取消' : '添加记录'}
                </button>
              </div>

              {/* 添加记录表单 */}
              {isAddingRecord && (
                <form onSubmit={handleAddRecord} className="mb-6 p-4 border border-gray-200 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-gray-700 mb-1">日期</label>
                      <input 
                        type="date" 
                        value={newRecord.date}
                        onChange={(e) => setNewRecord({...newRecord, date: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">学习时间（分钟）</label>
                      <input 
                        type="number" 
                        value={newRecord.duration}
                        onChange={(e) => setNewRecord({...newRecord, duration: parseInt(e.target.value)})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        min="1"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">学习内容</label>
                    <textarea 
                      value={newRecord.content}
                      onChange={(e) => setNewRecord({...newRecord, content: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      rows={3}
                      placeholder="请输入学习的内容..."
                    />
                  </div>
                  <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    保存记录
                  </button>
                </form>
              )}

              {/* 学习记录列表 */}
              {studyRecords.length === 0 ? (
                <p className="text-gray-500 text-center py-8">暂无学习记录</p>
              ) : (
                <div className="space-y-4">
                  {studyRecords.map((record) => (
                    <div key={record.id} className="border border-gray-200 rounded-lg p-4 flex justify-between">
                      <div>
                        <div className="flex items-center mb-2">
                          <span className="text-gray-600 mr-4">{record.date}</span>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                            {record.duration} 分钟
                          </span>
                        </div>
                        <p className="text-gray-700">{record.content}</p>
                      </div>
                      <button 
                        onClick={() => handleDeleteRecord(record.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 数据分析技术学习中心</p>
          <p className="text-gray-400 text-sm mt-2">纯静态页面 | 部署于 Cloudflare Pages</p>
        </div>
      </footer>
    </div>
  );
}