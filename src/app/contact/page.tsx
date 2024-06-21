import Link from "next/link";

const Contact = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <section className="flex flex-col items-center justify-center w-full uppercase space-y-12 p-8 text-center max-w-2xl pb-12 h-screen w-screen">
        <h1 className="font-bold text-5xl">CONTACT US</h1>

        <section className="flex flex row justify-center items-center space-x-4 w-full max-w-xl font-strong ">
          <Link href="/contact">
            <button className="border border-black bg-black text-white w-full text-sm p-2 px-4 uppercase">
              GET IN TOUCH
            </button>
          </Link>
        </section>
      </section>
    </main>
  );
};

export default Contact;
