/* eslint-disable @next/next/no-img-element */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { categories } from "../data/categories";
import { nfts } from "../data/nfts";

import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "react-slick";

export default function Home() {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <>
      <Head>
        <title>NFThink</title>
      </Head>
      <div className="flex flex-col justify-between px-[3%] sm:px-0">
        <Navbar />
        <div className="container mx-auto w-full min-h-[95vh] flex flex-col justify-around py-16 gap-16">
          <div className=" flex flex-col justify-between gap-32 sm:flex-col md:flex-col lg:flex-row">
            <div className="flex flex-col gap-6 ">
              <h1 className="font-extrabold text-7xl leading-[1.15] tracking-[1px] text-center sm:text-start">
                Collect and Sell your{" "}
                <span className="text-pink-700">awesome</span> NFTs
              </h1>
              <p className="text-md text-white-600 text-center sm:text-start">
                Welcome to the future, you can buy and sell awesome artwork to
                enjoy. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Est recusandae tenetur dolorum rem, consequuntur animi natus
                suscipit.
              </p>
              <div className="flex flex-row gap-5">
                <button className="w-1/2 px-4 py-2 bg-purple-600 hover:bg-purple-500 transition-all duration-300">
                  Explore Now
                </button>
                <button
                  className="w-1/2 px-4 py-2 bg-transparent border-white-900 hover:bg-white-900 hover:text-black-900 hover:border-white-900  transition-all duration-300"
                  style={{ border: "1px solid" }}
                >
                  Create
                </button>
              </div>
              <div className="flex flex-row gap-2 pt-4 justify-between items-center">
                <div className="flex flex-col gap-2 justify-center items-center">
                  <h4 className="text-5xl font-semibold">50K+</h4>
                  <p className="text-lg text-white-700">Artwork</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <h4 className="text-5xl font-semibold">100K+</h4>
                  <p className="text-lg text-white-700">Auction</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <h4 className="text-5xl font-semibold">10K+</h4>
                  <p className="text-lg text-white-700">Creator</p>
                </div>
              </div>
            </div>
            <Slider className="w-full sm:w-full lg:w-2/5" {...settings}>
              {nfts.map((nft) => {
                return (
                  <div key={nft.id} className="flex flex-col">
                    <img
                      src={`/${nft?.img}`}
                      alt={nft?.name}
                      className="h-[55vh] w-full object-cover"
                    />
                    <div className="bg-white-100 flex flex-col gap-1 p-4 rounded-sm">
                      <h4 className="text-3xl font-semibold">{nft?.name}</h4>
                      <p className="text-pink-700 text-lg font-semibold">
                        {nft?.type}
                      </p>
                      <div className="flex flex-row">
                        <div className="w-1/2">
                          <p className="text-white-500">{nft?.author}</p>
                          <p className="text-white-400">{nft?.users}</p>
                        </div>
                        <button className="w-1/2 bg-blue-500 text-center text-lg hover:bg-blue-400 transition-all duration-200">
                          Place Bid
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="container mx-auto flex flex-col gap-6 justify-center items-center">
            <h3 className="text-4xl font-semibold">How it works?</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 text-center">
              <div className="flex flex-col gap-2 items-center">
                <div className="p-4 border-2 border-pink-700 rounded-full w-fit cursor-pointer hover:opacity-80 transition-all duration-200">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h6 className="font-semibold text-lg">Set up your wishlist</h6>
                <p className="text-lg text-white-700">
                  Once you have set up your wishlist of choice
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <div className="p-4 border-2 border-pink-700 rounded-full w-fit cursor-pointer hover:opacity-80 transition-all duration-200">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </div>
                <h6 className="font-semibold text-lg">Make your collection</h6>
                <p className="text-lg text-white-700">
                  Add links, title, description, profile or even images to your
                  collection
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <div className="p-4 border-2 border-pink-700 rounded-full w-fit cursor-pointer hover:opacity-80 transition-all duration-200">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h6 className="font-semibold text-lg">Add your NFTs</h6>
                <p className="text-lg text-white-700">
                  Upload your artwork image, ID, videos and customize with NFTs
                  properties.
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <div className="p-4 border-2 border-pink-700 rounded-full w-fit cursor-pointer hover:opacity-80 transition-all duration-200">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <h6 className="font-semibold text-lg">List for sale</h6>
                <p className="text-lg text-white-700">
                  Choose between auctions, fixed-price listings, and
                  decline-pricing settings.
                </p>
              </div>
            </div>
          </div>
          <div className="container mx-auto flex flex-col gap-6">
            <h3 className="text-3xl font-semibold">Explore by category</h3>
            <div className="grid grid-cols-2 gap-6 grid-flow-row-dense sm:grid-cols-4">
              {categories.map((category) => {
                return (
                  <>
                    <div
                      className="bg-cover bg-center bg-no-repeat grid place-items-center rounded-md min-h-[200px] sm:min-h-[250px] cursor-pointer hover:opacity-60 transition-all duration-200"
                      style={{
                        backgroundImage: `url(/${category?.img})`,
                      }}
                    >
                      <h3 className="font-extrabold text-3xl text-center">
                        {category.name}
                      </h3>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
