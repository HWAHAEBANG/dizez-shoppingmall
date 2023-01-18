import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../styled/foldoutSlider.css";
import MainButton from "./ui/MainButton";

export default function FoldoutSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className='navigation-wrapper'>
        <div ref={sliderRef} className='keen-slider'>
          <div className='keen-slider__slide number-slide1'>
            <div className='container-left'>
              <img
                className='main_2'
                src='./image/main/main_2.jpg'
                alt='image1'
              />
            </div>
            <div className='container-right'>
              <div className='text_container_1'>
                <p className='subTitle'>
                  <span>New</span> COLLECTION
                </p>
                <p className='title'>
                  Meet New
                  <br />
                  Fashion Week
                </p>
                <MainButton text='Shop Now' bgcolor='black' color='white' />
              </div>
            </div>
          </div>
          <div className='keen-slider__slide number-slide2'>
            <div className='container-left'>
              <img
                className='main_1'
                src='./image/main/main_1.jpg'
                alt='image2'
              />
            </div>
            <div className='container-right'>
              <div className='text_container_2'>
                <p className='subTitle'>
                  <span>New</span> COLLECTION
                </p>
                <p className='title'>
                  Meet New
                  <br />
                  Fashion Week
                </p>
                <MainButton text='Shop Now' bgcolor='white' color='black' />
              </div>
            </div>
          </div>
          <div className='keen-slider__slide number-slide3'>
            <div className='container-left'>
              <img
                className='main_3'
                src='./image/main/main_3.jpg'
                alt='image3'
              />
            </div>
            <div className='container-right'>
              <div className='text_container_3'>
                <p className='subTitle'>
                  <span>New</span> COLLECTION
                </p>
                <p className='title'>
                  Meet New
                  <br />
                  Fashion Week
                </p>
                <MainButton text='Shop Now' bgcolor='black' color='white' />
              </div>
            </div>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className='dots'>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
}

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      {props.left && (
        <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
      )}
      {!props.left && (
        <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
      )}
    </svg>
  );
}
