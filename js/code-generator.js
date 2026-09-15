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
    const folders = {
      "class-note": "class-notes",
      "personal-note": "personal-notes",
      "teacher-material": "class-notes",
      "slide": "slides",
      "book": "books",
      "previous-year-question": "previous-year-questions",
      "video": "videos"
    };

    const generatedPath =
      resourceType === "video"
        ? filePath
        : `assets/resources/${folders[resourceType]}/${fileName}`;

    return `
// Add to CHAPTER_RESOURCES["${chapterId}"].${resourceType}
{ name: "${fileName}", path: "${generatedPath}", type: "${fileType}" }
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