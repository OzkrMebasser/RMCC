"use client";
import Link from "next/link";
import Statements from "../components/Statements";
import LeftToRightDescpImgSection from "../components/img&Desc/LeftToRightDescpImgSection";
import LeftToRightImgDescpSection from "../components/img&Desc/LeftToRightImgDescpSection";



const childrenImages =[
  "https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/ministriesImages%2FchildrenMinistry1.jpeg?alt=media&token=4dd06bc8-5660-4a50-8fa1-b11cfa80feb1",
  "https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/ministriesImages%2FchildrenMinistry2.jpeg?alt=media&token=8f18235b-b884-4a46-b1bc-ace9286cde40",
  "https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/ministriesImages%2FchildrenMinistry3.jpeg?alt=media&token=a7884a88-68a5-4c27-bdb6-2a4abb906cb9"
];

const youthImages = [
  "https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/ministriesImages%2FyouthImages1.jpeg?alt=media&token=752269c2-ba43-4856-8983-c35b34c345b7",
  "https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/ministriesImages%2FyouthImages2.jpeg?alt=media&token=a4bfb594-ac48-44b6-9f37-b4a2f671d92a",
  "https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/ministriesImages%2FyouthImages3.jpeg?alt=media&token=440a5bca-e123-4adc-92b1-82b0fe57964b",
  "https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/ministriesImages%2FyouthImages4.jpeg?alt=media&token=8b578f6d-9bce-48b6-8403-be8645072c6a"
];

const womenImages = [
  "https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/ministriesImages%2FWomenMinistry.jpeg?alt=media&token=60e582ce-548c-4546-8831-7eb0695b40f0",
  "https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/ministriesImages%2FWomenMinistry1.jpeg?alt=media&token=f120758a-4980-4469-a6c8-9f93044ed63d"
];



const Ministries = () => {
  return (
    <>
      {/* Header section MINISTRIES*/}
      <section className="mt-[8.5rem] lg:mt-[6rem] wave-patterns object-fill py-[30px] md:py-[80px] lg:pt-[80px] lg:pb-[50px] container mx-auto px-[20px] lg:px-6">
        <header>
          <h2
            data-aos="fade-down"
            data-aos-delay="100"
            className="uppercase text-2xl mb-4 font-bold leading-tight text-teal-400 sm:text-4xl text-center"
          >
            Ministries
          </h2>

          <p
            className="md:text-body-md  font-semibold text-lg text-justify"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            At our Christian church, we believe every follower of Jesus has a
            unique story to tell, and we strive to provide a supportive
            community where individuals can grow in their faith journey. We
            offer diverse ministries tailored to different age groups and stages
            of life, ensuring everyone from children to seniors finds a place to
            belong and flourish. Through interactive programs, small groups, and
            fellowship events, we help each person deepen their relationship
            with God and build meaningful connections with others.
            <br />
            <span className="mt-4 block">
              In all of our ministries, we prioritize creating a space where
              individuals can not only deepen their relationship with God but
              also learn to share their faith journey with others. By walking
              alongside one another and offering guidance, encouragement, and
              support, we strive to live out the teachings of Jesus and
              positively impact the world around us.
            </span>
          </p>
        </header>
      </section>
     

      {/* Children Ministry */}

      <LeftToRightImgDescpSection
        bgSection="bg-teal-900"
        titleTextColor="text-teal-200"
        descTextColor="text-white"
        subTitleTextColor="text-teal-200 "
        title="Children Ministry"
        images={childrenImages}
        img="https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/heroSection%2FrmccImages%201.jpeg?alt=media&token=4d257150-7491-41c9-b775-fa7ddc951b16"
        subTitleTop="Luke 18:16, Let the little children come to me..."
        subTitleTopTextColor="text-teal-200"
        desc={`We aim to teach children to accept Jesus Christ as their savior and to teach children values centered on Bible teachings, empathy and discipline.
        Our mission is to equip children with biblical foundation that drives a desire to be disciples,
        transform hearts, lead others to accept Christ and seek God daily.
        Through activities like SUNDAY GOODIES, children school holidays camps, Go back to
        school packages, children food ratios and groceries. We have impacted the community
        children and more have come to Jesus. That’s why we are known as a children church in
        the community.`}
        // subTitle=""
        servicesDays="Days of services:"
        dayAndTime="Wednesday 7:00 PM"
      />

      <LeftToRightDescpImgSection
        bgSection="bg-white"
        titleTextColor="text-red-600"
        descTextColor="text-teal-900"
        subTitleTextColor="text-red-700 "
        title="Youth Ministry"
        img="https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/heroSection%2FrmccImages%201.jpeg?alt=media&token=4d257150-7491-41c9-b775-fa7ddc951b16"
        images={youthImages}
        desc="To raise a generation of Christian youth empowered, to engage our community's youth in a relationship with God, to equip them to grow in their faith in Jesus Christ,  and to enjoy and share God's love"
        // subTitle=""
        servicesDays="Days of services:"
        dayAndTime="Wednesday 7:00 PM"
      />

      <LeftToRightImgDescpSection
        bgSection="bg-black"
        titleTextColor="text-red-600"
        descTextColor="text-white"
        subTitleTextColor="text-red-600 "
        title="Women Ministry"
        img="https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/heroSection%2FrmccImages%201.jpeg?alt=media&token=4d257150-7491-41c9-b775-fa7ddc951b16"
        desc="To raise a generation of Christian youth empowered, to engage our community's youth in a relationship with God, to equip them to grow in their faith in Jesus Christ,  and to enjoy and share God's love"
        // subTitle=""
        images={womenImages}
        servicesDays="Days of services:"
        dayAndTime="Wednesday 7:00 PM"
      />
    
    </>
  );
};

export default Ministries;


{/* <section className="bg-black">

<div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
  <div className="w-full lg:w-1/2">
    <div className="lg:max-w-lg">
      <h2
        data-aos="fade-down"
        data-aos-delay="100"
        className="uppercase text-2xl mb-4 font-bold leading-tight text-red-600 sm:text-4xl text-center"
      >
        Children Minister
      </h2>
      <div className="mt-8 space-y-5">
        <p className="flex items-center text-teal-300 md:text-body-md mb-6 font-semibold text-lg text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum
        </p>

        <p className="text-white">
          Days: <br />
          Wednesday 7:00 PM
        </p>
      </div>
    </div>
  </div>
  <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
    <img
      className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl filter saturate-100"
      src="https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/heroSection%2FrmccImages%201.jpeg?alt=media&token=4d257150-7491-41c9-b775-fa7ddc951b16"
      alt="pastors photo"
    />
  </div>
</div>
</section> */}