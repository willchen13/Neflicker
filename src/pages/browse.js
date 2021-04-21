import React from 'react'
import { useContent } from '../hooks'
import selectionFilter from '../utils/selection-filter'
import { BrowseContainer } from '../containers'

export default function Browse() {
    const { films } = useContent('films')
    const { series } = useContent('series')
    console.log('films', films)
    console.log('series', series)
    const slides = selectionFilter({ series, films })

    console.log('selection filter', slides)

    return <BrowseContainer />
}
