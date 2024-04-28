import React, { useState } from "react";

const Testimonials = () => {
  const [selectedFAQ, setSelectedFAQ] = useState(null);

  const faqs = [
    {
      question: "How many emails are included in our service?",
      answer: "Answer: Our service includes access to millions of domains and 1 billion emails. We search millions of websites daily to provide fresh professional contact information.",
    },
    {
      question: "what is this service for : Introduction ?",
      answer:
        "findemail.io offers a convenient email finding service as part of its comprehensive email outreach platform.Identify and engage with key individuals crucial to your business success.Targeted Email leads for: \n" +
        "- Lists for specific VIP and Common industries or niches\n" +
        "- Trading and Exchange And Cryptocurrency Users And Companies\n" +
        "- Customized email marketing campaigns for small businesses\n" +
        "- real estate agents and brokers\n" +
        "- healthcare professionals and medical practices\n" +
        "- e-commerce businesses looking to grow their customer base\n" +
        "- lists for technology companies and startups\n" +
        "- marketing services for restaurants and food service businesses\n" +
        "- financial advisors and investment firms\n" +
        "- campaigns for fitness and wellness professionals\n" +
        "- event planners and entertainment companies\n" +
        "- Targeted email leads for travel agencies and tourism businesses\n" +
        "- marketing services for non-profit organizations and charities\n" +
        "- educational institutions and online learning platforms\n" +
        "- campaigns for beauty salons and spas\n" +
        "- legal professionals and law firms\n" +
        "- small business owners looking to expand their reach\n" +
        "- automotive dealerships and repair shops\n" +
        "- pet care businesses and animal shelters\n" +
        "- home improvement contractors and renovation companies\n" +
        "- marketing agencies looking to connect with potential clients\n" +
        "- Etc.",
    },
    {
      question: "What is this service for?",
      answer:
        "findemail.io offers a comprehensive email outreach platform, including a convenient email finding service. You can identify and engage with key individuals crucial to your business success across various industries such as trading, cryptocurrency, healthcare, e-commerce, technology, and more.",
    },
    {
      question: "Can we use API to access this service?",
      answer:
        "Yes, we provide an API for developers to access our database.",
    },
    {
      question: "How many domains can I search for free?",
      answer:
        "You can search unlimited domains for free. However, each download of company information deducts 1 credit.",
    },
    {
      question: "How many emails can I search for free?",
      answer:
        "You can search unlimited emails for free. However, downloading email information deducts 1 credit.",
    },
    {
      question: "Can I receive updates for my searches?",
      answer:
        "Yes, you can create a project section, and we will notify you by email if new information becomes available.",
    },
    {
      question: "What is the best package for small business search?",
      answer:
        "You can search for your company, and if available, you can pay a minimum amount (which is $10) to download the entire list as a text file, deducting 1 credit.",
    },
  ];

  const handleClick = (index) => {
    setSelectedFAQ(index === selectedFAQ ? null : index);
  };

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => handleClick(index)}
            >
              <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-transform ${selectedFAQ === index ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {selectedFAQ === index && (
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
