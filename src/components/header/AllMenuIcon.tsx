"use client";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import HiddenMenuItems from "./HiddenMenuItems";

interface Props {
  categories: string[];
}

const AllMenuIcon = ({ categories }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const divRef = useRef<HTMLDivElement | null>(null);
  const hiddenMenuRef = useRef(null);

  // functions
  const closeMenuOnOutsideClick = (event: React.MouseEvent) => {
    const target = event?.target as Node;
    if (target?.contains(divRef?.current)) {
      setShowMenu(!target?.contains(divRef?.current));
    }
  };

  useEffect(() => {
    const handleCloseMenu = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const current = hiddenMenuRef.current as HTMLElement | null;
      if (target?.nodeName === "A" && current?.contains(target)) {
        setShowMenu((prev) => !prev);
      }
    };
    document.addEventListener("click", handleCloseMenu);

    return () => document.removeEventListener("click", handleCloseMenu);
  }, []);
  return (
    <AnimatePresence>
        <li  className=" border border-secondary hover:border-white/90 duration-200">
        {/* MENU BUTTON */}
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="p-1 flex items-center gap-2 text-white"
          >
            <span>
              <IoMenuOutline size={24} />
            </span>
            All
          </button>
        {showMenu && (
          <motion.div
            ref={divRef}
            onClick={closeMenuOnOutsideClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
            className="absolute w-full h-screen top-0 left-0 bg-primary/70  text-black"
          >
            <motion.div
              initial={{ x: -150, opacity: 0.4 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.3 }}
              className="w-full md:w-1/2 lg:w-1/3 h-screen bg-white  relative"
            >
              <button
                onClick={() => setShowMenu((prev) => !prev)}
                className="absolute top-2 right-2 md:-right-8 hover:text-darkYellow text-white z-50"
              >
                <MdClose size={32} />
              </button>
              <div className="overflow-auto w-full h-full">
                <div ref={hiddenMenuRef}>
                  <HiddenMenuItems categories={categories} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
    </li>
      </AnimatePresence>
  );
};

export default AllMenuIcon;
