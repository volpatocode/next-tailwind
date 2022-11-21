import Logo from "../Logo";

export default function index() {
  return (
    <div style={{ borderTop: "1px solid rgba(255, 255, 255, .35)" }}>
      <div className="container m-auto flex flex-col justify-center items-center py-12 sm:flex-col md:flex-row md:justify-between md:items-start gap-10">
        <div className="flex flex-col gap-3 w-full text-center  md:w-3/12 md:text-start ">
          <Logo />
          <p className="text-xs text-white-600 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            aut voluptas eius harum ab id, ducimus, tempore doloremque officiis
            dolor sequi illum nisi ea, dolorem similique explicabo eligendi qui
            rem.
          </p>
        </div>
        <div className="flex flex-row gap-12">
          <div className="flex flex-col gap-2">
            <ul className="flex flex-col gap-1">
              <h4 className="mb-2 text-white-900 font-semibold">Our Polices</h4>
              <li>
                <a className="cursor-pointer text-white-900 hover:text-white-800 transition-all duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-white-900 hover:text-white-800 transition-all duration-200">
                  Terms of Use
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-white-900 hover:text-white-800 transition-all duration-200">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col gap-1">
              <h4 className="mb-2 text-white-900 font-semibold">Contact</h4>
              <li>
                <a className="cursor-pointer text-white-900 hover:text-white-800 transition-all duration-200">
                  nfthink@realemail.com
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-white-900 hover:text-white-800 transition-all duration-200">
                  +9882 1219 2031
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-white-900 hover:text-white-800 transition-all duration-200">
                  +1332 4119 2038
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-white-900 hover:text-white-800 transition-all duration-200">
                  @nfthink
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <ul className="flex flex-col gap-1">
              <h4 className="mb-2 text-white-900 font-semibold">About</h4>
              <li>
                <a className="cursor-pointer text-white-900 hover:text-white-800 transition-all duration-200">
                  FAQ
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-white-900 hover:text-white-800 transition-all duration-200">
                  History
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
