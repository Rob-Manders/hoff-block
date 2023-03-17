export function toggleAdBlocker() {
  const currentState = getExtensionState('blockerToggleState')

  chrome.storage.local.set({ blockerToggleState: !currentState }) 
}

export function updateSearchTerm(searchTerm) {
  chrome.storage.local.set({ searchTerm: searchTerm })
}

export function getExtensionState(key) {
  let state = 'No data...'

  chrome.storage.local.get([key]).then(result => {
    state = result
  })

  return state
}

export function updateImageList(imagesArray) {
  chrome.storage.local.set({ images: imagesArray })
}