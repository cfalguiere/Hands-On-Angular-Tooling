/**
 * Provide some formula
 *
 * @param  {String} html
 * @return {String}
 */
module.exports = {
  /**
   * Compute the circumference of a circle.
   *
   * @param  {float} r
   * @return {float}
   */
  circumference: function (r) {
    return 2 * PI * r;
  },
  /**
   * Compute the area of a square.
   *
   * @param  {float} r
   * @return {float}
   */
  squareArea: function (r) {
    return r * r;
  }
};
