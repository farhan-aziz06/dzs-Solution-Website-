import React, { useState, useEffect, useRef } from "react";
import dropArrow from "/drop.svg";
import CountryClientsMap from "./ClientsMap";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-50px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const data = [
    { country: "Pakistan", clients: 5 },
    { country: "Israel", clients: 1 },
    { country: "UK", clients: 4 },
    { country: "USA", clients: 5 },
    { country: "Germany", clients: 3 }
  ];

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "c639201a-b9fb-454e-b9c8-5ffec7fc2ab7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success! Your message has been sent. We'll get back to you soon.");
        formRef.current?.reset();
      } else {
        setResult("Error! Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Error! Unable to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setResult("");
      }, 5000);
    }
  };
  

  return (
    <div className="">
      <div className="lg:w-[400px] xl:w-[100%] gap-12 rounded-lg p-4 md:p-8 border border-[#D9D9D9]">
        <div className="flex flex-col px-2 text-center md:text-start">
          <h1 className="text-2xl md:text-4xl font-recoleta font-normal capitalize mb-2 md:inline-flex md:flex-wrap gap-1 md:gap-0.5">
            Got An Idea?{" "}
            <span className="md:hidden">
              We’ve <span className="text-[#7165FF]">Got The Skills</span>.
            </span>
            <span className="hidden md:flex lg:text-n md:text-[#DF56FE]">
              We’ve Got The Skills.
            </span>
          </h1>
          <p className="xl:w-90 font-normal text-sm md:text-xl text-[#4E4E4E] mb-6">
            Fill out our contact form and we'll get in touch!
          </p>
        </div>
        <form ref={formRef} onSubmit={onSubmit} className="">
          <div>
            <label className="font-open-sans font-normal text-sm md:text-[16px]">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="first_name"
              placeholder="Enter first name"
              className="w-full px-3 py-2 my-2 border border-[#D9D9D9] rounded-lg placeholder-[#B3B3B3] placeholder:text-[12px] md:placeholder:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#7165FF]"
              required
            />
          </div>
          <div>
            <label className="font-open-sans font-normal text-sm md:text-[16px]">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="last_name"
              placeholder="Enter last name"
              className="w-full px-3 py-2 my-2 border border-[#D9D9D9] rounded-lg placeholder-[#B3B3B3] placeholder:text-[12px] md:placeholder:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#7165FF]"
              required
            />
          </div>
          <div>
            <label className="font-open-sans font-normal text-sm md:text-[16px]">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email@gmail.com"
              className="w-full px-3 py-2 my-2 border border-[#D9D9D9] rounded-lg placeholder-[#B3B3B3] placeholder:text-[12px] md:placeholder:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#7165FF]"
              required
            />
          </div>
          <div>
            <label className="font-open-sans text-sm md:text-[16px]">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+92 300 1234567"
              className="w-full px-3 py-2 my-2 border border-[#D9D9D9] rounded-lg placeholder-[#B3B3B3] placeholder:text-[12px] md:placeholder:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#7165FF]"
              required
            />
          </div>
          <div className="relative">
            <label className="font-open-sans text-sm md:text-[16px]">
              Country <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="country"
              list="countries"
              defaultValue="Pakistan"
              placeholder="Select or type country"
              className="w-full my-2 px-3 py-2 border border-[#D9D9D9] rounded-lg text-[12px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#7165FF]"
              required
            />
            <datalist id="countries">
              <option value="Pakistan" />
              <option value="United States" />
              <option value="United Kingdom" />
              <option value="Canada" />
              <option value="Australia" />
              <option value="Germany" />
              <option value="France" />
              <option value="Italy" />
              <option value="Spain" />
              <option value="Netherlands" />
              <option value="Belgium" />
              <option value="Switzerland" />
              <option value="Sweden" />
              <option value="Norway" />
              <option value="Denmark" />
              <option value="Finland" />
              <option value="Poland" />
              <option value="Austria" />
              <option value="Ireland" />
              <option value="Portugal" />
              <option value="Greece" />
              <option value="India" />
              <option value="China" />
              <option value="Japan" />
              <option value="South Korea" />
              <option value="Singapore" />
              <option value="Malaysia" />
              <option value="Thailand" />
              <option value="Indonesia" />
              <option value="Philippines" />
              <option value="United Arab Emirates" />
              <option value="Saudi Arabia" />
              <option value="Israel" />
              <option value="Turkey" />
              <option value="Egypt" />
              <option value="South Africa" />
              <option value="Brazil" />
              <option value="Mexico" />
              <option value="Argentina" />
              <option value="New Zealand" />
            </datalist>
          </div>

          <div className="relative">
            <label className="font-open-sans text-sm md:text-[16px]">
              Service <span className="text-red-500">*</span>
            </label>
            <select 
              name="service"
              className="w-full my-2 px-3 py-2 border border-[#D9D9D9] rounded-lg appearance-none pr-10 text-[12px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#7165FF]"
              required
            >
              <option value="">Select service</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="AI Solutions">AI Solutions</option>
              <option value="SaaS Development">SaaS Development</option>
              <option value="AI Automation">AI Automation</option>
            </select>
            <div className="absolute inset-y-0 right-2 top-5 flex items-center pointer-events-none">
              <img src={dropArrow} alt="dropdown arrow" loading="lazy" />
            </div>
          </div>

          <div>
            <label className="font-open-sans text-sm md:text-[16px]">
              How did you hear about us? <span className="text-red-500">*</span>
            </label>
            <textarea
              name="referral"
              placeholder="E.g., Google, LinkedIn, Friend, etc."
              rows={3}
              className="w-full px-3 py-2 my-2 border border-[#D9D9D9] rounded-lg placeholder-[#B3B3B3] placeholder:text-[12px] md:placeholder:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#7165FF] resize-none"
              required
            />
          </div>
          <div>
            <label className="font-open-sans text-sm md:text-[16px]">
              Tell us about your project <span className="text-red-500">*</span>
            </label>
            <textarea
              name="project_details"
              placeholder="Describe your project, goals, timeline, budget, etc."
              rows={4}
              className="w-full px-3 py-2 my-2 border border-[#D9D9D9] rounded-lg placeholder-[#B3B3B3] placeholder:text-[12px] md:placeholder:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#7165FF] resize-none"
              required
            />
          </div>
          {result && (
            <div
              className={`mb-4 p-3 rounded-lg text-sm md:text-base ${
                result.startsWith("Success")
                  ? "bg-green-100 text-green-800 border border-green-300"
                  : "bg-red-100 text-red-800 border border-red-300"
              }`}
            >
              {result}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`font-mulish-bold text-lg w-full py-4 my-2.5 rounded-lg leading-[32px] transition-all duration-200 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#7165FF] hover:bg-[#5f54e6] text-white"
            }`}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-2 md:hidden items-start my-6 p-5 w-full rounded-lg text-center bg-[#7165FF33]">
        <div className="flex flex-col gap-2">
          <h3 className=" text-left font-recoleta font-normal text-2xl">
            Schedule a call
          </h3>
          <p className="text-left font-normal text-sm md:text-[20px]">
            Feel free to select a time at your convenience!
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="font-poppins font-bold text-sm text-[#7165FF] flex gap-1"
          >
            Let’s Talk
          </a>
          {/* <span>{arrow}</span> */}
        </div>
      </div>
     
    </div>
    
  );
};

export default ContactSection;