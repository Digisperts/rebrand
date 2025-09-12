"use client";
import { useEffect, useState } from "react";
import NavBar from "../nav";
import Footer from "../Footer";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function BookACallPage() {
  const [countryCode, setCountryCode] = useState<string>("us"); // default fallback
  const [openService, setOpenService] = useState<number | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Form State
  const [title, setTitle] = useState("Mr");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");
  const [service, setService] = useState("Software Development");
  const [projectDescription, setProjectDescription] = useState("");
  const [requiresNDA, setRequiresNDA] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const services = [
    "Software Development",
    "Web and App Development",
    "Marketing and Advertising Services",
    "Branding Services",
    "Automation Services",
    "Enterprise Solution",
    "Others",
  ];

  useEffect(() => {
    fetch("https://ipapi.co/json")
      .then((res) => res.json())
      .then((data) => {
        if (data?.country_code) setCountryCode(data.country_code.toLowerCase());
      })
      .catch((err) => console.error("Failed to get country code:", err));
  }, []);

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    const submissionData = {
      title,
      firstName,
      lastName,
      email,
      phone: phone.startsWith("+") ? phone : `+${phone}`,
      company,
      companyUrl: companyUrl.startsWith("http")
        ? companyUrl
        : `https://${companyUrl}`,
      service,
      projectDescription,
      requiresNDA,
    };

    try {
      const res = await fetch(
        "https://digisperts-contact-form.onrender.com/submissions",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submissionData),
        }
      );

      if (!res.ok) throw new Error("Failed to submit form");

      const data = await res.json();
      setSuccess("Form submitted successfully! We'll get back to you soon.");

      // Reset form
      setTitle("Mr");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setCompanyUrl("");
      setService("Software Development");
      setProjectDescription("");
      setRequiresNDA(false);
    } catch (err) {
      console.error(err);
      setError("There was an error submitting the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="fixed md:bg-white top-0 left-0 w-full z-50">
        <NavBar />
      </div>

      {/* Mobile image */}
      <div className="flex md:hidden w-full relative min-h-[250px] px-0">
        <Image
          src="/images/book2.png"
          alt="Book a Call"
          className="object-cover w-full h-full rounded-none"
          width={800}
          height={800}
          priority
        />
      </div>

      {/* Booking Form and Image */}
      <section
        className="relative w-full flex flex-col items-center bg-white pb-0 mb-0 -mb-32 z-30 flex flex-row items-stretch w-full mb-8 md:mb-0"
        style={{ minHeight: "calc(100vh - 64px - 64px)" }}
      >
        <div className="flex-1 flex flex-col justify-center items-center px-4 md:px-12 py-10">
          <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-lg md:text-3xl font-extrabold mb-6 -ml-7 mt-5 leading-tight">
              <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-extrabold bg-gradient-to-b from-[#001133] to-[#003399] bg-clip-text text-transparent">
                Book a Meet With Us
                <br />
              </span>
            </h2>
            <form className="font-semibold space-y-5" onSubmit={handleSubmit}>
              <h4 className="text-gray-500 ">
                <span className="text-red-500">* </span> indicates required
                input
              </h4>

              {/* Name */}
              <div>
                <label className="block font-bold text-sm text-gray-900 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <select
                    className="border rounded px-2 py-2 w-1/4 text-gray-700 bg-white"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  >
                    <option>Mr</option>
                    <option>Ms</option>
                    <option>Mrs</option>
                    <option>Dr</option>
                  </select>
                  <input
                    type="text"
                    placeholder="First name"
                    className="border rounded px-2 py-2 w-1/2 text-gray-700"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="border text-sm rounded px-2 py-2 w-1/2 text-gray-700"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Companyemail23@gmail.com"
                  className="border text-sm rounded px-2 py-2 w-full text-gray-700"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-bold text-sm text-gray-900 mb-1">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <PhoneInput
                  country={countryCode}
                  value={phone}
                  onChange={(value) => setPhone(value)}
                  enableSearch
                  autoFormat
                  inputProps={{ name: "phone", required: true }}
                  containerClass="!w-full !text-black"
                  inputClass="!w-full !text-sm !border !rounded !pl-16 !px-3 !py-2 !text-gray-800"
                  buttonClass="!border !rounded-l"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block font-bold text-sm text-gray-900 mb-1">
                  Company <span className="text-red-500">*</span>{" "}
                </label>
                <input
                  type="text"
                  placeholder="Company name"
                  className="border text-sm rounded px-2 py-2 w-full text-gray-700"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              {/* Company Url */}
              <div>
                <label className="block font-bold text-sm text-gray-900 mb-1">
                  Company Url
                </label>
                <input
                  type="text"
                  placeholder="E.g Digisperts.com"
                  className="border rounded px-2 py-2 w-full text-sm text-gray-700"
                  value={companyUrl}
                  onChange={(e) => setCompanyUrl(e.target.value)}
                />
              </div>

              {/* Service */}
              <div className="relative w-full">
                <label className="block font-bold text-gray-900 mb-1">
                  Choose a Service <span className="text-red-500">*</span>
                </label>

                <div
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="border text-sm border-gray-500 rounded px-3 py-2 w-full bg-white cursor-pointer flex justify-between items-center hover:border-gray-600 focus-within:border-gray-600 focus-within:ring-1 focus-within:ring-gray-500 transition"
                >
                  <span className="text-black">{service}</span>
                  <ChevronDownIcon
                    className={`h-5 w-5 text-black text-sm transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {dropdownOpen && (
                  <div className="absolute mt-1 text-black w-full border rounded-lg bg-white shadow-lg z-50 max-h-80 overflow-auto">
                    {services.map((s, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          setService(s);
                          setDropdownOpen(false);
                        }}
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Project Description */}
              <div>
                <label className="inline-flex items-center text-sm font-bold text-gray-900 mb-1">
                  <span>What are you looking to build with Digisperts?</span>
                  <span className="text-red-500 ml-1 text-sm">*</span>
                </label>
                <textarea
                  placeholder="Share your vision with us here..."
                  className="border text-sm rounded px-2 py-2 w-full text-gray-700"
                  rows={4}
                  required
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                />
              </div>

              {/* NDA Checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="nda"
                  className="border-gray-300 rounded"
                  checked={requiresNDA}
                  onChange={(e) => setRequiresNDA(e.target.checked)}
                />
                <label htmlFor="nda" className="text-gray-900 text-sm">
                  This Project requires an NDA.
                </label>
              </div>

              {/* Success / Error */}
              {success && <p className="text-green-600 text-sm">{success}</p>}
              {error && <p className="text-red-600 text-sm">{error}</p>}

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="border bg-[#003399] border-gray-800 px-4 py-2 text-white font-bold text-sm hover:bg-white hover:text-[#233876] transition-colors duration-200 inline-block shadow"
                  style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:flex flex-1 relative items-center justify-center min-h-full px-0">
          <Image
            src="/images/book2.png"
            alt="Book a Call"
            className="object-cover rounded-none"
            width={800}
            height={800}
            style={{ zIndex: 0, minWidth: 0, width: "100%", height: "100%" }}
            priority
          />
        </div>
      </section>

      {/* Pre-footer section */}
      <section className="relative w-full flex flex-col items-center bg-white pb-0 mb-10 md:mb-0 z-30">
        <div
          className="w-full flex items-center justify-center bg-white border-t border-gray-200 py-3 px-4 text-base font-semibold text-black mb-4 md:-mb-2"
          style={{ minHeight: 40 }}
        >
          <span className="flex flex-col md:flex-row items-start gap-2 w-full justify-center text-center md:text-left">
            <span className="flex items-center text-[12px] lg:text-base justify-center md:justify-start">
              <span className="text-[#003399] text-xl mr-2">●</span>
              You will be talking to our Product and Project manager.
            </span>
            <span className="flex items-center text-[12px] lg:text-base justify-center md:justify-start">
              <span className="text-[#003399] text-xl mr-2">●</span>
              We respond within 24 hours.
            </span>
            <span className="flex items-center text-[12px] lg:text-base justify-center md:justify-start">
              <span className="text-[#003399] text-xl mr-2">●</span>
              We will sign an NDA if required.
            </span>
          </span>
        </div>
      </section>

      <Footer />
    </div>
  );
}
