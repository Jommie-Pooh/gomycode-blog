import { Link } from "react-router-dom";
import heroImage from "../../Assets/hero_image.jpg";
import classes from "./Home.module.css";

const Hero = () => {
  return (
    <section className={`container${classes.hero_container}`}>
      <div className="row">
        <div className="col-md-6">
          <img
            src={heroImage}
            alt="hero_image"
            className={classes.hero_image}
          />
        </div>

        <div className="col-md-6">
          <h3>About Us</h3>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
            nobis quod provident et error explicabo excepturi maxime expedita,
            ex odit rerum animi est eius, odio maiores commodi nihil esse
            minima?
          </p>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
            nobis quod provident et error explicabo excepturi maxime expedita,
            ex odit rerum animi est eius, odio maiores commodi nihil esse
            minima?
          </p>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
            nobis quod provident et error explicabo excepturi maxime expedita,
            ex odit rerum animi est eius, odio maiores commodi nihil esse
            minima?
          </p>

          <div>
            <Link to="/about" className="btn btn-secondary">
              READ MORE...
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
