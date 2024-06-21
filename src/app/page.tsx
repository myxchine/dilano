import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <section className="flex flex-col items-center justify-center w-full uppercase space-y-12 p-8 text-center max-w-2xl pb-12">
        <h1 className="font-bold text-5xl">
          WE GENERATE LEADS TO CREATE EFFORTLESS BUSINESS GROWTH
        </h1>

        <section className="flex flex row justify-center space-x-4 w-full max-w-xl font-strong grid grid-cols-2">
          <Link href="/contact">
            <button className="border border-black text-sm p-2 px-4 uppercase w-full">
              Contact us
            </button>
          </Link>
          <Link href="/background">
            <button className="border border-black bg-black text-white w-full text-sm p-2 px-4 uppercase">
              Background
            </button>
          </Link>
        </section>
      </section>

      <section className="flex flex-col items-center justify-center w-full uppercase space-y-8 p-8 text-center  bg-black text-white py-12 font-bold">
        <h2 className="font-bold text-3xl">
          WHAT <span className="text-white/50">WE</span> are ?
        </h2>

        <div className="flex flex-col items-center justify-center w-full space-y-4 max-w-xl">
          <p className="lowercase capitalize text-sm">
            WE'RE AN ALGARVE-BASED AGENCY THAT HELPS COMPANIES BY DELIVERING
            TOP-TIER, QUALIFIED LEADS THROUGH STRATEGIC ADVERTISING ON POPULAR
            SOCIAL MEDIA SITES. OUR TARGETED APPROACH NOT ONLY FREES YOU UP TO
            CONCENTRATE ON YOUR WORK, BUT ALSO ENSURES YOUR GROWTH IS DRIVEN BY
            GENUINELY INTERESTED CLIENTS, MAKING YOUR BUSINESS GROWTH SMOOTH AND
            EFFICIENT.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-full uppercase space-y-8 p-8 text-center  bg-black text-white py-12 font-bold">
        <h2 className="font-bold text-3xl">
          WHAT <span className="text-white/50">WE</span> DO!
        </h2>

        <div className="flex flex-col items-center justify-center w-full space-y-4 max-w-xl">
          <p className="text-lg font-bold">
            1. <span className="text-white/50">Gather Content</span>
          </p>
          <p className="lowercase capitalize text-sm">
            In the initial step, we collect visuals that highlight your
            craftsmanship. These form the foundation of our strategy, serving to
            attract a greater number of potential clients to your business.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-full space-y-4 max-w-xl">
          <p className="text-lg font-bold">
            2. <span className="text-white/50">Launch Ads</span>
          </p>
          <p className="lowercase capitalize text-sm">
            In the initial step, we collect visuals that highlight your
            craftsmanship. These form the foundation of our strategy, serving to
            attract a greater number of potential clients to your business.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-full space-y-4 max-w-xl">
          <p className="text-lg font-bold">
            3. <span className="text-white/50">Generate Leads</span>
          </p>
          <p className="lowercase capitalize text-sm">
            In the initial step, we collect visuals that highlight your
            craftsmanship. These form the foundation of our strategy, serving to
            attract a greater number of potential clients to your business.
          </p>
        </div>
      </section>
    </main>
  );
}
