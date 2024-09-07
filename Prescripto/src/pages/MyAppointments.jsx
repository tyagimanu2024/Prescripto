import React from 'react'
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

const MyAppointments = () => {


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
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Appointments</p>
      <div>
{
  doctors.slice(0,2).map((item,index)=>(
    <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
<div>
  <img className='w-32 bg-indigo-50' src={item.image} alt="" />
</div>
<div className='flex-1 text-sm text-zinc-600'>
  <p className='text-neutral-800 font-semibold'>{item.name}</p>
  <p>{item.speciality}</p>
  <p className='text-zinc-700 font-medium mt-1'>Adress:</p>
  <p className='text-xs'>{item.address.line1}</p>
  <p className='text-xs'>{item.address.line2}</p>
  <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> 25,July | 8:30PM</p>
  
</div>
<div></div>
<div className='flex flex-col gap-2 justify-end'>
  <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>
  <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel Appointments</button>
</div>
    </div>
  ))
}
      </div>
    </div>
  )
}

export default MyAppointments