const Img = ({
  imgURL = "https://static.vecteezy.com/system/resources/thumbnails/000/696/278/small/textured-black-background.jpg",
  alt = undefined,
  rounded = false,
  className,
  ...props
}) => {
  let altText = imgURL?.match(/\/([^/]+)\.jpg$/);
  if (altText && altText[1]) {
    altText = altText[1]?.replace(/[._-]/g, " ");
  }
  let imgFinalAttibutes = {
    className: `${rounded ? "rounded-full" : ""} ${className}`,
    src: imgURL,
    ...(altText && { alt: alt }),
  };

  return <img {...props} {...imgFinalAttibutes} />;
};

export default Img;
