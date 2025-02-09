export const PROJECTS = [
  {
    title: "Apple and Corn Disease Detection",
    description: "Deep learning model using CNNs to detect and diagnose diseases in apples and corn, leveraging AlexNet with 80% accuracy",
    image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
    period: "Sep 2024 - Nov 2024",
    points: [
      "Incorporated feature to display symptoms and provide recommended treatments",
      "Utilized image processing techniques and deep learning frameworks",
      "Delivered solution for farmers and agriculturalists in disease management"
    ]
  },
  {
    title: "Rock Paper Scissors Game",
    description: "Interactive game with hand gestures allowing users to play against computer",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    period: "Aug 2024",
    points: [
      "50% increase in user engagement",
      "Reset score functionality and autoplay button",
      "Built using HTML, CSS, and JavaScript"
    ],
    link: "https://game01-rps.netlify.app/"
  },
  {
    title: "YouTube UI",
    description: "Front-end implementation of YouTube using HTML and CSS",
    image: "https://images.unsplash.com/photo-1660592868727-858d28c3ba52",
    period: "May 2024",
    points: [
      "91% accuracy in visual similarity",
      "Responsive design for various devices",
      "Pure HTML/CSS implementation"
    ],
    link: "https://u-tube-ui.netlify.app/"
  },
  {
    title: "Job Role Suggestion System",
    description: "Career recommendation system using machine learning",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    period: "Jan 2024 - May 2024",
    points: [
      "84% accuracy using Random Forest algorithm",
      "Full-stack implementation with Python backend",
      "UML diagrams and design patterns"
    ]
  }
];

export const SKILLS = [
  { name: "C++", level: 90 },
  { name: "Python", level: 85 },
  { name: "Data Structures & Algorithms", level: 95 },
  { name: "JavaScript", level: 80 },
  { name: "HTML & CSS", level: 85 },
  { name: "Java", level: 75 },
  { name: "MySQL", level: 80 },
  { name: "Object Oriented Programming", level: 90 },
  { name: "SDLC", level: 85 },
  { name: "DBMS", level: 85 },
  { name: "Machine Learning", level: 80 },
  { name: "Operating System", level: 85 },
  { name: "Blockchain", level: 75 }
];

export const EDUCATION = [
  {
    degree: "B.Tech in CSE",
    institution: "SRM University, Andhra Pradesh",
    period: "2021 - present",
    score: "CGPA: 8.04"
  },
  {
    degree: "Class XII - CBSE",
    institution: "",
    period: "2021",
    score: "96.40%"
  },
  {
    degree: "Class X - CBSE",
    institution: "",
    period: "2019",
    score: "95.20%"
  }
];

export const ACHIEVEMENTS = [
  "100% scholarship for undergraduate degree covering academic fees and accommodation",
  "Top 10 team ranking in college Code-Clash contests",
  "Active contributor to college Coding Club",
  "Solved 550+ problems on LeetCode",
  "Participated in 45+ CodeChef contests"
];

