/** @jsx jsx */
/** @jsxFrag React.Fragment */
// eslint-disable-next-line
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { css, jsx } from "@emotion/core";
import SliderContent from "./SliderContent";
import Slide from "./Slide";
import Arrow from "./AutoPlayArrow";
import Dots from "./Dots";
/**
 * @function Slider
 */
const Slider = props => {
  const ref = useRef();
  const [sliderWidth, setSliderWidth] = useState(0);
  const [intervalId, setIntervalId] = useState();
  const { slides } = props;
  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const lastSlide = slides[slides.length - 1];

  const [state, setState] = useState({
    activeSlide: 0,
    translate: sliderWidth,
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide]
  });

  const { activeSlide, translate, _slides, transition } = state;

  const autoPlayRef = useRef();
  const transitionRef = useRef();
  const resizeRef = useRef();

  useLayoutEffect(() => {
    setSliderWidth(ref.current.offsetWidth);
    setState({ ...state, translate: ref.current.offsetWidth });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
  });

  const play = () => {
    autoPlayRef.current();
  };

  useEffect(() => {
    const smooth = e => {
      if (e.target.className.includes("SliderContent")) {
        transitionRef.current();
      }
    };

    if (ref.current !== null) {
      setSliderWidth(ref.current.offsetWidth);
    }

    const resize = () => {
      if (ref.current !== null) {
        setSliderWidth(ref.current.offsetWidth);
      }
    };

    const transitionEnd = window.addEventListener("transitionend", smooth);
    const onResize = window.addEventListener("resize", resize);

    const id = setInterval(play, true * 6500);
    setIntervalId(id);
    return () => {
      window.removeEventListener("transitionend", transitionEnd);
      window.removeEventListener("resize", onResize);
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transition]);

  const handleResize = () => {
    setState({ ...state, translate: sliderWidth, transition: 0 });
  };

  const smoothTransition = () => {
    let _slides = [];

    // We're at the last slide.
    if (activeSlide === slides.length - 1)
      _slides = [slides[slides.length - 2], lastSlide, firstSlide];
    // We're back at the first slide. Just reset to how it was on initial render
    else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide];
    // Create an array of the previous last slide, and the next two slides that follow it.
    else _slides = slides.slice(activeSlide - 1, activeSlide + 2);

    setState({
      ...state,
      _slides,
      transition: 0,
      translate: sliderWidth
    });
  };

  const nextSlide = () => {
    setState({
      ...state,
      translate: translate + sliderWidth,
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1
    });
  };

  const prevSlide = () => {
    setState({
      ...state,
      translate: 1,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1
    });
  };

  const autoPlayReset = () => {
    clearInterval(intervalId);
    const id = setInterval(play, true * 6500);
    setIntervalId(id);
  };

  return (
    <div css={SliderCSS} ref={ref}>
      {state.translate !== 0 ? (
        <>
          <SliderContent
            translate={translate}
            transition={transition}
            width={sliderWidth * _slides.length}
          >
            {_slides.map((_slide, i) => (
              <Slide width={sliderWidth} key={_slide + i} content={_slide} />
            ))}
          </SliderContent>

          <Arrow
            direction="left"
            handleClick={() => {
              prevSlide();
              autoPlayReset();
            }}
          />
          <Arrow
            direction="right"
            handleClick={() => {
              nextSlide();
              autoPlayReset();
            }}
          />

          <Dots slides={slides} activeSlide={activeSlide} />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

const SliderCSS = css`
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
`;

export default Slider;
