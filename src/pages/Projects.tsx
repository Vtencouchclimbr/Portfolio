import BarNav from "../components/BarNav";
import Footer from "../components/Footer";

import tspPic from "../utils/projectThumbnails/tspPic.png";
import kanBan from "../utils/projectThumbnails/kanBan.png";
import bookSearch from "../utils/projectThumbnails/bookSearch.png";
import testSuite from "../utils/projectThumbnails/testSuite.png";
import socialNetwork from "../utils/projectThumbnails/socialNetwork.png";
import Todo from "../utils/projectThumbnails/Todo.png";
import kanBanjs from "../utils/projectThumbnails/kanBanjs.png";

import "./Projects.css";

export default function Projects() {
  return (
    <div
      className="d-flex flex-column align-items-center m-1"
      style={{
        minHeight: "100vh",
        backgroundImage: `url()`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="barnav">
        <BarNav />
      </div>
      <div className="col-12 col-md-6 col-lg-4 mb-4 mt-4 d-flex flex-column align-items-center">
        <h1 className="projName">Projects</h1>
        <p className="text-center desc">
          Here are some of the projects I have been working on. Click on the
          title to view the GitHub repo.
        </p>
      </div>
      <div className="imgbox">
        <div className="imgboxitem col-12 col-md-6 col-lg-4 mb-2">
          <img src={kanBanjs} className="img img-fluid" alt="Project 1" />
          <div className="d-flex align-items-baseline">
            <h3 className="click">Click Here!</h3>
            <a
              className="projLink"
              href="https://github.com/Vtencouchclimbr/Kanban-React"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="12px"
                viewBox="0 -960 960 960"
                width="12px"
                fill="#e8eaed"
              >
                <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
              </svg>Kanban Board<svg
                xmlns="http://www.w3.org/2000/svg"
                height="12px"
                viewBox="0 -960 960 960"
                width="12px"
                fill="#e8eaed"
              >
                <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
              </svg>
            </a>
            <h3 className="click">Click Here!</h3>
          </div>
          <p className="desc">
            A React-based Kanban board for task management, utilizing React
            Context for state management. This application allows users to add,
            move, and delete tasks across "To Do", "In Progress", and "Done"
            columns, with a responsive design using Bootstrap for mobile and
            desktop views.
          </p>
        </div>
        <div className="imgboxitem col-12 col-md-6 col-lg-4 mb-2">
          <img src={Todo} className="img img-fluid" alt="Project 1" />
          <div className="d-flex align-items-baseline">
            <h3 className="click">Click Here!</h3>
            <a
              className="projLink"
              href="https://github.com/Vtencouchclimbr/TodoList-React"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="12px"
                viewBox="0 -960 960 960"
                width="12px"
                fill="#e8eaed"
              >
                <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
              </svg>Todo List<svg
                xmlns="http://www.w3.org/2000/svg"
                height="12px"
                viewBox="0 -960 960 960"
                width="12px"
                fill="#e8eaed"
              >
                <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
              </svg>
            </a>
            <h3 className="click">Click Here!</h3>
          </div>
          <p className="desc">
            A simple todo list application built with React, featuring task
            creation, completion toggling, and deletion. Utilizes React hooks
            for state management and Bootstrap for responsive design.
          </p>
        </div>
        <hr />
        <div className="imgboxitem col-12 col-md-6 col-lg-4 mb-2">
          <img src={tspPic} className="img img-fluid" alt="Project 1" />
          <div className="d-flex align-items-baseline">
            <h3 className="click">Click Here!</h3>
            <a
              className="projLink"
              href="https://github.com/Vtencouchclimbr/Tech-Shopper-Pro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="12px"
                viewBox="0 -960 960 960"
                width="12px"
                fill="#e8eaed"
              >
                <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
              </svg>Tech Shopper Pro<svg
                xmlns="http://www.w3.org/2000/svg"
                height="12px"
                viewBox="0 -960 960 960"
                width="12px"
                fill="#e8eaed"
              >
                <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
              </svg>
            </a>
            <h3 className="click">Click Here!</h3>
          </div>
          <p className="desc">
            Tech Shopper Pro is a full-stack e-commerce application that allows
            users to browse products, add items to a shopping cart, and proceed
            to checkout. It also includes a wishlist feature accessible through
            an off-canvas layout. Users can register and log in using JWT-based
            authentication, ensuring secure sessions and smooth interactions.
          </p>
        </div>
        <hr />
        <div className="imgboxitem col-12 col-md-6 col-lg-4 mb-2">
          <img src={socialNetwork} className="img img-fluid" alt="Project 2" />
          <div className="d-flex align-items-baseline">
            <h3 className="click">Click Here!</h3>
            <a
              className="projLink"
              href="https://github.com/Vtencouchclimbr/Social-Network-API"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="12px"
                viewBox="0 -960 960 960"
                width="12px"
                fill="#e8eaed"
              >
                <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
              </svg>Social Network App<svg
                xmlns="http://www.w3.org/2000/svg"
                height="12px"
                viewBox="0 -960 960 960"
                width="12px"
                fill="#e8eaed"
              >
                <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
              </svg>
            </a>
            <h3 className="click">Click Here!</h3>
          </div>
          <p className="desc">
            A back-end social networking app built using MongoDB, Mongoose, and
            TypeScript provides a robust platform for managing user
            interactions, content, and connections. MongoDB's document-based
            NoSQL database allows for flexible storage of user profiles, posts,
            comments, and friendships, while Mongoose ensures schema-based data
            validation and structure. TypeScript enhances the app with static
            typing, improving type safety and reducing development errors. The
            app features RESTful APIs for user authentication, post creation,
            commenting, and managing connections or friend requests. Middleware
            handles input validation and error responses, ensuring reliability.
            Additionally, the app supports real-time features like notifications
            and live updates, leveraging WebSocket or similar technologies. The
            combination of MongoDB, Mongoose, and TypeScript results in a clean,
            scalable, and maintainable codebase.
          </p>
        </div>
        <hr />
        <div className="imgboxitem col-12 col-md-6 col-lg-4 mb-2">
          <img src={kanBan} className="img img-fluid" alt="Project 3" />
          <div className="d-flex align-items-baseline">
            <h3 className="click">Click Here!</h3>
            <a
              className="projLink"
              href="https://github.com/Vtencouchclimbr/Module-14-Challenge_Kanban-Board"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="12px"
                viewBox="0 -960 960 960"
                width="12px"
                fill="#e8eaed"
              >
                <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
              </svg>Kanban Board<svg
                xmlns="http://www.w3.org/2000/svg"
                height="12px"
                viewBox="0 -960 960 960"
                width="12px"
                fill="#e8eaed"
              >
                <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
              </svg>
            </a>
            <h3 className="click">Click Here!</h3>
          </div>
          <p className="desc">
            This is a Kanban board application that integrates JWT (JSON Web
            Token) authentication for user login and session management. The
            board uses PostgreSQL to allow users to create, update, and manage
            tasks across different columns (e.g., "To Do," "In Progress,"
            "Done"). JWTs are used to authenticate users, ensuring that only
            authorized individuals can interact with the board. The
            authentication system helps protect sensitive routes and data,
            providing a secure environment for task management. This project
            demonstrates a combination of front-end task organization and secure
            back-end authentication using JWTs.
          </p>
        </div>
        <hr />
        <div className="imgboxitem col-12 col-md-6 col-lg-4 mb-2">
          <img src={bookSearch} className="img img-fluid" alt="Project 4" />
          <div className="d-flex align-items-baseline">
            <h3 className="click">Click Here!</h3>
            <a
              className="projLink"
              href="https://github.com/Vtencouchclimbr/Book-Search-Engine"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="12px"
                viewBox="0 -960 960 960"
                width="12px"
                fill="#e8eaed"
              >
                <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
              </svg>Book Search Engine<svg
                xmlns="http://www.w3.org/2000/svg"
                height="12px"
                viewBox="0 -960 960 960"
                width="12px"
                fill="#e8eaed"
              >
                <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
              </svg>
            </a>
            <h3 className="click">Click Here!</h3>
          </div>
          <p className="desc">
            The Book Search Engine is a sophisticated web application that
            enables users to search for books using the Google Books API,
            providing access to an extensive catalog of titles and information.
            Designed with a responsive and intuitive interface, this search
            engine integrates Apollo and GraphQL on the backend, ensuring
            efficient data retrieval and seamless querying capabilities. Users
            can explore, save, and manage book listings dynamically, enjoying a
            smooth experience backed by modern API technology and a robust,
            scalable GraphQL architecture. This application combines the power
            of Google’s vast library with a performant backend, offering an
            optimized and engaging book discovery experience.
          </p>
        </div>
        <hr />
        <div className="imgboxitem col-12 col-md-6 col-lg-4 mb-2">
          <img src={testSuite} className="img img-fluid" alt="Project 5" />
          <div className="d-flex align-items-baseline">
            <h3 className="click">Click Here!</h3>
            <a
              className="projLink"
              href="https://github.com/Vtencouchclimbr/Test-Suite"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="12px"
                viewBox="0 -960 960 960"
                width="12px"
                fill="#e8eaed"
              >
                <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
              </svg>Testing Suite<svg
                xmlns="http://www.w3.org/2000/svg"
                height="12px"
                viewBox="0 -960 960 960"
                width="12px"
                fill="#e8eaed"
              >
                <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
              </svg>
            </a>
            <h3 className="click">Click Here!</h3>
          </div>
          <p className="desc">
            A testing suite application built with the MERN stack (MongoDB,
            Express.js, React, Node.js) leverages Cypress for end-to-end
            testing, ensuring smooth user interactions and robust performance.
            This application allows developers to write and execute tests within
            an intuitive interface, simulating real user scenarios across
            different browser environments. Cypress’s powerful testing
            capabilities, paired with the scalability of MERN, provide an
            efficient, integrated solution to validate front-end behavior,
            backend API responses, and database functionality, ultimately
            enhancing code quality and reliability in production.
          </p>
        </div>
      </div>
      <div className="footer col-12 col-md-6 col-lg-4">
        <Footer />
      </div>
    </div>
  );
}
