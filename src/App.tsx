import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <section>
        <div>
          <h3>HTML</h3>
          <p>4 Years Experience</p>
        </div>
        <div>
          <h3>CSS</h3>
          <p>4 Years Experience</p>
        </div>
        <div>
          <h3>JavaScript</h3>
          <p>4 Years Experience</p>
        </div>
        <div>
          <h3>Accessibility</h3>
          <p>4 Years Experience</p>
        </div>
        <div>
          <h3>React</h3>
          <p>3 Years Experience</p>
        </div>
        <div>
          <h3>Sass</h3>
          <p>3 Years Experience</p>
        </div>
      </section>
      <section>
        <div>
          <h2>Projects</h2>

          <a href="/">Contact me</a>
        </div>

        <article>
          <img src="/assets/images/thumbnail-project-1-large.webp" alt="Design portfolio" />
          <h3>Design portfolio</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <div>
            <a href="/">View project</a>
            <a href="/">View code</a>
          </div>
        </article>
        <article>
          <img src="/assets/images/thumbnail-project-2-large.webp" alt="E-learning landing page" />
          <h3>E-learning landing page</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <div>
            <a href="/">View project</a>
            <a href="/">View code</a>
          </div>
        </article>
        <article>
          <img src="/assets/images/thumbnail-project-3-large.webp" alt="Todo web app" />
          <h3>Todo web app</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <div>
            <a href="/">View project</a>
            <a href="/">View code</a>
          </div>
        </article>
        <article>
          <img src="/assets/images/thumbnail-project-4-large.webp" alt="Entertainment web app" />
          <h3>Entertainment web app</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <div>
            <a href="/">View project</a>
            <a href="/">View code</a>
          </div>
        </article>
        <article>
          <img src="/assets/images/thumbnail-project-5-large.webp" alt="Memory Game" />
          <h3>Memory Game</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <div>
            <a href="/">View project</a>
            <a href="/">View code</a>
          </div>
        </article>
        <article>
          <img src="/assets/images/thumbnail-project-6-large.webp" alt="Art gallery showcase" />
          <h3>Art gallery showcase</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <div>
            <a href="/">View project</a>
            <a href="/">View code</a>
          </div>
        </article>
      </section>
      <section>
        <div>
          <h2>Contact</h2>
          <p>
            I would love to hear about your project and how I could help. Please fill in the form,
            and I’ll get back to you as soon as possible.
          </p>
        </div>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message"></textarea>
          </div>
          <button type="submit">Send message</button>
        </form>
      </section>

      <footer>adamkeyes</footer>
    </>
  );
}

export default App;
