interface User {
  id: number,
  name: string,
  email: string
}
export default async function Home() {
  
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const result: User[] = await res.json();

  return (
    <main>
      <section className="w-11/12 mx-auto my-10">
        <p>this is home page</p>
        <div className="grid grid-cols-3 my-6 gap-4">
          {result.map((data) => <div className="p-4 border-2 rounded-lg" key={data.id}>
            {data.email}
          </div>)}
        </div>
      </section>
    </main>
  )
}
