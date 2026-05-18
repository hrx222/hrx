import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Editor from "@monaco-editor/react";
import { Code, Monitor, Hash, Calculator, GitBranch, Repeat, List, Database, FunctionSquare, Type, Users, Play, Save, Home, User, LogOut, Sparkles, BookOpen, Lightbulb } from "lucide-react";

const projects = [
  {
    id: "1",
    title: "Python开发环境搭建",
    description: "学习安装Python和开发环境配置，掌握第一个程序的编写。本项目将带你完成Python开发环境的搭建，为后续学习打下基础。",
    difficulty: "初级",
    icon: Monitor,
    tasks: ["安装Python 3.x", "配置开发环境", "第一个Hello World程序"],
    knowledge: ["Python安装", "环境变量", "IDE使用", "print函数"],
    starterCode: `# 项目1: Python开发环境搭建
# 你的第一个Python程序

# 使用print()函数输出Hello World
print("Hello, World!")

# 尝试修改下面的代码，输出你喜欢的文字
message = "欢迎学习Python!"
print(message)

# 运行程序看看效果
print("Python环境搭建成功!")`
  },
  {
    id: "2",
    title: "变量和数据类型",
    description: "掌握Python基本数据类型，包括整数、浮点数、字符串和布尔值，学会数据类型之间的转换。",
    difficulty: "初级",
    icon: Hash,
    tasks: ["整数和浮点数", "字符串操作", "布尔值与数据类型转换"],
    knowledge: ["变量命名", "数据类型", "type()函数", "类型转换"],
    starterCode: `# 项目2: 变量和数据类型

# 整数类型
age = 20
print(f"年龄: {age}, 类型: {type(age)}")

# 浮点数类型
height = 1.75
print(f"身高: {height}, 类型: {type(height)}")

# 字符串类型
name = "小明"
print(f"姓名: {name}, 类型: {type(name)}")

# 布尔类型
is_student = True
print(f"是学生: {is_student}, 类型: {type(is_student)}")

# 数据类型转换
num_str = "100"
num_int = int(num_str)
print(f"字符串转整数: {num_int + 50}")

# 练习: 创建一个计算器程序`
  },
  {
    id: "3",
    title: "运算符和表达式",
    description: "学习Python中的各种运算符，包括算术运算符、比较运算符、逻辑运算符，并编写成绩评级程序。",
    difficulty: "初级",
    icon: Calculator,
    tasks: ["算术运算符", "比较和逻辑运算符", "成绩评级程序"],
    knowledge: ["算术运算符", "比较运算符", "逻辑运算符", "运算符优先级"],
    starterCode: `# 项目3: 运算符和表达式

# 算术运算符
a, b = 10, 3
print(f"加法: {a} + {b} = {a + b}")
print(f"减法: {a} - {b} = {a - b}")
print(f"乘法: {a} * {b} = {a * b}")
print(f"除法: {a} / {b} = {a / b}")
print(f"取余: {a} % {b} = {a % b}")
print(f"幂运算: {a} ** {b} = {a ** b}")

# 比较运算符
score = 85
print(f"成绩 >= 60: {score >= 60}")
print(f"成绩 == 100: {score == 100}")

# 逻辑运算符
is_pass = score >= 60
is_excellent = score >= 90
print(f"及格且优秀: {is_pass and is_excellent}")
print(f"及格或优秀: {is_pass or is_excellent}")
print(f"不优秀: {not is_excellent}")

# 练习: 编写成绩评级程序`
  },
  {
    id: "4",
    title: "条件语句",
    description: "掌握if-elif-else条件判断语句的使用，学会处理多重条件，编写一个猜数字游戏。",
    difficulty: "初级",
    icon: GitBranch,
    tasks: ["if语句基础", "多重条件判断", "猜数字游戏"],
    knowledge: ["if语句", "else子句", "elif子句", "嵌套条件"],
    starterCode: `# 项目4: 条件语句

# 简单的if语句
age = 18
if age >= 18:
    print("你已经成年了!")

# if-else语句
score = 75
if score >= 60:
    print("及格!")
else:
    print("不及格!")

# if-elif-else语句
grade = 85
if grade >= 90:
    print("优秀 (A)")
elif grade >= 80:
    print("良好 (B)")
elif grade >= 70:
    print("中等 (C)")
elif grade >= 60:
    print("及格 (D)")
else:
    print("不及格 (F)")

# 练习: 编写一个猜数字游戏
import random
target = random.randint(1, 10)
guess = 7  # 这是你猜的数字
if guess == target:
    print("恭喜你，猜对了!")
elif guess < target:
    print("太小了!")
else:
    print("太大了!")`
  },
  {
    id: "5",
    title: "循环结构",
    description: "学习for和while循环的使用，掌握循环控制语句break和continue，编写九九乘法表程序。",
    difficulty: "初级",
    icon: Repeat,
    tasks: ["for循环遍历", "while循环", "九九乘法表"],
    knowledge: ["for循环", "while循环", "break", "continue", "range()"],
    starterCode: `# 项目5: 循环结构

# for循环遍历列表
fruits = ["苹果", "香蕉", "橙子", "葡萄"]
for fruit in fruits:
    print(f"我喜欢吃: {fruit}")

# 使用range()函数
print("\\n使用range():")
for i in range(1, 6):
    print(f"数字: {i}")

# while循环
count = 0
print("\\nwhile循环:")
while count < 5:
    print(f"count = {count}")
    count += 1

# break和continue
print("\\n使用break:")
for i in range(10):
    if i == 5:
        break
    print(i)

print("\\n使用continue:")
for i in range(5):
    if i == 2:
        continue
    print(i)

# 练习: 编写九九乘法表
print("\\n九九乘法表:")
for i in range(1, 10):
    for j in range(1, i + 1):
        print(f"{j}*{i}={i*j}", end="\\t")
    print()`
  },
  {
    id: "6",
    title: "列表和元组",
    description: "掌握Python中的序列数据结构，包括列表的增删改查操作、元组的创建和使用，编写学生成绩管理系统。",
    difficulty: "初级",
    icon: List,
    tasks: ["列表增删改查", "切片操作", "学生成绩管理系统"],
    knowledge: ["列表创建", "索引访问", "切片操作", "列表方法", "元组"],
    starterCode: `# 项目6: 列表和元组

# 创建列表
scores = [90, 85, 78, 92, 88]
print(f"学生成绩列表: {scores}")

# 访问列表元素
print(f"第一个成绩: {scores[0]}")
print(f"最后一个成绩: {scores[-1]}")

# 切片操作
print(f"前三个成绩: {scores[:3]}")
print(f"第2到第4个成绩: {scores[1:4]}")

# 修改列表元素
scores[0] = 95
print(f"修改后: {scores}")

# 添加和删除元素
scores.append(87)
print(f"添加后: {scores}")

scores.remove(85)
print(f"删除后: {scores}")

# 列表排序
scores.sort()
print(f"排序后: {scores}")

# 元组 - 不可变的列表
person = ("小明", 20, "计算机")
name, age, major = person
print(f"\\n学生信息: 姓名={name}, 年龄={age}, 专业={major}")

# 练习: 学生成绩管理系统
students = [
    {"name": "张三", "score": 92},
    {"name": "李四", "score": 85},
    {"name": "王五", "score": 78}
]
print("\\n学生成绩:")
for student in students:
    print(f"{student['name']}: {student['score']}")`
  },
  {
    id: "7",
    title: "字典和集合",
    description: "学习Python中的映射和集合类型，掌握字典的增删改查操作，以及集合的交、并、差运算，编写通讯录管理系统。",
    difficulty: "初级",
    icon: Database,
    tasks: ["字典操作", "集合运算", "通讯录管理系统"],
    knowledge: ["字典创建", "键值对访问", "字典方法", "集合", "集合运算"],
    starterCode: `# 项目7: 字典和集合

# 创建字典
student = {
    "name": "小明",
    "age": 20,
    "major": "计算机科学",
    "score": 92
}
print(f"学生信息: {student}")

# 访问字典元素
print(f"姓名: {student['name']}")
print(f"年龄: {student.get('age')}")

# 修改字典
student['score'] = 95
student['grade'] = '大三'
print(f"修改后: {student}")

# 删除元素
del student['grade']
print(f"删除后: {student}")

# 遍历字典
print("\\n遍历字典:")
for key, value in student.items():
    print(f"{key}: {value}")

# 集合 - 无序不重复的元素集合
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

print(f"\\n集合1: {set1}")
print(f"集合2: {set2}")
print(f"交集: {set1 & set2}")
print(f"并集: {set1 | set2}")
print(f"差集: {set1 - set2}")

# 练习: 通讯录管理系统
contacts = {
    "张三": "13800138000",
    "李四": "13900139000",
    "王五": "13700137000"
}
print("\\n通讯录:")
for name, phone in contacts.items():
    print(f"{name}: {phone}")`
  },
  {
    id: "8",
    title: "函数和模块",
    description: "掌握函数的定义和使用，学会参数传递、返回值和作用域的概念，了解模块的导入和使用，编写一个计算器模块。",
    difficulty: "初级",
    icon: FunctionSquare,
    tasks: ["函数定义与参数", "返回值和作用域", "计算器模块"],
    knowledge: ["函数定义", "参数传递", "返回值", "作用域", "模块导入"],
    starterCode: `# 项目8: 函数和模块

# 定义简单函数
def greet():
    print("你好! 欢迎学习Python!")

greet()

# 带参数的函数
def greet_person(name):
    print(f"你好, {name}!")

greet_person("小明")

# 带返回值的函数
def add(a, b):
    return a + b

result = add(10, 20)
print(f"10 + 20 = {result}")

# 默认参数
def power(base, exponent=2):
    return base ** exponent

print(f"3的平方: {power(3)}")
print(f"2的立方: {power(2, 3)}")

# *args和**kwargs
def print_info(*args, **kwargs):
    print(f"位置参数: {args}")
    print(f"关键字参数: {kwargs}")

print_info("张三", "李四", name="王五", age=20)

# 模块使用
import math
print(f"\\n数学模块:")
print(f"圆周率: {math.pi}")
print(f"平方根: {math.sqrt(16)}")
print(f"绝对值: {abs(-5)}")

import random
print(f"\\n随机模块:")
print(f"随机整数: {random.randint(1, 100)}")
print(f"随机选择: {random.choice(['苹果', '香蕉', '橙子'])}")

# 练习: 编写计算器函数
def calculator(a, b, operator):
    if operator == '+':
        return a + b
    elif operator == '-':
        return a - b
    elif operator == '*':
        return a * b
    elif operator == '/':
        if b != 0:
            return a / b
        else:
            return "除数不能为零!"
    else:
        return "无效的操作符"

print(f"\\n计算器测试:")
print(f"10 + 5 = {calculator(10, 5, '+')}")
print(f"10 - 5 = {calculator(10, 5, '-')}")
print(f"10 * 5 = {calculator(10, 5, '*')}")
print(f"10 / 5 = {calculator(10, 5, '/')}")`
  },
  {
    id: "9",
    title: "字符串处理",
    description: "学习Python字符串的常用操作，包括字符串的索引、切片、查找、替换、分割和格式化，编写词频统计程序。",
    difficulty: "初级",
    icon: Type,
    tasks: ["字符串索引切片", "查找和替换", "词频统计程序"],
    knowledge: ["字符串索引", "字符串切片", "字符串方法", "格式化", "正则基础"],
    starterCode: `# 项目9: 字符串处理

# 字符串基本操作
text = "Hello, Python!"
print(f"原字符串: {text}")
print(f"长度: {len(text)}")
print(f"大写: {text.upper()}")
print(f"小写: {text.lower()}")

# 字符串索引和切片
print(f"\\n第一个字符: {text[0]}")
print(f"最后一个字符: {text[-1]}")
print(f"切片[0:5]: {text[0:5]}")
print(f"切片[7:]: {text[7:]}")

# 查找和替换
sentence = "Python is a great programming language"
print(f"\\n句子: {sentence}")
print(f"包含'Python': {'Python' in sentence}")
print(f"find('is'): {sentence.find('is')}")
print(f"count('a'): {sentence.count('a')}")
print(f"replace: {sentence.replace('great', 'awesome')}")

# 分割和连接
words = sentence.split(" ")
print(f"\\n分割后: {words}")
joined = "-".join(words)
print(f"用-连接: {joined}")

# 字符串格式化
name = "小明"
age = 20
score = 92.5

# f-string格式化
print(f"\\nf-string格式化:")
print(f"姓名: {name}, 年龄: {age}, 成绩: {score:.1f}")

# format()方法
print(f"format()方法:")
print("姓名: {}, 年龄: {}, 成绩: {:.1f}".format(name, age, score))

# 练习: 词频统计程序
text = """
Python is a great programming language Python is easy to learn
Python is widely used in data science Python is very popular
"""
words = text.lower().split()
word_count = {}
for word in words:
    if word in word_count:
        word_count[word] += 1
    else:
        word_count[word] = 1

print("\\n词频统计:")
for word, count in sorted(word_count.items(), key=lambda x: x[1], reverse=True):
    print(f"{word}: {count}")`
  },
  {
    id: "10",
    title: "综合项目 - 学生信息管理系统",
    description: "综合运用所学知识，开发一个学生信息管理系统，包含增删改查功能、数据持久化和异常处理。",
    difficulty: "初级",
    icon: Users,
    tasks: ["增删改查功能", "数据持久化", "异常处理"],
    knowledge: ["综合应用", "文件操作", "异常处理", "数据持久化", "程序设计"],
    starterCode: `# 项目10: 综合项目 - 学生信息管理系统

# 学生信息管理系统
class StudentManager:
    def __init__(self):
        self.students = []
    
    # 添加学生
    def add_student(self, name, age, score):
        student = {
            "name": name,
            "age": age,
            "score": score,
            "grade": self._calculate_grade(score)
        }
        self.students.append(student)
        print(f"成功添加学生: {name}")
    
    # 计算成绩等级
    def _calculate_grade(self, score):
        if score >= 90:
            return "A"
        elif score >= 80:
            return "B"
        elif score >= 70:
            return "C"
        elif score >= 60:
            return "D"
        else:
            return "F"
    
    # 删除学生
    def delete_student(self, name):
        for i, student in enumerate(self.students):
            if student["name"] == name:
                self.students.pop(i)
                print(f"成功删除学生: {name}")
                return
        print(f"未找到学生: {name}")
    
    # 修改学生信息
    def update_student(self, name, new_score):
        for student in self.students:
            if student["name"] == name:
                student["score"] = new_score
                student["grade"] = self._calculate_grade(new_score)
                print(f"成功更新学生 {name} 的成绩为 {new_score}")
                return
        print(f"未找到学生: {name}")
    
    # 查询学生
    def search_student(self, name):
        for student in self.students:
            if student["name"] == name:
                return student
        return None
    
    # 显示所有学生
    def display_all(self):
        if not self.students:
            print("没有学生记录")
            return
        print("\\n===== 学生信息列表 =====")
        for i, student in enumerate(self.students, 1):
            print(f"{i}. {student['name']} - 年龄: {student['age']} - 成绩: {student['score']} - 等级: {student['grade']}")
    
    # 保存到文件
    def save_to_file(self, filename):
        try:
            with open(filename, 'w', encoding='utf-8') as f:
                for student in self.students:
                    f.write(f"{student['name']},{student['age']},{student['score']}\\n")
            print(f"成功保存到文件: {filename}")
        except Exception as e:
            print(f"保存失败: {e}")
    
    # 从文件加载
    def load_from_file(self, filename):
        try:
            with open(filename, 'r', encoding='utf-8') as f:
                self.students = []
                for line in f:
                    name, age, score = line.strip().split(',')
                    self.add_student(name, int(age), float(score))
            print(f"成功从文件加载: {filename}")
        except FileNotFoundError:
            print(f"文件不存在: {filename}")
        except Exception as e:
            print(f"加载失败: {e}")

# 测试系统
manager = StudentManager()

print("===== 添加学生 =====")
manager.add_student("张三", 20, 92)
manager.add_student("李四", 19, 85)
manager.add_student("王五", 21, 78)

print("\\n===== 显示所有学生 =====")
manager.display_all()

print("\\n===== 查询学生 =====")
student = manager.search_student("张三")
if student:
    print(f"找到学生: {student['name']}, 成绩: {student['score']}")

print("\\n===== 更新成绩 =====")
manager.update_student("李四", 90)

print("\\n===== 最终学生列表 =====")
manager.display_all()

print("\\n===== 保存到文件 =====")
manager.save_to_file("students.txt")

print("\\n系统运行成功!")`
  }
];

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [code, setCode] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  const [chatMessages, setChatMessages] = useState<Array<{role: string, content: string}>>([]);

  useEffect(() => {
    const foundProject = projects.find(p => p.id === id);
    if (foundProject) {
      setProject(foundProject);
      setCode(foundProject.starterCode);
      setAiSuggestions([
        "查看项目知识点，了解核心概念",
        "参考示例代码，理解编程思路",
        "尝试修改代码，观察输出变化",
        "完成练习任务，巩固所学知识"
      ]);
      setChatMessages([
        { role: "assistant", content: `欢迎开始学习「${foundProject.title}」！我是你的AI学习助手。` },
        { role: "assistant", content: "你可以随时向我提问，我会帮你解答疑问、解释代码。" }
      ]);
    }
  }, [id]);

  const handleRunCode = () => {
    setOutput(`>>> 代码运行成功!\n\n请注意: 这是一个模拟的Python环境。\n在实际使用时，代码将在真实的Python解释器中运行。\n\n--- 你的代码 ---\n${code}\n\n--- 建议 ---\n1. 仔细阅读代码注释\n2. 尝试修改参数，观察结果变化\n3. 遇到问题时，可以向AI助手提问`);
  };

  const handleSubmit = () => {
    setOutput("🎉 恭喜! 项目提交成功!\n\n你的学习进度已保存。\n继续加油，完成更多项目吧！");
  };

  const handleChat = (message: string) => {
    const newMessages = [...chatMessages, { role: "user", content: message }];
    setChatMessages(newMessages);
    
    setTimeout(() => {
      let response = "好的，我理解了你的问题。让我来帮你解答...";
      if (message.includes("错误") || message.includes("报错")) {
        response = "遇到错误了吗？请仔细检查：\n1. 语法是否正确\n2. 缩进是否一致\n3. 括号是否匹配\n4. 变量名是否正确";
      } else if (message.includes("怎么") || message.includes("如何")) {
        response = "让我来教你：\n1. 首先理解问题的核心\n2. 参考示例代码的结构\n3. 按照步骤实现\n4. 运行测试验证";
      } else if (message.includes("不懂") || message.includes("帮助")) {
        response = "别担心，学习是一个渐进的过程。建议：\n1. 先通读代码，理解整体结构\n2. 逐行分析代码的作用\n3. 运行代码观察输出\n4. 多练习，多思考";
      }
      
      setChatMessages(prev => [...prev, { role: "assistant", content: response }]);
    }, 1000);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">项目不存在</h2>
          <Link to="/" className="text-blue-600 hover:underline">返回首页</Link>
        </div>
      </div>
    );
  }

  const IconComponent = project.icon;

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Python基础训练</span>
                <p className="text-xs text-slate-500">项目详情</p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-slate-600 hover:text-blue-600 font-medium transition-colors flex items-center space-x-1">
                <Home className="h-4 w-4" />
                <span>首页</span>
              </Link>
              <Link to="/profile" className="text-slate-600 hover:text-blue-600 font-medium transition-colors flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>学习中心</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-slate-100">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold mb-2 text-slate-800">{project.title}</h1>
                    <span className="px-4 py-1.5 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                      {project.difficulty}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">{project.description}</p>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  <span>学习任务</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.tasks.map((task: string, index: number) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                        <span className="text-slate-700 font-medium">{task}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                  <Lightbulb className="h-5 w-5 text-yellow-500" />
                  <span>核心知识点</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.knowledge.map((knowledge: string, index: number) => (
                    <span key={index} className="px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 text-sm font-medium rounded-full border border-purple-200">
                      {knowledge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center space-x-2">
                  <Code className="h-6 w-6 text-blue-600" />
                  <span>代码编辑器</span>
                </h3>
                <div className="flex space-x-3">
                  <button 
                    onClick={handleRunCode}
                    className="flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                  >
                    <Play className="h-4 w-4" />
                    <span>运行代码</span>
                  </button>
                  <button 
                    onClick={handleSubmit}
                    className="flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-green-500/25 transition-all"
                  >
                    <Save className="h-4 w-4" />
                    <span>提交项目</span>
                  </button>
                </div>
              </div>
              <div className="h-96 rounded-xl overflow-hidden border border-slate-200">
                <Editor
                  height="100%"
                  language="python"
                  theme="vs-dark"
                  value={code}
                  onChange={(value) => setCode(value || "")}
                  options={{
                    minimap: { enabled: false },
                    lineNumbers: "on",
                    scrollBeyondLastLine: false,
                    wordWrap: "on",
                    fontSize: 14,
                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                    padding: { top: 16, bottom: 16 }
                  }}
                />
              </div>
              
              {output && (
                <div className="mt-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6">
                  <h4 className="text-sm font-semibold mb-3 text-slate-300 flex items-center space-x-2">
                    <Sparkles className="h-4 w-4" />
                    <span>运行结果</span>
                  </h4>
                  <pre className="text-sm whitespace-pre-wrap text-slate-300 font-mono leading-relaxed">{output}</pre>
                </div>
              )}
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24 border border-slate-100">
              <div className="flex items-center mb-6 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-3">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">AI 学习助手</h3>
                  <p className="text-sm text-slate-500">24小时为你答疑</p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-slate-600 text-sm leading-relaxed">
                  遇到问题了吗？AI助手可以帮你：
                </p>
                <ul className="mt-3 space-y-2">
                  {aiSuggestions.map((suggestion, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                      <span>{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-100 pt-4 mt-4">
                <h4 className="text-sm font-semibold mb-3 text-slate-700">快捷提问</h4>
                <div className="space-y-2">
                  <button 
                    onClick={() => handleChat("这个代码怎么运行？")}
                    className="w-full text-left px-4 py-2.5 bg-blue-50 text-blue-700 rounded-lg text-sm hover:bg-blue-100 transition-colors"
                  >
                    这个代码怎么运行？
                  </button>
                  <button 
                    onClick={() => handleChat("代码报错了怎么办？")}
                    className="w-full text-left px-4 py-2.5 bg-purple-50 text-purple-700 rounded-lg text-sm hover:bg-purple-100 transition-colors"
                  >
                    代码报错了怎么办？
                  </button>
                  <button 
                    onClick={() => handleChat("知识点不懂怎么办？")}
                    className="w-full text-left px-4 py-2.5 bg-green-50 text-green-700 rounded-lg text-sm hover:bg-green-100 transition-colors"
                  >
                    知识点不懂怎么办？
                  </button>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4">
                <h4 className="text-sm font-semibold mb-3 text-slate-700">推荐资源</h4>
                <div className="space-y-2">
                  <a href="https://docs.python.org/zh-cn/3/" target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-600 hover:text-blue-800 hover:underline">
                    📖 Python 官方文档
                  </a>
                  <a href="https://www.runoob.com/python3/python3-tutorial.html" target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-600 hover:text-blue-800 hover:underline">
                    📚 Python 菜鸟教程
                  </a>
                  <a href="https://www.w3school.com.cn/python3/" target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-600 hover:text-blue-800 hover:underline">
                    🎓 W3School Python
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-slate-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">© 2026 Python基础训练平台. 让学习更简单</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
