const FooterBottom = () => {
  return (
    <div className="border-top py-4 mt-4 text-center">
      <p>
        Bu proje
        <a
          href="https://github.com/ahmetkanbaz"
          target="_blank"
          rel="noreferrer"
          className="mx-1"
        >
          Ahmet KANBAZ
        </a>
        tarafından geliştirilmiştir.
      </p>
      <p className="mb-0">
        Kullanılan API:
        <a
          href="https://www.omdbapi.com/"
          target="_blank"
          rel="noreferrer"
          className="ms-2"
        >
          OMDb API
        </a>
      </p>
    </div>
  );
};

export default FooterBottom;
