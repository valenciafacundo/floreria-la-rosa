import { ImageResponse } from 'next/og'
import { getProductBySlug, getOccasionLabel, getPrimaryOccasion } from '@/helpers/products'
import { SITE_URL } from '@/helpers/whatsapp'

export const runtime = 'nodejs'
export const alt = 'Producto de Florería La Rosa'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function OpenGraphImage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#fff7f8',
            color: '#2f1f27',
            fontSize: 42,
            fontWeight: 700,
          }}
        >
          Florería La Rosa
        </div>
      ),
      size,
    )
  }

  const imageUrl = `${SITE_URL}${product.image}`
  const occasion = getOccasionLabel(getPrimaryOccasion(product))

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: 'linear-gradient(135deg, #fff7f8 0%, #fdecef 100%)',
          color: '#2f1f27',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '54%',
            padding: '56px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '28px',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '999px',
                  background: '#f4c7d4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                }}
              >
                🌸
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '18px', color: '#8b6071' }}>Florería</span>
                <span style={{ fontSize: '34px', fontWeight: 700 }}>La Rosa</span>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignSelf: 'flex-start',
                padding: '10px 18px',
                borderRadius: '999px',
                background: '#ffffff',
                color: '#b14f72',
                fontSize: '20px',
                fontWeight: 700,
                marginBottom: '24px',
              }}
            >
              {occasion}
            </div>

            <div
              style={{
                fontSize: '56px',
                lineHeight: 1.02,
                fontWeight: 800,
                letterSpacing: '-0.03em',
                marginBottom: '18px',
                display: 'flex',
              }}
            >
              {product.name}
            </div>

            <div
              style={{
                fontSize: '26px',
                lineHeight: 1.4,
                color: '#6e5660',
                display: 'flex',
              }}
            >
              {product.shortDescription}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '20px',
                color: '#6e5660',
              }}
            >
              <span>Consultar disponibilidad</span>
              <span style={{ color: '#25D366', fontWeight: 700 }}>WhatsApp</span>
            </div>
            <div
              style={{
                display: 'flex',
                padding: '10px 16px',
                borderRadius: '999px',
                background: '#ffffff',
                fontSize: '18px',
                color: '#8b6071',
              }}
            >
              Imágenes referenciales
            </div>
          </div>
        </div>

        <div
          style={{
            width: '46%',
            padding: '42px 42px 42px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '36px',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(177, 79, 114, 0.14)',
              padding: '28px',
            }}
          >
            <img
              src={imageUrl}
              alt={product.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </div>
    ),
    size,
  )
}
