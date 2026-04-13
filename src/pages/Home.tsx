import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// 课程数据
const courses = [
  {
    id: "python",
    name: "Python基础",
    description: "Python编程语言的基础知识，包括语法、数据类型、控制结构等。"
  },
  {
    id: "data-analysis",
    name: "数据分析技术",
    description: "使用Python进行数据分析的技术和方法。"
  },
  {
    id: "data-collection",
    name: "数据采集与处理",
    description: "从各种数据源采集数据并进行处理的技术。"
  },
  {
    id: "supply-chain",
    name: "供应链数据分析",
    description: "应用数据分析技术优化供应链管理。"
  },
  {
    id: "database",
    name: "数据库原理与应用",
    description: "数据库的基本原理和应用技术。"
  }
];

export default function Home() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  // 从本地存储加载头像
  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  // 处理头像上传
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string;
        setProfileImage(imageUrl);
        localStorage.setItem('profileImage', imageUrl);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
      setIsUploading(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 个人信息区域 */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* 头像区域 */}
            <div className="relative mb-6">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt="个人头像" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                )}
              </div>
              <button 
                onClick={() => document.getElementById('image-upload')?.click()}
                className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-2 border-2 border-white hover:bg-blue-700 transition-colors"
                aria-label="上传头像"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
              <input 
                id="image-upload" 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
            
            <h1 className="text-5xl font-bold mb-4">胡润兴</h1>
            <p className="text-xl mb-2">广东科学技术职业学院</p>
            <p className="text-lg mb-8">商学院商务数据应用专业</p>
            <div className="flex justify-center space-x-4">
              <Link to="/learning" className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                进入学习中心
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 课程列表区域 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">我的课程</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <Link 
                  key={course.id} 
                  to={`/courses/${course.id}`}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-3">{course.name}</h3>
                  <p className="text-gray-600">{course.description}</p>
                  <div className="mt-6 text-blue-600 flex items-center">
                    <span>查看详情</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 胡润兴个人页面</p>
          <p className="text-gray-400 text-sm mt-2">纯静态页面 | 部署于 Cloudflare Pages</p>
        </div>
      </footer>
    </div>
  );
}