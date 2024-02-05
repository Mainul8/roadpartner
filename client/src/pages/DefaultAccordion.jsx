import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
function DefaultAccordion() {
  return (
    <div className="bg-black xl:h-screen lg:w-full md:w-full w-[530px] ">
      <Accordion
        className="mx-auto xl:w-[1090px] md:w-[620px] w-[430px] py-4 "
        allowMultiple
      >
        <AccordionItem className="border-2 rounded-[20px] bg-yellowColor text-black border-yellowColor py-[24px] mb-4">
          <h2>
            <AccordionButton className="flex justify-between">
              <span
                className="xl:pl-32 pl-6 font-bold  text-black xl:text-2xl text-md"
                flex="1"
                textAlign="left"
              >
                What types of truck repair services do you offer?
              </span>
              {/* <AccordionIcon className="text-left !text-navy-900 dark:!text-white" /> */}
              <FaPlus className="xl:mr-12 xl:h-[18px] xl:w-8 text-left !text-navy-900" />
            </AccordionButton>
          </h2>
          <AccordionPanel
            className="text-left xl:pl-32 pl-6 text-auto mt-2 !text-navy-900"
            pb={4}
          >
            We provide a comprehensive range of truck repair services,
            addressing issues from routine maintenance to complex repairs. Our
            skilled technicians specialize in diagnostics, brake system repairs,
            engine overhauls, and more, ensuring your trucks stay in optimal
            condition for safe and reliable operation on the road.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className="border-2 rounded-[20px] bg-yellowColor text-black border-yellowColor py-[24px] mb-4">
          <h2>
            <AccordionButton className="flex justify-between">
              <span
                className="xl:pl-32 md:pl-4 font-bold  text-black xl:text-2xl text-md"
                flex="1"
                textAlign="left"
              >
                How can you assist with trailer maintenance and repair?
              </span>
              <FaPlus className="xl:mr-12 xl:h-[18px] xl:w-8 text-left !text-navy-900" />
            </AccordionButton>
          </h2>
          <AccordionPanel
            className=" xl:pl-32 pl-6 mt-2 text-left text-auto !text-navy-900"
            pb={4}
          >
            Our trailer maintenance and repair services encompass thorough
            inspections, axle repairs, brake system maintenance, and more. We
            are committed to ensuring your trailers remain in excellent
            condition, promoting safety and longevity. Trust our skilled
            technicians to address all aspects of trailer maintenance, keeping
            your fleet in top shape.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className="border-2 rounded-[20px] bg-yellowColor text-black border-yellowColor py-[24px] mb-4">
          <h2>
            <AccordionButton className="flex justify-between">
              <span
                className="xl:pl-32 md:pl-4 font-bold text-black xl:text-2xl text-md"
                flex="1"
                textAlign="left"
              >
                What benefits does engine tuning provide for my vehicle?
              </span>
              <FaPlus className="xl:mr-12 xl:h-[18px] xl:w-8 text-left !text-navy-900" />
            </AccordionButton>
          </h2>
          <AccordionPanel
            className="text-left xl:pl-32 pl-6 mt-2 text-auto !text-navy-900"
            pb={4}
          >
            Engine tuning optimizes your vehicle's performance, enhancing fuel
            efficiency, power output, and overall driving experience. By
            fine-tuning the engine parameters, we maximize efficiency and
            responsiveness, resulting in improved acceleration, smoother
            operation, and reduced fuel consumption. Experience the benefits of
            peak engine performance with our expert tuning services.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className="border-2 rounded-[20px] bg-yellowColor text-black border-yellowColor py-[24px] mb-4">
          <h2>
            <AccordionButton className="flex justify-between">
              <span
                className="xl:pl-32 pl-3 font-bold text-black xl:text-2xl text-md"
                flex="1"
                textAlign="left"
              >
                What types of car repair services are available at your
                facility?
              </span>
              <FaPlus className="xl:mr-12 xl:h-[18px] xl:w-8 text-left !text-navy-900" />
            </AccordionButton>
          </h2>
          <AccordionPanel
            className="text-left xl:pl-32 pl-6  mt-2 text-auto !text-navy-900"
            pb={4}
          >
            Our facility offers a comprehensive range of car repair services,
            including routine maintenance like oil changes and brake
            inspections, as well as more extensive repairs such as engine
            diagnostics and overhauls. Whether it's minor adjustments or major
            fixes, our skilled technicians are dedicated to keeping your vehicle
            in optimal condition.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className="border-2 rounded-[20px] bg-yellowColor text-black border-yellowColor py-[24px] mb-4">
          <h2>
            <AccordionButton className="flex justify-between">
              <span
                className="xl:pl-32 pl-2 font-bold text-black xl:text-2xl text-md"
                flex="1"
                textAlign="left"
              >
                What sets your driving school apart, and what can I expect from
                the training?
              </span>
              <FaPlus className="xl:mr-12 xl:h-[18px] xl:w-8 text-left !text-navy-900" />
            </AccordionButton>
          </h2>
          <AccordionPanel
            className="text-left xl:pl-32 pl-6 text-auto mt-2 !text-navy-900"
            pb={4}
          >
            Our driving school stands out with personalized instruction,
            emphasizing safety and confidence-building. Our experienced
            instructors tailor lessons to individual needs, ensuring a thorough
            understanding of road rules and defensive driving techniques. Expect
            a supportive learning environment focused on creating skilled and
            responsible drivers prepared for real-world challenges.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default DefaultAccordion;
