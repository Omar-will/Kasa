import React from "react";
import "./ApartmentDescription.scss";

export function ApartmentDescription() {
    return (
<div className="apartment__description">
        <p className="description__header">
          <span>Description</span>
          <i className="fa-solid fa-chevron-up"></i>
        </p>
        <p className="description__content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          illum optio est dolore laudantium unde pariatur doloribus iste maiores
          praesentium reprehenderit enim numquam illo quam fuga fugiat, omnis
          voluptates laboriosam animi id ea repellat ducimus doloremque. Soluta
          numquam, corrupti quod commodi dolorum architecto iusto nobis, ut,
          autem porro totam. Nostrum!
        </p>
      </div>

    );
}