'use client'

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdArrowRoundBack } from "react-icons/io";

const User = () => {
  const roles = ["Employee", "Manager", "Accountant"];
  const [sliderValue, setSliderValue] = useState(0);
  return (
    <div className="w-full">
      <div className="user-nav flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <Link href="/">
            <IoMdArrowRoundBack />
          </Link>
          <Image
            src="/assets/images/profile.webp"
            className="rounded-full"
            width={38}
            height={38}
          />
          <h1>Russel Sims</h1>
        </div>
        <div className="flex items-center gap-2">
          <p>Added on 21.04.2024</p>
          <button className="outline_btn">Delete</button>
        </div>
      </div>

      <div className="flex justify-between w-full gap-10 mt-5 bg-white p-4 rounded shadow-md">
        <div className="bg-white p-4 rounded shadow-md flex flex-col items-center w-full">
          <h2>Profile Image</h2>
          <Image
            src="/assets/images/profile.webp"
            width={200}
            height={200}
          ></Image>
          <Link href='/user-profile/new' className="block w-full text-blue-500">
            Change Profile Image
          </Link>
          <div className=" mb-4">
            <h2 className="text-lg font-semibold mb-2">Employee Details</h2>
            <div className="mb-2">
              <label className="block text-gray-600">First Name</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-2">
              <label className="block text-gray-600">Last Name</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-2">
              <label className="block text-gray-600">Email Address</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-2">
              <label className="block text-gray-600">Phone Number</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-2">
              <label className="block text-gray-600">Position</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
          </div>
        </div>

        <div className="w-full">
          <h2>Role</h2>
          <select className="w-full py-2 outline-none rounded-md shadow-md">
            {roles.map((role) => (
              <option>{role}</option>
            ))}
          </select>
          <h2 className="mt-5">Team</h2>
          <label className="block text-gray-600 mt-2">hr</label>
          <select className="w-full py-2 outline-none rounded-md shadow-md">
            {roles.map((role) => (
              <option>{role}</option>
            ))}
          </select>
          <label className="block text-gray-600 mt-2">lead</label>
          <select className="w-full py-2 outline-none rounded-md shadow-md">
            {roles.map((role) => (
              <option>{role}</option>
            ))}
          </select>
          <label className="block text-gray-600 mt-2">Manager</label>
          <select className="w-full py-2 outline-none rounded-md shadow-md">
            {roles.map((role) => (
              <option>{role}</option>
            ))}
          </select>
        </div>
        <div className="bg-white p-4 rounded shadow-md w-full">
          <h2 className="text-lg font-semibold mb-2">Onboarding</h2>
          <div className="mb-2">
            <label className="block text-gray-600">Starts on</label>
            <input
              type="date"
              className="w-full p-2 border rounded"
              value="2022-05-21"
            />
          </div>
          <div className="mb-2 flex items-center gap-3">
            <input type="checkbox" checked className="w-4 h-4" />
            <span className="mr-2">Onboarding required</span>      
          </div>
          <div className="mt-3">
            <p>current status</p>
            <div className="flex items-center gap-2">
                <p className="bg-lime-400 rounded-full py-1 px-3">Onboarding</p>
                <input type="range" min="1" max="100" value={sliderValue} onChange={(e)=>setSliderValue(e.target.value)} class="slider" id="myRange"></input>
                <p>{sliderValue}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
