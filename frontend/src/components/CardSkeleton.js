import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CardSkeleton() {
  return (
    <div className="row">
      <div
        className="col-12 col-md-5 p-0"
        style={{ height: "70vh", width: "35vw" }}
      >
        <Skeleton height={"100%"} width={"100%"} />
      </div>
      <div className="col-12 col-md-7 d-flex align-items-center flex-column justify-content-center">
        <div className="card ms-3" style={{ width: "50vw", height: "60vh" }}>
          <div className="row g-0">
            <div className="col-md-8 p-3 d-flex flex-column gap-2">
              <Skeleton height={30} width={200} />
              <Skeleton height={20} width={100} />
              <Skeleton count={7} height={15} />
              <div className="d-flex justify-content-between">
                <Skeleton height={30} width={100} />
                <Skeleton height={30} width={100} />
                <Skeleton height={30} width={100} />
              </div>

              <div className="d-flex justify-content-end">
                <Skeleton height={20} width={200} />
              </div>
            </div>
            <div className="col-md-4 p-2 m-0">
              <Skeleton style={{ height: "100%", width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
