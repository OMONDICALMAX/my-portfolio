function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <span className="service-number">
        {service.number}
      </span>

      <h3>{service.title}</h3>

      <p>{service.description}</p>
    </article>
  );
}

export default ServiceCard;