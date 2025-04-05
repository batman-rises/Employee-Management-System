
const employees = [
  {
      "id": 1,
      "firstname": "Amit",
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
          {
              "title": "Submit Report",
              "description": "Submit the monthly sales report",
              "date": "2025-03-28",
              "category": "Work",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          },
          {
              "title": "Team Meeting",
              "description": "Attend the weekly sync-up meeting",
              "date": "2025-03-30",
              "category": "Meeting",
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "title": "Client Follow-up",
              "description": "Follow up with Client A regarding the new project",
              "date": "2025-04-01",
              "category": "Client",
              "active": true,
              "newTask": false,
              "completed": true,
              "failed": false
          }
      ],
      "taskNumbers": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "id": 2,
      "firstname": "Rohit",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
          {
              "title": "Code Review",
              "description": "Review the new module's code and provide feedback",
              "date": "2025-03-29",
              "category": "Development",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "title": "Documentation Update",
              "description": "Update API documentation for the new release",
              "date": "2025-04-02",
              "category": "Documentation",
              "active": false,
              "newTask": false,
              "completed": false,
              "failed": true
          }
      ],
      "taskNumbers": {
          "active": 1,
          "newTask": 1,
          "completed": 0,
          "failed": 1
      }
  },
  {
      "id": 3,
      "firstname": "Vikram",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
          {
              "title": "Inventory Check",
              "description": "Verify and update stock levels",
              "date": "2025-03-27",
              "category": "Inventory",
              "active": true,
              "newTask": false,
              "completed": true,
              "failed": false
          },
          {
              "title": "Supplier Call",
              "description": "Discuss delivery issues with supplier",
              "date": "2025-03-29",
              "category": "Supplier",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "title": "Training Session",
              "description": "Attend mandatory product training",
              "date": "2025-04-03",
              "category": "Training",
              "active": false,
              "newTask": false,
              "completed": false,
              "failed": false
          }
      ],
      "taskNumbers": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "id": 4,
      "firstname": "Suresh",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
          {
              "title": "Data Analysis",
              "description": "Analyze sales data for Q1",
              "date": "2025-03-26",
              "category": "Analysis",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          },
          {
              "title": "Bug Fixing",
              "description": "Resolve critical bugs from the latest release",
              "date": "2025-03-28",
              "category": "Development",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          }
      ],
      "taskNumbers": {
          "active": 1,
          "newTask": 0,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "id": 5,
      "firstname": "Arjun",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
          {
              "title": "Marketing Strategy",
              "description": "Plan Q2 marketing campaign",
              "date": "2025-03-31",
              "category": "Marketing",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          },
          {
              "title": "Customer Feedback",
              "description": "Analyze customer feedback and report",
              "date": "2025-04-02",
              "category": "Customer Service",
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "title": "SEO Optimization",
              "description": "Improve website SEO ranking",
              "date": "2025-04-05",
              "category": "SEO",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          }
      ],
      "taskNumbers": {
          "active": 2,
          "newTask": 1,
          "completed": 0,
          "failed": 0
      }
  }
];


    const admin = [{
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }];



export const setLocalStorage = () =>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return {employees,admin}
}
  