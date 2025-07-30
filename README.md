# MockitUp - AI-Powered Mock Interview Platform

MockitUp is an AI-powered platform for practicing job interviews and receiving instant feedback. Built with Next.js, Firebase, and modern React, it allows users to simulate real interview scenarios, get scored feedback, and improve their skills.

## Features

- **AI Interviewer:** Practice interviews with an AI agent using voice or text.
- **Instant Feedback:** Receive detailed, structured feedback and scores after each interview.
- **Interview Generation:** Generate interview questions tailored to your role, level, and tech stack.
- **User Authentication:** Secure sign-up and sign-in with Firebase.
- **Dashboard:** Track your interview history and feedback.
- **Modern UI:** Responsive, accessible, and theme-aware design.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router, Server Actions)
- [React](https://react.dev/)
- [Firebase](https://firebase.google.com/) (Auth, Firestore)
- [AI SDKs](https://sdk.vercel.ai/) (Google Gemini, OpenAI, Vapi)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zod](https://zod.dev/) (Validation)
- [React Hook Form](https://react-hook-form.com/)
- [Sonner](https://sonner.emilkowal.ski/) (Toasts)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/mock-interview-platform.git
   cd mock-interview-platform
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   - Copy `.env.local.example` to `.env.local` and fill in your Firebase and API keys.

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Project Structure

- `app/` - Next.js app directory (routing, layouts, pages)
- `components/` - Reusable UI and feature components
- `lib/` - Utilities, Firebase, and server actions
- `constants/` - Static data and schemas
- `types/` - TypeScript types and interfaces
- `public/` - Static assets (images, icons)

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run start` - Start the production server
- `npm run lint` - Lint the codebase

## Deployment

Deploy easily on [Vercel](https://vercel.com/) or any platform supporting Next.js.

---

**Made with ❤️ for job seekers and learners.**
