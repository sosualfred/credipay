import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

export function Hero() {
  return (
    <Container className="pt-16 pb-24">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            <span className="relative whitespace-nowrap text-blue-600">
              Your credit <br/>your identity
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl tracking-tight text-slate-700">
            Find out your credit rating and get personal or business
            recommendations for it.
          </p>
          <div className="mt-10">
            <Button href="/apks/member.apk" className="bg-blue-600">
              Download Member APK
            </Button>
            <Button href="/apks/admin.apk" className="ml-5" variant='outline'>
              Download Admin APK
            </Button>
          </div>
        </div>
        <div>
          <Image src="/hero-image.png" width={400} height={400} />
        </div>
      </div>
    </Container>
  )
}
