import React, { memo } from "react";

type NameInfoProps = {
  name: string;
  role: string;
  profileImage: string;
  email?: string;
  ctaHref?: string;
  arrow?: React.ReactNode;
};

const NameInfo: React.FC<NameInfoProps> = memo(({
  name,
  role,
  profileImage,
  email = "teamsplenify@splenify.com",
  ctaHref = "#",
  arrow,
}) => {
  const arrowElement =
    arrow ?? (
      <img src="/arrow.svg" alt="Arrow" loading="lazy" className="inline-block w-5 h-5" />
    );

  return (
    <div className="flex lg:flex-col flex-col items-center md:items-start">
      <div className="md:flex lg:block gap-20">
        <div className="relative flex items-center gap-4">
          <div className="relative h-40 w-40 md:h-52 md:w-52 overflow-hidden rounded-2xl">
            <img src={profileImage} alt="Profile" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="absolute top-[120px] md:top-[170px] lg:top-[164px]  left-[60px] lg:left-[110px] w-[180px] md:w-[205px] h-[80px] md:h-[102px] gap-1.5 p-4 md:p-6 rounded-xl bg-white/10 shadow-[3px_12px_20px_0px_#00000012] backdrop-blur-[20px]">
            <h2 className="text-md md:text-lg font-bold text-gray-900">{name}</h2>
            <p className="text-xs md:text-sm text-gray-600">{role}</p>
          </div>
        </div>

        <div className="flex flex-col items-start mt-16 md:mt-0 lg:mt-24 gap-5">
          <div className="max-w-full md:max-w-[600px] md:text-xl text-sm md:pr-10 lg:pr-40">
            <p className="font-poppins font-normal pr-12">
              Got a mobile app that needs to be taken care of?
            </p>

            <p className="font-poppins my-6 font-normal leading-[100%]">
              We’ve got your back.
            </p>

            <p className="font-poppins mt-2">
              Schedule a call below, or send a quick email to{" "}
              <a href={`mailto:${email}`} className="text-[#7165FF]">
                {email}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-full mt-7 ">
        <div className="md:w-full md:my-20 lg:my-2">
          <h1 className="font-recoleta text-2xl lg:text-nowrap px-12 mb-4 md:mb-0 md:px-0 md:text-4xl font-normal md:mt-1.5 text-center md:text-left">
            Talk to you in less than{" "}
            <span className="text-[#DF56FE] font-recoleta  text-2xl md:text-4xl"> 24 hrs.</span>
          </h1>
        </div>

        <div className=" hidden md:flex lg:flex-col md:flex-row lg:gap-2 items-center lg:items-start md:justify-between lg:mt-[105px] xl:mt-26 mb-3 p-6 lg:max-w-lg rounded-lg text-center bg-[#7165FF33]">
          <div className=" flex flex-col gap-2">
            <h3 className=" text-left font-recoleta text-2xl md:text-3xl capitalize">Schedule A Call</h3>
            <p className="text-left font-normal text-lg md:text-xl mr-12">
              Feel free to select a time at your convenience!
            </p>
          </div>
          <div>
            <a href={ctaHref} className="font-poppins text-lg md:text-xl text-[#7165FF] flex items-center gap-4 text-nowrap">
              Let’s Talk <span>{arrowElement}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

NameInfo.displayName = 'NameInfo';

export default NameInfo;