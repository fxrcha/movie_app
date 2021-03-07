import React from 'react';
import Potato from './Potato';

const albumLikes = [
  {
    id: 1,
    name: "킁",
    image: "http://image.yes24.com/momo/TopCate3054/MidCate005/305340040.jpg"
  },
  {
    id: 2,
    name: "SOKoNYun",
    image: "https://image.fmkorea.com/files/attach/new/20190820/486616/313058201/2107833995/32d96f894fc055559270ecf57ac6de77.jpg"
  },
  {
    id: 3,
    name: "Stranger",
    image: "http://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/160/480/81160480_1550223311331_1_600x600.JPG"
  },
  {
    id: 4,
    name: "불러",
    image: "http://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/419/600/81419600_1586857308134_1_600x600.JPG"
  },
  {
    id: 5,
    name: "TL",
    image: "http://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/112/583/81112583_1539333248976_1_600x600.JPG"
  }
];

const renderAlbum = (album) => {
  return <Potato key={album.id} name={album.name} image={album.image} />
}

const App = () => {
  return (
    <div className="App">
      <h1>Hello</h1>
      {albumLikes.map(renderAlbum)}
    </div>
  );
}

export default App;
