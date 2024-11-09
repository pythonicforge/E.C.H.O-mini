const express = require("express");
const natural = require("natural");

const app = express();
const port = 3000;

// Define the dataset directly within the JavaScript file
const dataset = [
    {
        "question": "Who is Hardik?",
        "answer": "Hardik Jaiswal is a python developer with a keen interest in AI, ML and robotics."
    },
    {
        "question": "Tell me about Hardik",
        "answer": "Hardik Jaiswal is a python developer with a keen interest in AI, ML and robotics."
    },
    {
        "question": "What does Hardik primarily does?",
        "answer": "Hardik Jaiswal is a python developer with a keen interest in AI, ML and robotics."
    },
    {
        "question": "What is Hardik's full name?",
        "answer": "Hardik's full name is Hardik Jaiswal."
    },
    {
        "question": "Can you tell me Hardik's full name?",
        "answer": "Hardik's full name is Hardik Jaiswal."
    },
    {
        "question": "Can you tell me who is Hardik?",
        "answer": "Hardik Jaiswal is a python developer with a keen interest in AI, ML and robotics."
    },
    {
        "question": "Can you tell me who is Hardik Jaiswal?",
        "answer": "Hardik Jaiswal is a python developer with a keen interest in AI, ML and robotics."
    },
    {
        "question": "Where is Hardik based?",
        "answer": "Hardik is based in Kolkata, India."
    },
    {
        "question": "Where does Hardik live?",
        "answer": "Hardik lives in Kolkata, India."
    },
    {
        "question": "What is Hardik's educational background?",
        "answer": "Hardik graduated from high school in the year 2024 and is currently a first year student at Newton School Of Technology."
    },
    {
        "question": "Tell me about Hardik's education.",
        "answer": "Hardik graduated from high school in the year 2024 and is currently pursuing his Bachelor's at Newton School Of Technology."
    },
    {
        "question": "When did Hardik graduate from high school?",
        "answer": "Hardik graduated from high school in the year 2024."
    },
    {
        "question": "Tell me when hardik graduated from high school",
        "answer": "Hardik graduated from high school in the year 2024."
    },
    {
        "question": "Where is Hardik currently studying?",
        "answer": "Hardik is pursuing his Bachelor's at Newton School Of Technology."
    },
    {
        "question": "Hardik is studying at",
        "answer": "Hardik is pursuing his Bachelor's at Newton School Of Technology."
    },
    {
        "question": "What are Hardik's interests?",
        "answer": "Hardik is interested in AI, ML and Robotics. You can know more about him in the about page."
    },
    {
        "question": "What skills does Hardik have?",
        "answer": "Hardik has skills in software development and web development. Head over to the about page for more information."
    },
    {
        "question": "Can you describe a project Hardik has worked on?",
        "answer": "Hardik has worked on a project named Peripheral Killing System which eliminates the use of mouse and keyboard, and replaces them with human gestures."
    },
    {
        "question": "Describe a project Hardik has made",
        "answer": "Hardik has worked on a project named Peripheral Killing System which eliminates the use of mouse and keyboard, and replaces them with human gestures."
    },
    {
        "question": "More projects that Hardik has worked on?",
        "answer": "Hardik has worked on projects like Peripheral Killing System, Melody.CLI, Hardik.AI and Devcraft. Know more in the projects page."
    },
    {
        "question": "Projects that Hardik has made",
        "answer": "Hardik has worked on projects like Peripheral Killing System, Melody.CLI, Hardik.AI and Devcraft. Know more in the projects page."
    },
    {
        "question": "What programming languages is Hardik proficient in?",
        "answer": "Hardik is proficient in Python, HTML, CSS, JavaScript, Java, ReactJS, React Native and is currently learning AI and DSA."
    },
    {
        "question": "What tools is Hardik proficient in?",
        "answer": "Hardik is proficient in Linux, Git, Visual Studio Code, and opensource."
    },
    {
        "question": "What technologies does Hardik use?",
        "answer": "Hardik uses technologies such as Python and JavaScript."
    },
    {
        "question": "What are Hardik's career goals?",
        "answer": "Hardik's career goal is to become a skilled AI and ML specialist while also maintaining strong web development skills."
    },
    {
        "question": "What is Hardik's personal motto?",
        "answer": "Hardik's personal motto is 'Continuous learning and improvement are key to success.'"
    },
    {
        "question": "What are Hardik's hobbies?",
        "answer": "Hardik's hobbies include playing cricket, coding, and playing video games."
    },
    {
        "question": "What books does Hardik enjoy reading?",
        "answer": "Hardik enjoys reading books on technology, science fiction, and personal development."
    },
    {
        "question": "What movies does Hardik like?",
        "answer": "Hardik enjoys watching sci-fi movies, action films, and documentaries."
    },
    {
        "question": "What is Hardik's favorite programming language and why?",
        "answer": "Hardik's favorite programming language is Python because of its simplicity and versatility."
    },
    {
        "question": "What certifications has Hardik earned?",
        "answer": "Hardik has completed courses in Python programming, web development, and AI-ML."
    },
    {
        "question": "What is Hardik's experience with AI and ML?",
        "answer": "Hardik has a strong interest in AI and ML and has completed several online courses in these fields. He is currently working on integrating AI features into his portfolio website."
    },
    {
        "question": "What web development projects has Hardik worked on?",
        "answer": "Hardik has worked on several web development projects, including a personal portfolio website, a blog platform, and a small e-commerce site."
    },
    {
        "question": "What is Hardik's experience with ReactJS?",
        "answer": "Hardik is currently learning ReactJS and has built a few components for his portfolio website. He is also learning to use ReactJS with NextJS for server-side rendering."
    },
    {
        "question": "What is Hardik's experience with TailwindCSS?",
        "answer": "Hardik has used TailwindCSS to style his portfolio website and appreciates its utility-first approach for building custom designs quickly."
    },
    {
        "question": "What kind of projects does Hardik enjoy working on?",
        "answer": "Hardik enjoys working on projects that challenge him to learn new technologies and solve complex problems, especially in the fields of AI, ML, and web development."
    },
    {
        "question": "What are Hardik's favorite tools for development?",
        "answer": "Hardik's favorite tools for development include VS Code for coding, Git for version control, and Docker for containerization."
    },
    {
        "question": "What open-source projects has Hardik contributed to?",
        "answer": "Hardik has contributed to a few open-source projects on GitHub, primarily focused on Python libraries and web development tools."
    },
    {
        "question": "What is Hardik's favorite project he has worked on?",
        "answer": "Hardik's favorite project is his personal portfolio website because it allowed him to showcase his skills and creativity while learning new technologies."
    },
    {
        "question": "What are Hardik's strengths?",
        "answer": "Hardik's strengths include problem-solving, quick learning, and a strong foundation in programming and web development."
    },
    {
        "question": "What are Hardik's weaknesses?",
        "answer": "One of Hardik's weaknesses is that he can sometimes get too focused on small details, but he is working on improving his time management and prioritization skills."
    },
    {
        "question": "What motivates Hardik?",
        "answer": "Hardik is motivated by the desire to learn new things and solve challenging problems. He also enjoys seeing the impact of his work on others."
    },
    {
        "question": "How does Hardik handle stress and pressure?",
        "answer": "Hardik handles stress and pressure by staying organized, taking breaks when needed, and maintaining a healthy work-life balance."
    },
    {
        "question": "What is Hardik's approach to learning new technologies?",
        "answer": "Hardik's approach to learning new technologies involves hands-on practice, building small projects, and seeking out online resources and courses."
    },
    {
        "question": "What is Hardik's experience with Git and version control?",
        "answer": "Hardik has experience using Git for version control, including branching, merging, and collaborating on projects with others using GitHub."
    },
    {
        "question": "What is Hardik's experience with Docker?",
        "answer": "Hardik has used Docker to containerize applications and manage development environments, which helps ensure consistency across different systems."
    },
    {
        "question": "What are Hardik's future plans?",
        "answer": "Hardik's future plans include continuing to develop his skills in AI and ML, working on more complex projects, and eventually pursuing a career in the tech industry."
    },
    {
        "question": "What does Hardik like most about programming?",
        "answer": "What Hardik likes most about programming is the ability to create something from nothing and solve real-world problems through code."
    },
    {
        "question": "What does Hardik like most about web development?",
        "answer": "What Hardik likes most about web development is the opportunity to create interactive and visually appealing websites that provide great user experiences."
    },
    {
        "question": "What are Hardik's favorite online resources for learning?",
        "answer": "Hardik's favorite online resources for learning include freeCodeCamp, Coursera, and YouTube channels like Traversy Media and Academind."
    },
    {
        "question": "What languages does Hardik speak?",
        "answer": "Hardik speaks English and Hindi fluently."
    },
    {
        "question": "What achievements is Hardik proud of?",
        "answer": "Hardik is proud of completing several online courses in AI and ML, building his personal portfolio website, and contributing to open-source projects."
    },
    {
        "question": "How does Hardik stay updated with the latest trends in technology?",
        "answer": "Hardik stays updated with the latest trends in technology by following tech blogs, subscribing to newsletters, and participating in online communities and forums."
    },
    {
        "question": "What communities is Hardik part of?",
        "answer": "Hardik is part of online communities like GitHub, Stack Overflow, and various Discord servers related to programming and technology."
    },
    {
        "question": "What inspires Hardik?",
        "answer": "Hardik is inspired by innovative technologies and the potential they have to solve real-world problems and improve lives."
    },
    {
        "question": "What is Hardik's favorite aspect of AI and ML?",
        "answer": "Hardik's favorite aspect of AI and ML is the ability to build systems that can learn from data and make intelligent decisions."
    },
    {
        "question": "What are Hardik's goals for his portfolio website?",
        "answer": "Hardik's goals for his portfolio website are to showcase his skills, share his projects, and provide an interactive platform for visitors to learn more about him."
    },
    {
        "question": "How does Hardik approach problem-solving?",
        "answer": "Hardik approaches problem-solving by breaking down the problem into smaller, manageable parts, researching possible solutions, and testing different approaches until he finds the best one."
    },
    {
        "question": "What is Hardik's experience with NextJS?",
        "answer": "Hardik is currently learning NextJS to enhance his ReactJS skills and take advantage of its server-side rendering capabilities."
    },
    {
        "question": "How does Hardik manage his time effectively?",
        "answer": "Hardik manages his time effectively by setting clear goals, prioritizing tasks, and using tools like calendars and to-do lists to stay organized."
    },
    {
        "question": "What has Hardik learned from his previous projects?",
        "answer": "From his previous projects, Hardik has learned the importance of planning, testing, and iterating to achieve the best results."
    },
    {
        "question": "What advice would Hardik give to someone starting in programming?",
        "answer": "Hardik's advice to someone starting in programming is to practice consistently, build projects, and never hesitate to seek help from the community."
    },
    {
        "question": "What challenges has Hardik faced in his projects?",
        "answer": "Challenges Hardik has faced in his projects include debugging complex issues, managing time effectively, and keeping up with rapidly evolving technologies."
    },
    {
        "question": "How does Hardik stay motivated?",
        "answer": "Hardik stays motivated by setting achievable goals, celebrating small wins, and constantly seeking opportunities to learn and grow."
    },
    {
        "question": "What is Hardik's approach to debugging code?",
        "answer": "Hardik's approach to debugging code involves carefully reading error messages, methodically testing parts of the code, and using debugging tools to trace the source of issues."
    },
    {
        "question": "What is Hardik's favorite software tool for coding?",
        "answer": "Hardik's favorite software tool for coding is Visual Studio Code because of its versatility and extensive range of extensions."
    },
    {
        "question": "What framework does Hardik prefer for backend development?",
        "answer": "For backend development, Hardik prefers using Django due to its robustness and the batteries-included philosophy."
    },
    {
        "question": "How does Hardik ensure code quality?",
        "answer": "Hardik ensures code quality by writing clean, maintainable code, performing regular code reviews, and using linters and static analysis tools."
    },
    {
        "question": "What is Hardik's experience with databases?",
        "answer": "Hardik has experience working with both relational databases like MySQL and PostgreSQL, and NoSQL databases like MongoDB."
    },
    {
        "question": "How does Hardik approach learning a new programming language?",
        "answer": "Hardik approaches learning a new programming language by first understanding its syntax and core concepts, then building small projects to practice and deepen his understanding."
    },
    {
        "question": "What methodologies does Hardik use in his projects?",
        "answer": "Hardik uses agile methodologies in his projects, focusing on iterative development, regular feedback, and continuous improvement."
    },
    {
        "question": "What is Hardik's favorite aspect of web development?",
        "answer": "Hardik's favorite aspect of web development is the ability to create dynamic and interactive applications that enhance user experiences."
    },
    {
        "question": "What is Hardik's approach to designing user interfaces?",
        "answer": "Hardik's approach to designing user interfaces involves prioritizing user experience, using intuitive design patterns, and ensuring responsiveness across different devices."
    },
    {
        "question": "What frontend frameworks has Hardik worked with?",
        "answer": "Hardik has worked with ReactJS only."
    },
    {
        "question": "What does Hardik do to keep his skills up to date?",
        "answer": "To keep his skills up to date, Hardik regularly participates in online courses, attends webinars, and follows industry news."
    },
    {
        "question": "How does Hardik collaborate with other developers?",
        "answer": "Hardik collaborates with other developers using version control systems like Git, communication tools like Slack, and project management tools like Jira."
    },
    {
        "question": "What version control systems has Hardik used?",
        "answer": "Hardik has used version control systems such as Git and SVN."
    },
    {
        "question": "How does Hardik test his code?",
        "answer": "Hardik tests his code using unit tests, integration tests, and end-to-end tests to ensure it functions as expected and handles edge cases."
    },
    {
        "question": "What kind of development environment does Hardik prefer?",
        "answer": "Hardik prefers a development environment that is customizable and efficient, typically using VS Code with various extensions tailored to his workflow."
    },
    {
        "question": "What is Hardik's experience with cloud services?",
        "answer": "Hardik has experience using cloud services like AWS and Google Cloud for deploying and managing applications."
    },
    {
        "question": "What web development methodologies does Hardik follow?",
        "answer": "Hardik follows web development methodologies such as responsive design, mobile-first development, and progressive enhancement."
    },
    {
        "question": "What are Hardik's goals for the future?",
        "answer": "Hardik's goals for the future include mastering advanced AI-ML techniques, contributing to significant open-source projects, and developing innovative tech solutions."
    },
    {
        "question": "What kind of AI-ML projects has Hardik worked on?",
        "answer": "Hardik has worked on AI-ML projects such as image recognition systems, sentiment analysis tools, and predictive analytics models."
    },
    {
        "question": "What is Hardik's approach to project management?",
        "answer": "Hardik's approach to project management involves setting clear objectives, breaking down tasks into manageable parts, and regularly reviewing progress."
    },
    {
        "question": "What is Hardik's favorite AI-ML library?",
        "answer": "Hardik's favorite AI-ML library is TensorFlow due to its flexibility and extensive community support."
    },
    {
        "question": "How does Hardik keep his code secure?",
        "answer": "Hardik keeps his code secure by following best practices such as using strong passwords, encrypting sensitive data, and regularly updating dependencies."
    },
    {
        "question": "What is Hardik's experience with APIs?",
        "answer": "Hardik has experience designing and consuming RESTful APIs, as well as working with GraphQL for more flexible data querying."
    },
    {
        "question": "What platforms does Hardik use for hosting his projects?",
        "answer": "Hardik uses platforms like GitHub, Heroku, and Vercel for hosting his projects and ensuring they are accessible online."
    },
    {
        "question": "What is Hardik's approach to ensuring application performance?",
        "answer": "Hardik ensures application performance by optimizing code, using efficient algorithms, and conducting thorough performance testing."
    },
    {
        "question": "What is Hardik's experience with cloud-native development?",
        "answer": "Hardik has experience with cloud-native development, including using Kubernetes for container orchestration and deploying microservices architectures."
    },
    {
        "question": "How does Hardik handle version control conflicts?",
        "answer": "Hardik handles version control conflicts by carefully reviewing changes, communicating with team members, and using merge tools to resolve issues."
    },
    {
        "question": "What is Hardik's favorite productivity tool?",
        "answer": "Hardik's favorite productivity tool is Notion because of its versatility in managing notes, tasks, and projects."
    },
    {
        "question": "How does Hardik approach writing documentation?",
        "answer": "Hardik approaches writing documentation by clearly explaining the purpose, functionality, and usage of code, and including examples and diagrams when necessary."
    },
    {
        "question": "What is Hardik's experience with continuous integration and deployment (CI/CD)?",
        "answer": "Hardik has experience setting up CI/CD pipelines using tools like Jenkins, GitHub Actions, and Travis CI to automate testing and deployment."
    },
    {
        "question": "What is Hardik's favorite type of coding challenge?",
        "answer": "Hardik enjoys algorithmic coding challenges that require logical thinking and optimization, often participating in platforms like LeetCode and Codewars."
    },
    {
        "question": "How does Hardik contribute to the tech community?",
        "answer": "Hardik contributes to the tech community by writing blog posts, giving talks at meetups, and mentoring aspiring developers."
    },
    {
        "question": "What online courses has Hardik completed?",
        "answer": "Hardik has completed online courses on platforms like Coursera, Udemy, and edX, covering topics in Python programming, AI, and web development."
    },
    {
        "question": "What IDEs does Hardik prefer for development?",
        "answer": "Hardik prefers using Visual Studio Code for general development and PyCharm for Python-specific projects."
    },
    {
        "question": "What is Hardik's approach to optimizing web performance?",
        "answer": "Hardik's approach to optimizing web performance includes minimizing HTTP requests, using lazy loading, and leveraging browser caching."
    },
    {
        "question": "How does Hardik handle cross-browser compatibility issues?",
        "answer": "Hardik handles cross-browser compatibility issues by testing his websites on multiple browsers and using polyfills and fallbacks for unsupported features."
    },
    {
        "question": "What is Hardik's experience with mobile development?",
        "answer": "Hardik has some experience with mobile development using frameworks like React Native to build cross-platform applications."
    },
    {
        "question": "What languages is Hardik currently learning?",
        "answer": "Hardik is currently learning TypeScript to enhance his JavaScript development skills and Rust for systems programming."
    },
    {
        "question": "What is Hardik's approach to learning a new framework?",
        "answer": "Hardik's approach to learning a new framework involves reading the official documentation, building small projects, and exploring community resources."
    },
    {
        "question": "What coding practices does Hardik follow?",
        "answer": "Hardik follows coding practices such as writing clean and maintainable code, adhering to SOLID principles, and conducting regular code reviews."
    },
    {
        "question": "What is Hardik's experience with serverless architecture?",
        "answer": "Hardik has experience with serverless architecture, using services like AWS Lambda and Google Cloud Functions to build scalable applications."
    },
    {
        "question": "How does Hardik ensure accessibility in web development?",
        "answer": "Hardik ensures accessibility by following WCAG guidelines, using semantic HTML, and testing with screen readers and other assistive technologies."
    },
    {
        "question": "What is Hardik's approach to testing web applications?",
        "answer": "Hardik's approach to testing web applications involves writing unit tests, integration tests, and using tools like Selenium for end-to-end testing."
    },
    {
        "question": "What is Hardik's experience with data visualization?",
        "answer": "Hardik has experience with data visualization using libraries like D3.js and Plotly to create interactive charts and graphs."
    },
    {
        "question": "What does Hardik enjoy most about working on open-source projects?",
        "answer": "Hardik enjoys the collaborative aspect of open-source projects and the opportunity to contribute to tools that benefit the wider developer community."
    },
    {
        "question": "How does Hardik approach learning complex topics?",
        "answer": "Hardik approaches learning complex topics by breaking them down into smaller parts, studying relevant materials, and applying concepts through practical projects."
    },
    {
        "question": "What is Hardik's favorite aspect of being a developer?",
        "answer": "Hardik's favorite aspect of being a developer is the constant opportunity for learning and the ability to create impactful solutions through code."
    },
    {
        "question": "How does Hardik handle feedback on his work?",
        "answer": "Hardik handles feedback by listening carefully, considering the suggestions, and making improvements to enhance the quality of his work."
    },
    {
        "question": "What is Hardik's experience with Agile development?",
        "answer": "Hardik has experience with Agile development, working in sprints, participating in stand-up meetings, and using tools like Jira for project management."
    },
    {
        "question": "What is Hardik's approach to continuous learning?",
        "answer": "Hardik's approach to continuous learning involves setting aside regular time for study, exploring new technologies, and participating in online courses and workshops."
    },
    {
        "question": "What is Hardik's favorite development environment setup?",
        "answer": "Hardik's favorite development environment setup includes using a dual-monitor setup, a mechanical keyboard, and a comfortable chair for long coding sessions."
    },
    {
        "question": "How does Hardik approach refactoring code?",
        "answer": "Hardik approaches refactoring code by first understanding the existing functionality, then incrementally making improvements to enhance readability and performance."
    },
    {
        "question": "What is Hardik's experience with backend frameworks?",
        "answer": "Hardik has experience with backend frameworks like Django, Flask, and Express.js for building robust and scalable server-side applications."
    },
    {
        "question": "How does Hardik stay focused while working?",
        "answer": "Hardik stays focused while working by using techniques like the Pomodoro Technique, minimizing distractions, and taking regular breaks to maintain productivity."
    },
    {
        "question": "What is Hardik's approach to solving coding challenges?",
        "answer": "Hardik's approach to solving coding challenges involves understanding the problem statement, devising a plan, and writing efficient code to implement the solution."
    },
    {
        "question": "What tools does Hardik use for collaboration?",
        "answer": "Hardik uses tools like GitHub for version control, Slack for communication, and Trello for task management to collaborate effectively with his team."
    },
    {
        "question": "What is Hardik's favorite programming language?",
        "answer": "Hardik's favorite programming language is Python because of its simplicity, readability, and extensive libraries for AI and ML development."
    },
    {
        "question": "How does Hardik approach debugging code?",
        "answer": "Hardik approaches debugging code by carefully reading error messages, using breakpoints, and systematically checking the logic to identify and fix issues."
    },
    {
        "question": "What is Hardik's experience with front-end frameworks?",
        "answer": "Hardik has experience with front-end frameworks like ReactJS and Angular, using them to build dynamic and responsive user interfaces."
    },
    {
        "question": "How does Hardik handle tight deadlines?",
        "answer": "Hardik handles tight deadlines by prioritizing tasks, staying organized, and communicating effectively with team members to ensure timely completion."
    },
    {
        "question": "What is Hardik's approach to ensuring code quality?",
        "answer": "Hardik ensures code quality by writing clean, maintainable code, conducting code reviews, and using automated testing tools to catch bugs early."
    },
    {
        "question": "What is Hardik's experience with DevOps practices?",
        "answer": "Hardik has experience with DevOps practices such as continuous integration, continuous deployment, and infrastructure as code using tools like Terraform."
    },
    {
        "question": "How does Hardik handle learning new technologies?",
        "answer": "Hardik handles learning new technologies by staying curious, exploring documentation, building small projects, and seeking help from the developer community."
    },
    {
        "question": "What is Hardik's favorite software development methodology?",
        "answer": "Hardik's favorite software development methodology is Agile because it promotes flexibility, collaboration, and iterative progress."
    },
    {
        "question": "What is Hardik's experience with database management?",
        "answer": "Hardik has experience with database management using both SQL and NoSQL databases, including MySQL, PostgreSQL, and MongoDB."
    },
    {
        "question": "How does Hardik approach designing user interfaces?",
        "answer": "Hardik approaches designing user interfaces by focusing on user experience, using wireframes and prototypes, and iterating based on user feedback."
    },
    {
        "question": "What is Hardik's experience with machine learning frameworks?",
        "answer": "Hardik has experience with machine learning frameworks such as TensorFlow, Keras, and PyTorch, using them to develop and train various models."
    },
    {
        "question": "How does Hardik handle stress while working on complex projects?",
        "answer": "Hardik handles stress by taking regular breaks, practicing mindfulness, and maintaining a healthy work-life balance to stay focused and productive."
    },
    {
        "question": "What is Hardik's approach to code optimization?",
        "answer": "Hardik approaches code optimization by profiling the code to identify bottlenecks, optimizing algorithms, and reducing unnecessary computations."
    },
    {
        "question": "What tools does Hardik use for monitoring applications?",
        "answer": "Hardik uses tools like Prometheus and Grafana for monitoring applications, tracking performance metrics, and alerting on issues."
    },
    {
        "question": "How does Hardik approach collaboration on open-source projects?",
        "answer": "Hardik approaches collaboration on open-source projects by actively participating in discussions, contributing code, and helping with documentation and issue resolution."
    },
    {
        "question": "What is Hardik's experience with API development?",
        "answer": "Hardik has experience with API development, designing RESTful and GraphQL APIs, and ensuring they are secure and efficient."
    },
    {
        "question": "How does Hardik handle changes in project requirements?",
        "answer": "Hardik handles changes in project requirements by staying flexible, communicating with stakeholders, and adapting his approach to meet the new objectives."
    },
    {
        "question": "What is Hardik's experience with containerization?",
        "answer": "Hardik has experience with containerization using Docker, creating containerized applications, and orchestrating them with Kubernetes."
    },
    {
        "question": "What is Hardik's approach to writing clean code?",
        "answer": "Hardik's approach to writing clean code involves following naming conventions, keeping functions and classes small, and writing meaningful comments."
    },
    {
        "question": "How does Hardik stay updated with industry trends?",
        "answer": "Hardik stays updated with industry trends by reading tech blogs, following thought leaders on social media, and attending webinars and conferences."
    },
    {
        "question": "What is Hardik's experience with microservices architecture?",
        "answer": "Hardik has experience with microservices architecture, designing and deploying microservices, and ensuring they communicate effectively using APIs."
    },
    {
        "question": "How does Hardik approach troubleshooting issues in production?",
        "answer": "Hardik approaches troubleshooting issues in production by analyzing logs, using monitoring tools, and systematically isolating and resolving the root cause."
    },
    {
        "question": "What is Hardik's experience with big data technologies?",
        "answer": "Hardik has experience with big data technologies like Hadoop and Spark, using them for data processing and analytics on large datasets."
    },
    {
        "question": "How does Hardik approach code reviews?",
        "answer": "Hardik approaches code reviews by providing constructive feedback, focusing on code quality, and ensuring that best practices are followed."
    },
    {
        "question": "What is Hardik's experience with real-time data processing?",
        "answer": "Hardik has experience with real-time data processing using tools like Apache Kafka and Flink to handle and analyze data streams."
    },
    {
        "question": "How does Hardik handle working with legacy code?",
        "answer": "Hardik handles working with legacy code by understanding the existing codebase, refactoring when necessary, and carefully adding new features."
    },
    {
        "question": "What is Hardik's experience with machine learning model deployment?",
        "answer": "Hardik has experience with machine learning model deployment, using tools like TensorFlow Serving and Flask to serve trained models in production."
    },
    {
        "question": "How does Hardik approach learning from failures?",
        "answer": "Hardik approaches learning from failures by analyzing what went wrong, understanding the lessons learned, and applying those insights to future projects."
    },
    {
        "question": "What is Hardik's experience with natural language processing (NLP)?",
        "answer": "Hardik has experience with natural language processing (NLP), using libraries like NLTK and spaCy to build applications like chatbots and text classifiers."
    },
    {
        "question": "How does Hardik approach integrating third-party services?",
        "answer": "Hardik approaches integrating third-party services by thoroughly reading the documentation, using SDKs and APIs, and ensuring proper error handling."
    },
    {
        "question": "What is Hardik's experience with version control systems?",
        "answer": "Hardik has experience with version control systems like Git, using them for code management, collaboration, and maintaining project history."
    },
    {
        "question": "How does Hardik handle multitasking on different projects?",
        "answer": "Hardik handles multitasking on different projects by prioritizing tasks, managing his time effectively, and focusing on one project at a time to ensure quality."
    },
    {
        "question": "What is Hardik's approach to writing unit tests?",
        "answer": "Hardik's approach to writing unit tests involves creating tests for individual components, ensuring coverage for various scenarios, and using testing frameworks like Jest and pytest."
    },
    {
        "question": "How does Hardik ensure data privacy and security in his projects?",
        "answer": "Hardik ensures data privacy and security by implementing encryption, using secure authentication methods, and following best practices for data handling."
    },
    {
        "question": "What is Hardik's experience with AI ethics and fairness?",
        "answer": "Hardik has studied AI ethics and fairness, understanding the importance of unbiased data, transparent algorithms, and the ethical implications of AI applications."
    },
    {
        "question": "How does Hardik handle rapid changes in technology?",
        "answer": "Hardik handles rapid changes in technology by staying adaptable, continuously learning, and experimenting with new tools and frameworks to stay current."
    },
    {
        "question": "What is Hardik's approach to mentoring junior developers?",
        "answer": "Hardik's approach to mentoring junior developers involves providing guidance, sharing knowledge, encouraging best practices, and fostering a supportive learning environment."
    },
    {
        "question": "What is Hardik's favorite Python library?",
        "answer": "Hardik's favorite Python library is NumPy because of its powerful array operations and mathematical functions."
    },
    {
        "question": "What Python frameworks has Hardik worked with?",
        "answer": "Hardik has experience with Flask and Django for web development in Python."
    },
    {
        "question": "What are Hardik's favorite features of Flask?",
        "answer": "Hardik appreciates Flask's simplicity and flexibility, making it easy to build web applications quickly."
    },
    {
        "question": "What are Hardik's favorite features of Django?",
        "answer": "Hardik likes Django for its batteries-included approach, which provides built-in features like authentication, admin panel, and ORM."
    },
    {
        "question": "How does Hardik handle errors in Python?",
        "answer": "Hardik handles errors in Python using try-except blocks and logging to identify and debug issues effectively."
    },
    {
        "question": "What is Hardik's approach to securing Python applications?",
        "answer": "Hardik secures Python applications by implementing best practices like input validation, using secure libraries, and regularly updating dependencies."
    },
    {
        "question": "What databases has Hardik used with Python?",
        "answer": "Hardik has worked with SQLite and PostgreSQL databases in Python projects."
    },
    {
        "question": "What deployment strategies does Hardik use for Python applications?",
        "answer": "Hardik deploys Python applications using Docker containers and cloud services like AWS Elastic Beanstalk for scalable deployments."
    },
    {
        "question": "How does Hardik ensure Python code quality?",
        "answer": "Hardik ensures Python code quality by writing unit tests, using pylint for code analysis, and following PEP 8 guidelines."
    },
    {
        "question": "What CI/CD tools does Hardik use for Python projects?",
        "answer": "Hardik uses Jenkins and GitHub Actions for continuous integration and deployment of Python applications."
    },
    {
        "question": "What are Hardik's favorite Python design patterns?",
        "answer": "Hardik likes the MVC (Model-View-Controller) and Singleton design patterns for organizing and simplifying Python code."
    },
    {
        "question": "What Python libraries does Hardik use for data visualization?",
        "answer": "Hardik uses Matplotlib and Seaborn for data visualization tasks in Python."
    },
    {
        "question": "How does Hardik optimize Python code?",
        "answer": "Hardik optimizes Python code by profiling performance with tools like cProfile, optimizing algorithms, and using caching techniques."
    },
    {
        "question": "What Python web scraping tools does Hardik prefer?",
        "answer": "Hardik prefers using BeautifulSoup and Scrapy for web scraping tasks in Python projects."
    },
    {
        "question": "What are Hardik's favorite Python packages for machine learning?",
        "answer": "Hardik uses scikit-learn and TensorFlow for machine learning projects in Python."
    },
    {
        "question": "What are Hardik's favorite Python packages for natural language processing?",
        "answer": "Hardik uses NLTK (Natural Language Toolkit) and spaCy for natural language processing tasks in Python."
    },
    {
        "question": "How does Hardik handle asynchronous programming in Python?",
        "answer": "Hardik uses async and await keywords with asyncio for asynchronous programming in Python, improving performance for I/O-bound tasks."
    },
    {
        "question": "What are Hardik's favorite Python packages for web development?",
        "answer": "Hardik likes using Flask-RESTful and Django REST Framework for building RESTful APIs in Python."
    },
    {
        "question": "What are Hardik's favorite Python packages for testing?",
        "answer": "Hardik uses pytest and unittest for writing and running tests in Python projects."
    },
    {
        "question": "What are Hardik's favorite Python packages for web scraping?",
        "answer": "Hardik prefers using BeautifulSoup and Scrapy for web scraping tasks in Python."
    },
    {
        "question": "What are Hardik's favorite Python packages for data analysis?",
        "answer": "Hardik uses pandas and NumPy for data analysis and manipulation in Python."
    },
    {
        "question": "What are Hardik's favorite Python packages for GUI development?",
        "answer": "Hardik likes using Tkinter and PyQt for GUI development in Python."
    },
    {
        "question": "How does Hardik manage dependencies in Python projects?",
        "answer": "Hardik uses pip for installing and managing dependencies and requirements.txt files to specify project dependencies."
    },
    {
        "question": "What are Hardik's favorite Python packages for web scraping?",
        "answer": "Hardik prefers using BeautifulSoup and Scrapy for web scraping tasks in Python."
    },
    {
        "question": "How does Hardik handle concurrency in Python?",
        "answer": "Hardik uses concurrent.futures and multiprocessing modules for concurrent programming in Python, optimizing CPU-bound tasks."
    },
    {
        "question": "What are Hardik's favorite Python packages for web development?",
        "answer": "Hardik likes Flask-SQLAlchemy and Django ORM for database management in Python web applications."
    },
    {
        "question": "What Python frameworks has Hardik used for microservices?",
        "answer": "Hardik has used Flask and FastAPI for building microservices in Python projects."
    },
    {
        "question": "How does Hardik handle file operations in Python?",
        "answer": "Hardik uses built-in file handling functions like open(), read(), write(), and pathlib module for file operations in Python."
    },
    {
        "question": "What are Hardik's favorite Python packages for web development?",
        "answer": "Hardik likes using Flask-WTF and Django Forms for handling forms and user input validation in Python web applications."
    },
    {
        "question": "What are Hardik's favorite Python packages for data visualization?",
        "answer": "Hardik uses Plotly and Dash for interactive data visualization in Python projects."
    },
    {
        "question": "How does Hardik handle authentication in Python web applications?",
        "answer": "Hardik implements authentication using Flask-Login and Django authentication system for securing Python web applications."
    },
    {
        "question": "What are Hardik's favorite Python packages for image processing?",
        "answer": "Hardik uses Pillow and OpenCV for image processing tasks in Python."
    },
    {
        "question": "How does Hardik optimize database queries in Python applications?",
        "answer": "Hardik optimizes database queries using Django ORM's select_related() and prefetch_related() methods for minimizing database hits."
    },
    {
        "question": "What are Hardik's favorite Python packages for web development?",
        "answer": "Hardik likes using Flask-Mail and Django-REST-Knox for handling email sending and authentication tokens in Python web applications."
    },
    {
        "question": "What are Hardik's favorite Python packages for cloud integration?",
        "answer": "Hardik uses boto3 for AWS integration and google-cloud-python for Google Cloud Platform integration in Python projects."
    },
    {
        "question": "How does Hardik handle session management in Python web applications?",
        "answer": "Hardik uses Flask-Session and Django's session middleware for managing user sessions in Python web applications."
    },
    {
        "question": "What Python packages does Hardik use for web scraping?",
        "answer": "Hardik uses BeautifulSoup, Scrapy and Selenium for web scraping tasks in Python."
    },
    {
        "question": "How does Hardik ensure data security in Python applications?",
        "answer": "Hardik ensures data security by encrypting sensitive data using libraries like cryptography and implementing HTTPS for secure communication."
    },
    {
        "question": "What are Hardik's favorite Python packages for deploying web applications?",
        "answer": "Hardik uses Fabric and Ansible for automated deployment and configuration management of Python web applications."
    }
]

// Precompute TF-IDF for the dataset's questions
const tokenizer = new natural.WordTokenizer();
const tfidf = new natural.TfIdf();

// Add all questions to the TF-IDF model
dataset.forEach(entry => {
  tfidf.addDocument(entry.question);
});

// Function to find the best matching answer
function findBestMatch(query) {
  let bestMatchIndex = -1;
  let bestScore = -1;

  tfidf.tfidfs(query, function(i, score) {
    if (score > bestScore) {
      bestScore = score;
      bestMatchIndex = i;
    }
  });

  // If the best score is below a threshold, return a fallback message
  if (bestScore < 0.2) {
    return "I'm sorry, I couldn't find an answer to that question.";
  }

  return dataset[bestMatchIndex].answer;
}

// API endpoint to ask a question
app.get("/ask", (req, res) => {
  const query = req.query.query;
  if (!query) {
    return res.status(400).json({ error: "Query parameter is required." });
  }
  
  const answer = findBestMatch(query);
  res.json({ answer: answer });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
