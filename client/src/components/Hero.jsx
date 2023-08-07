import banner from "/img/banner.png";

export default function Hero() {
  return (
    <div className="img-banner">
      <img
        src={banner}
        loading="lazy"
        alt="img-banner"
        className="h-[21vh] w-full sm:h-[40vh] md:h-[60vh] lg:h-[75vh] xl:h-[91vh] object-cover md:object-fill"
      />
    </div>
  );
}
