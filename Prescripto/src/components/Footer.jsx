import logo from "../../public/logo.svg";
const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="mb-5 w-40" src={logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
          Connect with leading specialists for expert medical care, tailored to your needs. Book appointments quickly and securely, ensuring hassle-free scheduling.  
          Your health is our priority—experience seamless, reliable service. Start your journey to better care with just a few clicks.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>developer@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
        © 2024 Prescripto . All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
