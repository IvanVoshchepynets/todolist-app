# ToDo List App

A full-featured web application for managing tasks (To-Do), built with **React**, **Redux Toolkit**, **Material-UI**, and **Apollo Client (GraphQL Mock)**.

## Main Features

- Add, edit, soft delete tasks (CRUD)
- Task separation into **active** and **deleted**
- Task fields: title, description, type (1–5), status, created_at, updated_at, deleted_at
- Ability to **restore** deleted tasks
- Sorting by: title, created_at, updated_at (ascending/descending)
- Filtering by status: all / completed / not completed
- Task persistence via **Redux state** and **localStorage**
- Separate page with **GraphQL API simulation** using Apollo Client mock
- Fully responsive design for mobile devices

## Project Structure

todolist-app/
├── src/
│ ├── pages/ # Pages (Home, Deleted, AddTask, EditTask, GraphQLTasks)
│ ├── redux/ # Redux slice and store
│ ├── apollo/ # GraphQL mocks and schema
│ └── App.jsx # Main app component with routing
├── public/
├── README.md
└── ...

## Tech Stack

- **React**
- **Redux Toolkit**
- **React Router DOM**
- **Material-UI (MUI)**
- **Apollo Client + GraphQL Mock**
- **localStorage**

## How to Run the Project

1. Clone the repository  
   `git clone https://github.com/IvanVoshchepynets/todolist-app.git`

2. Navigate into the project folder  
   `cd todolist-app`

3. Install dependencies  
   `npm install`

4. Start the development server  
   `npm start`

5. Open in browser  
   [http://localhost:3000](http://localhost:3000)

# ToDo List App

Це повнофункціональний веб-додаток для керування списком справ (To-Do), створений з використанням **React**, **Redux Toolkit**, **Material-UI** та **Apollo Client (GraphQL Mock)**.

## Основні можливості

- Додавання, редагування, видалення завдань (CRUD)
- Поділ завдань на **актуальні** та **видалені**
- Поля для кожного завдання: назва, опис, тип (1–5), статус виконання, дати створення/оновлення/видалення
- Можливість **відновити видалене** завдання
- Сортування за: назвою, датою створення, датою оновлення (↑↓)
- Фільтрація за статусом: всі / виконані / невиконані
- Збереження завдань у **Redux state** та **localStorage**
- Вкладка із запитами через **GraphQL (Mocking через Apollo Client)**
- Адаптивний дизайн для мобільних пристроїв

## 📂 Структура проєкту

todolist-app/
├── src/
│ ├── pages/ # Сторінки (Home, Deleted, AddTask, EditTask, GraphQLTasks)
│ ├── redux/ # Redux slice і store
│ ├── apollo/ # GraphQL mocks та schema
│ └── App.jsx # Основний компонент з роутингом
├── public/
├── README.md
└── ...

## Стек технологій

- **React**
- **Redux Toolkit**
- **React Router DOM**
- **Material-UI (MUI)**
- **Apollo Client + GraphQL Mock**
- **localStorage**

## Як запустити проєкт

1. Склонуйте репозиторій  
   `git clone https://github.com/IvanVoshchepynets/todolist-app.git`

2. Перейдіть у папку проєкту  
   `cd todolist-app`

3. Встановіть залежності  
   `npm install`

4. Запустіть проєкт  
   `npm start`

5. Відкрийте в браузері  
   [http://localhost:3000](http://localhost:3000)
