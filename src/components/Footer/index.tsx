import Logo from "../Logo";

export default function index() {
  return (
    <div className="border-t-2 border-solid border-gray-300">
      <div className="container m-auto flex flex-row justify-between py-12">
        <div className="flex flex-col gap-3 w-3/12 ">
          <Logo />
          <p className="text-xs text-stone-400 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            aut voluptas eius harum ab id, ducimus, tempore doloremque officiis
            dolor sequi illum nisi ea, dolorem similique explicabo eligendi qui
            rem.
          </p>
          <div className="">social icons</div>
        </div>
        <div className="flex flex-row gap-12">
          <div className="flex flex-col gap-2">
            <ul className="flex flex-col gap-1">
              <h4 className="mb-2 text-slate-200 font-semibold">
                Privacy Police
              </h4>
              <li>
                <a className="cursor-pointer text-slate-200">Lorem</a>
              </li>
              <li>
                <a className="cursor-pointer text-slate-200">Lorem</a>
              </li>
              <li>
                <a className="cursor-pointer text-slate-200">Lorem</a>
              </li>
              <li>
                <a className="cursor-pointer text-slate-200">Lorem</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <ul className="flex flex-col gap-1">
              <h4 className="mb-2 text-slate-200 font-semibold">About</h4>
              <li>
                <a>Lorem</a>
              </li>
              <li>
                <a className="cursor-pointer text-slate-200">Lorem</a>
              </li>
              <li>
                <a className="cursor-pointer text-slate-200">Lorem</a>
              </li>
              <li>
                <a className="cursor-pointer text-slate-200">Lorem</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-1">
              <h4 className="mb-2 text-slate-200 font-semibold">Contact</h4>
              <li>
                <a className="cursor-pointer text-slate-200">Lorem</a>
              </li>
              <li>
                <a className="cursor-pointer text-slate-200">Lorem</a>
              </li>
              <li>
                <a className="cursor-pointer text-slate-200">Lorem</a>
              </li>
              <li>
                <a className="cursor-pointer text-slate-200">Lorem</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
