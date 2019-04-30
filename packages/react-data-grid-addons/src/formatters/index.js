// not including this
// it currently requires the whole of moment, which we dont want to take as a dependency
import ImageFormatter from './ImageFormatter';
import AutoResizableFormatter from './AutoResizableFormatter';
const DropDownFormatter = require('./DropDownFormatter');

const Formatters = {
  ImageFormatter,
  DropDownFormatter,
  AutoResizableFormatter
};

module.exports = Formatters;
