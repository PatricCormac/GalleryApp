import React from "react";

import { useApi } from "../../hooks/useApi";
import { Loader } from "../Loader";
import styles from "./styles.module.scss";

export function Photos() {
  const [result, isLoading] = useApi('albums/1/photos');

  return (
    <>
      {isLoading && <div className={styles.loader}><Loader /></div>}
      {result && (
        <div className={styles.photos}>
          {result.map((photo) => (
            <div className={styles.photo} key={photo.id}>
              <img src={photo.url} alt={photo.title} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
