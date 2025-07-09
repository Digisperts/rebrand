"use client";
import { useState, useRef } from "react";
import NavBar from "../nav";
import Footer from "../Footer";
import Image from "next/image";

export default function ShortenLinkPage() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const handleShorten = (e) => {
    e.preventDefault();
    setLoading(true);
    setCopied(false);
    setTimeout(() => {
      setShortUrl("https://digi.ly/abcd1234");
      setLoading(false);
    }, 1000);
  };

  const handleCopy = () => {
    if (shortUrl) {
      navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>
      <main className="flex flex-1 flex-col items-center justify-center pt-32 px-4">
        <section className="w-full bg-white py-12">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center px-4">
            
            <div className="flex-1 flex justify-center md:justify-start mb-8 md:mb-0">
              <Image
                src="/images/shorten.png"
                alt="Shorten Link Illustration"
                width={320}
                height={220}
                className="max-w-[320px] w-full h-auto"
              />
            </div>
            
            <div className="flex-1 flex flex-col items-center md:items-start">
              <h2 className="text-[#2046a7] text-lg md:text-xl font-semibold mb-4 text-left w-full">
                Use our free URL Shortener
              </h2>
              <div className="w-full max-w-md mb-2">
                <span className="block text-blue-900 font-lights text-sm mb-2">
                  Over 10,000 links shortened this week
                </span>
              </div>
              <form onSubmit={handleShorten} className="flex w-full max-w-md mb-3">
                <input
                  type="url"
                  required
                  placeholder="Enter the link here"
                  className="flex-1 border border-gray-300 rounded-l px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#2046a7] text-sm text-black"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-blue-900 text-white px-5 py-2 rounded-r font-semibold text-sm shadow transition-colors duration-500 ease-in-out border border-transparent hover:bg-white hover:text-blue-900 hover:border-blue-900"
                  disabled={loading}
                >
                  {loading ? "Shortening..." : "Shorten URL"}
                </button>
              </form>
              <p className="text-gray-600 text-xs text-left w-full max-w-md">
                Digurl is a free AI tool that shortens your URLs and generates a shorter link for easy sharing. Shorten your long links to a shorter one while still maintaining your URL directory.
              </p>
              {shortUrl && (
                <div className="w-full max-w-md bg-gray-50 border border-blue-200 rounded p-4 flex items-center justify-between mb-3">
                  <a
                    href={shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-900 font-mono text-sm break-all"
                    ref={inputRef}
                  >
                    {shortUrl}
                  </a>
                  <button
                    onClick={handleCopy}
                    className="ml-4 px-3 py-1 bg-blue-900 text-white rounded font-semibold text-xs shadow transition-colors duration-500 ease-in-out border border-transparent hover:bg-white hover:text-blue-900 hover:border-blue-900"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 