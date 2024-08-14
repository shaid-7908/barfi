import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen z-50 w-full">
      <div className="home-bg flex flex-col gap-3 justify-center items-start lg:px-44 px-4 w-full h-screen">
        <h1 className="text-[#CFA670] mt-8 font-kristi text-[30px] ">Welcome To</h1>
        <h2 className="text-white font-bold text-4xl lg:text-5xl">
          TASTE ROYAL CUISINE
        </h2>
        <p className="text-white mt-3 font-poppins text-sm md:text-base font-medium lg:w-[40vw]">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.Richard McClintock, a Latin professor at
          Hampden-Sydney College.
        </p>
        <Link href={`/`}>
          <button
            type="submit"
            className=" bg-[#CFA670] py-2 px-4 mt-8 rounded-md font-semibold transition-colors lg:w-auto "
          >
            Book A Table
          </button>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-between flex-col lg:flex-row gap-10 lg:gap-0 lg:w-[85vw] w-full px-4 lg:px-0 py-14 items-center">
          <div className="lg:w-[37vw] w-full h-96 rounded-md relative overflow-hidden">
            <img
              src="https://www.barfithefoodmagician.co.in/sitepad-data/uploads/2024/05/story01.jpg"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="lg:w-1/2 flex justify-center items-center flex-col w-full space-y-9">
            <div>
              <h1 className="text-[#CFA670] font-bold text-center text-3xl">
                Discover
              </h1>
              <h3 className="text-black font-bold text-center mt-4 text-5xl">
                Our Story
              </h3>
            </div>
            <p className="text-base text-center font-semibold">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn&apos;t anything embarrassing
              hidden in the middle of text.
            </p>
            <button
              type="submit"
              className=" bg-[#CFA670] py-2 px-4 rounded-md font-semibold transition-colors lg:w-auto "
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
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
      <div className="relative py-6 w-full h-[40vh] home-bg-fixed">
        <div className="relative py-6 w-full h-[40vh] home-bg-fixed flex flex-col items-center justify-center lg:px-28">
          <h1 className="font-semibold text-[#CFA670] text-xl">Amazing</h1>
          <h1 className="font-bold text-4xl mt-3 uppercase text-white">
            Delicious
          </h1>
        </div>
      </div>
      <div className="flex justify-center mt-5 items-center">
        <div className="flex justify-between flex-col lg:flex-row gap-10 lg:gap-0 lg:w-[85vw] w-full px-4 lg:px-0 py-14 items-center">
          <div className="lg:w-1/2 w-full flex justify-center items-center flex-col space-y-9">
            <div>
              <h1 className="text-[#CFA670] font-bold text-center text-3xl">
                Checkout
              </h1>
              <h3 className="text-black font-bold text-center mt-4 text-5xl">
                OUR MENU
              </h3>
            </div>
            <p className="text-base text-center font-semibold">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn&apos;t anything embarrassing
              hidden in the middle of text.
            </p>
            <button
              type="submit"
              className=" bg-[#CFA670] py-2 px-4 rounded-md font-semibold transition-colors lg:w-auto "
            >
              Know More
            </button>
          </div>
          <div className="lg:w-[37vw] w-full h-96 rounded-md relative overflow-hidden">
            <img
              src="/images/WhatsApp Image 2024-06-21 at 20.30.25_939edbd5.jpg"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5 items-center">
        <div className="flex justify-between flex-col lg:flex-row gap-10 lg:gap-0 lg:w-[85vw] w-full px-4 lg:px-0 py-14 items-center">
          <div className="lg:w-[37vw] w-full h-96 rounded-md relative overflow-hidden">
            <img
              src="/images/BarfiFront.jpg"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="lg:w-1/2 w-full flex justify-center items-center flex-col space-y-9">
            <div>
              <h1 className="text-[#CFA670] font-bold text-center text-3xl">
                Visit Our
              </h1>
              <h3 className="text-black font-bold text-center mt-4 text-5xl">
                RESTURANT
              </h3>
            </div>
            <p className="text-base text-center font-semibold">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn&apos;t anything embarrassing
              hidden in the middle of text.
            </p>
            <button
              type="submit"
              className=" bg-[#CFA670] py-2 px-4 rounded-md font-semibold transition-colors lg:w-auto "
            >
              Know More
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
