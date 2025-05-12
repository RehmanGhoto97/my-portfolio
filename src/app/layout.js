import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Head from "next/head"; // Import Head from Next.js

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abdul Rehman | Frontend Developer Portfolio",
  description:
    "Explore the professional portfolio of Abdul Rehman — a frontend web developer specializing in React.js, Next.js, Tailwind CSS, and UI/UX design. View projects, skills, experience, and contact details.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Tailwind CSS",
    "JavaScript Developer",
    "Web Developer Portfolio",
    "Abdul Rehman",
    "UI Developer",
    "Frontend Engineer",
    "Personal Portfolio Website",
    "Modern Web Development",
    "Responsive Design",
    "Material UI Developer"
  ],
  authors: [{ name: "Abdul Rehman", url: "https://portfolio-ar97.netlify.app" }],
  creator: "Abdul Rehman",
  publisher: "Abdul Rehman",
  metadataBase: new URL("https://portfolio-ar97.netlify.app"),
  openGraph: {
    title: "Abdul Rehman | Frontend Developer Portfolio",
    description:
      "Welcome to Abdul Rehman's personal portfolio site showcasing frontend projects, skills in React and Next.js, and UI design expertise.",
    url: "https://portfolio-ar97.netlify.app",
    siteName: "Abdul Rehman Portfolio",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Abdul Rehman Portfolio Preview",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Rehman | Frontend Developer Portfolio",
    description:
      "Abdul Rehman's portfolio — explore modern web development projects using React, Next.js, Tailwind CSS and Material UI.",
    creator: "@RehmanGhoto97",
    images: ["/preview.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  category: "Technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Head>
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords.join(", ")} />
          <meta name="author" content={metadata.authors[0].name} />
          <meta property="og:title" content={metadata.openGraph.title} />
          <meta property="og:description" content={metadata.openGraph.description} />
          <meta property="og:url" content={metadata.openGraph.url} />
          <meta property="og:image" content={metadata.openGraph.images[0].url} />
          <meta name="twitter:card" content={metadata.twitter.card} />
          <meta name="twitter:title" content={metadata.twitter.title} />
          <meta name="twitter:description" content={metadata.twitter.description} />
          <meta name="twitter:image" content={metadata.twitter.images[0]} />
        </Head>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
