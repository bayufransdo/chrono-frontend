import { useState, SyntheticEvent, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, FeatureCard, TeamCard } from '../../components';
import {
  ActivityListing,
  ScheduleManagement,
  PrioritizingActivities,
  ReminderNotification,
  TimeVisualization,
  Whatsapp,
  Facebook,
  Instagram,
} from './icon';
import './landing-page.css';

const LandingPage = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const alertRef = useRef<HTMLDivElement>(null);

  async function formSubmit(e: SyntheticEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    const body = new FormData(e.target as HTMLFormElement);
    alertRef.current!.classList.remove('show');
    setLoader(true);
    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbyQSapm3WEF4HQYwBaP8hIA6gq7Q1WDCRIM3tgLdlFmuce4KW8ggVWe18HELWnRjFzr/exec',
        {
          method: 'POST',
          body,
        }
      );
      (e.target as HTMLFormElement).reset();
      alertRef.current!.classList.add('show');
      setLoader(false);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <Navbar />
      <main className="landing-page bg-red-400" id="home" >
        <img src="/images/blob/main-left.svg" className="floating left" />
        <img src="/images/blob/main-right-1.svg" className="floating right-1" />
        <img src="/images/blob/main-right-2.svg" className="floating right-2" />
        <div className="container container-main">
          <section className="main-content">
            <div className="description">
              <p className="title">TIME MANAGEMENT ASSISTANT</p>
              <h1>
                Stay Productive With <span>Chrono</span>
              </h1>
              <p className="description-text">
                An innovative solution that helps you plan and manage your time
                smartly. Find the perfect balance between work, personal life
                and your dream, all in one easy-to-use app.
              </p>
              <div>
                <Link to="/signin">Get started Now!</Link>
              </div>
            </div>
          </section>
          <aside className="illustration">
            <div className="img-container">
              <img
                src="/images/illustration/main-illustration.webp"
                alt="illustration"
              />
              <div className="floating success">
                <img src="/images/illustration/success.svg" />
              </div>
              <div className="floating productivity">
                <img src="/images/illustration/productivity.svg" />
              </div>
              <div className="floating time">
                <img src="/images/illustration/time.svg" />
              </div>
            </div>
          </aside>
        </div>
      </main>
      <section id="features">
        <img src="/images/blob/feature-left.svg" className="left" />
        <div className="container container-features">
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
        <div className="container container-team">
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
        <div className="container container-contact">
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
              <div className={`alert-loader ${loader ? '' : 'hide'}`}></div>
              <div className={`alert__form`} ref={alertRef}>
                <img src="/images/icon/success.svg" />
                <p className="alert__form__message">
                  Your Message has been Submitted!
                </p>
              </div>
              <form
                className={`form ${loader ? 'hide' : ''}`}
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
        <div className="container container-footer">
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
              &copy; Copryright Chrono. All Rights Reserved Designed by{' '}
              <u>Team 3 Mini-PBL TRPL 1A</u>
            </small>
          </p>
        </div>
      </footer>
    </>
  );
};
export default LandingPage;
