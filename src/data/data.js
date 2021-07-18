import api from '../assets/icons/api.svg'
import computer from '../assets/icons/computer.svg'
import repair from '../assets/icons/repair.svg'
import programmer from '../assets/icons/programmer.svg'
import mobile from '../assets/icons/mobile.svg'
import cpp from '../assets/icons/c++.svg'
import csharp from '../assets/icons/c-sharp.svg'
import html from '../assets/icons/html.svg'
import css from '../assets/icons/css.svg'
import react from '../assets/icons/react.svg'
import angular from '../assets/icons/angularjs.svg'
import vue from '../assets/icons/vue.svg'
import javascript from '../assets/icons/javascript.svg'
import asp from '../assets/icons/asp.svg'
import db from '../assets/icons/db.svg'
import flutter from '../assets/icons/flutter.svg'
import git from '../assets/icons/github.svg'
import chrome from '../assets/icons/chrome.svg'
import vscode from '../assets/icons/studio-code.svg'
import redux from '../assets/icons/redux.svg'
import box from '../assets/icons/codepen.svg'

import bmi from '../assets/projects_images/bmi.jpg'
import dev_chat from '../assets/projects_images/live-chat.jpg'
import excel from '../assets/projects_images/excel.jpg'
import notes from '../assets/projects_images/lrm-app.jpg'
import trello from '../assets/projects_images/trello.jpg'
import finance from '../assets/projects_images/finance.jpg'
import login from '../assets/projects_images/login.jpg'
import login2 from '../assets/projects_images/login-mvvm.png'
import login3 from '../assets/projects_images/login3.jpg'
import todo from '../assets/projects_images/todo.jpg'
import resume from '../assets/projects_images/resume.jpg'
import default_img  from '../assets/projects_images/noimage.jpg'
import quiz  from '../assets/projects_images/quiz.jpg'
import transport  from '../assets/projects_images/transport.jpg'
import cv  from '../assets/projects_images/cv.jpg'
import salon  from '../assets/projects_images/beauty-salon.jpg'
import police_db  from '../assets/projects_images/binary.jpg'
import tree  from '../assets/projects_images/tree.jpg'
import linked_list  from '../assets/projects_images/linked-list.jpg'
import stack  from '../assets/projects_images/stack.jpg'
import string_img  from '../assets/projects_images/stack.jpg'
import gallery  from '../assets/projects_images/gallery.jpg'
import engine  from '../assets/projects_images/engine.jpg'
import game_box  from '../assets/projects_images/game-box.jpg'
import sage_book  from '../assets/projects_images/sage-book.jpg'
import task  from '../assets/projects_images/task.jpg'




export const skills = [{
        icon: computer,
        title: 'Frontend Development',
        about: 'I can build a beautiful and scalable SPA using React, Angular or Vue'
    },
    {
        icon: repair,
        title: 'Backend Development',
        about: 'handle database, server, api using and Microsoft SQL Server'
    },
    {
        icon: api,
        title: 'API Development',
        about: 'I can develop web API using ASP.NET Core'
    },
    {
        icon: computer,
        title: 'Desktop App',
        about: 'I can create desktop app using WPF and Windows Forms'
    },
    {
        icon: mobile,
        title: 'Mobile Development',
        about: 'I use Flutter to develop applications for mobile devices'
    },
    {
        icon: programmer,
        title: 'Competitive Coder',
        about: 'a daily problem solver in HackerRank and Leetcode'
    }
]

export const languages = [{
        icon: html,
        name: 'HTML',
        level: '75'
    },
    {
        icon: css,
        name: 'CSS',
        level: '75'
    },
    {
        icon: javascript,
        name: 'Javascript',
        level: '70'
    },
    {
        icon: react,
        name: 'React',
        level: '75'
    },
    {
        icon: angular,
        name: 'Angular',
        level: '65'
    },
    {
        icon: vue,
        name: 'Vue',
        level: '70'
    },

    {
        icon: cpp,
        name: 'C++',
        level: '55'
    },
    {
        icon: csharp,
        name: 'C#',
        level: '75'
    },
    {
        icon: asp,
        name: 'Asp.Net',
        level: '75'
    },
    {
        icon: computer,
        name: 'WPF',
        level: '75'
    },
    {
        icon: db,
        name: 'SQL',
        level: '75'
    },
    {
        icon: computer,
        name: 'Windows Forms',
        level: '75'
    },
    {
        icon: flutter,
        name: 'Dart/Flutter',
        level: '60'
    }
]

