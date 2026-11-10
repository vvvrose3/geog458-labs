// Lab 7: Write your geographic story here.
// Configuration structure inspired by https://github.com/mapbox/storytelling
var config = {
    accessToken: 'pk.eyJ1IjoidnZ2cm9zZTMiLCJhIjoiY211d3o2cWtuMDM4bTJ5b2J1ZzFkbnF5MiJ9.zohqJ3O5rBZqHsdbcDcwnQ', // Use your own public pk. token.
    style: 'mapbox://styles/mapbox/light-v11',
    theme: 'light', // light or dark
    showMarkers: true,
    markerColor: '#147d72',
    transitionDuration: 2000, // Milliseconds; try 4000 for a slower flight.
    title: 'Your Geographic Story',
    subtitle: 'Replace this with the geographical question your story explores.',
    byline: 'By Your Name · GEOG 458',
    footer: 'Add your sources, image credits, and author information here.',
    // The Seattle coordinates below are examples. Replace them for your own story.
    chapters: [
        {
            id: 'context',
            label: 'Context',
            alignment: 'left', // left, right, center, or full
            title: '01. Introduce your geographical question',
            image: '', // Optional local path, e.g. ./images/context.jpg
            imageAlt: '', // Describe the image when you add one.
            description: 'TODO: Introduce your topic, study area, and central question. Explain what the reader should notice in this broad map view.',
            location: {
                center: [-122.335, 47.625], // [longitude, latitude]
                zoom: 10.6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo', // flyTo, easeTo, or jumpTo (Step 2)
            onChapterEnter: [], // Optional existing-layer opacity changes (Step 2)
            onChapterExit: []
        },
        {
            id: 'place-one',
            label: 'Place 1',
            alignment: 'right',
            title: '02. Focus on one place',
            image: '',
            imageAlt: '',
            description: 'TODO: Explain why this place matters to your question. Include evidence, identify its source, and connect your explanation to something visible on the map.',
            location: {
                center: [-122.3425, 47.6067],
                zoom: 14,
                pitch: 35,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'place-two',
            label: 'Place 2',
            alignment: 'left',
            title: '03. Compare a second place',
            image: '',
            imageAlt: '',
            description: 'TODO: Develop the same question through a second location. Explain a similarity, contrast, or connection that the map helps the reader understand.',
            location: {
                center: [-122.3344, 47.6456],
                zoom: 14,
                pitch: 40,
                bearing: 20
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'conclusion',
            label: 'Conclusion',
            alignment: 'center',
            title: '04. Bring the story together',
            image: '',
            imageAlt: '',
            description: 'TODO: Return to your central question. Explain what the sequence of places reveals and any limitations of your evidence. Choose a map view that supports your conclusion.',
            location: {
                center: [-122.286, 47.6505],
                zoom: 12.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};