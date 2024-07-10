import Link from "next/link"
import { BsBoxArrowLeft } from "react-icons/bs"

export default function About() {
    return (
      <>
        <div className="min-h-screen z-50 w-full">
          <div className="contact-bg flex flex-col gap-3 justify-center items-center w-full h-[75vh]">
            <h1 className="text-white font-bold text-4xl">About</h1>
            <Link href={`/`}>
              <h3 className="font-semibold text-[#CFA670]">
                <BsBoxArrowLeft className="text-xl inline-block mr-2" /> Go Back
                to Home Page
              </h3>
            </Link>
          </div>
          {/* About us  */}
          <div className="flex justify-center items-center">
            <div className="flex justify-between flex-col lg:flex-row gap-10 lg:gap-0 lg:w-[85vw] w-full px-4 lg:px-0 py-14 items-center">
              <div className="lg:w-1/2 w-full space-y-9">
                <div>
                  <h1 className="text-[#CFA670] font-bold text-5xl">
                    About Us
                  </h1>
                  <h3 className="text-black font-semibold mt-4 text-2xl">
                    QUALITY OF RESTURANT
                  </h3>
                </div>
                <p className="text-sm md:text-base font-medium md:font-semibold ">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don&apos;t
                  look even slightly believable. If you are going to use a
                  passage of Lorem Ipsum, you need to be sure there isn&apos;t
                  anything embarrassing hidden in the middle of text. All the
                  Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet. It uses a dictionary of over 200
                  Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.
                  The generated Lorem Ipsum is therefore always free from
                  repetition, injected humour, or non-characteristic words etc.
                </p>
                <button
                  type="submit"
                  className=" bg-[#CFA670] py-2 px-4 rounded-md font-semibold transition-colors lg:w-auto "
                >
                  Learn More
                </button>
              </div>
              <div className="lg:w-[37vw] w-full h-96 rounded-md relative overflow-hidden">
                <img
                  src="https://www.barfithefoodmagician.co.in/sitepad-data/uploads/2024/05/aboutus01.jpg"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  alt="Na"
                />
              </div>
            </div>
          </div>
          {/* bg image */}
          <div className="relative py-6 w-full h-[85vh] about-bg-fixed">
            <div className="relative py-6 w-full h-[85vh] about-bg-fixed flex items-center justify-center lg:justify-end lg:px-28">
              <div className="bg-white lg:p-8 py-6 px-4 rounded-lg flex flex-col justify-center items-center shadow-lg max-w-lg w-[88vw] lg:w-full">
                <h3 className="lg:text-3xl text-2xl font-semibold text-[#CFA670] mb-2 text-center">
                  GuestBook
                </h3>
                <h4 className="text-lg font-bold mb-4 text-center">
                  Client Testimonial
                </h4>
                <img
                  src="https://www.barfithefoodmagician.co.in/sitepad-data/uploads/2024/05/logo.png"
                  className="w-12 h-12"
                />
                <p className="text-center mt-6 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <div className="flex items-center justify-center">
                  <img
                    src="https://www.barfithefoodmagician.co.in/sitepad-data/uploads/2024/05/clients01.jpg"
                    alt="Client Photo"
                    className="w-20 h-20 rounded-full mb-5"
                  />
                </div>
                <div className="text-center">
                  <p className="font-bold">Smith</p>
                  <p className="text-gray-600">Client</p>
                </div>
              </div>
            </div>
          </div>
          {/* team section */}
          <div className="w-full bg-white min-h-screen flex flex-col justify-center items-center">
            <h1 className="lg:text-3xl text-2xl font-semibold text-[#CFA670]">
              Meet Our Team
            </h1>
            <div className="flex justify-center flex-col lg:flex-row px-5 mt-12 mb-10 items-center gap-6">
              <div className="lg:w-[23vw] w-full h-[63vh] relative">
                <img
                  src="https://www.barfithefoodmagician.co.in/sitepad-data/uploads/2024/05/team01.jpg"
                  alt="Description"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-5 w-[80%] py-6 bg-opacity-80 bg-[#CFA670] text-center">
                  <h1 className="text-xl font-semibold">James</h1>
                  <h3 className="font-semibold mt-1">Head Chef</h3>
                </div>
              </div>
              <div className="lg:w-[23vw] w-full h-[63vh] relative">
                <img
                  src="https://www.barfithefoodmagician.co.in/sitepad-data/uploads/2024/05/team02.jpg"
                  alt="Description"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-5 w-[80%] py-6 bg-opacity-80 bg-[#CFA670] text-center">
                  <h1 className="text-xl font-semibold">Marioden</h1>
                  <h3 className="font-semibold mt-1">Assistent Chef</h3>
                </div>
              </div>
              <div className="lg:w-[23vw] w-full h-[63vh] relative">
                <img
                  src="https://www.barfithefoodmagician.co.in/sitepad-data/uploads/2024/05/team03.jpg"
                  alt="Description"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-5 w-[80%] py-6 bg-opacity-80 bg-[#CFA670] text-center">
                  <h1 className="text-xl font-semibold">Rods</h1>
                  <h3 className="font-semibold mt-1">Chef</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );

}