import { Link } from 'react-router-dom';
import './SignIn.css';
const SignIn = () => {
  return (
    <main className="signin">
      <div className="container">
        <aside id="illustration">
          <img
            src="/images/blob/login-left.svg"
            className="float left"
            loading="lazy"
          />
          <img
            src="/images/blob/login-right.svg"
            className="float right"
            loading="lazy"
          />
          <div className="description">
            <a href="/">
              <img src="/images/sign-in/logo.png" alt="Chrono" />
            </a>
            <p>TIME MANAGEMENT ASSISTANT</p>
          </div>
          <img
            src="/images/sign-in/illustration.png"
            className="signin-illustration"
          />
        </aside>

        <section id="register" className="scale-down hide">
          <div className="register-wrapper">
            <p className="register">REGISTER NOW</p>
            <h2>
              Sign up for <span>free</span>
            </h2>
            <p className="desc">
              Already have an account? <span className="login">Log In</span>
            </p>
            <form action="utils/signup.php" method="POST">
              <label className="name">
                Name
                <div>
                  <input type="text" name="name" required />
                  <span className="user">
                    <img src="/images/sign-in/user.svg" />
                  </span>
                </div>
              </label>
              <label>
                Email
                <div>
                  <input type="email" name="email" required />
                  <span className="mail">
                    <img src="/images/sign-in/mail.svg" />
                  </span>
                </div>
              </label>
              <label>
                Password
                <div>
                  <input
                    type="password"
                    name="password"
                    id="register-password"
                    required
                    /* oninput="toggleRegisterPassword()" */
                  />
                  <span className="lock">
                    <img src="/images/sign-in/lock.svg" />
                  </span>
                  <button
                    type="button"
                    className="toggle-password-register" /* onclick="togglePasswordRegister()" */
                  >
                    <img src="//images/sign-in/eye.svg" />
                  </button>
                </div>
              </label>
              <button type="submit">SIGN UP</button>
            </form>
            <p className="policy">
              <small>
                By clicking Sign Up, you agree to our Terms and that you have
                read our <a href="#">Privacy Policy</a>
              </small>
            </p>
          </div>
        </section>
        <section id="login">
          <div className="login-wrapper">
            <p className="login">START YOU JOURNEY</p>
            <h2>
              Log in To <span>Chrono</span>
            </h2>
            <p className="desc">
              Don't have an account? <span className="signup">Sign Up</span>
            </p>
            <form action="utils/signin.php" method="POST">
              <label>
                Email
                <div>
                  <input type="email" name="email" required />
                  <span className="mail">
                    <img src="/images/sign-in/mail.svg" />
                  </span>
                </div>
              </label>
              <label>
                Password
                <div>
                  <input
                    type="password"
                    name="password"
                    id="login-password"
                    required /* oninput="toggleLoginPassword()" */
                  />
                  <span className="lock">
                    <img src="/images/sign-in/lock.svg" />
                  </span>
                  <button
                    type="button"
                    className="toggle-password-login" /* onclick="togglePasswordLogin()" */
                  >
                    <img src="//images/sign-in/eye.svg" />
                  </button>
                </div>
              </label>
              <button type="submit">LOG IN</button>
            </form>
            <p className="policy">
              <small>
                By clicking Log In, you agree to our Terms and that you have
                read our <a href="#">Privacy Policy</a>
              </small>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};
export default SignIn;
