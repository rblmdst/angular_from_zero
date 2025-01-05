# EmployeeApp

This project is based on a series of videos titled **"Angular de Zéro - Apprendre Angular par la pratique"** (translated to English: "Angular from Zero - Learn Angular by Practice"). Its goal is to help French speakers learn modern Angular (version 19+) step by step by building a real application. The series combines theory with practical application through an Angular crash course.

You can find the video series on my Youtube Channel here: [Angular de Zéro - Apprendre Angular par la pratique](https://www.youtube.com/playlist?list=PLnBtvYS1AbOy9MbzptICj-qH4rIat7j9M).

This document provides all the necessary information to set up your environment.

---

## Angular Version

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.5.

---

## Development Server (Frontend)

To view the final version of this project, start a local development server by running:

```bash
npm run start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify the source files.

---

## Setting Up the API Web Server (Backend: Express Server)

### Step 1: Install Docker (Optional)

If you do not already have MongoDB installed locally, you can use Docker. Search for installation instructions specific to your operating system.

### Step 2: Start a MongoDB Container (First-Time Setup)

You can create a MongoDB container for testing purposes using Docker:

```bash
# Without authentication (recommended for testing)
docker run --name mongo_test_db -p 27017:27017 -d mongo:7.0.12

# With authentication (replace 'mongoadmin' with your username and 'secret' with your password)
docker run -d --name mongo_test_db -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=secret mongo:7.0.12
```

**Note**: After creating the container, you do not need to create a new one each time. To start the server later, use the following command:

```bash
docker start mongo_test_db
```

### Step 3: Set Up the API Server

This is required for parts of the course covering HTTP, Authentication, and Guards.

The backend (API) project is also a result of one of my previous crash course about how to create from scratch a Rest API based on Express (Node.Js) & TypeScript using MongoDB as database and depoyed it using Docker-Compose.
The code can be found [here](https://github.com/rblmdst/express_typescript_devpropulsor).

1. Clone the project repository:

   ```bash
   git clone --branch dockerize https://github.com/rblmdst/express_typescript_devpropulsor.git
   ```

2. Navigate to the project directory:

   ```bash
   cd express_typescript_devpropulsor
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create the environment file:

   ```bash
   cp .development.env.local .development.env
   ```

5. Update the `.development.env` file as needed (e.g., change the port by replacing `PORT=5000` with `PORT=3000`).

6. Build and start the project:

   ```bash
   npm run build
   npm run start:dev
   ```

---

## Template and Styling

To keep the focus on learning Angular rather than writing `HTML` and `CSS`, all necessary templates and styles are provided in the `src/app/test/` directory. Copy the parts you need as indicated in the comments within the files.

- HTML: `src/app/test/test.component.html`
- CSS: `src/app/test/test.component.scss`

---

## Test Data

You can use the following sample data for testing:

```json
[
  {
    "_id": "675173e704ea0d53bbcdb314",
    "name": "User Tooto",
    "department": "IT",
    "level": "J"
  },
  {
    "_id": "676826ebb4aa57c5d5d542b6",
    "name": "Denise BRAY",
    "department": "IT",
    "level": "M"
  },
  {
    "_id": "67682709b4aa57c5d5d542b8",
    "name": "Kristi PETERSON",
    "department": "HR",
    "level": "J"
  },
  {
    "_id": "67682730b4aa57c5d5d542ba",
    "name": "Ellison TURNER",
    "department": "Marketing",
    "level": "M"
  }
]
```
