# 418 I am a teapot

This is front-end of our food delivery project in ReactJS and typescript

## Introduction

For the front-end project, we use ReactJS under typescript environment. Facts proved that it comes with pros and cons. The advantages is typescript makes the development in the front-end more formal: Just like developing something in Java, we need to write interface first before creating it. The cons also comes from it: we need to write tons of interface.

Instead of using classical OOP react components, we chose to use functional components. It means some extra learning cost, but it worth the effort: the LOC it reduced and the elegant usage of hook function, I really like it.

We used redux to maintain and manage global state and use it to handle communication between components. Surprisingly redux has hook function now and it's pretty easy to use. (compared to the old way of writing redux: you need to wrap every component in the connector and write functions to map the state to your props.) I am currently 100% fan of functional ReactJS now after this project.

## Main branch Preview
https://team418-i-am-a-teapot.herokuapp.com/

> Note that since the back-end and front-end are all in heroku free-tier, they would shut down if keep unvisited for a while. Hence if you visit the front-end and it does not show up, wait for 1-2mins, and when you run front-end search but it does not return anything, also wait for 1-2 mins (for heroku to wake up back-end). Sorry but you get what you pay, and that's what the free service provides : (

## Get start
To start with, install all the dependency by command

```bash
yarn install
```

To start the dev server on your local computer, run
```bash
yarn dev
```
(That's different from common practice `npm start` due to the heroku CI/CD requirement)

To test the prettier, run
```bash
yarn test
```
this command would check the code format using `prettier`


To auto-fix all the formatting problem, run
```bash
prettier --write src/**/*.{tsx,ts,css}
```

## Actions

This project comes with two actions, the first is `CI`, which try to build and test if the existing code is in form of *prettier* format. if the `CI` check is passed and PR get approved, it would be automatically deployed on a heroku server, and the website URL is https://team418-i-am-a-teapot.herokuapp.com/

## Prototype

We build the Prototype based on the UI of Ubereat with some anime elements of Fate series.

https://www.figma.com/file/aANSnp6Z9mdtEZAvFyI9Yd/SaberEats?node-id=0%3A

## Structure

```bash
.
├── App.css
├── App.test.tsx
├── App.tsx # entry point of front-end
├── actions # actions for redux
│   └── index.ts
├── assets # contains image sources for the website
│   └── images
├── components # contains reusable components for the project
│   ├── Button
│   ├── CartMenu
│   ├── CategoryCard
│   ├── Foot
│   ├── Icon
│   ├── ItemCard
│   ├── Menu
│   ├── NavBar
│   ├── PastOrderCard
│   ├── RestaurantCard
│   └── index.tsx
├── constants # store some constants, like the BASEURL of backend we send requests to
│   └── index.ts
├── model # common typescript interface that would be used frequently
│   └── index.ts
├── pages # page components
│   ├── HomePage
│   ├── NotFoundPage
│   ├── OrderConfirmPage
│   ├── OrderHistoryPage
│   ├── RestaurantPage
│   ├── SearchPage
│   └── index.tsx
├── reducers # reducers, where the logic of actions and initial global states stores
│   ├── index.ts
│   └── state.ts
└── utils# utility functions, mainly the function to communicate with back-end, and thus come with a test file.
    ├── index.test.ts
    └── index.ts

```



## Some Good Coding Practice

### Postman

We use postman to test the back-end, and when it comes to the front-end, we use the work space feature of the postman to save all the request examples. In this way, we just need to refer to the examples instead of asking people who wrote the backend API.

![image-20201218234634994](https://tva1.sinaimg.cn/large/0081Kckwly1glt7oo4ynoj31i50u045u.jpg)

### CSS Module

To prevent possible CSS classname conflicts (which highly possible to happen, especially when you have several UI libraries installed). We use CSS module there. Instead of referring the class in the form of string, we import the stylesheet and use the classname reference. That reference would be compiled into a unique identifier in the browser, therefore the classname conflicts are resolved.

![image-20201218235110444](https://tva1.sinaimg.cn/large/0081Kckwly1glt7t8ih5dj31p60u0x6p.jpg)


