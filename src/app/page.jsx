import Form from "@/components/ui/Form";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center columns-1">
      <h1 className="text-accent top-3 my-4 text-6xl fonnt-bold">
        Calcular RM
      </h1>

      <div className="bg-card-dark py-10 px-5 rounded">
        <Form />
      </div>
    </main>
  );
}
