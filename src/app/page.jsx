import Button from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center columns-1">
      <h1 className="text-accent top-3 my-4 text-6xl fonnt-bold">
        Calcular RM
      </h1>
      
      <Button weight={1} reps={2}/>

    </main>
  );
}
