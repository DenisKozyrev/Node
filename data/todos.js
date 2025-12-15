const todos = [
  {
    id: 1,
    title: 'Learn Express.js',
    description: 'Learn Express.js basics and create REST API',
    completed: false,
    createdAt: new Date('2024-01-15').toISOString()
  },
  {
    id: 2,
    title: 'Create CRUD operations',
    description: 'Implement Create, Read, Update, Delete for todos',
    completed: false,
    createdAt: new Date('2024-01-16').toISOString()
  },
  {
    id: 3,
    title: 'Test API',
    description: 'Test all endpoints',
    completed: true,
    createdAt: new Date('2024-01-14').toISOString()
  },
  {
    id: 4,
    title: 'Setup database connection',
    description: 'Configure MongoDB or PostgreSQL connection',
    completed: false,
    createdAt: new Date('2024-01-17').toISOString()
  },
  {
    id: 5,
    title: 'Add authentication',
    description: 'Implement user authentication with JWT tokens',
    completed: false,
    createdAt: new Date('2024-01-18').toISOString()
  },
  {
    id: 6,
    title: 'Write documentation',
    description: 'Document all API endpoints and usage examples',
    completed: true,
    createdAt: new Date('2024-01-13').toISOString()
  },
  {
    id: 7,
    title: 'Add error handling',
    description: 'Implement proper error handling middleware',
    completed: false,
    createdAt: new Date('2024-01-19').toISOString()
  },
  {
    id: 8,
    title: 'Setup validation',
    description: 'Add input validation using express-validator',
    completed: false,
    createdAt: new Date('2024-01-20').toISOString()
  },
  {
    id: 9,
    title: 'Deploy to production',
    description: 'Deploy application to cloud platform',
    completed: false,
    createdAt: new Date('2024-01-21').toISOString()
  },
  {
    id: 10,
    title: 'Add logging',
    description: 'Implement comprehensive logging system',
    completed: true,
    createdAt: new Date('2024-01-12').toISOString()
  }
];

module.exports = todos;
