import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import verifiedicon from "../../public/verified_icon.svg";
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
import infoicon from "../../public/info_icon.svg";

const Appointment = () => {
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

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const { docId } = useParams();
  const [docInfo, setDocInfo] = useState(null);
  const fetchDocInfo = () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  const getAvailableslot = async () => {
    setDocSlots([]);
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }
      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [docId]);
  useEffect(() => {
    getAvailableslot();
  }, [docInfo]);
  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return (
    docInfo && (
      <div>
        <div className="flex flex-col sm:flex-row gap-4">
          <img
            className="bg-primary w-full sm:max-w-72 rounded-lg"
            src={docInfo.image}
            alt=""
          />
        </div>
        <div className="flex-1 border border-gray-400 rounded-lg p-8 oy-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {docInfo.name}
            <img className="w-5" src={verifiedicon} alt="" />
          </p>
          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>
              {docInfo.degree} - {docInfo.speciality}{" "}
            </p>
            <button className="py-0.5 px-2 border text-xs rounded-full">
              {docInfo.experience}
            </button>

            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={infoicon} alt="" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee :{" "}
              <span className="text-gray-600">${docInfo.fees}</span>
            </p>
          </div>
        </div>

        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking Slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-auto mt-4">
            {docSlots.length &&
              docSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-primary text-white"
                      : "border border-gray-200"
                  } `}
                  key={index}
                >
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlots.length &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime
                      ? "bg-primary text-white"
                      : "text-gray-400 border border-gray-400"
                  }`}
                  key={index}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full mt-6">
            Book an appointment
          </button>
        </div>
      </div>
    )
  );
};

export default Appointment;
