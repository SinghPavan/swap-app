import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <div className="heading">
        <h1 className="flex flex-col items-center text-center text-lightYellow text-xl">
          Welcome to
          <Image
            className="mt-4 mb-4"
            src="/assets/swap-logo.svg"
            alt="Logo"
            width={224}
            height={112}
          />
        </h1>
        <p className="text-center">
          We take some of the stress of decision making between products away
          and make life easier.
        </p>
      </div>
      <div className="flex flex-col mt-96">
        <Link
          href="/auth/signup"
          role="button"
          className="bg-white text- rounded-full  py-4 px-4 text-primary"
        >
          Create your account
        </Link>
        <Link className="text-center mt-4 text-primary" href="/auth/signup">
          Login
        </Link>
      </div>
    </main>
  );
}
