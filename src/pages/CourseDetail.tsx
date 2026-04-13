import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

// 课程数据
const courses = [
  {
    id: "python",
    name: "Python基础",
    description: "Python编程语言的基础知识，包括语法、数据类型、控制结构等。",
    content: "本课程主要介绍Python的基本语法、数据类型、控制流程、函数定义等基础知识。通过本课程的学习，学生能够掌握Python编程的基本技能，为后续的数据分析课程打下基础。"
  },
  {
    id: "data-analysis",
    name: "数据分析技术",
    description: "使用Python进行数据分析的技术和方法，包括数据处理、可视化和统计分析。",
    content: "## 课程大纲\n\n### 一、课程概述\n- 课程目标：掌握使用Python进行数据分析的核心技术\n- 课程性质：专业核心课程\n- 先修课程：Python基础、数据采集与处理、商务数据分析与应用基础\n- 适用对象：高职大二第二学期学生\n\n### 二、课程内容\n\n#### 模块一：数据分析基础（2周）\n1. 数据分析概述\n2. Python数据分析生态系统\n3. 环境搭建与工具配置\n\n#### 模块二：NumPy数值计算（2周）\n1. NumPy数组操作\n2. 数学函数与统计计算\n3. 线性代数运算\n\n#### 模块三：Pandas数据处理（3周）\n1.  Series与DataFrame对象\n2. 数据读取与写入\n3. 数据清洗与预处理\n4. 数据聚合与分组\n\n#### 模块四：数据可视化（2周）\n1. Matplotlib基础\n2. 常见图表类型\n3. 图表美化与定制\n4. Seaborn高级可视化\n\n#### 模块五：统计分析（2周）\n1. 描述性统计\n2. 假设检验\n3. 相关分析\n4. 回归分析\n\n#### 模块六：实战项目（3周）\n1. 电商销售数据分析\n2. 客户行为分析\n3. 销售预测模型\n\n### 三、教学方法\n- 理论讲解与实践操作相结合\n- 案例驱动教学\n- 小组合作项目\n- 在线资源学习\n\n### 四、考核方式\n- 平时作业：30%\n- 实验报告：20%\n- 项目实践：30%\n- 期末考试：20%\n\n### 五、学习资源\n- 教材：《Python数据分析实战》\n- 参考资料：《利用Python进行数据分析》\n- 在线资源：Kaggle数据集、Python官方文档\n\n### 六、预期成果\n通过本课程的学习，学生将能够：\n1. 熟练使用Python进行数据处理和分析\n2. 掌握数据可视化技术，制作专业的数据图表\n3. 运用统计方法分析数据，得出有价值的结论\n4. 完成实际数据分析项目，解决业务问题\n\n本课程为后续的供应链数据分析、商务智能等课程奠定基础。" 
  },
  {
    id: "data-collection",
    name: "数据采集与处理",
    description: "从各种数据源采集数据并进行处理的技术。",
    content: "本课程涵盖网络爬虫、API调用、数据清洗等数据采集和处理技术。学生将学习如何从网页、数据库等不同来源获取数据，并进行预处理和转换。"
  },
  {
    id: "supply-chain",
    name: "供应链数据分析",
    description: "应用数据分析技术优化供应链管理。",
    content: "本课程将数据分析技术应用于供应链管理领域，包括需求预测、库存优化、物流路径规划等。学生将学习如何使用数据分析工具解决供应链中的实际问题。"
  },
  {
    id: "database",
    name: "数据库原理与应用",
    description: "数据库的基本原理和应用技术。",
    content: "本课程介绍数据库的基本概念、SQL语言、数据库设计等内容。学生将学习如何设计和管理数据库，以及如何使用SQL进行数据查询和操作。"
  }
];

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="container mx-auto py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">课程不存在</h1>
          <Link to="/" className="text-blue-600 hover:underline">返回首页</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:underline mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回首页
        </Link>
        
        <h1 className="text-4xl font-bold mb-6">{course.name}</h1>
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">课程简介</h2>
          <p className="text-gray-700 mb-6">{course.description}</p>
          
          <h2 className="text-2xl font-semibold mb-4">课程内容</h2>
          <div className="prose max-w-none">
            <ReactMarkdown>{course.content}</ReactMarkdown>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-500 mb-4">后续将补充更多课程内容...</p>
          <Link to="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            返回课程列表
          </Link>
        </div>
      </div>
    </div>
  );
}