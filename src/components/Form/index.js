import React from "react";

import styles from "./styles.module.scss";
import { Input } from "../Input";

export function Form(props) {
  const [pictureData, setPictureData] = React.useState();

  return (
    <div className={styles.overlay}>
      <form className={styles.form}>
        <legend className={styles.title}>Upload image</legend>
        <Input value={pictureData} onChange={setPictureData} label='Name' placeholder='Enter name of picture' />
        <Input value={pictureData} onChange={setPictureData} label='Tags' placeholder='Enter tags' />
        <Input value={pictureData} onChange={setPictureData} label='Select image' type='file' isButton />
      </form>
    </div>
  );
}
