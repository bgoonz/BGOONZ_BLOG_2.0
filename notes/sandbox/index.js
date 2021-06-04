const client = algoliasearch('QY3DFFD6SA', 'a136861109b791719f0df22b71102fdf');
const index = client.initIndex('indexName');

// only query string
index.search('query string').then(({ hits }) => {
  console.log(hits);
});

// with params
index.search('query string', {
  attributesToRetrieve: ['firstname', 'lastname'],
  hitsPerPage: 50,
}).then(({ hits }) => {
  console.log(hits);
});


const index = client.initIndex('your_index_name');

index.search('query string', {
  headers: { 'X-Algolia-UserToken': 'user123' }
}).then(({ hits }) => {
  console.log(hits);
});



index.findAnswers(
    query: string,
    queryLanguages: string[],
    {
      attributesForPrediction: string[],
      nbHits: number,
      threshold: number,
      params: object
    }
  )


  index.saveObjects(array, objects)

index.saveObjects(array, objects, {
  // All the following parameters are optional
  autoGenerateObjectIDIfNotExist: boolean,
  // any other requestOptions
})

// add a single object
index.saveObject(object, object)

index.saveObject(object, object, {
  // All the following parameters are optional
  autoGenerateObjectIDIfNotExist: boolean,
  // any other requestOptions
})