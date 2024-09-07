import React from "react";
import aboutimage from "../../public/about_image.png";
const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span>US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img className="w-full md:max-w-[360px]" src={aboutimage} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>At Prescripto , we are dedicated to connecting patients with top specialists in their field. Our platform makes booking appointments simple, fast, and secure, ensuring you get the care you need without any hassle. We prioritize personalized service, working with trusted doctors who offer expert medical advice tailored to each patient. 

With a user-friendly interface and commitment to privacy, we aim to transform how patients access healthcare. Your well-being is our mission, and we’re here to support your health journey every step of the way. Experience care redefined with Prescripto."
          </p>
          <p>"We believe that healthcare should be accessible, efficient, and stress-free for everyone. By partnering with highly qualified specialists, we ensure that you receive the best possible care when you need it most. Our goal is to empower patients by providing them with seamless tools to manage their health. 

At Prescripto , your health is in trusted hands."
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
          Our vision is to revolutionize healthcare by making specialist care easily accessible to everyone. We aim to bridge the gap between patients and experts, ensuring timely, personalized medical attention. Through innovation and compassion, we strive to create a healthier future for all.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ">
          <b>Efficiency :</b>
          <p>We streamline the appointment process, connecting you with specialists quickly and without hassle. Our platform saves you time, allowing you to focus on what matters most—your health.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ">
          <b>Convenience :</b>
          <p>Book appointments anytime, anywhere with just a few clicks. Our user-friendly interface makes scheduling medical care easy and accessible at your convenience.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ">
          <b>Personalization :</b>
          <p>We match you with the right specialists tailored to your unique medical needs. Personalized care ensures you receive expert advice and treatment designed just for you.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
