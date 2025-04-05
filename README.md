Employee Management System

A React-based application for task management between an Admin and multiple Employees. Admins can assign tasks and track progress, while employees can view and update their task statuses (using Local Storage)

🌐 Overview
This project supports:

✅ Admin login with the ability to create and assign tasks
✅ Employee login to track task status
✅ Context-based global state (AuthContext)
✅ Tailwind CSS for clean and responsive design

🔄 Context API: AuthProvider.jsx
Provides global userData using React.createContext.

Contains each employee's:
Name, role
Task list
Task count statistics

🚀 Main Application: App.jsx
Purpose:
Entry point of the app.
Manages routing between Admin and Employee Dashboards.
Controls authentication and user switching.
Key Logic:
Uses useContext(AuthContext) to access user data.
Maintains local state:
currUser: Stores the current user object.
loggedIn: Boolean indicating login status.
Includes a changeUser function to allow logout or switching user.
Renders conditional dashboard based on currUser.role.

🔐 Header Component: Header.jsx
Functionality:
Top-level navigation.
Displays user name and role.
Logout button (calls changeUser prop).

🧾 Task Creation: CreateTask.jsx
Fields:
Task Title
Task Description
Due Date
Assign To (Employee name)
Category
Logic:
On submit, creates a newTask object.
Finds the matching employee and pushes task to their task list.
Increments the newTask count.
Updates context state.

📋 All Employees View: AllTask.jsx
Admin-side dashboard:
Displays a summary table with:
Employee Name
Count of New, Active, Completed, Failed tasks

📈 Task Summary Cards: TaskListNumbers.jsx
Used in:

EmployeeDashboard.jsx
Displays:
🆕 New Tasks
✅ Completed Tasks
🟡 Active Tasks
❌ Failed Tasks

📃 Task List: TaskList.jsx
Expected Functionality:
Displays each task in a card or list format.
Allows employees to update task status:
Active
Completed
Failed

🧠 Key Concepts Used
React + Context API for state management
Functional components & hooks (useState, useContext)
Tailwind CSS for styling
Clear Admin/Employee separation
Form validation & event handling

✅ Usage Flow
Admin logs in → Redirected to admin dashboard.
Creates tasks → Assigns them to employees.
Employee logs in → Views assigned tasks and task counts.
Employee updates task statuses.
Admin monitors progress through AllTask.

SHORT NOTES FOR ME :-

✅ App.jsx — Main Entry & Role-based Routing
Uses AuthContext to access all users.
Maintains currUser state to track logged-in user.
Renders:
Login screen if no user is logged in.
AdminDashboard if role is "admin".
EmployeeDashboard if role is "employee".
Login is done by matching username via input.

✅ AuthProvider.jsx — Global State Manager
Exports AuthContext using React Context API.
Stores:
userData: List of users (admins and employees).
Task data for each user including:
taskNumbers: summary (new, active, completed, failed)
tasks: actual task list per employee.
Used throughout app via useContext(AuthContext).

✅ CreateTask.jsx — Admin Task Creation Logic
Form inputs: title, description, date, assigned employee, category.
On submit:
Constructs new task object.
Locates assigned employee.
Adds task to their list.
Increments their task count.
Updates context state (deep mutation logic).
