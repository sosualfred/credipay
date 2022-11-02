import { useEffect, useState } from 'react'
import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="mb-20 font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            What is CrediPay
          </h2>
          {/* <p className="mt-6 text-lg tracking-tight text-blue-100">
            Well everything you need if you aren’t that picky about minor
            details like tax compliance.
          </p> */}
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center">
                <Image src="/question.png" width={50} height={50} />
                <p className="ml-5 text-xl font-semibold text-white">Problem</p>
              </div>
              <p className="mt-6 text-left text-lg tracking-tight text-blue-100">
                About 7.3 millions Ghanains remain unbanked making it
                <br />
                difficult to access credit
              </p>
            </div>
            <div>
              <Image src="/img-01.png" width={500} height={400} />
            </div>
          </div>
          <div className="flex items-center justify-between pt-20">
            <div>
              <Image src="/img-02.png" width={500} height={400} />
            </div>
            <div>
              <div className="flex items-center">
                <Image src="/solution.png" width={50} height={50} />
                <p className="ml-5 text-xl font-semibold text-white">
                  Solution
                </p>
              </div>
              <p className="mt-6 text-left text-lg tracking-tight text-blue-100">
                Credible is a secured platform that allows Ghanains to<br/>access
                credit facility easily by building a trusted credit<br/>score rating
                from all payment sources
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
