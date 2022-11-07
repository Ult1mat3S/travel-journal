export default function Card({ item }) {
  return (
    <>
      <section>
        <div className="inline vertical card">
          <img src={item.img} alt="" className="card-image" />
        </div>
        <div className="inline">
          <p className="card-location inline">{item.location}</p>
          <a href={item.link} className="card-link inline">
            View on Google Maps
          </a>
          <h1 className="card-name">{item.name}</h1>
          <p className="card-date">{item.date}</p>
          <p className="card-description">{item.description}</p>
          <p>{}</p>
          <p>{}</p>
        </div>
      </section>
    </>
  );
}
