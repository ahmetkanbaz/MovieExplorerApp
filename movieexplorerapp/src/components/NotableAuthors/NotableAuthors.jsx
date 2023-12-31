import SingleAuthor from "./SingleAuthor/SingleAuthor";

const NotableAuthors = () => {
  const notableAuthors = [
    {
      id: 1,
      imageUrl:
        "data:image/jpeg;base64,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",
      authorName: "Quentin Tarantino",
      webSite: "https://tr.wikipedia.org/wiki/Quentin_Tarantino",
    },
    {
      id: 3,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Lena_Dunham_at_the_2022_TIFF_Premiere_of_Catherine_Called_Birdy_%2852359117603%29.jpg/330px-Lena_Dunham_at_the_2022_TIFF_Premiere_of_Catherine_Called_Birdy_%2852359117603%29.jpg",
      authorName: "Lena Dunham",
      webSite: "https://tr.wikipedia.org/wiki/Lena_Dunham",
    },
    {
      id: 2,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Christopher_Nolan_Cannes_2018.jpg/330px-Christopher_Nolan_Cannes_2018.jpg",
      authorName: "Christopher Nolan",
      webSite: "https://tr.wikipedia.org/wiki/Christopher_Nolan",
    },
  ];
  return (
    <section className="py-5 notableAuthors">
      <div className="container">
        <div className="py-3">
          <h2>Önemli Yazarlar</h2>
          <div className="row align-items-center justify-content-center mt-4">
            {notableAuthors.map((author) => (
              <SingleAuthor key={author.id} author={author} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotableAuthors;
