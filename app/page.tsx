"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const person = {
    name: "Islem",
    age: "24",
    username: "islemm.ki",
    role: "My man ❤️",
  };

  return (
    <main className="birthday-page">

      {/* ✦ Decorative stars */}
      <div className="floating-stars">✦　·　♡　·　✧　·　♡　·　✦</div>

      {/* HERO */}
      <section className="hero">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="eyebrow"
        >
          A little something for you...
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          Happy Birthday
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="hero-heart"
        >
          ♡
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="name"
        >
          {person.name}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="subtitle"
        >
          24 looks good on you.
        </motion.p>

        <motion.a
          href="#birthday"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="enter-button"
        >
          Come closer
          <span>♡</span>
        </motion.a>

      </section>

      {/* BIRTHDAY SECTION */}
      <section id="birthday" className="section">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="eyebrow"
        >
          THE BIRTHDAY OF
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My man.
        </motion.h2>

        {/* PHOTO 1 */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="photo-card"
        >
          <Image
            src="/photo1.jpg"
            width={700}
            height={900}
            alt="Islem"
            priority
          />

          <div className="photo-caption">
            <span>♡</span>
            Unfortunately... he's mine.
          </div>
        </motion.div>

        {/* INFO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="info-card"
        >
          <p className="big-name">{person.name}</p>

          <p>👤 @{person.username}</p>

          <p>🎂 {person.age} years old</p>

          <p className="pink-text">{person.role}</p>
        </motion.div>

      </section>

      {/* SECOND MEMORY */}
      <section className="section second-section">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="photo-card second-photo"
        >
          <Image
            src="/photo2.jpg"
            width={700}
            height={900}
            alt="My favorite person"
          />

          <div className="photo-caption">
            <span>♡</span>
            Still my favorite view.
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="quote"
        >
          "Your baby is so...
          <br />
           lucky enough to find you."
        </motion.p>

      </section>

      {/* LETTER */}
      <section className="letter-section">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="letter"
        >

          <p className="eyebrow">A LITTLE MESSAGE</p>

          <h2>To my birthday boy.</h2>

          <p>
            Happy birthday to my favorite headache 
          </p>

          <p>
            A year older, still annoying, still hot...
            unfortunately I still love you. 
          </p>

          <p>
            I hope your day is as cute as my tits.
          </p>

          <p>
            Now get on your knees for mommy and beg her
            to get you your birthday kiss, my birthday BabyBoy. 
          </p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="final-line"
          >
            Happy Birthday, Islem. ❤️
          </motion.div>

        </motion.div>

      </section>

      {/* FOOTER */}
      <footer>
        Made with love, obsession & a little bit of trouble ♡
      </footer>

    </main>
  );
}