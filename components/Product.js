// const React = require('react')
//
// class Product extends React.Component{
//   render(){
//     return(
//       <div className="product">
//         <h1>Name: {this.props.name}</h1>
//         <ul>
//           <li>Producer: {this.props.producer}</li>
//           <li>Has Watermark? {this.props.hasWatermark}</li>
//           <li>Color: {this.props.color}</li>
//           <li>Weight: {this.props.weight}</li>
//           <li></li>
//         </ul>
//       </div>
//     )
//   }
// }
//
// Product.defaultProps = {
//   hasWatermark: false,
// }
//
// Product.propTypes = {
//   name: React.PropTypes.string.isRequired,
//   producer: React.PropTypes.string,
//   hasWatermark: React.PropTypes.bool,
//   color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
//   weight: (props, propName) => {
//     const weight = props[propName];
//     if (weight === undefined) {
//       return new Error("The 'weight' prop is required.");
//     }
//     if (isNaN(weight)) {
//       return new Error("The 'weight' prop is not a number.")
//     }
//     const isValidWeight = weight > 80 && weight < 300;
//     if (!isValidWeight) {
//       return new Error('The `weight` prop should range between 80 and 300.')
//     }
//   }
// }
//
// module.exports = 'Product'

const React = require('react');
class Product extends React.Component {
  render() {
    return (
      <ul>
        <li>name: {this.props.name}</li>
        <li>producer {this.props.producer}</li>
        <li>{this.props.hasWatermark ? 'Watermarked' : 'No Watermark'}</li>
        <li>color: {this.props.color}</li>
        <li>weight: {this.props.weight}</li>
      </ul>
    )
  }
}



function rightWeight(props, propName){
    let value = props[propName];
    if(value === undefined){
      return new Error ('required')
    }
    if(isNaN(value)){
      return new Error ('must be a number')
    }
      if (value <= 80 || value >= 300) {
        return new Error ('whoops')
      }
}
Product.defaultProps = {
  hasWatermark: false
}
Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: rightWeight


}
module.exports = Product
