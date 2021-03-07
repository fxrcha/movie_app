import React from 'react';
import Potato from './Potato';

const albumLikes = [
  {
    name: "킁",
    image: "http://image.yes24.com/momo/TopCate3054/MidCate005/305340040.jpg"
  },
  {
    name: "SOKoNYun",
    image: "https://image.fmkorea.com/files/attach/new/20190820/486616/313058201/2107833995/32d96f894fc055559270ecf57ac6de77.jpg"
  },
  {
    name: "Stranger",
    image: "http://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/160/480/81160480_1550223311331_1_600x600.JPG"
  },
  {
    name: "불러",
    image: "http://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/419/600/81419600_1586857308134_1_600x600.JPG"
  },
  {
    name: "TL",
    image: "http://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/112/583/81112583_1539333248976_1_600x600.JPG"
  }
];

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {albumLikes.map(current =>
        <Potato name={current.name} image={current.image} />
      )}
    </div>
  );
}

export default App;
