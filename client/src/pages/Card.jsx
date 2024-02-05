import React from "react";

const Card = () => {
  return (
    <>
      <div className="xl:w-full lg:w-full md:w-full w-[530px] h-full bg-gray-100 relative">
        <section className="md:h-full flex items-center text-black bg-black">
          <div className="container px-5 py-12 mx-auto">
            <div className="text-center mb-[80px]">
              <h1 className="text-3xl fw-bold bg-yellowColor w-[260px] py-4 mx-auto rounded-[20px]">
                Our Services
              </h1>
            </div>
            <div className="flex grid-cols-3 flex-wrap m-4">
              <div className="p-4 sm:w-1/2 lg:w-1/3">
                <div className="h-full border-3  border-yellowColor rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/6720551/pexels-photo-6720551.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="image"
                    className="xl:h-70 xl:w-full lg:h-70 lg:w-full md:w-full md:h-48 object-cover object-center"
                  />
                  <div className="p-6 hover:bg-[#238faa] hover:backdrop-blur-lg h-full hover:text-black transition duration-300 ease-in">
                    <h1 className="text-base font-medium text-white mb-1 fs-3">
                      Truck Repire
                    </h1>
                    <p className="landing-relaxed mb-3 font-sm text-white">
                      Specializing in heavy-duty vehicles, our truck repair
                      experts possess the knowledge and necessary skills to
                      address mechanical issues promptly. Rely on us for
                      efficient solutions
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/3">
                <div className="h-full border-3 border-yellowColor rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/7564860/pexels-photo-7564860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="image"
                    className="xl:h-70 xl:w-full lg:h-70 lg:w-full md:w-full md:h-48 w-full h-48 object-cover object-center"
                  />
                  <div className="p-6 hover:bg-[#238faa] hover:backdrop-blur-lg  hover:text-black transition duration-300 ease-in">
                    <h1 className="text-base font-medium text-white mb-1 fs-3">
                      Engine Tuning
                    </h1>
                    <p className="landing-relaxed mb-3 font-sm text-white">
                      Our experts excel in precision engine tuning, optimizing
                      performance and fuel efficiency. We are here to assist
                      you. We are providing you with complete reliable diagnosis
                      and repair service for your car's suspension and
                      diagnostic testing. Rely on us!
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/3">
                <div className="h-full border-3 border-yellowColor rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/11349965/pexels-photo-11349965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="image"
                    className="xl:h-70 xl:w-full lg:h-70 lg:w-full md:w-full md:h-48 w-full h-48 object-cover object-center"
                  />
                  <div className="p-6 hover:bg-[#238faa] hover:backdrop-blur-lg h-full  hover:text-black transition duration-300 ease-in">
                    <h1 className="text-base font-medium text-white mb-1 fs-3">
                      Trailer Repire
                    </h1>
                    <p className="landing-relaxed mb-3 font-sm text-white">
                      With a keen eye for detail, our trailer repair specialists
                      ensure safety and reliability. From brakes to suspension,
                      we guarantee top-notch repairs for your trailers
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/3">
                <div className="h-full border-3 border-yellowColor rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/5467596/pexels-photo-5467596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="image"
                    className="xl:h-70 xl:w-full lg:h-70 lg:w-full md:w-full md:h-48 w-full h-48 object-cover object-center"
                  />
                  <div className="p-6 hover:bg-[#238faa] hover:backdrop-blur-lg h-full  hover:text-black transition duration-300 ease-in">
                    <h1 className="text-base font-medium text-white mb-1 fs-3">
                      On-Call-Service
                    </h1>
                    <p className="landing-relaxed mb-3 font-sm text-white">
                      Available 24/7, our on-call service team responds promptly
                      to your vehicle emergencies. Count on our skilled
                      technicians to bring swift solutions to your doorstep.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/3">
                <div className="h-full border-3 border-yellowColor rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="image"
                    className="xl:h-70 xl:w-full lg:h-70 lg:w-full md:h-48 object-cover object-center"
                  />
                  <div className="p-6 hover:bg-[#238faa] hover:backdrop-blur-lg h-full hover:text-black transition duration-300 ease-in">
                    <h1 className="text-base font-medium text-white mb-1 fs-3">
                      Car Repire
                    </h1>
                    <p className="landing-relaxed mb-3 font-sm text-white">
                      From minor fixes to major overhauls, our car repair
                      experts deliver quality workmanship. Rest assured, your
                      vehicle is in capable hands for comprehensive and reliable
                      repairs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/3">
                <div className="h-full border-3 border-yellowColor rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/7540474/pexels-photo-7540474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="image"
                    className="xl:h-70 xl:w-full lg:h-70 lg:w-full md:w-full md:h-48 w-full h-48 object-cover object-center"
                  />
                  <div className="p-6 hover:bg-[#238faa] hover:backdrop-blur-lg h-full hover:text-black transition duration-300 ease-in">
                    <h1 className="text-base font-medium text-white mb-1 fs-3">
                      Driving School
                    </h1>
                    <p className="landing-relaxed mb-3 font-sm text-white">
                      Our driving school instructors are dedicated to shaping
                      confident and experienced drivers. Through personalized
                      training and contemporary techniques, we aim to help you
                      navigate towards acquiring safe and proficient driving
                      skills
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Card;
