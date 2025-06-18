import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div id="home" className="h-screen justify-center flex items-center background pt-8">
        <div className="w-11/12 max-w-4xl text-center">
          <div className="flex flex-col items-center">
            <div className="bg-white/14 backdrop-blur-xs p-2 px-3 rounded-full w-max text-white font-bold">
              <h3 className="max-md:text-sm max-sm:text-xs">Student / Worker</h3>
            </div>
            <h2 className="font-bold text-white text-7xl max-md:text-5xl max-sm:text-4xl">Find your perfect accomodation</h2>
            <p className="text-white max-w-xl max-md:text-sm max-sm:text-xs">
              Helping Rwandan students and workers
              in Poland find safe, affordable, and
              comfortable housing.
            </p>
            <button className="bg-white hover:rounded-xl text-green font-bold px-7 max-md:px-6 max-sm:px-5 max-md:text-sm max-sm:text-xs cursor-pointer py-4 max-md:py-3 rounded-full max-md:rounded-2xl max-sm:rounded-xl mt-10 max-sm:mt-4">Get started</button>
          </div>
        </div>
      </div>
      <div id="about" className="h-max bg-bg rounded-t-[50px] -mt-12 flex flex-col items-center pt-20 pb-10">
        <div className="max-w-xl text-center">
          <h2 className="text-white text-5xl font-bold">What is <br /> HavenHomes?</h2>
          <div className="mt-3">
            <p className="text-white">
              We are a housing support service
              that connects Rwandan students and
              workers in Poland with trusted landlords.
            </p>
            <p className="text-white/50">
              We act as a bridge to help you find safe,
              affordable, and reliable accommodation
              without the stress.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 w-11/12 max-w-6xl gap-5 mt-6">
          <div className="hover:-translate-y-2 cursor-pointer duration-300 transition">
            <div className="bg-white p-6 rounded-3xl">
              <div className="bg-red/20 rounded-xl">
                <img src="/call.svg" alt="Apartment illustration" width={300} height={200} />
              </div>
            </div>
            <div className="px-5 pt-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="bg-white p-1 px-2 rounded-full outline-2 outline-red text-bg font-bold"><span>01</span></div>
                <h4 className="font-bold text-white">Tell Us What You Need</h4>
              </div>
              <p className="text-white">Let us know your location, budget, and housing preferences — we’ll guide you from there.</p>
            </div>
          </div>
          <div className="hover:-translate-y-2 cursor-pointer duration-300 transition">
            <div className="bg-white p-6 rounded-3xl">
              <div className="bg-blue-300/20 rounded-xl">
                <img src="/connect.svg" alt="Apartment illustration" width={300} height={200} />
              </div>
            </div>
            <div className="px-5 pt-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="bg-white p-1 px-2 rounded-full outline-2 outline-violet-500 text-bg font-bold"><span>02</span></div>
                <h4 className="font-bold text-white">We Connect You to Landlords</h4>
              </div>
              <p className="text-white">We work with trusted property owners across Poland to find options that fit your needs.</p>
            </div>
          </div>
          <div className="hover:-translate-y-2 cursor-pointer duration-300 transition">
            <div className="bg-white p-6 rounded-3xl">
              <div className="bg-green/20 rounded-xl">
                <img src="/apt.svg" alt="Apartment illustration" width={300} height={200} />
              </div>
            </div>
            <div className="px-5 pt-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="bg-white p-1 px-2 rounded-full outline-2 outline-blue-400 text-bg font-bold"><span>03</span></div>
                <h4 className="font-bold text-white">Move In with Confidence</h4>
              </div>
              <p className="text-white">We help you finalize everything so you can settle in quickly and feel at home.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
