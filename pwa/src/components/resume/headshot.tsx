import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Headshot () {
  return (
      <StaticImage
        src="../../assets/rounded-headshot.png"
        alt="Headshot"
        loading="eager"
        placeholder="none"
        width={640}
        height={640}
      />
  )
}