import React from "react";

import styles from "./styles.module.scss";

export function Photos({ photos }) {
  return (
    <div className={styles.photos}>
      {photos.map((photo) => (
        <div className={styles.photo} key={photo.id}>
          <img src={photo.url} alt={photo.title} />
        </div>
      ))}
    </div>
  );
}
