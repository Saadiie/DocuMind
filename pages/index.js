


"use client"
import { useState } from "react"
import Link from 'next/link';
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFAQ, setOpenFAQ] = useState(null)

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const stats = [
    { number: "10k+", label: "Documents Created" },
    { number: "95%", label: "User Satisfaction" },
    { number: "24/7", label: "AI Assistance" },
  ]

  const faqs = [
    {
      question: "What is DocuMind?",
      answer:
        "DocuMind is an AI-powered document creation platform that helps you generate high-quality documents quickly and efficiently.",
    },
    {
      question: "How does DocuMind work?",
      answer:
        "DocuMind uses advanced AI algorithms to understand your requirements and generate tailored documents based on your input and preferences.",
    },
    {
      question: "Is my data secure with DocuMind?",
      answer:
        "Yes, we take data security very seriously. All your documents and personal information are encrypted and stored securely.",
    },
  ]

  const pricingPlans = [
    {
      name: "Basic",
      price: "$9.99",
      features: ["100 AI-generated documents/month", "Basic templates", "Email support"],
    },
    {
      name: "Pro",
      price: "$19.99",
      features: ["Unlimited AI-generated documents", "Advanced templates", "Priority support", "Custom branding"],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["All Pro features", "Dedicated account manager", "API access", "Custom AI model training"],
    },
  ]

  const reviews = [
    {
      name: "John Doe",
      role: "Marketing Manager",
      content: "DocuMind has revolutionized our content creation process. It's a game-changer!",
    },
    {
      name: "Jane Smith",
      role: "Freelance Writer",
      content: "I can't imagine working without DocuMind now. It's boosted my productivity tenfold.",
    },
    {
      name: "Alex Johnson",
      role: "Small Business Owner",
      content:
        "The quality of documents DocuMind produces is outstanding. It's like having a professional writer on staff.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#ECFBF4] text-black">
      <header className="bg-[#0F6466] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">DocuMind</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#about" className="hover:text-[#CDE5DF]">
              About
            </a>
            <a href="#features" className="hover:text-[#CDE5DF]">
              Features
            </a>
            <a href="#pricing" className="hover:text-[#CDE5DF]">
              Pricing
            </a>
            <a href="#contact" className="hover:text-[#CDE5DF]">
              Contact
            </a>
          </nav>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {mobileMenuOpen && (
          <nav className="mt-4 flex flex-col space-y-2">
            <a href="#about" className="hover:text-[#CDE5DF]">
              About
            </a>
            <a href="#features" className="hover:text-[#CDE5DF]">
              Features
            </a>
            <a href="#pricing" className="hover:text-[#CDE5DF]">
              Pricing
            </a>
            <a href="#contact" className="hover:text-[#CDE5DF]">
              Contact
            </a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-[#D9EDE8] py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Create Amazing Documents with AI</h2>
          <p className="text-xl mb-8">DocuMind: Your AI-powered document creation assistant</p>
          <Link href="/signin" className="bg-[#0F6466] hover:bg-[#2C3532] text-white h-11 rounded-md px-8 inline-flex items-center justify-center">
          Get Started
        </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-3xl font-bold text-[#0F6466]">{stat.number}</h3>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#CDE5DF]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <button
                  className="flex justify-between items-center w-full p-4 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  {openFAQ === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                {openFAQ === index && (
                  <div className="p-4 bg-[#ECFBF4]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="bg-[#ECFBF4] rounded-lg shadow-md p-6 flex flex-col">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-3xl font-bold text-[#0F6466] mb-6">
                  {plan.price}
                  <span className="text-sm font-normal">/month</span>
                </p>
                <ul className="mb-6 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="mb-2 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-[#0F6466]" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="bg-[#0F6466] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#0D5254] transition duration-300">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-[#D9EDE8]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">About DocuMind</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-4">
              DocuMind is a cutting-edge AI-powered document creation platform designed to revolutionize the way you
              work with documents. Our mission is to empower individuals and businesses to create high-quality,
              professional documents in a fraction of the time it traditionally takes.
            </p>
            <p>
              With advanced machine learning algorithms and natural language processing, DocuMind understands your needs
              and generates tailored documents that meet your specific requirements. Whether you're a student,
              professional, or business owner, DocuMind is here to streamline your document creation process and boost
              your productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-[#ECFBF4] rounded-lg shadow-md p-6">
                <p className="mb-4">{review.content}</p>
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F6466] text-white py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">DocuMind</h3>
              <p>AI-powered document creation</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-[#CDE5DF]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#CDE5DF]">
                    About
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-[#CDE5DF]">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-[#CDE5DF]">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-[#CDE5DF]">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#CDE5DF]">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <p>Email: info@documind.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 DocuMind. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}