# zhangym0213.github.io · 张一鸣 张一鸣 / Zhang Yiming

基于 **Jekyll** 的学术主页，部署在 **GitHub Pages**。
中英双语（右上角「EN / 中」切换），论文用 `_data/publications.yml` 管理。

> 访问地址（上线后）：https://zhangym0213.github.io

---

## 一、上线三步（不需要装任何环境）

1. 在 GitHub 上新建一个 **public** 仓库，名字必须叫 **`zhangym0213.github.io`**。
2. 把这个目录里的所有文件上传到该仓库（见下文「把代码推上去」）。
3. 等约 1 分钟，打开 https://zhangym0213.github.io 即可看到站点。

> Pages 设置检查（一般会自动开启）：仓库 → **Settings → Pages** → Source 选 `Deploy from a branch`，分支 `main`、目录 `/(root)`。

### 把代码推上去

在 **本目录** 下执行：

```bash
cd /Users/zym/zhangym0213.github.io
git init
git add .
git commit -m "init: academic homepage (bilingual, Jekyll)"
git branch -M main
git remote add origin https://github.com/zhangym0213.github.io.git
git push -u origin main
```

如果没建过同名仓库，先去 https://github.com/new 建一个名为 `zhangym0213.github.io` 的 public 空仓库（**不要**勾选 README/.gitignore/license，否则首次 push 会冲突）。

---

## 二、日常改内容（只用改 Markdown / YAML）

| 想改什么 | 改哪个文件 |
|---|---|
| 姓名、邮箱、社交链接、单位、研究方向一句话 | `_config.yml` |
| 关于页长文段落 | `_includes/about.html` 里的 `<span class="zh">…</span><span class="en">…</span>` |
| 动态 News | `_data/news.yml` |
| **论文列表** | `_data/publications.yml` |
| 头像 | 替换 `assets/img/avatar.svg`（或换成 `avatar.jpg` 并改 `_includes/hero.html` 里的路径） |
| 简历 PDF | 把你的简历命名为 `cv.pdf` 放到仓库根目录（主干导航已有链接） |
| 配色 | `assets/css/style.css` 顶部 `:root` 变量（`--accent` 是主色） |

改完后：

```bash
git add .
git commit -m "update: ..."
git push
```

约 1 分钟后线上自动更新。

---

## 三、加一篇论文（示例）

打开 `_data/publications.yml`，在数组最上面加：

```yaml
- title: "Your Paper Title"
  authors: "Zhang Yiming, Author B, Author C"
  venue: "CVPR"
  year: 2026
  highlight: "Oral"               # 可选
  arxiv: "https://arxiv.org/abs/2501.00001"
  code: "https://github.com/zhangym0213/xxx"
  thumb: "/assets/img/pubs/your.png"   # 可选，放图到 assets/img/pubs/
  abstract_zh: "一句中文摘要。"
  abstract_en: "One English sentence."
```

作者里的 `Zhang Yiming` / `张一鸣` 会**自动加粗**。哪些链接给哪些不给随你。

---

## 四、（可选）本地预览

不装也能上线，下面这条只在你想本地看效果时用。本机 Ruby 较老，建议用 Docker（一行命令、零依赖）：

```bash
docker run --rm -v "$PWD:/srv/jekyll" -p 4000:4000 jekyll/jekyll:4 \
  sh -c "cd /srv/jekyll && bundle install && jekyll serve --host 0.0.0.0"
```

然后浏览器打开 http://localhost:4000 。

---

## 目录结构

```
zhangym0213.github.io/
├── _config.yml              站点配置（姓名/邮箱/链接）
├── _layouts/default.html    页面骨架
├── _includes/               各区块：hero / about / news / publications / contact
├── _data/
│   ├── publications.yml     ← 论文列表（主要维护这个）
│   └── news.yml             ← 动态列表
├── assets/
│   ├── css/style.css        样式（配色变量在顶部）
│   ├── js/lang.js           中英切换逻辑
│   └── img/avatar.svg       头像（替换成你的照片）
├── index.html               首页（组装各 include）
└── README.md                本文件
```