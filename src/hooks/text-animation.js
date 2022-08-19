const preloadImages = (images) => {
  if (typeof window === "undefined") return Promise.resolve();

  return Promise.all(
    images.map(
      (image) =>
        new Promise((resolve) => {
          const img = new Image();
          img.addEventListener("load", resolve);
          img.addEventListener("error", resolve);
          img.src = image;
        })
    )
  );
};

const imageWidth = 100;
const imageQuality = 80;

const img = (key) =>
  `https://images.unsplash.com/${key}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=${imageWidth}&q=${imageQuality}&fit=crop`;

const images = [
  "photo-1494031021996-ac2eb738d846",
  `photo-1417533366444-43834ad6b3bb`,
  `photo-1445331552301-94139f242587`,
  `photo-1500402448245-d49c5229c564`,
  `photo-1494189726046-a896ab4fb94a`,
].map(img);

const useLogoAnimation = () => {
  let count = 0;
  let interval;

  preloadImages(images);

  const start = (event) => {
    event.persist();

    interval = setInterval(() => {
      if (count === images.length) count = 0;

      event.target.style.background = `url(${images[count]}) 0% 0% / 100% no-repeat`;
      event.target.style["-webkit-background-clip"] = "text";

      count++;
    }, 50);
  };

  const stop = () => clearInterval(interval);

  return {
    onMouseEnter: start,
    onMouseLeave: stop,
  };
};

export default useLogoAnimation;
