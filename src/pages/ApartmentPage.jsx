import React from "react";
import "./ApartmentPage.scss";

function ApartmentPage() {
  return (
    <div className="apartment-page">
      <div>
        <img src="https://picsum.photos/800/400" alt="" />
      </div>
      <div className="apartment__header">
      <div className="apartment__title">
        <h1>Crazy loft on Canal Saint Martin</h1>
        <h2>Paris, Ile de France</h2>
        <div className="apartment__tags">
        <span>Cozy</span>
        <span>Canal</span>
        <span>Paris 10</span>
        </div>
        </div>
      
      <div className="apartment__owner">
        <h3>Alexandre Dumas</h3>
        <div className="apartment__owner__badge"></div>
        <div className="apartment__owner__stars">
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
        </div>
      </div>
      </div>
      <div className="apartment__description">
        <p>Description</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          illum optio est dolore laudantium unde pariatur doloribus iste maiores
          praesentium reprehenderit enim numquam illo quam fuga fugiat, omnis
          voluptates laboriosam animi id ea repellat ducimus doloremque. Soluta
          numquam, corrupti quod commodi dolorum architecto iusto nobis, ut,
          autem porro totam. Nostrum!
        </p>
      </div>
      <div className="apartment__description">
        <p>Description</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          illum optio est dolore laudantium unde pariatur doloribus iste maiores
          praesentium reprehenderit enim numquam illo quam fuga fugiat, omnis
          voluptates laboriosam animi id ea repellat ducimus doloremque. Soluta
          numquam, corrupti quod commodi dolorum architecto iusto nobis, ut,
          autem porro totam. Nostrum!
        </p>
      </div>
    </div>
  );
}

export default ApartmentPage;
