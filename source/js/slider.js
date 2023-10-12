const slider = document.querySelector('.catalog__range');
const minValueInput = document.querySelector('.catalog__price-min');
const maxValueInput = document.querySelector('.catalog__price-max');

const state = {
  uiSlider: {
    range: {
      min: 0,
      max: 1050,
    },
    step: 10,
    values: [0, 900],
  } 
}

noUiSlider.create(slider, {
  start: state.uiSlider.values,
  connect: true,
  range: state.uiSlider.range,
  step: noUiSlider.step,
});

const updateSliderValues = (min, max) => {
  state.uiSlider.values[0] = min;
  state.uiSlider.values[1] = max;
}

const changeSliderValues = () => {
  slider.noUiSlider.set(state.uiSlider.values)
}

const updateInputs = () => {
  minValueInput.value = parseInt(state.uiSlider.values[0], 10);
  maxValueInput.value = parseInt(state.uiSlider.values[1], 10)
}

slider.noUiSlider.on('update', (newValues)=> {
  state.uiSlider.values = newValues;
  updateInputs();
})

minValueInput.addEventListener('change', (evt) => {
  updateSliderValues(evt.target.value, state.uiSlider.values[1]);
  changeSliderValues();
})

maxValueInput.addEventListener('change', (evt) => {
  updateSliderValues(state.uiSlider.values[0], evt.target.value);
  changeSliderValues();
})