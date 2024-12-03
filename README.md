# DocuLive

<img src="./public/assets/images/logo.png" alt="DocuLive Logo" width="100" height="100" />

DocuLive is a collaborative document editing application built with **Next.js**, **React**, and **TypeScript**. It allows users to create, edit, and share documents in real-time, making collaboration seamless and efficient.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Real-time Collaboration**: Multiple users can edit documents simultaneously.
- **User Authentication**: Secure sign-in and user management with Clerk.
- **Rich Text Editing**: A powerful editor with formatting options.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Custom Themes**: Light and dark mode support.

## Getting Started

To get started with DocuLive, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/MrDxtr/doculive.git
   cd doculive
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Clerk**: User authentication and management.
- **Liveblocks**: Real-time collaboration features.

## Usage

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Creating a Document

1. Click on the "Create a new document" button.
2. Enter a title and start editing.
3. Share the document with collaborators via email.

### Collaborating

- Invite collaborators to edit the document in real-time.
- Use the toolbar for formatting options.

## Deployment

To deploy your Next.js app, you can use Vercel:

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and import your repository.
3. Follow the prompts to deploy your application.

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for checking out DocuLive! We hope you enjoy using it as much as we enjoyed building it.
