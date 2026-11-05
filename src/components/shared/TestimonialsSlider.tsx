import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { testimonials } from '../../data/site'
import { ArrowIcon, QuoteIcon } from './Icons'

export function TestimonialsSlider() {
  return (
    <div className="mil-testimonials-slider">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        speed={700}
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        navigation={{
          prevEl: '.testimonials-prev',
          nextEl: '.testimonials-next',
        }}
        pagination={{
          el: '.testimonials-pagination',
          clickable: true,
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 2 },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.name}>
            <figure className="mil-testimonial-card">
              <QuoteIcon className="testimonial-quote" />
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption>
                {testimonial.logo ? (
                  <img
                    className="testimonial-logo-image"
                    src={testimonial.logo}
                    alt={`${testimonial.name} logo`}
                    loading="lazy"
                  />
                ) : testimonial.icon ? (
                  <span className="testimonial-brand-icon" aria-label={`${testimonial.name} logo`}>
                    <i className={`fa-brands fa-${testimonial.icon}`} aria-hidden="true" />
                  </span>
                ) : (
                  <img
                    src={testimonial.image}
                    alt={`Placeholder image — replace with approved Bruno K milestone photography for ${testimonial.name}`}
                    loading="lazy"
                  />
                )}
                <div>
                  <h5>{testimonial.name}</h5>
                  <p className="mil-dark-soft">{testimonial.role}</p>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="testimonials-controls">
        <button type="button" className="testimonials-prev mil-link mil-dark mil-arrow-place" aria-label="Previous career highlight">
          <ArrowIcon />
        </button>
        <div className="testimonials-pagination" />
        <button type="button" className="testimonials-next mil-link mil-dark mil-arrow-place" aria-label="Next career highlight">
          <ArrowIcon />
        </button>
      </div>
    </div>
  )
}
