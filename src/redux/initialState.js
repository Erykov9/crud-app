const initialState = {
  posts: [
    {
      id: '1',
      title: 'Example title',
      author: 'Jon Doe',
      publishDate: new Date('02-02-2022'),
      category: 'News',
      shortDescription: 'Lorem ipsum',
      description: 'vLong descriptionLong descriptionLong descriptionLong descriptionLong descriptionLong descriptionLong descriptionLong descriptionLong descriptionLong descriptionLong descriptionLong description'
    },

    {
      id: '2',
      title: 'Example title 2',
      author: 'Jane Doe',
      publishDate: new Date('02-02-2022'),
      category: 'Sport',
      shortDescription: 'Lorem ipsum',
      description: 'Long description'
    },

    {
      id: '3',
      title: 'Example title 3',
      author: 'Jane Doe',
      publishDate: new Date('02-02-2022'),
      category: 'Movies',
      shortDescription: 'Lorem ipsum',
      description: 'Long description'
    },

    {
      id: '4',
      title: 'Example title 4',
      author: 'Jane Doe',
      publishDate: new Date('02-02-2022'),
      category: 'Sport',
      shortDescription: 'Lorem ipsum',
      description: 'Long description'
    }
  ],
  category: ['Sport', 'News', 'Movies']
}


export default initialState;