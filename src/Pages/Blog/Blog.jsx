import React from 'react';
import { Alert, Container } from 'react-bootstrap';




const Blog = () => {
    return (
        <Container>
            <Alert variant="success">
                <Alert.Heading>Differences between Uncontrolled and Controlled Components:</Alert.Heading>
                <hr />
                <p className="mb-0">
                    Uncontrolled components in React are components whose value is managed by the browser rather than the React component. It means that the value of the input or form element is handled by the DOM itself rather than React. These components don't require any event handlers or state updates, and their values can be accessed directly through the DOM.

                    On the other hand, controlled components are React components whose values are managed by React using state or props. In these components, React state is used to keep track of the input value, and any changes to the input value are handled by a change event and passed to the component's state.

                    The main difference between controlled and uncontrolled components is that controlled components rely on React state to manage input values, while uncontrolled components rely on the browser's native state. Controlled components offer more control and can perform validation and data processing easily, while uncontrolled components can be more efficient for simple use cases.


                </p>
            </Alert>

            <Alert variant="success">
                <Alert.Heading>Validating React Props using PropTypes:</Alert.Heading>
                <hr />
                <p className="mb-0">
                    React provides a way to validate props using PropTypes. PropTypes are a way to specify the type of data that a component should expect to receive as props. PropTypes can be used to enforce type checking and help catch errors early in the development process.
                </p>
            </Alert>

            <Alert variant="success">
                <Alert.Heading>Difference between Node.js and Express.js:</Alert.Heading>
                <hr />
                <p className="mb-0">
                    Node.js is a JavaScript runtime that allows developers to build server-side applications using JavaScript. It provides an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js includes a built-in set of libraries and APIs for building server-side applications.

                    Express.js is a framework built on top of Node.js that provides a simpler, more powerful way to build web applications and APIs. Express.js provides features like middleware, routing, and templates that simplify the process of building web applications. It is lightweight and flexible, making it a popular choice for building web applications.

                    In short, Node.js provides the runtime environment for server-side JavaScript code, while Express.js provides a set of features and tools for building web applications and APIs using Node.js.
                </p>
            </Alert>

            <Alert variant="success">
                <Alert.Heading>Custom Hooks in React:</Alert.Heading>
                <hr />
                <p className="mb-0">
                    Custom Hooks are a feature introduced in React that allows developers to extract reusable logic from a component into a separate function. A custom hook is just a JavaScript function that starts with the use keyword and can call other hooks if necessary.

                    Custom Hooks are useful for encapsulating and reusing logic that can be shared between different components. For example, a custom hook can be used to manage the state of a form, handle API calls, or implement complex animations.


                </p>
            </Alert>

        </Container>
    );
};

export default Blog;