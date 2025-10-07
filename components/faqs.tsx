import { Section, Heading } from './ui'

const faqs = [
  {
    question: "What is the difference between the Free and Paid versions?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam."
  },
  {
    question: "Do you have student or non-profit discounts?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam."
  },
  {
    question: "How is the price determined?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam."
  },
  {
    question: "Do I need coding knowledge to use this product?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam."
  },
  {
    question: "Is there a way to become an Affiliate reseller?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam."
  },
  {
    question: "What forms of payment do you accept?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam."
  }
]

export default function Faqs() {
  return (
    <Section padding="lg" className="border-b border-gray-100">
      {/* Section header */}
      <div className="pb-12 md:pb-20">
        <Heading level={2} variant="section">
          Questions and answers
        </Heading>
      </div>
      
      {/* Columns */}
      <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
        {/* Column 1 */}
        <div className="w-full md:w-1/2 space-y-8">
          {faqs.slice(0, 3).map((faq, index) => (
            <div key={index} className="space-y-2">
              <Heading level={4} variant="section" className="text-xl font-bold">
                {faq.question}
              </Heading>
              <p className="text-gray-500">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        {/* Column 2 */}
        <div className="w-full md:w-1/2 space-y-8">
          {faqs.slice(3).map((faq, index) => (
            <div key={index} className="space-y-2">
              <Heading level={4} variant="section" className="text-xl font-bold">
                {faq.question}
              </Heading>
              <p className="text-gray-500">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}