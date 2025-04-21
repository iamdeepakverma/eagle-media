
export default function HowWeWork() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How we work
          </h2>
          <p className="text-gray-600 text-lg">
            We believe in combining creativity and analytics to create marketing strategies that stand out and provide measurable outcomes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Item 1 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <span className="text-4xl font-bold text-[#0B57D0]">01</span>
            <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">
              Research
            </h3>
            <p className="text-gray-600">
              Every successful project starts with understanding. We do in-depth analysis of market trends and patterns to determine what your current needs are. By taking this step, you can be confident that we are fully aware of the developments.
            </p>
          </div>

          {/* Item 2 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <span className="text-4xl font-bold text-[#0B57D0]">02</span>
            <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">
              Trend Analysis
            </h3>
            <p className="text-gray-600">
              We analyze current trends to see what's popular and what's emerging. This helps us craft strategies that are not only up-to-date but also innovative, making sure your brand stands out in a crowded marketplace.
            </p>
          </div>

          {/* Item 3 with Image */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* <img
              src="/placeholder.svg?height=300&width=600"
              alt="Team collaborating on strategy"
              width={600}
              height={300}
              className="w-full h-[300px] object-cover"
            /> */}
            <div className="p-8">
              <span className="text-4xl font-bold text-[#0B57D0]">03</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">
                Custom Strategy Creation
              </h3>
              <p className="text-gray-600">
                With our research and trend analysis in hand, we create a tailored strategy just for you. The plan is designed to fit your unique needs and goals, using the latest trends to give your brand a fresh and engaging presence.
              </p>
            </div>
          </div>

          {/* Item 4 with Image */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* <img
              src="/placeholder.svg?height=300&width=600"
              alt="Team implementing strategy"
              width={600}
              height={300}
              className="w-full h-[300px] object-cover"
            /> */}
            <div className="p-8">
              <span className="text-4xl font-bold text-[#0B57D0]">04</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">
                Implementation and Optimization
              </h3>
              <p className="text-gray-600">
                The final step is putting the plan into action. We execute the strategy and closely monitor its performance. Our work doesn't stop there; we continuously optimize to ensure the best results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

