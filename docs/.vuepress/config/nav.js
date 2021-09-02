// nav
module.exports = [
  { text: "首页", link: "/" },
  { text: "计算机", link: "/computer/" },
  {
    text: "前端",
    link: "/frontend/",
    items: [
      { text: "HTML", link: "/frontend/HTML/" },
      { text: "CSS", link: "/frontend/CSS/" },
      { text: "JavaScript", link: "/frontend/JavaScript/" },
      { text: "Vue", link: "/frontend/Vue/" },
      { text: "React", link: "/frontend/React/" },
      { text: "Webpack", link: "/frontend/Webpack/" },
    ],
  },
  {
    text: "后端",
    link: "/backend/",
    items: [
      { text: "Nodejs", link: "/backend/nodejs/" },
      { text: "MySQL", link: "/backend/mysql/" },
    ],
  },
  {
    text: "其他",
    link: "/other/",
    items: [
      { text: "规范", link: "/other/norm/" },
      { text: "工具", link: "/other/tool/" },
    ],
  },
  { text: "读书笔记", link: "/readingnote/" },
  {
    text: "索引",
    link: "/archives/",
    items: [
      { text: "分类", link: "/categories/" },
      { text: "标签", link: "/tags/" },
      { text: "归档", link: "/archives/" },
    ],
  },
  { text: "关于", link: "/about" },
];
