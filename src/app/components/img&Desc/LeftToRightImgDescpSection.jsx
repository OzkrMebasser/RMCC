import React from "react";
import MinistriesSlidesImgsLeft from "../UI/ministriesSlidesImgs/MinistriesSlidesImgsLeft";

/**
 * This component represents an image with description section.
 * @param {Object} props - The props passed to the component.
 * @param {string} props.bgSection - The background color of the section, using Tailwind CSS classes.
 * @param {string} props.titleTextColor - The text color of the title, using Tailwind CSS classes.
 * @param {string} props.descTextColor - The text color of the description, using Tailwind CSS classes.
 * @param {string} props.subTitleTextColor - The text color of the subtitle, using Tailwind CSS classes.
 * @param {string} props.title - The title text.
 * @param {string} props.img - The URL of the image to be displayed.
 * @param {string} props.desc - The description text.
 * @param {string} props.subTitle - The subtitle text.
 * @param {string} props.subTitle2 - The subtitle2 text.
 * @param {string} props.servicesDays - The days of services as a string.
 * @param {string} props.dayAndTime - The day and time details as a string.
 * @returns {JSX.Element} - Returns a JSX element representing the image with description section.
 */

const LeftToRightImgDescpSection = ({
  bgSection,
  titleTextColor,
  descTextColor,
  subTitleTextColor,
  title,
  subTitleTop,
  subTitleTopTextColor,
  img,
  images = [],
  desc,
  subTitle,
  subTitle2,
  servicesDays,
  dayAndTime,
}) => {
  return (
    <>
      <section className={bgSection}>
        <div className="container flex flex-col px-6 py-10  mx-auto space-y- lg:h-[32rem] lg:py-14 lg:flex-row lg:items-center sm:flex-row-reverse">
          <div className="flex items-center justify-center w-full h-full lg:w-1/2">
            {/* <img
              data-aos="zoom-in"
              data-aos-delay="100"
              className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl filter saturate-100"
              src={img}
              alt={title}
            /> */}
            <MinistriesSlidesImgsLeft images={images} />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="lg:ml-[40px]">
              <h2
                data-aos="fade-down"
                data-aos-delay="100"
                className={`${titleTextColor} uppercase text-2xl mb-4 mt-8 font-bold leading-tight sm:text-4xl text-center lg:mt-2`}
              >
                {title}
              </h2>
              <div className="mt-4 " data-aos="fade-up" data-aos-delay="100">
                <p
                  className={`${subTitleTopTextColor} mb-1 italic text-[1rem] font-semibold`}
                >
                  {" "}
                  {subTitleTop ? <span>{subTitleTop} </span> : null}
                </p>

                <p
                  className={`${descTextColor} mb-1 text-[1rem] font-semibold text-justify`}
                >
                  {desc}
                </p>
                <p className={subTitleTextColor}>
                  {subTitle ? <span>{subTitle} </span> : null}
                  {subTitle2 ? (
                    <>
                      <br />
                      <span>{subTitle2} </span>
                    </>
                  ) : null}

                  {servicesDays ? (
                    <>
                      {" "}
                      <br />
                      <span className="text-lg">
                        <strong>{servicesDays}</strong>{" "}
                      </span>
                    </>
                  ) : null}
                </p>
                <p className={subTitleTextColor}>{dayAndTime}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LeftToRightImgDescpSection;

// const DescpImgSection = ({
//   bgSection,
//   titleTextColor,
//   descTextColor,
//   subTitleTextColor,
//   title,
//   img,
//   desc,
//   subTitle,
//   servicesDays,
//   dayAndTime,
// }) => {
//   return (
//     <>
//        <section className="bg-teal-900">
//         {/* Youth Ministry */}
//         <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center sm:flex-row-reverse">
//           <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
//             <img
//               className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl filter saturate-100"
//               alt="youth ministries"
//             />
//           </div>
//           <div className="w-full lg:w-1/2">
//             <div className="lg:ml-[120px]">
//               <h2
//                 data-aos="fade-down"
//                 data-aos-delay="100"
//                 className="uppercase text-2xl mb-4 font-bold leading-tight text-teal-200 sm:text-4xl text-center"
//               >
//                 Youth Ministry
//               </h2>
//               <div className="mt-8 space-y-5">
//                 <p className="text-white md:text-body-md mb-6 font-semibold text-lg text-justify">
//                 To raise a generation of Christian youth empowered, to engage our community&apos;s youth in a relationship with God, to equip them to grow in their faith in Jesus Christ,  and to enjoy and share God&apos;s love.
//                 </p>
//                 <p className="text-teal-200">
//                  <strong> Days of services:</strong> <br/>
//                 <span className="text-lg">  Wednesday 7:00 PM </span>
//                 </p>
//                 <p></p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </>
//   );
// };

// export default DescpImgSection;
