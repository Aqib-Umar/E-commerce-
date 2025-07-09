// src/pages/About.jsx
import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: 'Mehak Tarik',
      position: 'Managing Director',
      bio: 'Dear valued fashion enthusiasts, Exciting news awaits you as we are thrilled to introduce our brand-new clothing venture - Elisha! We are on the verge of launching an online fashion emporium that will redefine your style, elegance, and individuality.',
      contact: '+92 306 4313804',
      email: 'info@theelisha.com'
    },
    {
      name: 'Danial Manzor',
      position: 'Business partner',
      bio: 'With extensive experience in business development and fashion industry partnerships, Danial brings strategic vision to Elisha.'
    },
    {
      name: 'M. Waleed',
      position: 'Web Developer',
      bio: 'Our tech expert who built and maintains our cutting-edge e-commerce platform.'
    },
    {
      name: 'M. Mazz',
      position: 'Backend Developer',
      bio: 'Ensuring our systems run smoothly and securely behind the scenes.'
    },
    {
      name: 'M. Jamal',
      position: 'Logo & UI Design',
      bio: 'The creative mind behind Elisha\'s visual identity and user experience.'
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">About Elisha</h1>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-700 mb-6">
            At Elisha, we believe that fashion is more than just clothing; it's a form of self-expression and 
            an art of embracing one's uniqueness. Our carefully curated collection will cater to all your fashion 
            desires, ensuring you step into the spotlight wherever you go.
          </p>
          <p className="text-lg text-gray-700">
            Our team has worked tirelessly to bring you a diverse range of high-quality apparel and accessories 
            that embody the latest trends and timeless classics. From chic casual wear to sophisticated formal 
            ensembles, we have something special in store for every occasion and every taste.
          </p>
        </div>
        
        <h2 className="text-2xl font-bold text-center mb-8">Meet Our Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.position}</p>
              <p className="text-gray-700 mb-4">{member.bio}</p>
              {member.contact && (
                <div className="mt-4">
                  <p className="font-medium">Contact: {member.contact}</p>
                  <p className="font-medium">Email: {member.email}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-100 p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Visit Our Office</h3>
          <p className="mb-4">
            For our patrons in Lahore, Pakistan, we invite you to our office located at Landmark Plaza, Jail road. 
            Come and get a sneak peek into the world of Elisha while we prepare to unveil our digital wonderland.
          </p>
          <p className="font-medium">
            Stay Connected: Bookmark our website domain - theelisha.com - and be the first to experience our exclusive collection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;