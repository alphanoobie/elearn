# E-Learn

An online course marketplace.

# Project Description

E-Learn is an online course marketplace where users can purchase and view courses. 
Courses can be in the form of video and text lectures. 
Users can also sign up to be an instructor, to publish courses on the marketplace. 

# How To Run The Project Locally?

1. Download the code, or clone the repository.
2. Change directory to **server** folder and run the following commands in the terminal.
    - ```npm install```
    - ```npm start```
3. Change directory to **client** folder and run the following commands in the terminal.
    - ```npm install```
    - ```npm run dev```

# Project Overview

## Dashboard
This is the **HOME** page of the webapp. It displays all the courses published on the platform.
![dashboard](https://user-images.githubusercontent.com/69296939/188370119-f29205cd-863b-458e-9633-5f9d7835dae1.png)


## Single Course Page
On this page a user can preview a course and view some basic details about it.
![single course view](https://user-images.githubusercontent.com/69296939/188370174-8a243b1d-bc5b-42c6-9569-6e19e1908a3c.png)

## Learn Page
This page is where an user watch video lectures or text lectures about the course. It also tracks the progress of the user, and marks completed lessons for them. 
![learn page](https://user-images.githubusercontent.com/69296939/188370185-e6a82bcd-254f-411d-a662-ff3279f82ef7.png)

## Become An Instructor Page
If a user wants to publish courses on the marketplace, they need complete the stripe onboarding process to receive payments. This page redirects the user to stripe dashboard where they can complete the onboarding process and start publishing courses after that.
![become instructor](https://user-images.githubusercontent.com/69296939/188370227-6ee2f731-9128-4531-87df-53db96d03c98.png)

## Instructor Dashboard
This is the dashboard of an instructor who has completed the stripe onboarding process. It can be used to:
- Make new courses.
- Add and delete lessons to existing courses.
- Edit the existing courses
- Publish and Unpublish the courses. 
- View info about number of stdents enrolled in a course 
![instructor dashboard](https://user-images.githubusercontent.com/69296939/188370284-3fc38fac-0d38-4fe7-a12e-3abf5600105a.png)


## Create Course Page
This page can be used to create a new course. An instructor can add basic details about the course, like:
- Name
- Description
- Select free or paid option.
- Select the price of the course (if the course is paid)
- Category
- Image of the course
![create course](https://user-images.githubusercontent.com/69296939/188370322-6046cf9b-db97-4489-baf1-35a8a0eaae15.png)

