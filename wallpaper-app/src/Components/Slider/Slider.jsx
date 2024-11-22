import React from 'react'
import "./Slider.css"
<script src="/examples/libs/ui-components/itc-slider/itc-slider.js" defer></script>
const Slider = () => {
  return (
    <div class="container">

  <div class="itc-slider" data-autoplay="true" data-interval="7000" data-loop="true" data-slider="itc-slider">
    <div class="itc-slider__wrapper">
      <div class="itc-slider__items">
        <div class="itc-slider__item">
          1
        </div>
        <div class="itc-slider__item">
          2
        </div>
        <div class="itc-slider__item">
          3
        </div>
        <div class="itc-slider__item">
          4
        </div>
        <div class="itc-slider__item">
          5
        </div>
      </div>
    </div>
    <button class="itc-slider__btn itc-slider__btn_prev"></button>
    <button class="itc-slider__btn itc-slider__btn_next"></button>
    <ol class="itc-slider__indicators">
      <li class="itc-slider__indicator" data-slide-to="0"></li>
      <li class="itc-slider__indicator" data-slide-to="1"></li>
      <li class="itc-slider__indicator" data-slide-to="2"></li>
      <li class="itc-slider__indicator" data-slide-to="3"></li>
      <li class="itc-slider__indicator" data-slide-to="4"></li>
    </ol>
  </div>

</div>
  )
}

export default Slider
