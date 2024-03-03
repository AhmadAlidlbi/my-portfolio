export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Ahmad</p>
          <h1 className="hero--section--title">
            <span className="hero--section--tile--color">Mobile Application</span>{" "}
            <b/>
            Developer
          </h1>
          <p className="Hero--section--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br/>
            Ratione distinctio ipsam dolorum possimus omnis!
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