export const tools = [{
        icon: git,
        name: 'Git/GitHub'
    },
    {
        icon: db,
        name: 'Entity Framefork'
    },
    {
        icon: repair,
        name: 'Mvc'
    },
    {
        icon: redux,
        name: 'Redux'
    },
    {
        icon: db,
        name: 'T-sql'
    },
    {
        icon: vue,
        name: 'Vuex'
    },
    {
        icon: chrome,
        name: 'Chrome dev tools'
    },
    {
        icon: box,
        name: 'Webpack'
    },
    {
        icon: repair,
        name: 'MVVM'
    },
    {
        icon: vscode,
        name: 'VS Code'
    },
    {
        icon: box,
        name: 'Unit testing'
    },
    {
        icon: api,
        name: 'API Testing'
    },
    {
        icon: box,
        name: 'Design patterns'
    }
]

export const data_projects = [
    {
        name: 'Resume',
        image: resume,
        deployed_url: 'https://vovabatsyk.github.io/resume/',
        github_url: 'https://github.com/vovabatsyk/resume',
        technology: 'Javascript',
        category:['web']
    },
    {
        name: 'Transport department',
        image: transport,
        deployed_url: 'https://parking-inspector.city-adm.lviv.ua/',
        github_url: 'https://vovabatsyk.github.io/transport-department/',
        technology: 'Javascript',
        category:['web']
    },
    {
        name: 'Todo App',
        image: todo,
        deployed_url: 'https://todo-391e7.web.app/',
        github_url: 'https://github.com/vovabatsyk/ToDo',
        technology: 'React',
        category:['web']
    },
    {
        name: 'Quiz App',
        image: quiz,
        deployed_url: 'https://react-quiz-8ac80.web.app/auth',
        github_url: 'https://github.com/vovabatsyk/quiz',
        technology: 'React',
        category:['web']
    },
    {
        name: 'Task Manager',
        image: task,
        deployed_url: 'https://github.com/vovabatsyk/TaskManager',
        github_url: 'https://github.com/vovabatsyk/TaskManager',
        technology: 'Windows Forms C#',
        category:['desktop']
    },

    {
        name: 'Login Form',
        image: login,
        deployed_url: 'https://vovabatsyk.github.io/login_dark/',
        github_url: 'https://github.com/vovabatsyk/login_dark',
        technology: 'HTML/CSS',
        category:['web']
    },
    {
        name: 'BMI Calculator',
        image: bmi,
        deployed_url: 'https://github.com/vovabatsyk/bmi_calculator',
        github_url: 'https://github.com/vovabatsyk/bmi_calculator',
        technology: 'Flutter',
        category:['mobile']
    },    
    {
        name: 'Sage Book',
        image: sage_book,
        deployed_url: 'https://github.com/vovabatsyk/SageBook',
        github_url: 'https://github.com/vovabatsyk/SageBook',
        technology: 'Windows Forms C#',
        category:['desktop']
    },
    {
        name: 'Trello',
        image: trello,
        deployed_url: 'https://trello-clone-vue.web.app/',
        github_url: 'https://github.com/vovabatsyk/trello-app',
        technology: 'Vue',
        category:['web']
    },
    {
        name: 'Finance CRM',
        image: finance,
        deployed_url: 'https://github.com/vovabatsyk/finance',
        github_url: 'https://github.com/vovabatsyk/finance',
        technology: 'Vue',
        category:['web']
    },
    {
        name: 'Notes App',
        image: notes,
        deployed_url: 'https://inspector-parking.web.app/',
        github_url: 'https://github.com/vovabatsyk/department-of-transport',
        technology: 'Vue',
        category:['web']
    },    
    {
        name: 'Dev Chat',
        image: dev_chat,
        deployed_url: 'https://github.com/vovabatsyk/chat-nuxt/',
        github_url: 'https://github.com/vovabatsyk/chat-nuxt/',
        technology: 'React',
        category:['web']
    },
    {
        name: 'Excel',
        image: excel,
        deployed_url: 'https://js-excel.web.app/',
        github_url: 'https://github.com/vovabatsyk/excel',
        technology: 'Javascript',
        category:['web']
    },
    {
        name: 'Resume CV',
        image: cv,
        deployed_url: 'https://vovabatsyk.github.io/homepage/',
        github_url: 'https://github.com/vovabatsyk/homepage',
        technology: 'HTML/CSS',
        category:['web']
    },
    {
        name: 'Login Form',
        image: login2,
        deployed_url: '',
        github_url: 'https://github.com/vovabatsyk/LoginMVVM',
        technology: 'WPF C#',
        category:['desktop']
    },
    {
        name: 'Login Form',
        image: login3,
        deployed_url: '',
        github_url: 'https://github.com/vovabatsyk/LoginForm',
        technology: 'WPF C#',
        category:['desktop']
    },
    {
        name: 'Wordpad',
        image: default_img,
        deployed_url: '',
        github_url: 'https://github.com/vovabatsyk/WordPad',
        technology: 'Windows Forms C#',
        category:['desktop']
    },
    {
        name: 'Tic-Tac-Toe',
        image: default_img,
        deployed_url: '',
        github_url: 'https://github.com/vovabatsyk/Tic-Tac-Toe',
        technology: 'WinApi C++',
        category:['desktop']
    },
    {
        name: 'SolarCoffee',
        image: default_img,
        deployed_url: '',
        github_url: 'https://github.com/vovabatsyk/SolarCoffee',
        technology: 'Vue/asp.net',
        category:['web']
    },
    {
        name: 'Company',
        image: default_img,
        deployed_url: '',
        github_url: 'https://github.com/vovabatsyk/Company/',
        technology: 'Asp.Net Core',
        category:['web']
    },
    {
        name: 'Beauty Salon',
        image: salon,
        deployed_url: 'https://vovabatsyk.github.io/euphoria/',
        github_url: 'https://github.com/vovabatsyk/euphoria',
        technology: 'HTML/Bootstrap',
        category:['web']
    },
    {
        name: 'Fitness App',
        image: default_img,
        deployed_url: '',
        github_url: 'https://github.com/vovabatsyk/FitnessApp',
        technology: 'Console App/C#',
        category:['other']
    },
    {
        name: 'Todo App',
        image: default_img,
        deployed_url: '',
        github_url: 'https://github.com/vovabatsyk/ToDoList',
        technology: 'WPF C#',
        category:['desktop']
    },
    {
        name: 'Police database',
        image: police_db,
        deployed_url: '',
        github_url: 'https://github.com/vovabatsyk/ITStep-cpp6',
        technology: 'Console C++',
        category:['other']
    },
    {
        name: 'Class Tree',
        image: tree,
        deployed_url: '',
        github_url: 'https://github.com/vovabatsyk/ITStep-cpp5',
        technology: 'Console C++',
        category:['other']
    },
    {
        name: 'Class SinglyLinkedList',
        image: linked_list,
        deployed_url: '',
        github_url: 'https://github.com/vovabatsyk/ITStep-cpp4',
        technology: 'Console C++',
        category:['other']
    },
    {
        name: 'Class Stack',
        image: stack,
        deployed_url: '',
        github_url: 'https://github.com/vovabatsyk/ITStep-cpp3',
        technology: 'Console C++',
        category:['other']
    },
    {
        name: 'Class String',
        image: string_img,
        deployed_url: '',
        github_url: 'https://github.com/vovabatsyk/ITStep-cpp2',
        technology: 'Console C++',
        category:['other']
    },
    {
        name: 'Gallery Cards',
        image: gallery,
        deployed_url: 'https://vovabatsyk.github.io/gallery-cards/',
        github_url: 'https://github.com/vovabatsyk/gallery-cards',
        technology: 'Javascript',
        category:['web']
    },
    {
        name: 'Engine Audio',
        image: engine,
        deployed_url: 'https://vovabatsyk.github.io/engine-audio/',
        github_url: 'https://github.com/vovabatsyk/engine-audio',
        technology: 'Javascript',
        category:['web']
    },
    {
        name: 'Elastic search',
        image: default_img,
        deployed_url: 'https://github.com/vovabatsyk/elastic-search',
        github_url: 'https://vovabatsyk.github.io/elastic-search/',
        technology: 'Javascript',
        category:['web']
    },
    {
        name: 'Game Box',
        image: game_box,
        deployed_url: 'https://vovabatsyk.github.io/game-box/',
        github_url: 'https://github.com/vovabatsyk/game-box/',
        technology: 'Javascript',
        category:['web']
    },
]