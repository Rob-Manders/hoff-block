import { toggleAdBlocker, getExtensionState, updateSearchTerm } from "../extension/storage"

export default function useExtensionState() {
  function toggleBlocker() {
    toggleAdBlocker()
  }

  function getCurrentToggleState() {
    return getExtensionState('blockerToggleState')
  }

  function getCurrentSearchTerm() {
    return getExtensionState('searchTerm')
  }

  function setSearchTerm(searchTerm) {
    updateSearchTerm(searchTerm)
  }

  return { toggleBlocker, getCurrentToggleState, getCurrentSearchTerm, setSearchTerm }
}