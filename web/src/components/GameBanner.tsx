import { useContext } from 'react';
import { APIContext } from '../context/Provider';

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React, { useState } from "react";
import "./bannerStyles.css";
{/* grid grid-cols-6 gap-6 mt-16  overflow-hidden relative touch-pan-y select-none w-[80%]*/}

export default function GameBanner() {
  const { games } = useContext(APIContext);
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slides: {
      perView: 5,
      spacing: 20,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })
  


  return (
    <>
    <div className="navigation-wrapper w-[80%] transition-all">
      <div ref={sliderRef} className="keen-slider mt-16">
          {games.map(game => {
          return (
            <div key={game.id} className={`keen-slider__slide rounded`}>
              <a>
                <img src={game.bannerUrl} alt={game.title + "Image"} />
        
                <div className='w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0'>
                  <strong className='font-bold text-white block'>{game.title}</strong>
                  <span className='text-zinc-300 text-sm block'>{game._count.ads} anuncio(s)</span>
                </div>
              </a>
            </div>
          )})}
      </div>
      {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
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
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}

function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}
