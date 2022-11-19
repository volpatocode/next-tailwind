/* eslint-disable @next/next/no-img-element */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Instructions from "../components/Instructions";
import Categories from "../components/Categories";
import Slider from "react-slick";

import { nfts } from "../data/nfts";

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
      <div className="flex flex-col justify-between">
        <Navbar />
        <div className="container mx-auto w-full min-h-[95vh] flex flex-col justify-around py-16 gap-16">
          <div className=" flex flex-row justify-between gap-32">
            <div className=" w-2/5 flex flex-col gap-6">
              <h1 className="font-extrabold text-8xl">
                Collect and Sell your{" "}
                <span className="text-pink-700">awesome</span> NFTs
              </h1>
              <p className="text-md text-white-600">
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
                <div>
                  <h4 className="text-5xl font-semibold">50K+</h4>
                  <p className="text-lg text-white-700">Artwork</p>
                </div>
                <div>
                  <h4 className="text-5xl font-semibold">100K+</h4>
                  <p className="text-lg text-white-700">Auction</p>
                </div>
                <div>
                  <h4 className="text-5xl font-semibold">10K+</h4>
                  <p className="text-lg text-white-700">Creator</p>
                </div>
              </div>
            </div>
            <Slider className="w-2/5" {...settings}>
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
          <Instructions />
          <Categories />
        </div>
        <Footer />
      </div>
    </>
  );
}