export const BLOG_POSTS = [
  {
    title: "Understanding Data Structures in Modern Web Development",
    description: "An in-depth look at how data structures power modern web applications and their practical implementations.",
    date: "2025-02-01",
    readTime: "10 min read",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    preview: "In today's fast-paced digital world, modern web development isn't just about making things look pretty—it's also about how data is organized, stored, and manipulated behind the scenes. Whether you're a seasoned developer or just starting out, understanding data structures can feel like uncovering the secret recipe behind a website's smooth performance and interactive features.",
    content: `Understanding Data Structures in Modern Web Development
In today's fast-paced digital world, modern web development isn't just about making things look pretty—it's also about how data is organized, stored, and manipulated behind the scenes. Whether you're a seasoned developer or just starting out, understanding data structures can feel like uncovering the secret recipe behind a website's smooth performance and interactive features. Let's explore this fascinating topic in a friendly, humanised way.

What Are Data Structures, Anyway?
Imagine you have a messy room where everything is scattered about. Finding your favorite book or your keys might take forever! Data structures work like a well-organized room—they provide a way to neatly arrange and manage data so that you can find and use it efficiently. They're the underlying building blocks that allow computers to perform tasks quickly and effectively.

In web development, data structures are everywhere. They help manage user data, organize content, and even power the complex interactions you see on websites and applications. Common examples include:

Arrays and Lists: Think of these as neatly organized shelves where each item (or element) is stored in a specific order. For instance, an array might hold a list of product names on an e-commerce site.
Objects and Dictionaries: These are like labeled storage boxes. Each box (or key) is paired with a value, making it easy to find the information you need—much like a contact list where names are paired with phone numbers.
Trees: Imagine a family tree. In web development, the Document Object Model (DOM) of an HTML page is structured as a tree, with parent and child elements that help browsers render web pages.
Graphs: These are networks of nodes (data points) connected by edges (relationships). They're used in scenarios like social networks where relationships between users need to be efficiently managed.

Why Data Structures Matter in Web Development
1. Performance and Speed
Efficient data structures can significantly speed up the way a website processes information. For example, when you click on a menu item and a new section loads, optimized data handling ensures that the transition is smooth and instantaneous. Using the right data structure can reduce the time it takes for your website to search, sort, or update information.

2. Scalability
Modern web applications need to handle growing amounts of data and users. Well-chosen data structures help applications scale gracefully. Imagine your website starts with a few hundred users and eventually grows to millions. Properly structured data can handle that increase without compromising performance.

3. Maintainability
Clean, organized code is easier to maintain and update. When data is stored in a logical structure, it's much simpler for developers to understand and modify the code. This means that as your web application evolves, you can add new features or fix bugs without getting tangled in a mess of disorganized data.

4. User Experience
All of these benefits—speed, scalability, and maintainability—translate directly into a better user experience. A website that quickly loads content, smoothly updates information, and rarely encounters errors will keep users happy and engaged.

Real-World Examples in Modern Web Development
The DOM Tree
When you open a webpage, your browser creates a representation of the page called the DOM (Document Object Model). This structure is essentially a tree where each element (like paragraphs, images, and buttons) is a node. The tree-like structure of the DOM makes it easy for browsers to navigate and update content dynamically, ensuring that interactions like clicking a button or submitting a form are handled efficiently.

JSON and API Responses
APIs (Application Programming Interfaces) are a staple of modern web development. When a web application fetches data from a server, it often receives it in JSON (JavaScript Object Notation) format. JSON uses objects (key-value pairs) and arrays to structure data in a way that's both human-readable and machine-friendly. This means that when you check the weather on your favorite website, a well-organized JSON response is being processed in the background to display the current conditions.

State Management in Frameworks
Frameworks like React, Angular, and Vue use data structures to manage the state of an application. The "state" represents the current data of an app at any given time—like which items are in your shopping cart or which messages you've read in a chat. Efficient state management often relies on data structures that can quickly update and render changes on the user interface.

Wrapping Up
Understanding data structures in modern web development is like learning the secret language that computers use to organize information. They might seem technical at first, but with a bit of exploration, you'll see that they're all about making our digital experiences smoother, faster, and more enjoyable.

So next time you're interacting with your favorite website, take a moment to appreciate the hidden efficiency of the data structures working tirelessly behind the scenes. They're the unsung heroes making our online world a better place—one well-organized data element at a time.`
  },
  {
    title: "Machine Learning in Agriculture: A Case Study",
    description: "Exploring the implementation of CNNs for crop disease detection and its real-world impact.",
    date: "2025-01-15",
    readTime: "12 min read",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8",
    preview: "Imagine walking through a field where every apple tree and corn stalk is thriving because a silent guardian is keeping a vigilant eye over them. This guardian isn't a person—it's machine learning, a technology that's transforming agriculture by detecting crop diseases early and suggesting smart solutions.",
    content: `Machine Learning in Agriculture: Cultivating a Healthier Future for Our Crops
Imagine walking through a field where every apple tree and corn stalk is thriving because a silent guardian is keeping a vigilant eye over them. This guardian isn't a person—it's machine learning, a technology that's transforming agriculture by detecting crop diseases early and suggesting smart solutions.

What Is Machine Learning in Agriculture?
At its core, machine learning is about teaching computers to learn from data, much like how we learn from experience. In agriculture, this means using data collected from fields—such as images of crops—to spot problems before they become serious. It's like having a super-smart assistant that helps farmers identify and tackle issues right when they appear.

Bringing Innovation to the Fields
Modern agriculture faces many challenges: unpredictable weather, pests, and crop diseases can all impact harvests. Machine learning helps by processing vast amounts of information quickly and accurately. For instance, a farmer can take photos of their apple trees or corn fields, and a machine learning model will analyze these images to detect any signs of disease. This technology pinpoints problems that might be invisible to the human eye, allowing for early intervention.

A Closer Look: Apple and Corn Disease Detection
Let's talk about a real-world application that's making a difference: a project focused on detecting diseases in apple and corn crops. Here's how it works:

Image Collection: High-quality photos of apple leaves or corn stalks are captured in the field. These images serve as the raw data for the machine learning system.

Data Analysis: The images are fed into a machine learning model specially trained to recognize patterns that indicate disease. Think of it as a highly skilled detective who can spot the tiniest clues that something's wrong.

Early Detection: The model quickly identifies signs of potential diseases in the crops. This early detection is crucial—it allows farmers to take immediate action, such as applying targeted treatments or adjusting cultivation practices, to prevent the disease from spreading.

Providing Solutions: Beyond just spotting the issue, the system can suggest practical solutions. For example, if a specific apple disease is detected, the model might recommend a particular organic pesticide or a change in watering practices to mitigate the problem. Similarly, for corn, the system could advise on soil adjustments or pest control methods.

This project not only helps save crops but also reduces the need for broad-spectrum chemicals, supporting a more sustainable approach to farming.

Why Machine Learning Matters for Farmers
Speed and Accuracy
Machine learning processes data at lightning speed, enabling real-time monitoring of crop health. This means farmers can react immediately to any signs of disease, preventing minor issues from turning into major crop losses.

Cost-Effective Farming
By detecting diseases early, farmers can avoid costly damage and reduce the overuse of chemicals. This targeted approach saves money and protects the environment, benefiting both the farmer's bottom line and the planet.

Improved Crop Yields
When diseases are caught early and managed effectively, crops remain healthier and more productive. This leads to better yields and higher quality produce, which is good news for everyone—from farmers to consumers.

Empowering Decision-Making
Machine learning tools provide farmers with clear, data-driven insights. This empowerment means that decisions about crop management are no longer based solely on experience or guesswork but on accurate, real-time information.

The Road Ahead: Challenges and Opportunities
While the benefits are clear, integrating machine learning into everyday farming isn't without challenges. Collecting consistent, high-quality data from diverse environments can be tricky, and there's always a learning curve when new technology meets traditional practices. However, with continued research and collaboration between tech experts and farmers, these obstacles can be overcome, paving the way for a smarter, more resilient agricultural future.

Conclusion
Machine learning is more than just a buzzword in modern agriculture—it's a powerful tool that's helping to safeguard our food supply. Projects like apple and corn disease detection are shining examples of how technology can work hand-in-hand with nature. By catching diseases early and providing tailored solutions, machine learning not only helps farmers protect their crops but also promotes sustainable farming practices that benefit us all.

So next time you enjoy a crisp apple or a delicious ear of corn, remember the hidden hero behind the scenes: a smart system working tirelessly to ensure our food is as healthy as it is abundant.`
  }
];