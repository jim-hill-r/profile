import * as React from "react"
import Resume from "../resume"

export default function MainResume({content}) {
  return (
    <Resume 
      tagline="Combining engineering and software to improve our planet"
      summary={content.summary}
      experience={content.experience}
      keywords={content.keywords}
    />
  )
}

