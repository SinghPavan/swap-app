import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <div className="heading">
        <h1 className="text-center">
          Welcome to <span>SWAP</span>
        </h1>
        <p className="text-center">
          We take some of the stress of decision making between products away
          and make life easier.
        </p>
      </div>
      <div className="flex flex-col mt-96">
        <button
          type="button"
          className="bg-black text- rounded-full  py-3 px-2"
        >
          Create your account
        </button>
        <Link href="/auth/login">Login</Link>
      </div>
    </main>
  );
}
