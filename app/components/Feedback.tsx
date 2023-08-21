import Image from "next/image";
import React from "react";

interface FeedbackProps {
  dark?: boolean;
}

const Feedback: React.FC<FeedbackProps> = ({ dark }) => {
  return (
    <div className="orido_tm_section">
      <div className="orido_tm_testimonials">
        <div className="container">
          <div className="orido_tm_main_title">
            <h3>
              <span>
                Valuable feedback
                <br />
                from my client
              </span>
            </h3>
          </div>
          <div className="testimonials_in">
            {/* <Image
              width={302}
              height={347}
              src={`/img/testimonials/${dark ? 2 : 1}.jpg`}
              alt=""
            /> */}
            <div className="info">
              <div className="text">
                <p>
                  “Jay&apos;s expertise in MERN stack development brought our
                  project to life. His seamless integration of MongoDB,
                  Express.js, React, and Node.js resulted in a user-friendly,
                  efficient website. His dedication, timely delivery, and
                  problem-solving skills truly impressed us.”
                </p>
              </div>
              <div className="details">
                <h3 className="name">
                  <span>Vijay Lathiya</span>
                </h3>
                <span className="job">Lathiya Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
