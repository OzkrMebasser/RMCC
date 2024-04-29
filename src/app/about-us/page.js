"use client";
import Link from "next/link";
import Statements from "../components/Statements";
import DescpImgSection from "../components/img&Desc/DescpImgSection";
import HistoryImages from "../components/UI/HistoryImages/HistoryImages";
const AboutUs = () => {
  return (
    <>
      {/* Header section ABOUT US*/}
      <section className="mt-[6rem] wave-patterns object-fill py-[30px] md:py-[80px] lg:pt-[80px] lg:pb-[100px] container mx-auto px-[20px] lg:px-6">
        <header>
          <h2
            data-aos="fade-down"
            data-aos-delay="100"
            className="uppercase text-2xl mb-4 font-bold leading-tight text-teal-400 sm:text-4xl text-center"
          >
            About us
          </h2>

          <p
            className="md:text-body-md mb-6 font-semibold text-lg text-justify"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We are a vibrant and expanding church community that steadfastly
            believes in the ongoing manifestation of divine miracles and wonders
            in the lives of those who earnestly seek the divine presence. Our
            congregation is dedicated to fostering an environment of faith and
            hope, where individuals are encouraged to cultivate a deeper
            relationship with God. We invite you to join us and experience the
            transformative power of faith and spiritual enrichment.
          </p>
        </header>
      </section>
      {/* Our History */}

      {/* Our lead pastors */}

      <DescpImgSection
        bgSection="bg-white"
        titleTextColor="text-red-600"
        descTextColor="text-teal-900"
        subTitleTextColor="text-teal-800 "
        title="Our Pastors"
        img="https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/heroSection%2FrmccImages%20Pastors.jpeg?alt=media&token=d0c9ee69-1c67-43d2-a2b9-469156bd2dbc"
        desc="Geoffrey and Babrah are passionate about serving the body of
        Christ and carrying on the great commission. They realized
        that serving others is the best way to express God's love
        for mankind. All the reasons he came on earth, died on the
        cross and resurrected was to serve mankind through redemption.
        They are committed to bring a story of hope to the church and
        wherever God would lead them. They believe that John 11:25 is
        the ultimate cause for their faith."
        subTitle="Babrah Ndiwalana Wanzama (Lead pastor)"
        subTitle2="Geoffrey Ndiwalana (Associate pastor)"
        // servicesDays="Days of services:"
        // dayAndTime="Geoffrey Ndiwalana (Associate pastor)"
      />

      <Statements
        title="OUR HISTORY"
        statement="After traversing the whole country on evangelical mission preaching the message of forgiveness and repentance, love and hope with believing in Resurrection as a second life out of redemption,  a church had to be formed as a  focal point for spiritual reunion in the body of Christ."
        parag1="Our first prayers in 2016 were held in the home of Pastor Babrah and Geoffrey. God’s mighty hand was manifested and we had to search for a big place the following year. We got the place and it’s where we are currently located."
        parag2="God has managed to make our church impactful in the community. It’s a place for  refugee for all that are tired and need to rest, those seeking  spiritual  empowerment and nutrition,  physical and moral support."
        parag3="We are currently building a bigger sanctuary to accommodate the numbers, and later projected to construct a resource center and an orphanage. When you believe that Jesus is the Resurrection and life, even though you may die, you shall live.
        And whoever lives and believes in me shall never die."
      />

      <HistoryImages/>

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
    </>
  );
};

export default AboutUs;
