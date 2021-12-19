import React from 'react'
import { useSelector } from 'react-redux'
import styles from './PhotosContent.module.css'

const PhotosContent = () => {
  const { list } = useSelector(state => state.photos)
  return (
    <ul className={styles.lista}>
      {list.map(item => (
        <li key={item.id} className={`${styles.item} anime`}>
          <img src={item.src} alt={item.title} className={styles.img} />
          <h2 className={styles.title}>{item.title}</h2>
          <span className={styles.acessos}>{item.acessos}</span>
        </li>
      ))}
    </ul>
  )
}

export default PhotosContent
