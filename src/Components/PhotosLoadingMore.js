import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadNewPhotos } from '../store/photos'
import Loading from './helpers/Loading'
import styles from './PhotosLoadingMore.module.css'

const PhotosLoadingMore = () => {
  const dispatch = useDispatch()
  const { pages, infinite, loading } = useSelector(state => state.photos)

  console.log(pages)

  function handleClick() {
    dispatch(loadNewPhotos(pages + 1))
  }

  if (loading) return <Loading />
  if (!infinite) return null
  return (
    <button onClick={handleClick} className={styles.button}>
      +
    </button>
  )
}

export default PhotosLoadingMore
