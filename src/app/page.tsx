import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="max-sm:min-h-screen bg-secondary-veryLightGray flex items-center max-sm:py-12 px-6">
      <section className="max-w-screen-xl mx-auto w-full flex flex-col gap-10">
        <section className="w-full flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-extralight text-secondary-darkGrayishBlue">
              Reliable, efficient delivery
            </h1>
            <h1 className="text-3xl font-semibold text-secondary-veryDarkBlue">
              Powered by Technology
            </h1>
          </div>
          <div className="w-full sm:w-2/5">
            <p className="text-sm text-center text-secondary-darkGrayishBlue">
              Our Artificial Intelligence powered tools use millions of project
              data points to ensure that your project is successful
            </p>
          </div>
        </section>
        <section className="w-full flex max-sm:flex-col gap-8">
          <div className="sm:w-1/3 w-full flex items-center">
            <div className="w-full">
              <Card
                title="Supervisor"
                description="Monitors activity to identify project roadblocks"
                image="/images/icon-supervisor.svg"
                borderColor="border-primary-cyan"
              />
            </div>
          </div>
          <div className="sm:w-1/3 w-full flex flex-col gap-6 items-center justify-center">
            <div className="w-full">
              <Card
                title="Team Builder"
                description="Scans our talent network to create the optimal team for your project"
                image="/images/icon-team-builder.svg"
                borderColor="border-primary-red"
              />
            </div>
            <div className="w-full">
              <Card
                title="Karma"
                description="Regularly evaluates our talent to ensure quality"
                image="/images/icon-karma.svg"
                borderColor="border-primary-orange"
              />
            </div>
          </div>
          <div className="sm:w-1/3 w-full flex items-center">
            <Card
              title="Calculator"
              description="Uses data from past projects to provide better delivery estimates"
              image="/images/icon-calculator.svg"
              borderColor="border-primary-blue"
            />
          </div>
        </section>
      </section>
    </main>
  );
}
