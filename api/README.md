# Uni-Co CMS API

Backend API service for managing the company website content.

## Features

- **Authentication**: JWT-based authentication with role-based access control
- **Content Management**: Full CRUD operations for website content
- **Multi-language Support**: Content can be stored in different locales (jp, vi)
- **Role-based Access**: Three user roles (admin, editor, viewer)

## Setup

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Environment Variables

Create a `.env` file in the root of the `api` directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/uni-co-cms

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=30d

# CORS Configuration
CORS_ORIGIN=http://localhost:3001
```

### 3. Start MongoDB

Make sure MongoDB is running on your system.

### 4. Run the Server

```bash
pnpm start
```

The API will be available at `http://localhost:3000`

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (requires authentication)

### Content Management

All content endpoints require authentication.

- `GET /api/content` - Get all content (with pagination, filters)
- `GET /api/content/:id` - Get content by ID
- `GET /api/content/slug/:slug` - Get content by slug
- `POST /api/content` - Create new content (editor/admin only)
- `PUT /api/content/:id` - Update content (editor/admin only)
- `DELETE /api/content/:id` - Delete content (admin only)

### Health Check

- `GET /health` - Server health check

## User Roles

- **admin**: Full access to all operations
- **editor**: Can create and update content
- **viewer**: Can only view content

## Content Types

- `page` - Static pages
- `post` - Blog posts
- `news` - News articles
- `announcement` - Announcements

## Content Status

- `draft` - Not published
- `published` - Published and visible
- `archived` - Archived content

## Example API Usage

### Register a User

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "email": "admin@example.com",
    "password": "password123",
    "role": "admin"
  }'
```

### Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@example.com",
    "password": "password123"
  }'
```

### Create Content (with token)

```bash
curl -X POST http://localhost:3000/api/content \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "title": "Welcome to Uni-Co",
    "slug": "welcome-to-uni-co",
    "content": "This is the welcome content...",
    "type": "page",
    "status": "published",
    "locale": "jp"
  }'
```

## Project Structure

```
api/
├── config/
│   └── database.js          # MongoDB connection
├── controllers/
│   ├── authController.js    # Authentication logic
│   └── contentController.js # Content management logic
├── middleware/
│   ├── auth.js              # JWT authentication middleware
│   └── errorHandler.js      # Error handling middleware
├── models/
│   ├── User.js              # User model
│   └── Content.js           # Content model
├── routes/
│   ├── auth.js              # Authentication routes
│   ├── content.js           # Content routes
│   └── index.js             # Root route
├── app.js                   # Express app configuration
└── package.json
```

## Security Notes

- Always use a strong `JWT_SECRET` in production
- Change default MongoDB connection string for production
- Configure CORS properly for your frontend domain
- Use HTTPS in production
- Keep dependencies updated

