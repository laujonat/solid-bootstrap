const GettingStarted = () => (
  <div
    class="container mb-5 overflow-hidden mt-5"
    style={{ "padding-bottom": "200px" }}
  >
    <div class="row gy-5">
      <div>
        <h3>Overview</h3>
        <p class="lead">
          Solid-Bootstrap is a port of{" "}
          <a href="https://react-bootstrap.github.io/" target="_blank">
            React-Bootstrap
          </a>{" "}
          for{" "}
          <a href="https://www.solidjs.com/" target="_blank">
            SolidJS
          </a>
          .
        </p>
        <p>
          This is a complete implementation of the Bootstrap components using
          SolidJS. It has no dependency on either bootstrap.js or jQuery. If you
          have SolidJS setup and Solid-Bootstrap installed, you have everything
          you need.
        </p>
      </div>
      <div>
        <h3>Installation</h3>
        <p>
          We're just getting things organised at the moment. There is an
          existing <code>solid-bootstrap</code> npm package BUT IT IS NOT THIS
          ONE. An npm install will be coming over the next week or two (and may
          actually replace the one mentioned above)
        </p>
        <p>
          If you're keen to get started before then feel free to clone our{" "}
          <a
            href="https://github.com/solid-libs/solid-bootstrap"
            target="_blank"
          >
            Github repo
          </a>
          . You'll find all the components in the <code>packages</code> folder
          and examples are in the source for these docs in the{" "}
          <code>www/src</code> folder.
        </p>
        <p>
          You can also refer to the{" "}
          <a
            href="https://react-bootstrap.github.io/components/alerts"
            target="_blank"
          >
            React-Bootstrap
          </a>{" "}
          documentation to supplement this site.
        </p>
      </div>
      <div>
        <h3>Porting approach</h3>
        <p class="lead">
          We have changed as little as possible while porting this code.
        </p>
        Principles:
        <ul>
          <li>
            The goal is to capture all of the proven behaviour of{" "}
            <a
              href="https://github.com/react-bootstrap/react-bootstrap"
              target="_blank"
            >
              <code>React-Bootstrap</code>
            </a>
            ,{" "}
            <a href="https://github.com/react-restart/ui" target="_blank">
              <code>@restart/ui</code>
            </a>{" "}
            (core) and related projects.
          </li>
          <li>Keep the source file structure the same.</li>
          <li>
            Keep the source code as similar as possible to enable future commits
            to the original projects to also be pulled into this project.
          </li>
          <li>
            Enable validation of the porting approach using a side-by-side
            comparison between the ported SolidJS code and the original
            implementation.
          </li>
        </ul>
      </div>
      <div>
        <h3>Known Issues</h3>
        <ul>
          <li>none</li>
        </ul>
      </div>
    </div>
  </div>
);

export default GettingStarted;
