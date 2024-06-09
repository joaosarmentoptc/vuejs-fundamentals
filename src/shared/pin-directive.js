/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
export default function (element, binding) {
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });

  element.style.position = 'absolute';
}
