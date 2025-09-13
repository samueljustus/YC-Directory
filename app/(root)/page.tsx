import SearchForm from "@/app/components/SearchForm";
export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {

  const query = (await searchParams).query
  return (
    <section className="">

      <div className="px-10 py-5 bg-black">
        <h1 className=" text-white px-6 py-4">Home</h1>
      </div>

      <SearchForm query={query} />
    </section>
  );
}
