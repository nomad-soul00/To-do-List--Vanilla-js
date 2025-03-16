# TO-Do-List

## Description
A simple task management web application that allows users to add and categorize tasks into daily, monthly, and yearly sections. The tasks are saved in local storage for persistence.

## Features
- Add tasks dynamically
- Categorize tasks into different sections (Daily, Monthly, Yearly)
- Save tasks to local storage
- Edit and delete tasks
- Responsive design

## Usage
- Select a category.
- Click the **Add Task** button to create a new task.
- Enter a title and description, 
- Click the **Save** button to store the task.
- Tasks will appear under the respective category.

## Technologies Used
- HTML
- CSS (Tailwind CSS)
- JavaScript

## Local Storage Handling
- Tasks are stored using `localStorage.setItem(key, JSON.stringify(array));`
- On page load, tasks are retrieved using `JSON.parse(localStorage.getItem(key)) || [];`

## Known Issues
- Some UI responsiveness improvements are needed.


