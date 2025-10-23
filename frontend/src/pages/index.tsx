import UserInterface from "@/components/UserInterface";

const Home: React.FC = () => {
  return (
    <main className="flex flex-wrap justify-center items-start min-h-screen py-2">
      <div className="m-4">
        <UserInterface backendName="go" />
      </div>
    </main>
  )
}

export default Home;