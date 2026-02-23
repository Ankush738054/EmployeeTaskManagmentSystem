const employees = [
  {
    id: 1,
    firstname: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create responsive login UI",
        taskDate: "2026-02-10",
        category: "Design"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create responsive login UI",
        taskDate: "2026-02-10",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve mobile navbar issue",
        taskDate: "2026-02-05",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Integrate payment gateway API",
        taskDate: "2026-02-07",
        category: "Backend"
      }
    ]
  },
  {
    id: 2,
    firstname: "Vihaan",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription: "Setup MongoDB schema",
        taskDate: "2026-02-11",
        category: "Database"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create REST APIs",
        taskDescription: "Develop CRUD APIs",
        taskDate: "2026-02-12",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Add unit tests for auth module",
        taskDate: "2026-02-06",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy App",
        taskDescription: "Deploy on production server",
        taskDate: "2026-02-08",
        category: "DevOps"
      }
    ]
  },
  {
    id: 3,
    firstname: "Kabir",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard UI",
        taskDescription: "Design admin dashboard layout",
        taskDate: "2026-02-09",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize Images",
        taskDescription: "Compress images for faster loading",
        taskDate: "2026-02-04",
        category: "Optimization"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement Auth",
        taskDescription: "JWT authentication setup",
        taskDate: "2026-02-13",
        category: "Security"
      }
    ]
  },
  {
    id: 4,
    firstname: "Ishaan",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup CI/CD",
        taskDescription: "Configure GitHub Actions",
        taskDate: "2026-02-03",
        category: "DevOps"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDescription: "Fix reported UI bugs",
        taskDate: "2026-02-14",
        category: "Maintenance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Performance Testing",
        taskDescription: "Test app under heavy load",
        taskDate: "2026-02-02",
        category: "Testing"
      }
    ]
  },
  {
    id: 5,
    firstname: "Aditya",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Content Writing",
        taskDescription: "Write landing page content",
        taskDate: "2026-02-15",
        category: "Content"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "SEO Optimization",
        taskDescription: "Improve SEO rankings",
        taskDate: "2026-02-01",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Email Campaign",
        taskDescription: "Launch promotional emails",
        taskDate: "2026-02-16",
        category: "Marketing"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstname: "Rohan",
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalstorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalstorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  return { employees, admin }
}