export const Hero = () => {
  return (
    <section className="flex gap-20  items-center mx-auto max-w-7xl min-h-[40vh]">
      <div className="absolute w-[686px] h-[192px] top-[308px] left-[140px]">
        <h1 className="text-5xl font-bold uppercase">
          Llevamos el alto rendimiento sostenible del deporte a tu{" "}
          <span className="text-[#E8BD3C]"> vida</span>
        </h1>
        <p className="mt-6 text-[20px] mb-10">
          Somos la primera empresa en democratizar el verdadero superpoder del
          siglo XXI. La optimización de la salud, el bienestar y el alto
          rendimiento humano a través de programas de entrenamiento prácticos,
          sostenibles y escalables.
        </p>
        <div className="flex gap-4">
          <PrimaryButton />
          <PrimaryButton1 />
        </div>
        
      </div>
      <div className="absolute w-[400px] h-[500px] top-[207px] left-[890px]">
        <img src="public/img4.png " />

      </div>
    </section>
  );
};

export const PrimaryButton = () => {
  return (
    <button className="fond-lato fond-normal  bg-[#FF4081] h-12 px-4 rounded-full">
      Explora nuestros programas
    </button>
  );
};

export const PrimaryButton1 = () => {
  return (
    <button className="fond-lato fond-normal border-2 border-[#FF4081] text-[#FF4081] h-12 px-6 rounded-full">
      Contáctanos
    </button>
  );
};