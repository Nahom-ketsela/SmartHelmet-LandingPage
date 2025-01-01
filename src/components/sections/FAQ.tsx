import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What is a smart helmet and how does it work?",
      answer: "A smart helmet is an advanced protective gear equipped with sensors and communication systems. It monitors vital signs, environmental conditions, and potential hazards in real-time, transmitting data to a central monitoring system for immediate response to safety concerns."
    },
    {
      question: "How does the helmet monitor health and environmental conditions?",
      answer: "The helmet uses integrated sensors to monitor vital signs like heart rate and body temperature, while environmental sensors detect toxic gases, ambient temperature, and other potential hazards. All data is processed and transmitted wirelessly to supervisors."
    },
    {
      question: "Can this helmet be used outside of construction sites?",
      answer: "Yes, while primarily designed for construction sites, the smart helmet can be adapted for various high-risk environments such as mining operations, industrial facilities, and other workplaces requiring enhanced safety monitoring."
    },
    {
      question: "What are the limitations of the prototype?",
      answer: "Current limitations include battery life constraints, dependency on wireless connectivity, and the need for regular calibration of sensors. We're continuously working on improvements to address these challenges."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Common questions about our smart helmet technology
          </p>
        </div>

        <div className="mt-20">
          <dl className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <dt className="text-lg font-medium text-gray-900 mb-4">
                  {faq.question}
                </dt>
                <dd className="text-base text-gray-500">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default FAQ;