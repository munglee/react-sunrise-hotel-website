import NavBar from "./NavBar";
import AboutUsImg from "./aboutus.jpg";
import Footer from "./Footer";

const AboutUs = () => {
    return (
        <div className="aboutUs">
            <header>
                <NavBar />
                <h2 className="header">The world as we see it</h2>
            </header>
            <p>
                <img className="aboutUsImg" src={AboutUsImg} />
            </p>
            <p>
                We are all individuals. Each formed by a collection of personal experiences. Every one with a library of stories to share, and like the cities where you will find us, no two are alike.
            </p>
            <p>
                Within Sunrise Hotel we celebrate this diversity of character. It is a vital part of our culture, and a distinction which inspires and influences every single guest experience.
            </p>
            <p>
                We invite you to come explore and see the world from our perspective.
            </p>

            <Footer />

        </div>
    );
};

export default AboutUs;