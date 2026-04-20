import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Editor from "@monaco-editor/react";
import { Code, Book, MessageSquare, Play, Save, Home, User, LogOut } from "lucide-react";

// 模拟项目数据
const projects = [
  {
    id: "1",
    title: "数据清洗与预处理",
    description: "处理真实世界的脏数据，学习数据清洗技巧。在这个项目中，你将学习如何识别和处理缺失值、重复数据、数据类型转换以及异常值检测与处理。",
    difficulty: "初级",
    tasks: ["识别并处理缺失值", "处理重复数据", "数据类型转换", "异常值检测与处理"],
    starterCode: `import pandas as pd

# 加载数据
df = pd.read_csv("data.csv")

# 查看数据基本信息
print(df.info())

# 识别缺失值
print("\n缺失值统计:")
print(df.isnull().sum())

# 你的代码在这里...`
  },
  {
    id: "2",
    title: "探索性数据分析",
    description: "分析销售数据，发现业务洞察。在这个项目中，你将学习如何进行数据概览与描述性统计、销售趋势分析、产品类别分析以及客户细分分析。",
    difficulty: "初级",
    tasks: ["数据概览与描述性统计", "销售趋势分析", "产品类别分析", "客户细分分析"],
    starterCode: `import pandas as pd
import matplotlib.pyplot as plt

# 加载销售数据
df = pd.read_csv("sales_data.csv")

# 查看数据基本信息
print(df.head())
print(df.describe())

# 你的代码在这里...`
  },
  {
    id: "3",
    title: "数据可视化",
    description: "创建交互式数据图表，提升数据表达能力。在这个项目中，你将学习如何创建基本图表、自定义图表样式、多图表组合以及交互式图表。",
    difficulty: "中级",
    tasks: ["创建基本图表", "自定义图表样式", "多图表组合", "交互式图表"],
    starterCode: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# 加载数据
df = pd.read_csv("data.csv")

# 设置绘图风格
sns.set(style="whitegrid")

# 你的代码在这里...`
  },
  {
    id: "4",
    title: "统计分析",
    description: "应用统计方法分析学生成绩数据。在这个项目中，你将学习如何进行描述性统计分析、假设检验、方差分析以及相关性分析。",
    difficulty: "中级",
    tasks: ["描述性统计分析", "假设检验", "方差分析", "相关性分析"],
    starterCode: `import pandas as pd
import numpy as np
from scipy import stats

# 加载学生成绩数据
df = pd.read_csv("student_grades.csv")

# 描述性统计
print(df.describe())

# 你的代码在这里...`
  },
  {
    id: "5",
    title: "机器学习入门",
    description: "使用分类算法预测客户流失。在这个项目中，你将学习如何进行数据预处理、特征工程、模型训练与评估以及模型优化。",
    difficulty: "中级",
    tasks: ["数据预处理", "特征工程", "模型训练与评估", "模型优化"],
    starterCode: `import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# 加载客户数据
df = pd.read_csv("customer_data.csv")

# 数据预处理
# 你的代码在这里...`
  },
  {
    id: "6",
    title: "时间序列分析",
    description: "分析股票价格数据，预测趋势。在这个项目中，你将学习如何进行时间序列可视化、平稳性检验、ARIMA模型以及预测与评估。",
    difficulty: "高级",
    tasks: ["时间序列可视化", "平稳性检验", "ARIMA模型", "预测与评估"],
    starterCode: `import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.tsa.arima.model import ARIMA

# 加载股票数据
df = pd.read_csv("stock_prices.csv")
df['Date'] = pd.to_datetime(df['Date'])
df.set_index('Date', inplace=True)

# 你的代码在这里...`
  },
  {
    id: "7",
    title: "自然语言处理",
    description: "情感分析社交媒体数据。在这个项目中，你将学习如何进行文本预处理、特征提取、情感分类以及结果可视化。",
    difficulty: "高级",
    tasks: ["文本预处理", "特征提取", "情感分类", "结果可视化"],
    starterCode: `import pandas as pd
from nltk.sentiment.vader import SentimentIntensityAnalyzer

# 加载社交媒体数据
df = pd.read_csv("social_media_data.csv")

# 初始化情感分析器
sia = SentimentIntensityAnalyzer()

# 你的代码在这里...`
  },
  {
    id: "8",
    title: "推荐系统",
    description: "基于用户行为构建电影推荐系统。在这个项目中，你将学习如何进行数据预处理、协同过滤、内容推荐以及混合推荐。",
    difficulty: "高级",
    tasks: ["数据预处理", "协同过滤", "内容推荐", "混合推荐"],
    starterCode: `import pandas as pd
from surprise import Dataset, Reader, KNNBasic
from surprise.model_selection import train_test_split

# 加载电影评分数据
df = pd.read_csv("movie_ratings.csv")

# 准备数据
reader = Reader(rating_scale=(1, 5))
data = Dataset.load_from_df(df[['userId', 'movieId', 'rating']], reader)

# 你的代码在这里...`
  },
  {
    id: "9",
    title: "数据管道构建",
    description: "设计自动化数据处理流程。在这个项目中，你将学习如何进行数据采集、数据转换、数据存储以及流程调度。",
    difficulty: "高级",
    tasks: ["数据采集", "数据转换", "数据存储", "流程调度"],
    starterCode: `import pandas as pd
import os
from datetime import datetime

# 数据采集函数
def collect_data():
    # 你的代码在这里...
    pass

# 数据转换函数
def transform_data(data):
    # 你的代码在这里...
    pass

# 主管道函数
def data_pipeline():
    # 你的代码在这里...
    pass

# 执行管道
data_pipeline()`
  },
  {
    id: "10",
    title: "大数据分析",
    description: "处理和分析大规模数据集。在这个项目中，你将学习如何进行数据加载与处理、分布式计算、内存优化以及结果分析。",
    difficulty: "高级",
    tasks: ["数据加载与处理", "分布式计算", "内存优化", "结果分析"],
    starterCode: `import pandas as pd
import dask.dataframe as dd

# 加载大规模数据集
ddf = dd.read_csv("large_dataset.csv")

# 基本统计
print(ddf.describe().compute())

# 你的代码在这里...`
  }
];

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [code, setCode] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);

  useEffect(() => {
    // 查找项目数据
    const foundProject = projects.find(p => p.id === id);
    if (foundProject) {
      setProject(foundProject);
      setCode(foundProject.starterCode);
      // 生成AI建议
      setAiSuggestions([
        "尝试使用fillna()方法填充缺失值",
        "使用drop_duplicates()去除重复数据",
        "使用astype()进行数据类型转换",
        "使用describe()查看数据统计信息"
      ]);
    }
  }, [id]);

  const handleRunCode = () => {
    // 模拟代码运行
    setOutput(`代码运行结果:\n\n${code}\n\n执行成功！`);
  };

  const handleSubmit = () => {
    // 模拟提交
    alert("项目提交成功！");
  };

  if (!project) {
    return <div className="container mx-auto px-4 py-12 text-center">项目不存在</div>;
  }

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
            <Link to="/profile" className="text-gray-600 hover:text-blue-600 font-medium flex items-center">
              <User className="h-4 w-4 mr-1" /> 个人中心
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-blue-600 font-medium flex items-center">
              <LogOut className="h-4 w-4 mr-1" /> 退出
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 左侧：项目信息和代码编辑器 */}
          <div className="lg:w-2/3">
            {/* 项目信息 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold text-gray-800">{project.title}</h1>
                <div className={`inline-block px-3 py-1 rounded text-sm font-medium ${
                  project.difficulty === "初级" ? "bg-green-100 text-green-800" :
                  project.difficulty === "中级" ? "bg-yellow-100 text-yellow-800" :
                  "bg-red-100 text-red-800"
                }`}>
                  {project.difficulty}
                </div>
              </div>
              <p className="text-gray-600 mb-6">{project.description}</p>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">任务要求：</h3>
                <ul className="space-y-2">
                  {project.tasks.map((task: string, index: number) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className="h-2 w-2 bg-blue-600 rounded-full mr-2"></div>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 代码编辑器 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-700">代码编辑器</h3>
                <div className="flex space-x-2">
                  <button 
                    onClick={handleRunCode}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <Play className="h-4 w-4 mr-1" /> 运行
                  </button>
                  <button 
                    onClick={handleSubmit}
                    className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                  >
                    <Save className="h-4 w-4 mr-1" /> 提交
                  </button>
                </div>
              </div>
              <div className="h-96">
                <Editor
                  height="100%"
                  language="python"
                  theme="vs-dark"
                  value={code}
                  onChange={(value) => setCode(value || "")}
                  options={{
                    minimap: { enabled: true },
                    lineNumbers: "on",
                    scrollBeyondLastLine: false,
                    wordWrap: "on"
                  }}
                />
              </div>
              {/* 输出区域 */}
              <div className="mt-4 bg-gray-900 rounded-md p-4 text-white">
                <h4 className="text-sm font-semibold mb-2">输出：</h4>
                <pre className="text-sm whitespace-pre-wrap">{output}</pre>
              </div>
            </div>
          </div>

          {/* 右侧：AI助手 */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex items-center mb-4">
                <MessageSquare className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-700">AI 助手</h3>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 text-sm">需要帮助？AI助手可以提供代码建议、错误修复和学习指导。</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-500">代码建议：</h4>
                <div className="space-y-2">
                  {aiSuggestions.map((suggestion, index) => (
                    <div key={index} className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-gray-700">{suggestion}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">常见问题：</h4>
                  <div className="space-y-2">
                    <button className="w-full text-left text-sm text-blue-600 hover:text-blue-800">
                      如何处理缺失值？
                    </button>
                    <button className="w-full text-left text-sm text-blue-600 hover:text-blue-800">
                      如何优化代码性能？
                    </button>
                    <button className="w-full text-left text-sm text-blue-600 hover:text-blue-800">
                      如何可视化数据？
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">学习资源：</h4>
                  <div className="space-y-2">
                    <a href="#" className="block text-left text-sm text-blue-600 hover:text-blue-800">
                      Pandas 官方文档
                    </a>
                    <a href="#" className="block text-left text-sm text-blue-600 hover:text-blue-800">
                      Matplotlib 教程
                    </a>
                    <a href="#" className="block text-left text-sm text-blue-600 hover:text-blue-800">
                      Scikit-learn 指南
                    </a>
                  </div>
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

export default ProjectDetail;