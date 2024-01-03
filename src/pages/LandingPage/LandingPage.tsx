import { Link } from 'react-router-dom';
import { Navbar } from '../../components';
import FeatureCard from '../../components/FeatureCard';
import ActivityListing from './ActivityListing';
import ScheduleManagement from './ScheduleManagement';
import PrioritizingActivities from './PrioritizingActivities';
import ReminderNotification from './ReminderNotification';
import TimeVisualization from './TimeVisualization';
import './landing-page.css';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main id="home">
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
        <img src="assets/images/index/feature-left.svg" className="left" />
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
    </>
  );
};
export default LandingPage;
