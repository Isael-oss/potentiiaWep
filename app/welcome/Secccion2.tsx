export const Seccion2 = () => {
    return (
        <section className="bg-[#123337] flex flex-col items-center mx-auto max-w-full min-h-[20vh] p-10 text-white relative w-[1728px] h-[1226px] top-[1114px]">
            {/* Título */}
            <div className="text-center max-w-2xl mb-12">
                <h1 className="font-Oswald font-semibold text-4xl leading-[64px] uppercase mb-6">
                    ¿TAMBIÉN SIENTES QUE EL MUNDO AVANZA MÁS RÁPIDO QUE TÚ?
                </h1>
                <p className="mt-4 text-lg mb-4">
                    No estás solo, el 70% de las personas económicamente activas en México se sienten exactamente igual atravesando una crisis de burnout porque su rendimiento no crece a la velocidad del mundo hiperproductivo.
                </p>
                <p className="text-lg">
                    Gracias al deporte entendimos los retos del desarrollo humano actual
                </p>
            </div>
            {/* Contenido principal */}
            <div className="flex items-start justify-between w-full mt-6 relative ">
                {/* Sección deportiva */}
                <div className="w-[50%] flex flex-col justify-items-start ml-auto">
                    <h2 className="text-2xl font-bold mb-10 text-stard">ALTO RENDIMIENTO DEPORTIVO</h2>
                    <img src="public/img6.png" className="w-787 max-w-[400px] h-auto" alt="Atleta" />
                </div>
                {/* Tabla comparativa con íconos */}
                <div className="w-[120%] -mx-10 ">
                        <div className="space-y-0.5">
                            {/* Item 1 */}
                            <div className="grid grid-cols-3 divide-x-4 divide-solid divide-[#DFF4F3] bg-Gray bg-opacity-10 rounded-[20px] border border-white border-opacity-20">
                                <div className="p-4 flex justify-center items-center">
                                    <img src="public/Vector.png" className="w-6 h-6" />
                                </div>
                                <div className="p-4 text-center font-semibold text-[#DFF4F3]">
                                    Metas altas y ambiciosas
                                </div>
                                <div className="p-4 flex justify-center items-center">
                                    <img src="public/Vector.png" className="w-6 h-6" />
                                </div>
                            </div>
                            {/* Item 2 */}
                            <div className="grid grid-cols-3 divide-x-4 divide-solid divide-[#DFF4F3] bg-Gray bg-opacity-10 rounded-[40px] border border-white border-opacity-20">
                                <div className="p-4 flex justify-center items-center">
                                    <img src="public/Vector.png" className="w-6 h-6" />
                                </div>
                                <div className="p-4 text-center font-semibold text-[#DFF4F3]">
                                    Altas expectativas por mantener el mejor rendimiento
                                </div>
                                <div className="p-4 flex justify-center items-center">
                                    <img src="public/Vector.png" className="w-6 h-6" />
                                </div>
                            </div>
                            {/* Item 3 */}
                            <div className="grid grid-cols-3 divide-x-4 divide-solid divide-[#DFF4F3] bg-Gray bg-opacity-10 rounded-[20px] border border-white border-opacity-20">
                                <div className="p-4 flex justify-center items-center">
                                    <img src="public/Vector.png" className="w-6 h-6" />
                                </div>
                                <div className="p-4 text-center font-semibold text-[#DFF4F3]">
                                    Altos niveles de estrés y cansancio
                                </div>
                                <div className="p-4 flex justify-center items-center">
                                    <img src="public/Vector.png" className="w-6 h-6" />
                                </div>
                            </div>
                            {/* Item 4 */}
                            <div className="grid grid-cols-3 divide-x-4 divide-solid divide-[#DFF4F3] bg-Gray bg-opacity-10 rounded-[20px] border border-white border-opacity-20">
                                <div className="p-4 flex justify-center items-center">
                                    <img src="public/Vector.png" className="w-6 h-6" />
                                </div>
                                <div className="p-4 text-center font-semibold text-[#DFF4F3]">
                                    Toma de decisiones bajo presión
                                </div>
                                <div className="p-4 flex justify-center items-center">
                                    <img src="public/Vector.png" className="w-6 h-6" />
                                </div>
                            </div>
                            {/* Item 5 */}
                            <div className="grid grid-cols-3 divide-x-4 divide-solid divide-[#DFF4F3] bg-Gray bg-opacity-10 rounded-[20px] border border-white border-opacity-20">
                                <div className="p-4 flex justify-center items-center">
                                    <img src="public/Vector.png" className="w-6 h-6" />
                                </div>
                                <div className="p-4 text-center font-semibold text-[#DFF4F3]">
                                    Trabajo en equipo eficiente para lograr las metas
                                </div>
                                <div className="p-4 flex justify-center items-center">
                                    <img src="public/Vector.png" className="w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                {/* Sección empresarial */}
                <div className="w-[50%] flex flex-col img-justify-items-end">
                    <h2 className="text-2xl font-bold mb-6 text-center">ALTO RENDIMIENTO EMPRESARIAL</h2>
                    <img src="public/img5.png" className="w-952 max-w-[400px] h-auto"  alt="Mujer empresaria" />
                  </div>  
                </div> 
            {/* Botón */}
            <div className="mt-6">
                <button className="bg-pink-500 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-md hover:bg-pink-600 transition-colors">
                    Descargar guía para la gestión del estrés
                </button>
            </div>
        </section>
    );
};