import { FormEvent, useRef } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
const SignIn = () => {
  const registerRef = useRef<HTMLElement>(null);
  const loginRef = useRef<HTMLElement>(null);
  const illustrationRef = useRef<HTMLElement>(null);
  const inputRegisterRef = useRef<HTMLInputElement>(null);
  const inputLoginRef = useRef<HTMLInputElement>(null);
  const registerIconRef = useRef<HTMLButtonElement>(null);
  const loginIconRef = useRef<HTMLButtonElement>(null);

  function toggleSignIn(): void {
    registerRef.current?.classList.toggle('hide');
    registerRef.current?.classList.toggle('scale-down');
    loginRef.current?.classList.toggle('hide');
    loginRef.current?.classList.toggle('scale-down');
    illustrationRef.current?.classList.toggle('swipe');
  }

  function togglePassword(el: HTMLInputElement, icon: HTMLButtonElement): void {
    const imgIcon = icon.children[0] as HTMLImageElement;
    if (el.type === 'password') {
      el.type = 'text';
      imgIcon.src = '/images/icon/eye-slashed.svg';
    } else {
      el.type = 'password';
      imgIcon.src = '/images/icon/eye.svg';
    }
  }

  function toggleShowPassword(
    el: FormEvent<HTMLInputElement>,
    icon: HTMLButtonElement
  ) {
    const element = el.target as HTMLInputElement;
    element.value
      ? icon.classList.add('active')
      : icon.classList.remove('active');
  }

  return (
    <main className="signin">
      <div className="container">
        <aside id="illustration" ref={illustrationRef}>
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
            <Link to="/">
              <img src="/images/icon/chrono-full.png" alt="Chrono" />
            </Link>
            <p>TIME MANAGEMENT ASSISTANT</p>
          </div>
          <img
            src="/images/illustration/signin-illustration.png"
            className="signin-illustration"
          />
        </aside>

        <section id="register" className="scale-down hide" ref={registerRef}>
          <div className="register-wrapper">
            <p className="register">REGISTER NOW</p>
            <h2>
              Sign up for <span>free</span>
            </h2>
            <p className="desc">
              Already have an account?{' '}
              <span className="login" onClick={toggleSignIn}>
                Log In
              </span>
            </p>
            <form action="utils/signup.php" method="POST">
              <label className="name">
                Name
                <div>
                  <input type="text" name="name" required />
                  <span className="user">
                    <img src="/images/icon/user-small.svg" />
                  </span>
                </div>
              </label>
              <label>
                Email
                <div>
                  <input type="email" name="email" required />
                  <span className="mail">
                    <img src="/images/icon/mail.svg" />
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
                    ref={inputRegisterRef}
                    onInput={(e) =>
                      toggleShowPassword(e, registerIconRef.current!)
                    }
                  />
                  <span className="lock">
                    <img src="/images/icon/lock.svg" />
                  </span>
                  <button
                    type="button"
                    className="toggle-password-register"
                    onClick={() =>
                      togglePassword(
                        inputRegisterRef.current!,
                        registerIconRef.current!
                      )
                    }
                    ref={registerIconRef}
                  >
                    <img src="/images/icon/eye.svg" />
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
        <section id="login" ref={loginRef}>
          <div className="login-wrapper">
            <p className="login">START YOU JOURNEY</p>
            <h2>
              Log in To <span>Chrono</span>
            </h2>
            <p className="desc">
              Don't have an account?{' '}
              <span className="signup" onClick={toggleSignIn}>
                Sign Up
              </span>
            </p>
            <form action="utils/signin.php" method="POST">
              <label>
                Email
                <div>
                  <input type="email" name="email" required />
                  <span className="mail">
                    <img src="/images/icon/mail.svg" />
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
                    ref={inputLoginRef}
                    onInput={(e) =>
                      toggleShowPassword(e, loginIconRef.current!)
                    }
                    required
                  />
                  <span className="lock">
                    <img src="/images/icon/lock.svg" />
                  </span>
                  <button
                    type="button"
                    className="toggle-password-login"
                    onClick={() =>
                      togglePassword(
                        inputLoginRef.current!,
                        loginIconRef.current!
                      )
                    }
                    ref={loginIconRef}
                  >
                    <img src="/images/icon/eye.svg" />
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
