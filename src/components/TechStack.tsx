"use client";
import Image from "next/image";
import { techImage } from "@/constants";
import { motion } from "framer-motion";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@heroui/react";

const fadeAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const TechStack = () => {
  return (
    <div className="flex flex-col gap-4 text-center ">
      <div className="flex justify-center place-items-center">
        <h1 className="flex flex-wrap border-b-2 border-b-slate-600 dark:border-b-cyan-800 text-lg font-semibold">
          Tech Stack
        </h1>
      </div>
      <div className="flex flex-wrap justify-center place-items-center gap-5 sm:gap-5 dark:border-b-cyan-800 text-black min-[320px]:px-0 min-[320px]:pb-1">
        {techImage.map((item, index) => (
          <motion.div
            key={item.alt}
            variants={fadeAnimationVariants}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            custom={index}
          >
            <Popover placement="bottom" showArrow={true}>
              <PopoverTrigger>
                <Button
                  className="h-14 bg-linear-to-r from-neutral-300 via-neutral-400 to-neutral-600 hover:bg-linear-to-br dark:bg-linear-to-r dark:from-slate-600 dark:via-slate-700 dark:to-slate-800 dark:hover:bg-linear-to-br border-neutral-500 dark:border-gray-600"
                  variant="bordered"
                >
                  <Image
                    src={item.imgURL}
                    alt={item.alt}
                    width={500}
                    height={500}
                    className={`w-10 h-auto cursor-pointer`}
                    // priority
                  />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2 w-48">
                  <div className="text-small font-bold text-center">
                    {item.title}
                  </div>
                  <div className="text-tiny">{item.desc}</div>
                </div>
              </PopoverContent>
            </Popover>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
