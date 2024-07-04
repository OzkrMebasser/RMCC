"use client";

import Statements from "../components/Statements";
import ImagesDescriptions from "../components/img&Desc/ImagesDescriptions";
import HistoryImages from "../components/UI/HistoryImages/HistoryImages";

const pastorsImages = [
  "https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/aboutUs%2FpastorsRMCC1.png?alt=media&token=675f80d8-cdd6-4654-b83d-8b23cf9f4ccb",
  "https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/aboutUs%2FpastorsRMCC2.png?alt=media&token=ecdb7f0f-51a5-4c54-9edb-019cd7908f31",
  "https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/aboutUs%2FpastorsRMCC3.png?alt=media&token=6852698c-8750-4b0f-a479-11426c23f65f",
  "https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/aboutUs%2FpastorsRMCC4.png?alt=media&token=91c3f903-b00a-4e16-add7-fc47e5fb41af",
];

const img =
  "https://firebasestorage.googleapis.com/v0/b/rmcc-entebee.appspot.com/o/aboutUs%2FpastorsRMCC4.png?alt=media&token=91c3f903-b00a-4e16-add7-fc47e5fb41af";

const AboutUs = () => {
  return (
    <>
      {/* Header section ABOUT US*/}
      <section className="mt-[8.5rem] lg:mt-[6rem] wave-patterns object-fill py-[30px] md:py-[80px] lg:pt-[80px] lg:pb-[100px] container mx-auto px-[20px] lg:px-6">
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

      <ImagesDescriptions
        id="our-pastors"
        bgSection="bg-white"
        titleTextColor="text-red-600"
        descTextColor="text-teal-900"
        subTitleTextColor="text-teal-800 "
        title={"Our Pastors"}
        images={pastorsImages}
        img={img}
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
      />

      <Statements
        id="our-history"
        title="OUR HISTORY"
        statement="After traversing the whole country on evangelical mission preaching the message of forgiveness and repentance, love and hope with believing in Resurrection as a second life out of redemption,  a church had to be formed as a  focal point for spiritual reunion in the body of Christ."
        parag1="Our first prayers in 2016 were held in the home of Pastor Babrah and Geoffrey. God’s mighty hand was manifested and we had to search for a big place the following year. We got the place and it’s where we are currently located."
        parag2="God has managed to make our church impactful in the community. It’s a place for  refugee for all that are tired and need to rest, those seeking  spiritual  empowerment and nutrition,  physical and moral support."
        parag3="We are currently building a bigger sanctuary to accommodate the numbers, and later projected to construct a resource center and an orphanage. When you believe that Jesus is the Resurrection and life, even though you may die, you shall live.
        And whoever lives and believes in me shall never die."
      />

      <HistoryImages />
    </>
  );
};

export default AboutUs;
