import Image from "next/image";

const SSO = () => {
  return (
    <div className="">
      <button
        type="button"
        className="flex justify-center items-center gap-2 bg-white w-full rounded-full text-primary py-2 px-3 mb-4"
      >
        <Image
          src="/assets/fb.svg"
          alt="facebook icon"
          height={20}
          width={20}
        />
        Sign in with Facebook
      </button>
      <button
        type="button"
        className="flex justify-center items-center gap-2 bg-white w-full rounded-full text-primary py-2 px-3 pr-8"
      >
        <Image
          src="/assets/gmail.svg"
          alt="facebook icon"
          height={20}
          width={20}
        />
        Sign in with Google
      </button>
    </div>
  );
};

export default SSO;
