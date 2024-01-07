import { useState, SyntheticEvent, useRef } from "react";
import { Link } from "react-router-dom";
import { Navbar, FeatureCard, TeamCard } from "../../components";
import {
  ActivityListing,
  ScheduleManagement,
  PrioritizingActivities,
  ReminderNotification,
  TimeVisualization,
  Whatsapp,
  Facebook,
  Instagram,
} from "./icon";
// import "./landing-page.css";

const LandingPage = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const alertRef = useRef<HTMLDivElement>(null);

  async function formSubmit(e: SyntheticEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    const body = new FormData(e.target as HTMLFormElement);
    alertRef.current!.classList.remove("show");
    setLoader(true);
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyQSapm3WEF4HQYwBaP8hIA6gq7Q1WDCRIM3tgLdlFmuce4KW8ggVWe18HELWnRjFzr/exec",
        {
          method: "POST",
          body,
        },
      );
      (e.target as HTMLFormElement).reset();
      alertRef.current!.classList.add("show");
      setLoader(false);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <Navbar />
      <main id="home" className="landing-page  relative p-10">
        <img
          src="/images/blob/main-left.svg"
          className="floating left absolute left-[-30px] top-[-100px] md:left-0"
        />
        <img
          src="/images/blob/main-right-1.svg"
          className="floating absolute right-1 hidden md:right-0 md:top-0 md:block md:w-[500px]"
        />
        <img
          src="/images/blob/main-right-2.svg"
          className="floating absolute right-2 hidden md:right-0 md:top-0 md:block md:w-[600px]"
        />
        <div className="container-main container mx-auto flex flex-col p-5 md:flex-row md:flex-nowrap ">
          <section className="main-content md:w-1/2">
            <div className="description animate-fade-in px-5">
              <p className="title mb-5 text-sm font-bold tracking-[3px] text-main md:text-base md:tracking-[5px] md:text-main">
                TIME MANAGEMENT ASSISTANT
              </p>
              <h1 className="mb-5 text-4xl font-extrabold text-dark md:max-w-[400px] md:text-5xl xl:text-[3.5rem]">
                Stay Productive With <span className="text-main">Chrono</span>
              </h1>
              <p className="description-text mb-7 text-base leading-6 tracking-normal text-dark md:max-w-[450px] md:text-justify md:text-base md:text-dark">
                An innovative solution that helps you plan and manage your time
                smartly. Find the perfect balance between work, personal life
                and your dream, all in one easy-to-use app.
              </p>
              <div className="after:animate-move-right h-10  w-[230px] overflow-hidden rounded-[20px] border-[1px] border-solid border-main after:ml-[5%] after:content-[url('/images/icon/arrow-big.svg')] md:h-10 md:max-w-[380px] md:rounded-[30px] xl:h-[50px] xl:min-w-[380px]">
                <Link
                  to="/signin"
                  className="inline-block h-full w-3/4 rounded-[20px] bg-main text-center text-xs leading-10 text-white transition-[width] duration-500 hover:w-full hover:opacity-80 md:rounded-[30px] md:text-[0.8rem] md:leading-10 xl:text-[1rem] xl:leading-[50px]"
                >
                  Get started Now!
                </Link>
              </div>
            </div>
          </section>
          <aside className="illustration animate-fade-in px-[30px] py-5 md:w-1/2 md:p-0 ">
            <div className="img-container relative">
              <img
                src="/images/illustration/main-illustration.webp"
                alt="illustration"
                className="md:mx-auto md:max-w-[90%] xl:max-w-[85%]"
              />
              <div className="floating success md xl:left=[280px] absolute bottom-[-30px] left-[140px] flex size-[70px] scale-[0.7] items-center justify-center rounded-[10px] bg-[#fdd527] shadow-md md:bottom-[-75px] md:left-[calc(100%-50%-width)] md:scale-[0.8] xl:bottom-[-75px] xl:scale-100">
                <img
                  src="/images/illustration/success.svg"
                  className="size-10 text-white"
                />
              </div>
              <div className="floating productivity absolute top-5 flex size-[70px] scale-[0.7] items-center justify-center rounded-[10px] bg-[#ff635e] shadow-md md:left-[60px] md:top-0 md:scale-[0.7] xl:left-[60px] xl:top-[20px] xl:scale-[0.9]">
                <img
                  src="/images/illustration/productivity.svg"
                  className="mx-[15px] size-10"
                />
              </div>
              <div className="floating time absolute right-0 top-0 flex size-[70px] scale-50 items-center justify-center rounded-[10px] bg-[#6f41f1] shadow-md md:right-0 md:top-0 md:scale-[0.6] xl:right-[90px] xl:top-[20px] xl:scale-[0.7]">
                <img
                  src="/images/illustration/time.svg"
                  className="size-10 text-white"
                />
              </div>
            </div>
          </aside>
        </div>
      </main>
      <section id="features">
        <img src="/images/blob/feature-left.svg" className="left" />
        <div className="container-features container">
          <div className="description">
            <h2>
              <span>Chrono</span> Features
            </h2>
            <p>
              We want to change the way people view and utilize time, bringing
              efficiently, focus and satisfaction to every second spend
            </p>
          </div>
          <div className="feature-container">
            <FeatureCard
              cardOrder="item-1"
              Icon={ActivityListing}
              featureName="Activity Listing"
              featureDetail="Record each task and activity with details such as title, description,
          date and priority"
            />
            <FeatureCard
              cardOrder="item-2"
              Icon={ScheduleManagement}
              featureName="Schedule Management"
              featureDetail="Easily plan your daily, weekly or monthly schedule and customize the time as you wish."
            />
            <FeatureCard
              cardOrder="item-3"
              Icon={PrioritizingActivities}
              featureName="Prioritizing Activities"
              featureDetail="Give priority marks to crucial tasks to help you stay focused on what's important."
            />
            <FeatureCard
              cardOrder="item-4"
              Icon={ReminderNotification}
              featureName="Reminders & Notifications"
              featureDetail="Stay informed with reminders and notifications that help you stick to deadlines."
            />
            <FeatureCard
              cardOrder="item-5"
              Icon={TimeVisualization}
              featureName="Time Visualization"
              featureDetail="Monitor and analyze your time usage through clear data visualizations."
            />
          </div>
        </div>
      </section>
      <section id="team">
        <div className="container-team container">
          <div className="description">
            <h2>
              <span>Chrono</span> Team
            </h2>
            <p>
              Welcome to Team Chrono! Here you can get to know those of us
              dedicated to bringing Chrono into your life.
            </p>
          </div>

          <div className="team-wrapper">
            <div className="team-container">
              <TeamCard
                name="Al Ghazali"
                role="Analyst"
                imgUrl="/images/team/ali.png"
              />
              <TeamCard
                name="Ibnu Hanif"
                role="Designer"
                imgUrl="/images/team/ibnu.png"
              />
              <TeamCard
                name="Bayu Maulana"
                role="Developer"
                imgUrl="/images/team/bayu.png"
              />
              <TeamCard
                name="Ajeng Wulan"
                role="Developer"
                imgUrl="/images/team/ajeng.png"
              />
              <TeamCard
                name="Dwi Nurul"
                role="Analyst"
                imgUrl="/images/team/dwi.png"
              />
              <TeamCard
                name="Miftahul Fazra"
                role="Analyst"
                imgUrl="/images/team/fazra.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="container-contact container">
          <div className="description">
            <h2>
              <span>Chrono</span> Contact
            </h2>
            <p>
              Are you looking for help or have any questions? Drop us a message
              in this form!
            </p>
          </div>
          <div className="contact-form-container">
            <div className="form-wrap">
              <div className={`alert-loader ${loader ? "" : "hide"}`}></div>
              <div className={`alert__form`} ref={alertRef}>
                <img src="/images/icon/success.svg" />
                <p className="alert__form__message">
                  Your Message has been Submitted!
                </p>
              </div>
              <form
                className={`form ${loader ? "hide" : ""}`}
                onSubmit={formSubmit}
              >
                <input type="email" placeholder="Email" name="Email" required />
                <textarea
                  placeholder="Message"
                  name="Message"
                  required
                ></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
            <div className="illustration">
              <img
                src="/images/illustration/contact-illustration.webp"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container-footer container">
          <div className="company">
            <a href="https://polibatam.ac.id" target="_blank">
              <img src="/images/icon/polibatam-white.png" />
            </a>
            <a
              href="https://if.polibatam.ac.id/teknologi-rekayasa-perangkat-lunak/"
              target="_blank"
            >
              <img src="/images/icon/trpl-white.png" />
            </a>
            <a href="/">
              <img src="/images/icon/chrono-white.png" />
            </a>
          </div>
          <p className="desc">
            Chrono is a web-based Time Management Asisstant for productivity
            optimization
          </p>
          <div className="logo-container">
            <a href="#" className="svg-wrap">
              <Instagram />
            </a>
            <a href="#" className="svg-wrap">
              <Facebook />
            </a>
            <a href="#" className="svg-wrap">
              <Whatsapp />
            </a>
          </div>
          <p className="copyright">
            <small>
              &copy; Copryright Chrono. All Rights Reserved Designed by{" "}
              <u>Team 3 Mini-PBL TRPL 1A</u>
            </small>
          </p>
        </div>
      </footer>
    </>
  );
};
export default LandingPage;
