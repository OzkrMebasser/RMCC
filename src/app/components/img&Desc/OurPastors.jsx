import React from "react";
import OurPastorsSlidesImgs from "../UI/ministriesSlidesImgs/OurPastorsSlidesImgs";



const OurPastors = ({
  id,
  bgSection,
  titleTextColor,
  descTextColor,
  subTitleTextColor,
  title,
  img,
  desc,
  subTitle,
  subTitle2,
  servicesDays,
  dayAndTime,
  images = []
}) => {
  return (
    <>
      <section className={bgSection} id={id}>
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6  lg:flex-row lg:items-center">
          
          <div className="w-full lg:w-1/2 ">
            <div className="lg:mr-[40px]">
              <h2
                data-aos="fade-down"
                data-aos-delay="100"
                className={`uppercase text-2xl mb-4 font-bold leading-tight ${titleTextColor} sm:text-4xl text-center`}
              >
                {title}
              </h2>
              <div
                className="mt-4 "
                data-aos="fade-up"
                data-aos-delay="100"
              >
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
          {/* <div className="flex items-center justify-center w-full h-full lg:w-1/2 "> */}
          <div className="flex items-center justify-center w-full lg:w-1/2">
          
          {/* <img
              data-aos="zoom-in"
              data-aos-delay="100"
              className="object-cover w-full h-[23rem] mx-auto rounded-md lg:max-w-2xl lg:h-full filter saturate-100"
              src={img}
              alt={title}           /> */}
            {/* <MinistriesSlidesImgsRight images={images} /> */}

            <OurPastorsSlidesImgs images={images} />
       
          </div>
        </div>
      </section>
    </>
  );
};

export default OurPastors;


// import React from "react";
// import MinistriesSlidesImgs from "../UI/ministriesSlidesImgs/MinistriesSlidesImgs";

// const LeftToRightDescpImgSection = ({
//   bgSection,
//   titleTextColor,
//   descTextColor,
//   subTitleTextColor,
//   title,
//   img,
//   desc,
//   subTitle,
//   subTitle2,
//   servicesDays,
//   dayAndTime,
// }) => {
//   return (
//     <>
//       <section className={bgSection}>
//         <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
//           <div className="w-full lg:w-1/2">
//             {/* <div className="lg:max-w-lg"> */}
//             <div className="lg:mr-[40px]">
//               <h2
//                 data-aos="fade-down"
//                 data-aos-delay="100"
//                 className={uppercase text-2xl mb-4 font-bold leading-tight ${titleTextColor} sm:text-4xl text-center}
//               >
//                 {title}
//               </h2>
//               <div
//                 className="mt-8 space-y-5"
//                 data-aos="fade-up"
//                 data-aos-delay="100"
//               >
//                 <p
//                   className={${descTextColor} mb-1 text-[1rem] font-semibold text-justify}
//                   >
//                   {desc}
//                 </p>
//                 <p className={subTitleTextColor}>
//                   {subTitle ? <span>{subTitle} </span> : null}
//                   {subTitle2 ? (
//                     <>
//                       <br />
//                       <span>{subTitle2} </span>
//                     </>
//                   ) : null}

//                   {servicesDays ? (
//                     <>
//                       {" "}
//                       <br />
//                       <span className="text-lg">
//                         <strong>{servicesDays}</strong>{" "}
//                       </span>
//                     </>
//                   ) : null}
//                 </p>
//                 <p className={subTitleTextColor}>{dayAndTime}</p>
//               </div>
//             </div>
//           </div>
//           <div className="flex items-center justify-center w-full h-96 lg:w-1/2">

//           {/*en esta parte necesito el slider, en vez de la img de aqui abajo*/}
//             <img
//               data-aos="zoom-in"
//               data-aos-delay="100"
//               className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl filter saturate-100"
//               src={img}
//               alt={title}
//             />
     
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default LeftToRightDescpImgSection;


