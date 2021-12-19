import React from 'react'
import { useDispatch } from 'react-redux'
import { loadNewPhotos } from '../store/photos'
import PhotosContent from './PhotosContent'
import PhotosLoadingMore from './PhotosLoadingMore'

const Photos = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(loadNewPhotos())
  }, [dispatch])
  return (
    <section>
      <PhotosContent />
      <PhotosLoadingMore />
    </section>
  )
}

export default Photos
