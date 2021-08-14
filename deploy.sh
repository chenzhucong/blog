# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 上传到 master 分支
git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:chenzhucong/blog.git master


# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# 上传到 gh-pages 分支
git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:chenzhucong/blog.git master:gh-pages

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
# git push -f git@github.com:chenzhucong/chenzhucong.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
# git push -f git@github.com:chenzhucong/blog.git master:gh-pages
 
cd -