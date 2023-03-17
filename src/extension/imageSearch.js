const subscriptionKey = '227637ac26314945a3ff73024b16eeb3'
const url = 'https://api.bing.microsoft.com/v7.0/images/search'

export async function searchImages(searchTerm) {
  const searchUrl = url + encodeURIComponent(searchTerm)

  const results = {}
  
  await fetch(searchUrl, {
    method: 'GET',
    headers: {
      'Ocp-Apim-Subscription-Key': subscriptionKey
    }
  }).then(response => response.json())
    .then(data => {
      results = data
    })

  let imageUrls = []
  
  results.value.forEach(value => {
    imageUrls.push(value.contentUrl)
  })

  return imageUrls
}
