function Properties() {

  const properties = [

    {
      id:1,
      image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop",
      title:"Luxury Villa",
      price:"Ksh 15,000,000",
      location:"Nairobi"
    },

    {
      id:2,
      image:"https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1400&auto=format&fit=crop",
      title:"Modern Penthouse",
      price:"Ksh 25,000,000",
      location:"Mombasa"
    },

    {
      id:3,
      image:"https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1400&auto=format&fit=crop",
      title:"Executive Apartment",
      price:"Ksh 10,000,000",
      location:"Kisumu"
    }

  ];

  return (

    <div className="gallery">

      {properties.map((property) => (

        <div className="card" key={property.id}>

          <img src={property.image} alt="" />

          <div className="content">

            <h3>{property.title}</h3>

            <p>{property.price}</p>

            <p>{property.location}</p>

            <button>View Property</button>

          </div>

        </div>

      ))}

    </div>

  );

}

export default Properties;

