/* eslint-disable react/no-unescaped-entities */
import { Container } from '@/components/Container'
import Image from 'next/image'

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pt-20 pb-14 sm:pb-20 sm:pt-20 lg:pb-20"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Why use CrediPay
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-10 text-left">
          <div className=" bg-gray-50 p-5">
            <div className="flex items-center">
              <Image src="/document.png" width={40} height={40} />
              <p className="ml-5 text-xl font-semibold tracking-tight text-slate-700">
                Understand your credit
              </p>
            </div>
            <p className="text-md mt-4 text-left tracking-tight text-slate-700">
              Credit can be complicated. But it doesn't have to be. Learning
              responsible credit behavior can set you up to reach your goals.
              Find out what's in your Equifax credit report, how your credit
              scores are calculated, and how to get on track in your credit
              journey.
            </p>
          </div>
          <div className=" bg-gray-50 p-5">
            <div className="flex items-center">
              <Image src="/document.png" width={40} height={40} />
              <p className="ml-5 text-xl font-semibold tracking-tight text-slate-700">
                Reach your financial goals
              </p>
            </div>
            <p className="text-md mt-4 text-left tracking-tight text-slate-700">
              Life is a series of milestones, and when it comes to finances,
              knowledge is your most valuable asset. If you're planning to buy a
              home, purchase a car, or take out a loan, find out what potential
              lenders are looking for.
            </p>
          </div>
          <div className=" bg-gray-50 p-5">
            <div className="flex items-center">
              <Image src="/document.png" width={40} height={40} />
              <p className="ml-5 text-xl font-semibold tracking-tight text-slate-700">
                Personal credit
              </p>
            </div>
            <p className="text-md mt-4 text-left tracking-tight text-slate-700">
              Personal credit scoring is the application of financial risk
              forecasting. It becomes an even important task as financial
              institutions have been experiencing serious competition and
              challenges.
            </p>
          </div>
          <div className=" bg-gray-50 p-5">
            <div className="flex items-center">
              <Image src="/document.png" width={40} height={40} />
              <p className="ml-5 text-xl font-semibold tracking-tight text-slate-700">
                Business credit
              </p>
            </div>
            <p className="text-md mt-4 text-left tracking-tight text-slate-700">
              Every business is singular, and every customer interaction is a
              highly personalized 1:1 proposition. But in each instance, our
              goal is simple: To work with our customers to create data-driven
              solutions that are as personal as they are profitable at every
              point along their customer’s journey.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
