export default function index() {
  return (
    <div className="container mx-auto flex flex-col gap-6 justify-center items-center">
      <h3 className="text-4xl font-semibold">How it works?</h3>
      <div className="flex flex-row gap-2 justify-between items-center">
        <div className="flex flex-col gap-2">
          <div className="p-4 border-2 border-pink-700 rounded-full w-fit">
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
        <div className="flex flex-col gap-2">
          <div className="p-4 border-2 border-pink-700 rounded-full w-fit">
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
        <div className="flex flex-col gap-2">
          <div className="p-4 border-2 border-pink-700 rounded-full w-fit">
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
        <div className="flex flex-col gap-2">
          <div className="p-4 border-2 border-pink-700 rounded-full w-fit">
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
            Choose between auctions, fixed-price listings, and decline-pricing
            settings.
          </p>
        </div>
      </div>
    </div>
  );
}
