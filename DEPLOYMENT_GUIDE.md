# Cloudflare Pages 部署指南

本指南将帮助您将个人页面部署到 Cloudflare Pages。

## 方法一：通过 Cloudflare Dashboard 手动上传

1. **登录 Cloudflare 账户**
   - 访问 [Cloudflare 官网](https://www.cloudflare.com/) 并登录您的账户

2. **创建 Pages 项目**
   - 在 Cloudflare 仪表板中，点击左侧菜单的 "Pages"
   - 点击 "Create a project" 按钮

3. **选择 "Direct Upload" 选项**
   - 在 "How would you like to deploy?" 页面，选择 "Direct Upload" 选项

4. **上传构建产物**
   - 项目名称：输入一个合适的名称（例如 "huruixing-personal-page"）
   - 上传目录：点击 "Browse" 按钮，选择 `/workspace/dist` 目录
   - 点击 "Deploy site" 按钮

5. **等待部署完成**
   - Cloudflare 会自动处理部署过程
   - 部署完成后，您将获得一个唯一的 `.pages.dev` 域名

## 方法二：通过 GitHub 仓库自动部署

1. **将项目上传到 GitHub**
   - 在 GitHub 上创建一个新的仓库
   - 将本地项目推送到 GitHub 仓库

2. **在 Cloudflare 中连接 GitHub**
   - 在 Cloudflare 仪表板的 Pages 页面，点击 "Create a project"
   - 选择 "Connect to Git"
   - 选择您的 GitHub 账户并授权
   - 选择您刚刚创建的仓库

3. **配置部署设置**
   - 项目名称：输入一个合适的名称
   - 生产分支：选择 `main` 或 `master`
   - 构建命令：`npm run build`
   - 构建输出目录：`dist`
   - 点击 "Save and Deploy"

4. **等待部署完成**
   - Cloudflare 会自动构建并部署您的网站
   - 每次推送到 GitHub 时，Cloudflare 都会自动重新部署

## 方法三：通过 Wrangler CLI 部署

1. **安装 Wrangler CLI**
   ```bash
   npm install -g wrangler
   ```

2. **登录 Cloudflare**
   ```bash
   wrangler login
   ```

3. **部署网站**
   ```bash
   cd /workspace
   wrangler pages deploy dist
   ```

4. **查看部署结果**
   - 部署完成后，Wrangler 会显示部署的 URL

## 配置自定义域名（可选）

1. **在 Cloudflare 中添加自定义域名**
   - 在 Pages 项目的 "Custom domains" 标签页
   - 点击 "Add custom domain"
   - 输入您的域名并按照提示完成验证

2. **更新 DNS 记录**
   - 根据 Cloudflare 的提示，更新您域名的 DNS 记录

## 验证部署

部署完成后，您可以通过以下方式验证：

1. 访问 Cloudflare 提供的 `.pages.dev` 域名
2. 检查页面是否正常显示
3. 测试课程详情页的导航功能

## 后续维护

- 如需更新内容，只需修改本地代码并重新构建
- 然后重新部署到 Cloudflare Pages
- 对于 GitHub 自动部署，只需推送到仓库即可自动更新