import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            I'm baby kombucha 90's coloring book raclette. PBR&B quinoa
            single-origin coffee pork belly polaroid Brooklyn raw denim ennui
            crucifix paleo. Asymmetrical thundercats 90's la croix actually
            prism. Neutra synth bodega boys fit organic. Marfa celiac photo
            booth, thundercats gentrify poke pour-over quinoa ascot master
            cleanse big mood vegan XOXO. Selfies godard food truck ramps
            gorpcore knausgaard.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
