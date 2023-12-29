const AboutMovies = () => {
  return (
    <section className="py-5">
      <div className="container py-md-4">
        <div className="row align-items-center">
          <div className="col-md-6 col-12">
            <img
              src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Movies"
              className="img-fluid rounded-4"
            />
          </div>
          <div className="col-md-6 col-12 mt-4 mt-md-0 p-4">
            <div className="d-flex justify-content-center">
              <img
                src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="img-fluid w-75 rounded-2"
              />
            </div>
            <h3 className="my-2 fst-italic text-end">Filmler Hakkında...</h3>
            <p className="mb-0">
              Sinema, görsel ve işitsel öğeleri bir araya getirerek anlatılan
              hikayelerin ve duyguların izleyiciye aktarıldığı sanatsal bir
              formdur. Filmler, genellikle bir yönetmenin vizyonu, senaryo
              yazarının öyküsü ve oyuncuların performansları gibi birçok unsuru
              içinde barındırır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMovies;
