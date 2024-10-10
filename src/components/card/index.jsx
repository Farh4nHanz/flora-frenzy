import PropTypes from "prop-types";

function Card({ children }) {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      {children}
    </div>
  );
}

function CardHeader({ imgSrc }) {
  return (
    <img
      src={imgSrc}
      alt="Card Image"
      className="object-cover object-center rounded-t-lg w-full max-h-1/2"
    />
  );
}

function CardBody({ children }) {
  return <div className="h-full flex flex-col px-5 pt-5 gap-3">{children}</div>;
}

function CardFooter({ children }) {
  return (
    <div className="flex justify-start items-center px-5 py-8">{children}</div>
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

const childrenProps = {
  children: PropTypes.node,
};

Card.propTypes = childrenProps;

CardHeader.propTypes = {
  imgSrc: PropTypes.string,
};

CardBody.propTypes = childrenProps;

CardFooter.propTypes = childrenProps;

export default Card;
