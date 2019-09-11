import React from "react";

import Skeleton from "react-loading-skeleton";

const SliderPlaceholder = () => {
  return (
    <>
      <div className="sliderParent">
        <div className="sliderChild arrow-container">
          <li className="slider-item arrow-container">
            <i class="fa fa-angle-left"></i>
          </li>
        </div>
        <div className="sliderChild">
          <ul className="slider-content">
            <li className="slider-item">
              <div className="posterPlaceholder">
                <Skeleton height={150} />
              </div>
            </li>
            <li className="slider-item">
              <div className="posterPlaceholder">
                <Skeleton height={150} />
              </div>
            </li>
            <li className="slider-item">
              <div className="posterPlaceholder">
                <Skeleton height={150} />
              </div>
            </li>
            <li className="slider-item">
              <div className="posterPlaceholder">
                <Skeleton height={150} />
              </div>
            </li>
            <li className="slider-item">
              <div className="posterPlaceholder">
                <Skeleton height={150} />
              </div>
            </li>
          </ul>
        </div>
        <div className="sliderChild arrow-container">
          <li className="slider-item arrow-container">
            <i class="fa fa-angle-right"></i>
          </li>
        </div>
      </div>
    </>
  );
};

export default SliderPlaceholder;
