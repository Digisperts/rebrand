"use client";
import NavBar from "../nav";
import Footer from "../Footer";

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>
      <main className="flex flex-1 items-center justify-center pt-32">
        <h1 className="text-3xl font-semibold text-blue-900">Who We Are Page</h1>
      </main>
      <Footer />
    </div>
  );
} 