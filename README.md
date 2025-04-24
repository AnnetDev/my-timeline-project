10. Скрипты в package.json
jsonc
Копировать
Редактировать
{
  "scripts": {
    "start": "webpack serve --mode development",
    "build": "webpack --mode production",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://<your-username>.github.io/my-timeline-project"
}
Установите gh-pages:

bash
Копировать
Редактировать
npm install --save-dev gh-pages
Замените <your-username> на своё имя на GitHub.

11. Git и GitHub Pages
Инициализируйте git

bash
Копировать
Редактировать
git init
git add .
git commit -m "Initial commit"
Создайте репозиторий на GitHub, следуя инструкциям.

Свяжите локальный репозиторий и отправьте код:

bash
Копировать
Редактировать
git remote add origin https://github.com/<your-username>/my-timeline-project.git
git branch -M main
git push -u origin main
Деплой на GitHub Pages:

bash
Копировать
Редактировать
npm run deploy
Зайдите по адресу https://<your-username>.github.io/my-timeline-project — ваша демка онлайн!