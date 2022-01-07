import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, url, imageSource, text }) => {
  return (
    <section>
      <div className="card text-center bg-dark animate__animated animate__fadeInUp">
        <div className="overflow">
          <img src={imageSource} alt={title} className="card-img-top" />
        </div>
        <div className="card-body text-light">
          <h4 className="card-title">{title}</h4>
          <p className="card-text text-secondary">
            {text
              ? text
              : `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
          praesentium commodi ullam nostrum quia mollitia illo ea, deserunt,
          incidunt ratione eum eaque doloribus eligendi perspiciatis laudantium!
          Nulla tenetur vel necessitatibus.`}
          </p>
          <a
            className="btn btn-outline-secondary rounded-0"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            {title}
          </a>
        </div>
      </div>
    </section>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  text: PropTypes.string,
};

export default Card;
