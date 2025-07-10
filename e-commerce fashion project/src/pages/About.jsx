// src/pages/About.jsx
import React from 'react';

const About = () => {
  const team = [
    { role: 'Managing Director', name: 'Mehak Tarik' },
    { role: 'Web Developer', name: 'M. Waleed' },
    { role: 'Business Partner', name: 'Danial Manzoor' },
    { role: 'Backend Developer', name: 'M. Mazz' },
    { role: 'Logo & UI Design', name: 'M. Jamal' },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Circular Profile Row */}
        <div className="flex flex-wrap justify-center md:justify-between gap-6 mb-12">
  {team.map((member, index) => (
    <div key={index} className="flex flex-col items-center">
      <div className="w-32 h-32 rounded-full border-8 border-[#8B4513] bg-pink-100 flex items-center justify-center overflow-hidden">
        <img
          src="/images/logo1.png"
          alt={member.name}
          className="w-16 h-16 object-cover rounded-full"
        />
      </div>
      <p className="mt-4 text-sm font-semibold text-gray-800">{member.role}</p>
      <button className="mt-2 text-sm bg-pink-200 text-gray-900 px-4 py-1.5 rounded hover:bg-pink-300 transition">
        {member.name}
      </button>
    </div>
  ))}
</div>


        {/* Message From Managing Director */}
        <h1 className="text-2xl font-bold text-center mb-10">Message From Managing Director</h1>

        <div className="space-y-4 text-gray-800 text-sm leading-relaxed">
          <p><strong>Dear valued fashion enthusiasts,</strong></p>
          <p>
            Exciting news awaits you as we are thrilled to introduce our brand-new clothing venture — <strong>Elisha!</strong> We are on the verge of launching an online fashion emporium that will redefine your style, elegance, and individuality.
          </p>
          <p>
            At Elisha, we believe that fashion is more than just clothing; it's a form of self-expression and an art of embracing one's uniqueness. Our carefully curated collection will cater to all your fashion desires, ensuring you step into the spotlight wherever you go.
          </p>
          <p>
            Our team has worked tirelessly to bring you a diverse range of high-quality apparel and accessories that embody the latest trends and timeless classics. From chic casual wear to sophisticated formal ensembles, we have something special in store for every occasion and every taste.
          </p>

          <h2 className="text-lg font-semibold mt-8">Meet the Mastermind</h2>
          <p>
            Allow me to introduce myself, <strong>Mehak Tariq</strong>, the Managing Director of Elisha. With an unwavering passion for fashion and a vision to bring forth a brand that resonates with the modern generation, I am delighted to embark on this sartorial journey with you.
          </p>

          <h2 className="text-lg font-semibold mt-8">Stay Connected</h2>
          <p>
            As the launch of our online store approaches rapidly, we encourage you to stay connected with us. Bookmark our website domain — <strong>theelisha.com</strong> — and be the first to experience our exclusive collection. Additionally, you can reach out to us through the provided contact details for any inquiries or to join our mailing list.
          </p>

          <h2 className="text-lg font-semibold mt-8">Visit Our Office</h2>
          <p>
            For our patrons in Lahore, Pakistan, we invite you to our office located at <strong>Landmark Plaza, Jail Road</strong>. Come and get a sneak peek into the world of Elisha while we prepare to unveil our digital wonderland.
          </p>

          <h2 className="text-lg font-semibold mt-8">Get Ready for Elisha</h2>
          <p>
            We are counting down the days until our grand opening, and we cannot wait to share the Elisha experience with all of you. Your unwavering support will be our guiding light as we embark on this exciting journey together.
          </p>
          <p>
            Fashion forward, trendsetters — the future belongs to Elisha! Be a part of this captivating venture, and let's redefine fashion in Pakistan and beyond.
          </p>

          <p className="mt-6 font-semibold">With fashionable regards,</p>
          <p><strong>Mehak Tariq</strong></p>
          <p>Managing Director, Elisha</p>
          <p>Contact: +92 306 4313804</p>
          <p>Email: info@theelisha.com</p>
        </div>
      </div>
    </div>
  );
};

export default About;
