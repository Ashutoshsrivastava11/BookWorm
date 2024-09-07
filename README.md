# BookWorm

BookWorm is a comprehensive book management system designed to provide an intuitive user experience for managing books, reviews, and user authentication. This project is built with a Java Spring Boot backend and a React frontend, ensuring a seamless integration and robust functionality.

## Project Structure

### Backend

- **`backend/`**: Contains the server-side code.

  - **`src/main/java/com/bookworm/`**: Java source code.
    - **`controller/`**:
      - `BookController.java`: Handles HTTP requests related to books.
      - `UserController.java`: Manages user-related HTTP requests.
      - `AuthController.java`: Manages user authentication and registration.
      - `ReviewController.java`: Handles HTTP requests for reviews.
    - **`model/`**:
      - `Book.java`: Defines the Book entity.
      - `User.java`: Defines the User entity.
      - `Role.java`: Defines the Role entity.
      - `Review.java`: Defines the Review entity.
    - **`repository/`**:
      - `BookRepository.java`: Repository interface for Book entity.
      - `UserRepository.java`: Repository interface for User entity.
      - `RoleRepository.java`: Repository interface for Role entity.
      - `ReviewRepository.java`: Repository interface for Review entity.
    - **`service/`**:
      - `BookService.java`: Contains business logic for book operations.
      - `UserService.java`: Manages user operations and logic.
      - `AuthService.java`: Handles authentication and user management logic.
      - `ReviewService.java`: Manages review operations and logic.
    - **`security/`**:
      - `JwtUtil.java`: Utility class for JWT operations.
      - `SecurityConfig.java`: Configures security settings and authentication.
    - **`BookWormApplication.java`**: The entry point of the Spring Boot application.
  - **`src/main/resources/`**:
    - `application.properties`: Configuration file for Spring Boot application settings.
    - `schema.sql`: SQL schema for database setup.
    - `data.sql`: SQL data script for initial data loading.

  - **`pom.xml`**: Maven configuration file for managing dependencies.

### Frontend

- **`frontend/`**: Contains the client-side React application.

  - **`public/`**:
    - `index.html`: The main HTML file where the React app is rendered.

  - **`src/`**: React source code.
    - **`components/`**:
      - `BookList.js`: Displays a list of books.
      - `BookDetail.js`: Shows detailed information for a specific book.
      - `AddBook.js`: Provides a form to add a new book.
      - `UserLogin.js`: Handles user login functionality.
      - `UserRegister.js`: Handles user registration functionality.
      - `ReviewList.js`: Displays reviews for a specific book.
      - `AddReview.js`: Provides a form to add a new review.
      - `EditReview.js`: Allows editing of an existing review.
    - **`services/`**:
      - `BookService.js`: API service for book operations.
      - `AuthService.js`: API service for authentication operations.
      - `ReviewService.js`: API service for review operations.
    - **`context/`**:
      - `AuthContext.js`: Provides authentication context for managing user sessions.
    - **`App.js`**: The main component that sets up routing for the application.
    - **`index.js`**: The entry point for the React application.
    - **`styles/`**:
      - `App.css`: Global styles for the application.
      - `Book.css`: Styles specific to book-related components.
      - `User.css`: Styles specific to user-related components.
      - `Review.css`: Styles specific to review-related components.

### Functionality Overview

- **Backend**:
  - Provides RESTful APIs for managing books, users, and reviews.
  - Includes authentication and role-based access control using JWT.
  - Handles database operations and business logic through various services.

- **Frontend**:
  - Implements a responsive user interface with React.
  - Allows users to view, add, and manage books and reviews.
  - Provides user authentication and registration features.
  - Includes context management for user sessions and API services for data handling.

## Getting Started

### Backend

1. Navigate to the `backend/` directory.
2. Run `mvn spring-boot:run` to start the Spring Boot application.

### Frontend

1. Navigate to the `frontend/` directory.
2. Run `npm install` to install the required dependencies.
3. Run `npm start` to start the React development server.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure that all code adheres to the project's coding standards and includes tests where applicable.

## Acknowledgments

- React for providing a flexible and powerful UI framework.
- Spring Boot for simplifying backend development.
- Axios for HTTP requests and context management.
