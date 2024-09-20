# Technical Test: Implementation of a Registration and Login Feature (Express.js & React.js)

---

## **Context:**

As part of the development of a Fullstack web application, you are tasked with implementing a basic feature that allows users to register and log in. This feature is essential for user management and involves both backend and frontend development using Express.js and React.js.

---

## **Technologies:**

- **Backend:** Node.js with [Express.js](https://expressjs.com/)
- **Frontend:** [React.js](https://fr.react.dev/) with [Chakra-UI](https://chakra-ui.com/)
- **Database:** SQLite with [TypeORM](https://typeorm.io/)
- **Authentication:** JWT (JSON Web Tokens)

---

## **Task:**

Develop a simple authentication system that allows users to create an account and log in to the application.

---

## **1. Features to Implement:**

### **Backend (Express.js):**

- **Route for user registration**  
  - Endpoint: `POST /api/register`
  - Fields: Username, email address, and password.
  - The password must be hashed before being stored in the database.
  - Handle errors (e.g., user already exists, data validation, etc.).
  
- **Route for user login**  
  - Endpoint: `POST /api/login`
  - Fields: Email and password.
  - After successful login, generate a JWT token to be used for future authenticated requests.

### **Frontend (React.js):**

- **Registration page**  
  - Create a form with validation for user registration (username, email, password).
  - After successful registration, redirect to the login page.
  
- **Login page**  
  - Create a login form where users can sign in with their email and password.

---

## **2. Technical Constraints:**

- Passwords must be hashed using `bcrypt` before being stored.
- Integrating validation with [Formik](https://formik.org/) and [Yup](https://www.npmjs.com/package/yup/v/1.0.0-alpha.3).
- Use JWT for server-side authentication (generate the token upon login).

---

## **3. Design Steps:**

You need to clone this repository and use it as the base for your integrations. The repository contains two folders: `api` and `web`. The `api` folder includes a blank Express.js application, while the `web` folder contains a ready-to-develop React.js application.

The following steps provide a roadmap for completing the task. For certain steps, you must submit a deliverable in the form of a PR (Pull Request) showing how you integrated the corresponding feature.

### **Backend:**

1. **Install Husky, Prettier, and ESLint:**  
   - **Deliverable:** No deliverable needed. Integrate directly into the project.

2. **Configure TypeORM with SQLite:**  
   - **Deliverable:** Submit a PR with the link showing the integration.

3. **Implement the registration endpoint:**  
   - **Deliverable:** Submit a PR with the link showing the implementation.

4. **Implement the login endpoint:**  
   - **Deliverable:** Submit a PR with the link showing the implementation.

### **Frontend:**

1. **Install Husky, Prettier, and ESLint:**  
   - **Deliverable:** No deliverable needed. Integrate directly into the project.

2. **Install and configure Storybook:**  
   - **Deliverable:** No deliverable needed. Integrate directly into the project.

3. **Install and configure Chakra-UI:**  
   - **Deliverable:** No deliverable needed. Integrate directly into the project.

4. **Implement design system elements:**  
   - **Deliverable:** Submit a PR with a demo video showing the result.

5. **Create the registration page:**  
   - **Deliverable:** Submit a PR with a demo video showing the result.

6. **Create the login page:**  
   - **Deliverable:** Submit a PR with a demo video showing the result.

---

## **4. Evaluation Criteria:**

### **Backend:**

- Registration and login functionality.
- Password security (hashing with bcrypt).
- Error handling (e.g., email already in use, incorrect format).

### **Frontend:**

- Responsive and well-structured forms for registration and login.
- Integration of the design system using Chakra-UI.
- User-friendly error handling (displaying clear error messages).

### **Code Quality:**

- Code readability and structure.
- Adherence to development best practices.
- Perfect integration of the Design System
- Proper commit practices — follow [this format](https://lazonedev.github.io/lazone-training-path-docs/docs/tutorial-basics/git/git-conventional-commit-rules).

### **Your ability to read documentation**

---

## **5. Bonus:**

- **Field validation:** Implement front-end field validation (e.g., strong password).
- **Unit testing:** Add unit tests for backend routes.
- **API documentation** using Swagger.
- Implement **throttling** on the login endpoint.

---

## **6. Final Deliverables:**

- A README file with instructions to run the application locally.
- GitHub repository for sharing the code.
