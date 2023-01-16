export default function Footer(): JSX.Element {
  return (
    <footer
      id="contact"
      className="mx-auto mt-32 mb-16 w-full max-w-screen-lg border-t px-2 pt-8 text-center sm:mb-20"
    >
      <h2>Let's Connect</h2>
      <p>
        <EmailLink /> at tomascarignano98@gmail.com <br />
        or find me on <LinkedinLink /> or <GithubLink />
      </p>
    </footer>
  );
}

function EmailLink() {
  return <a href="mailto:tomascarignano98@gmail.com">Shoot me an email</a>;
}

function LinkedinLink() {
  return (
    <a
      href="https://www.linkedin.com/in/tomas-carignano-aznarez-679b03210/"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn
    </a>
  );
}

function GithubLink() {
  return (
    <a
      href="https://github.com/tomascarignano98"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </a>
  );
}
