import Image from 'next/image'
import React from 'react'

interface Props {
  src: string
  width: number
  height: number
  alt: string
  mobSrc?: string
  mobWidth?: number
  mobHeight?: number
  usePictureTag?: boolean
}

const OptimizeImage = (props: Props) => {
  if (props.usePictureTag && props.mobSrc && props.mobWidth && props.mobHeight)
    return (
      <>
        <Image
          src={props.src}
          width={props.width}
          height={props.height}
          alt={props.alt}
          className="max-md:hidden"
        />
        <Image
          src={props.mobSrc}
          width={props.mobWidth}
          height={props.mobHeight}
          alt={props.alt}
          className="md:hidden"
        />
      </>
    )

  return (
    <Image
      src={props.src}
      width={props.width}
      height={props.height}
      alt={props.alt}
    />
  )
}

export default OptimizeImage
