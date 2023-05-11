import image from '../images/carmensd.jpeg'; // Tell webpack this JS file uses this image

function Photo() {
  return <img src={image} className="rounded mx-auto d-block" alt="Logo" />;
}

export default Photo;