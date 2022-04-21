import Card from "../UI/Card";

export default function Home({ posts }) {
  console.log(posts);
  let List = [];
  if (posts.status !== 'error') {
    List = posts.articles.map((item) => (
      <div className="col-md-6 mt-4 col-lg-4">
        <Card
          title={item.title}
          description={item.description}
          originUrl={item.url}
          imageUrl={item.urlToImage}
        />
      </div>
    ));
  }
  console.log(List);

  return (
    <div className="container-xl container-fluid bg-dark bg-gradient">
      <div className="row mt-4 row-cols-auto">
        {/* <Card
            title="Block and Blockstream are partnering with Tesla on an off-grid, solar-powered Bitcoin mine in Texas"
            description="Block and Blockstream are partnering with Tesla on an open-source, solar-powered Bitcoin mine, the companies announced Friday. Tesla’s 3.8-megawatt Solar PV array and its 12 megawatt-hour Megapack will power the facility, and construction has started on the p…"
            originUrl="https://www.theverge.com/2022/4/8/23016553/block-blockstream-tesla-solar-bitcoin-mine-texas"
            imageUrl="https://cdn.vox-cdn.com/thumbor/OYrvaaOHBuEpdTeRO55nZnZdexs=/0x215:3000x1786/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/8937281/acastro_170726_1777_0007_v2.jpg"
          ></Card> */}
        {List.length > 0 && List}
        {List.length === 0 && <p className="text-warning">No articles found :(</p>}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    "https://newsapi.org/v2/everything?q=international&apiKey=c9796e066a74452c8bf24f6869dd6158"
  ).catch((err) => {
    console.log(err);
  });
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
