import React from 'react'
import { BsPhone } from 'react-icons/bs'
import { FaVoicemail } from 'react-icons/fa'
import { LuMail } from 'react-icons/lu'

const Contact = () => {
  return (
    <div id='contact' className="bg-white w-11/12 mt-32 mx-auto flex flex-col items-center rounded-2xl p-6 mb-8">
      <div className="flex flex-col items-center gap-2">
        <div className="p-2 border border-black/20 w-max rounded-xl">
          <FaVoicemail className="w-6 h-auto" />
        </div>
        <h5 className="text-2xl font-semibold">Contact us</h5>
        <p className="text-black/50">Let us know</p>
      </div>
      <div className="mt-5">
        <a href="mailto:heritu2000@gmail.com">
          <div className="flex gap-3 items-center cursor-pointer hover:bg-black/10 duration-300 transition rounded-2xl p-3">
            <div className="bg-black p-1.5 text-white rounded-md">
              <LuMail className="w-6 h-auto" />
            </div>
            <span>heritu2000@gmail.com</span>
          </div>
        </a>
        <a href="mailto:heritu2000@gmail.com">
          <div className="flex gap-3 items-center cursor-pointer hover:bg-black/10 duration-300 transition rounded-2xl p-3">
            <div className="bg-black p-1.5 py-2 text-white rounded-md">
              <BsPhone className="w-6 h-auto" />
            </div>
            <span>+48 663889793</span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Contact