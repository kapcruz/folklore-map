import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), {
  ssr: false
})

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Folklore Map"
        description="An Interactive Map of Folklore and Myths in the World and show more informations and photos when clicked."
        canonical="https://folklore-map.vercel.app"
        openGraph={{
          url: 'https://folklore-map.vercel.app',
          title: 'Folklore Map',
          description:
            'An Interactive Map of Folklore and Myths in the World and show more informations and photos when clicked.',
          images: [
            {
              url: 'https://folklore-map.vercel.app/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'Folklore Map'
            }
          ],
          site_name: 'Folklore Map'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
