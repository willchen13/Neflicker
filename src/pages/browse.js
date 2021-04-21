import React from 'react'
import { useContent } from '../hooks'

export default function Browse() {
    const films = useContent('films')
    const series = useContent('series')
    console.log('films', films)
    console.log('series', series)

    return <p>browse page</p>
}
