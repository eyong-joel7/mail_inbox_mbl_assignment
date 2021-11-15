import { Link } from "react-router-dom";

function Hero({numUnread, numMessages}) {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="hero_title">
          <h1>You have <span>{numUnread}</span> unread messages of <span>{numMessages}</span></h1>
        </div>
        <div className="btn_wrapper">
          <Link to="/messages" className="btn">
            View now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
