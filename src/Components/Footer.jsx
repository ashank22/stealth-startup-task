

export const Footer = () => {
  return (
      <div className="flex flex-col gap-12 my-10 md:flex-row md:justify-between md:items-baseline">
      <ul className="flex gap-4 text-white">
        <li>
          <a href="https://www.instagram.com">Instagram</a>
        </li>
        <li>
          <a href="https://www.facebook.com">facebook</a>
        </li>
        <li>
          <a href="https://www.x.com">X</a>
        </li>
      </ul>
      <div className="flex gap-2  ">
        
        <div className="flex items-center text-white">
          <a href="#" className="">
            Stealth Startup Ltd.
          </a>
        </div>
      </div>
    </div>
  );
};
