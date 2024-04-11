import React from "react";
import bg from "../images/bg.jpg";
import intro from "../images/intro.jpg";
import "./Reviews.css";
import ReviewCard from "./ReviewCard";

export default function Reviews() {
  return (
    <div className="bg container " id="reviews">
      <h4 className="text-uppercase first-heading ">Where Adventures Begin:</h4>
      <h2 className="brand-name  ms-2 ">Safar</h2>
      <h2 className="second-heading ">Customer Reviews</h2>
      <div className="row mt-4">
        <div className="col-12 col-sm-6">
          <div className="row ">
            <div className="col">
              <ReviewCard
                username={"Bikash Dalai"}
                destination={"Goa Trip"}
                text={`Safar exceeded all expectations! Their exceptional attention to detail made our trip unforgettable. `}
              />
            </div>
            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <ReviewCard
                username={"Anshuman Saini"}
                destination={"Sikkim Trip"}
                text={`Safar made our trip unforgettable! Exceptional service and
            breathtaking experiences. Highly recommend!`}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ReviewCard
                username={"Aakash"}
                destination={"Manali Trip"}
                text={`Our trip was amazing! The experiences they curated for us were truly breathtaking.`}
              />
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
