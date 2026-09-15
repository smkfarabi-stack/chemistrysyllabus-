function generateResourceCode(config) {
  const { fileName, filePath, fileType, chapterId, resourceType, bookId, pages } = config;

  if (resourceType === 'books') {
    return `
// Add to CHAPTER_RESOURCES["${chapterId}"].books
{ bookId: "${bookId}", pages: "${pages}" }
`;
  } else if (resourceType === 'youtubeVideos') {
    return `
// Add to CHAPTER_RESOURCES["${chapterId}"].youtubeVideos
{ title: "${fileName}", url: "${filePath}" }
`;
  } else {
    return `
// Add to CHAPTER_RESOURCES["${chapterId}"].${resourceType}
{ name: "${fileName}", path: "${filePath}", type: "${fileType}" }
`;
  }
}

// Example Execution
console.log(generateResourceCode({
  fileName: "Photochemistry Quantum Yield Notes",
  filePath: "assets/resources/class-notes/quantum_yield.pdf",
  fileType: "pdf",
  chapterId: "c310f-3",
  resourceType: "classNotes"
}));