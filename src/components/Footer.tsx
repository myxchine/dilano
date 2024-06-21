import Signup from "./Signup";

const Footer = () => {
  return (
    <footer className=" border-t border-white/10 bg-black text-white w-full text-center justify-center pt-12">
      <div className=" md:max-w-[1440px] mx-auto md:flex md:justify-between  ">
        <div className="flex flex-col gap-4 w-full pb-12">
          <Signup />
        </div>
      </div>

      <div>
        <p className="text-xs md:text-sm border-t  border-white/10  text-center p-4">
          © 2024 DIDI MEDIA. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
