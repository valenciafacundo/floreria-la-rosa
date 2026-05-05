import { Star } from 'lucide-react'
import { reviews } from '@/data/reviews'

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < count
              ? 'h-4 w-4 fill-primary text-primary'
              : 'h-4 w-4 text-muted-foreground/40'
          }
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export function ReviewsSection() {
  return (
    <section id="opiniones" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">
            Reseñas reales
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl leading-tight md:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Nada nos hace más felices que ser parte de los momentos más especiales de la
            vida de quienes confían en nosotros.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name + review.comment.slice(0, 8)}
              className="flex flex-col gap-3 rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <Stars count={review.stars} />
              <p className="text-sm leading-relaxed text-foreground/85">
                "{review.comment}"
              </p>
              <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-4">
                <div className="flex items-center gap-3">
                  {review.avatar ? (
                    <img
                      src={review.avatar}
                      alt={`Avatar de ${review.name}`}
                      className="h-10 w-10 rounded-full object-cover shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-medium text-primary">
                      {review.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium leading-none">{review.name}</p>
                    {review.date && (
                      <p className="mt-1 text-xs text-muted-foreground">{review.date}</p>
                    )}
                  </div>
                </div>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">
                  {review.source}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://g.co/kgs/tih1bRQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-3.5 text-sm font-medium text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-md"
          >
            Dejar una reseña en Google
          </a>
        </div>
      </div>
    </section>
  )
}
