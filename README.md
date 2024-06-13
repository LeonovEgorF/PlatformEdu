# eduplatform

Образовательная платформа itgirlschool

Кабинет: https://itgirlschool.web.app

## Как запустить проект

### Настройка проекта

1. **Добавить файл `.env`** - попросить у кого-то из команды
2. Выполнить в корневой папке проекта команды в терминале

```bash
npm install
npm run init:env
npm run build:notion
```

### Настройка эмулятора

Для работы эмулятора понадобится:
1. Установить на компьютер (если еще не установлен) [Java SE jdk 19](https://www.oracle.com/java/technologies/javase-jdk16-downloads.html) 
в терминале проверьте: `java --version`. Если не отображается перезапустите vscode.
2. Установить глобальный npm пакет для работы с firebase: `npm i -g firebase-tools`
в терминале проверьте: `firebase --version`
3. Авторизоваться в google developers console: `firebase login`  
- логин: eduplatform2021@gmail.com, пароль: edu@itgirls2023
- логин: eduplatform2021.2@gmail.com, пароль: edu123123123@itgirls

> При открытии окна нужно дать доступ изменениям и при просьбе ввести номер телефона - ввести свой телефон для получения кода. 

4. Запустить эмулятор в корне проекта: `npm run start:firebase`. Если система Windows и появляется дополнительное окно терминала Java, во время работы закрывать его не нужно, только свернуть в фоновый режим

При разработке **всегда запускайте эмулятор** параллельно с проектом. В нём лежит тестовая база данных и аккаунты пользователей.

### Разработка

1. `npm run start:firebase` — запуск базы данных и сервиса авторизации (http://localhost:4000/)
2. `npm run start:app` — react-приложение (http://localhost:3000/)
3. `npm run storybook` — запуск сторибука (опционально)