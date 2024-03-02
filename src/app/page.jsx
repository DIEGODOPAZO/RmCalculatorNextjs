import Form from "@/components/ui/Form";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center columns-1 w-9/10">
      <h1 className="text-accent top-3 my-10 text-6xl font-bold">
        Calcular RM
      </h1>

      <div className="flex flex-col w-9/12 sm:flex-row">
        <div className="bg-card-dark py-10 px-5 rounded w-11/12 sm:m-6/12 mx-3 my-3">
          <Form />
        </div>

        <div className="text-accent bg-card-dark py-10 px-5 rounded w-11/12 sm:m-6/12 mx-3 flex flex-col">
          <h2 className="text-4xl font-bold my-2">
            {" "}
            Porque es importante saber tu RM{" "}
          </h2>
          <p className="text-2xl">
            Entender tu Repetición Máxima (RM) es fundamental para diseñar y
            adaptar tu entrenamiento de manera efectiva. La RM te proporciona
            una medida precisa de tu fuerza máxima en un ejercicio específico,
            lo que te permite establecer objetivos realistas y medibles para tu
            progreso. Conocer tu RM te permite determinar las cargas adecuadas
            para tu entrenamiento, lo que maximiza la eficiencia y efectividad
            de tus sesiones de entrenamiento. Además, al monitorear tu progreso
            a lo largo del tiempo y ajustar tu carga de trabajo en función de
            tus RM, puedes mejorar constantemente tu fuerza y resistencia
            muscular de manera segura y efectiva. Esto no solo te ayuda a
            alcanzar tus metas de acondicionamiento físico más rápidamente, sino
            que también reduce el riesgo de lesiones al evitar el
            sobreentrenamiento o el levantamiento de pesos inapropiados. En
            resumen, conocer tu RM es una herramienta invaluable para optimizar
            tu entrenamiento, mejorar tu rendimiento y garantizar un progreso
            constante en tu camino hacia una mejor salud y forma física.
          </p>
        </div>
      </div>
    </main>
  );
}
