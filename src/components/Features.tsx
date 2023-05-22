import Image1 from "../assets/img/feature-1-img.png"
import Image2 from "../assets/img/feature-2-img.png"
import Image3 from "../assets/img/feature-3-img.png"

const Features = () => {
  return (
    <section className="pt-12 lg:pt-24 bg-violet">
      <div className="container mx-auto">
        <div className="text-center max-w-[758px] mx-auto mb-24">
          <h2
            className="section-title"
            data-aos="fade-up"
            data-aos-offset="400"
          >
            Market sentiments, portfolio, and run the infrastructure of your
            choice
          </h2>
        </div>
        <section className="pb-[30px] lg:pb-[120px] pt-0">
          <div className="flex flex-col lg:flex-row">
            {/* text */}
            <div
              className="max-w-[454px] mb-6 lg:mt-10"
              data-aos="fade-right"
              data-aos-offset="400"
            >
              <h3 className="h3 mb-6">Invest Smart</h3>
              <p className="text-gray mb-8">
                Get full statistic information about the behavior of buyers and
                sellers will help you to make the decision.
              </p>
              <button className="btn px-8">Learn more</button>
            </div>
            {/* image */}
            <div
              className="flex-1 flex justify-end"
              data-aos="fade-left"
              data-aos-offset="400"
            >
              <img src={Image1} alt="" />
            </div>
          </div>
        </section>
        <section className="py-[30px] lg:py-[120px]">
          <div className="container mx-auto">
            <div className="flex flex-col justify-end items-center lg:flex-row">
              {/* image */}
              <div
                className="flex-1 lg:absolute lg:left-0 order-2 lg:order-1"
                data-aos="fade-right"
                data-aos-offset="400"
              >
                <img src={Image2} alt="" />
              </div>
              {/* text */}
              <div
                className="flex-1 max-w-[456px]"
                data-aos="fade-left"
                data-aos-offset="400"
              >
                <h3 className="h3 mb-6">Detailed Statistics</h3>
                <p className="text-gray mb-8">
                  View all mining related information in realtime, at any point
                  at any location and decide which polls you want to mine in.
                </p>
                <button className="btn px-8 mb-6 lg:mb-0">Learn more</button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-[30px] lg:py-[120px]">
          <div className="flex flex-col lg:flex-row">
            {/* text */}
            <div
              className="max-w-[454px] mb-6 lg:mt-10"
              data-aos="fade-right"
              data-aos-offset="400"
            >
              <h3 className="h3 mb-6">
                Grow your profit and track your investments
              </h3>
              <p className="text-gray mb-8 max-w-[408px]">
                Use advanced analytical tools. Clear TradingView charts let you
                track current and historical profit investments.
              </p>
              <button className="btn px-8">Learn more</button>
            </div>
            {/* image */}
            <div
              className="flex-1 flex justify-end"
              data-aos="fade-left"
              data-aos-offset="450"
            >
              <img src={Image3} alt="" />
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Features
