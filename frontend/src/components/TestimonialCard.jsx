function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-mark">“</div>

      <blockquote>
        {testimonial.quote}
      </blockquote>

      <div className="testimonial-author">
        <strong>{testimonial.name}</strong>
        <span>{testimonial.role}</span>
      </div>
    </article>
  );
}

export default TestimonialCard;