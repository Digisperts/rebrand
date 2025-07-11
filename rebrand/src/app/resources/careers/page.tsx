import React from 'react';
import NavBar from '../../nav';
import Footer from '../../Footer';

export default function CareerResource() {
  return (
    <>
      <NavBar />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">Sample Resource</h1>
        <p>This is a sample resource page.</p>
      </main>
      <Footer />
    </>
  );
}