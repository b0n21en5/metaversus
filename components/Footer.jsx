'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { footerVariants } from '../utils/motion';
import { socials } from '../constants';

const Footer = () => (
  <motion.footer variants={footerVariants} initial="hidden" whileInView="show" className={`${styles.paddings} py-8 relative`}>
    <div className="footer-gradient" />
    <div className={`${styles.paddings} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-wrap items-center justify-between gap-5 ">
        <h4 className="md:text-[64px] text-[44px] font-bold text-white ">Enter the metaverse</h4>
        <button type="button" className="flex items-center h-fit py-4 px-6 rounded-[32px] gap-[12px] bg-[#25618d] ">
          <img src="/headset.svg" alt="headset" className="w-[24px] h-[24px] object-contain" />
          <span className="font-normal text-[16px] text-white">ENTER METAVERSE</span>
        </button>
      </div>
      <div>
        <div className="mb-[50px] h-[2px] bg-white opacity-10 " />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h4 className="font-extrabold text-[24px] text-white">METAVERSUS</h4>
          <p className="font-normal text-[14px] text-white opacity-50">METAVERUS Copyright © 2021 - 2022 Metaversus. All rights reserved.</p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <img key={social.name} src={social.url} alt={social.name} className="w-[24px] h-[24px] object-contain cursor-pointer" />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
