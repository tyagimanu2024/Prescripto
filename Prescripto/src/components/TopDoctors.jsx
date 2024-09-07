import doc1 from "../../public/doc1.png";
import doc2 from "../../public/doc2.png";
import doc3 from "../../public/doc3.png";
import doc4 from "../../public/doc4.png";
import doc5 from "../../public/doc15.png";
import doc6 from "../../public/doc5.png";
import doc7 from "../../public/doc6.png";
import doc8 from "../../public/doc7.png";
import doc9 from "../../public/doc8.png";
import doc10 from "../../public/doc9.png";
import doc11 from "../../public/doc10.png";
import doc12 from "../../public/doc11.png";
import doc13 from "../../public/doc12.png";
import doc14 from "../../public/doc13.png";
import doc15 from "../../public/doc14.png";
import { useNavigate } from "react-router-dom";
const TopDoctors = () => {
  const navigate = useNavigate();

  const doctors = [
    {
      _id: "doc1",
      name: "Dr. Richard James",
      image: doc1,
      speciality: "General physician",
      degree: "MBBS",
      experience: "4 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 50,
      address: {
        line1: "17th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc2",
      name: "Dr. Emily Larson",
      image: doc2,
      speciality: "Gynecologist",
      degree: "MBBS",
      experience: "3 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 60,
      address: {
        line1: "27th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc3",
      name: "Dr. Sarah Patel",
      image: doc3,
      speciality: "Dermatologist",
      degree: "MBBS",
      experience: "1 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 30,
      address: {
        line1: "37th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc4",
      name: "Dr. Christopher Lee",
      image: doc4,
      speciality: "Pediatricians",
      degree: "MBBS",
      experience: "2 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 40,
      address: {
        line1: "47th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc5",
      name: "Dr. Jennifer Garcia",
      image: doc5,
      speciality: "Neurologist",
      degree: "MBBS",
      experience: "4 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 50,
      address: {
        line1: "57th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc6",
      name: "Dr. Andrew Williams",
      image: doc6,
      speciality: "Neurologist",
      degree: "MBBS",
      experience: "4 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 50,
      address: {
        line1: "57th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc7",
      name: "Dr. Christopher Davis",
      image: doc7,
      speciality: "General physician",
      degree: "MBBS",
      experience: "4 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 50,
      address: {
        line1: "17th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc8",
      name: "Dr. Timothy White",
      image: doc8,
      speciality: "Gynecologist",
      degree: "MBBS",
      experience: "3 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 60,
      address: {
        line1: "27th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc9",
      name: "Dr. Ava Mitchell",
      image: doc9,
      speciality: "Dermatologist",
      degree: "MBBS",
      experience: "1 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 30,
      address: {
        line1: "37th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc10",
      name: "Dr. Jeffrey King",
      image: doc10,
      speciality: "Pediatricians",
      degree: "MBBS",
      experience: "2 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 40,
      address: {
        line1: "47th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc11",
      name: "Dr. Zoe Kelly",
      image: doc11,
      speciality: "Neurologist",
      degree: "MBBS",
      experience: "4 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 50,
      address: {
        line1: "57th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc12",
      name: "Dr. Patrick Harris",
      image: doc12,
      speciality: "Neurologist",
      degree: "MBBS",
      experience: "4 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 50,
      address: {
        line1: "57th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc13",
      name: "Dr. Chloe Evans",
      image: doc13,
      speciality: "General physician",
      degree: "MBBS",
      experience: "4 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 50,
      address: {
        line1: "17th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc14",
      name: "Dr. Ryan Martinez",
      image: doc14,
      speciality: "Gynecologist",
      degree: "MBBS",
      experience: "3 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 60,
      address: {
        line1: "27th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc15",
      name: "Dr. Amelia Hill",
      image: doc15,
      speciality: "Dermatologist",
      degree: "MBBS",
      experience: "1 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 30,
      address: {
        line1: "37th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
  ];

  return (
    <div className="flex flex-col items-center gap-4 y-16 text-gray-900 md:mx-10 ">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply Browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => navigate(`/appointments/${item._id}`)}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={index}
          >
            <img className="bg-blue-50" src={item.image} alt="" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-fray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10">
        More
      </button>
    </div>
  );
};

export default TopDoctors;
