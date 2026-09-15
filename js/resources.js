
const RESOURCES_DATA = [

{
  id: "res-310f-c310f-2-gx4pw",
  courseCode: "310F",
  chapterId: "c310f-2",
  chapterTitle: "Magnetic properties of substances",
  title: "Megnetic Video",
  type: "video",
  fileName: "megnetic",
  filePath: "https://youtu.be/Z4iE3aaNeTM?si=uwZQVwJY1bArWqqy"
},
{
  id: "res-330f-c330f-2-9ghvr",
  courseCode: "330F",
  chapterId: "c330f-2",
  chapterTitle: "Organic reaction mechanisms",
  title: "Organic Chemistry Solomons Book",
  type: "book",
  fileName: "Organic Chemistry Solomons.pdf",
  filePath: "assets/resources/books/Organic Chemistry Solomons.pdf"
},

];


/* ============================================================
   RESOURCE TYPE DEFINITIONS
   ============================================================ */

const RESOURCE_TYPES = {

  "class-note": {
    label: "Class Note",
    folder: "class-notes",
    icon: "📝"
  },

  "personal-note": {
    label: "Personal Note",
    folder: "personal-notes",
    icon: "📒"
  },

  "teacher-material": {
    label: "Teacher Material",
    folder: "class-notes",
    icon: "👨‍🏫"
  },

  "slide": {
    label: "Slides",
    folder: "slides",
    icon: "📊"
  },

  "book": {
    label: "Book",
    folder: "books",
    icon: "📚"
  },

  "previous-year-question": {
    label: "Previous Year Questions",
    folder: "previous-year-questions",
    icon: "📄"
  },

  "video": {
    label: "Video",
    folder: "videos",
    icon: "🎥"
  }

};


/* ============================================================
   FILE TYPE DEFINITIONS
   ============================================================ */

const FILE_TYPES = {

  pdf: {
    label: "PDF",
    extensions: [".pdf"],
    icon: "📄"
  },

  txt: {
    label: "Text File",
    extensions: [".txt"],
    icon: "📃"
  },

  docx: {
    label: "Word Document",
    extensions: [".docx"],
    icon: "📘"
  },

  pptx: {
    label: "PowerPoint",
    extensions: [".pptx"],
    icon: "📊"
  },

  ppt: {
    label: "PowerPoint",
    extensions: [".ppt"],
    icon: "📊"
  },

  mp4: {
    label: "Video",
    extensions: [".mp4"],
    icon: "🎥"
  },

  webm: {
    label: "Video",
    extensions: [".webm"],
    icon: "🎥"
  },

  mov: {
    label: "Video",
    extensions: [".mov"],
    icon: "🎥"
  }
};


/* ============================================================
   BASIC RESOURCE HELPERS
   ============================================================ */


/**
 * Get all resources.
 */
function getAllResources() {
  return RESOURCES_DATA;
}


/**
 * Get a resource by its ID.
 *
 * Example:
 *
 * getResourceById("res-310f-001")
 */
function getResourceById(resourceId) {

  return RESOURCES_DATA.find(
    resource => resource.id === resourceId
  ) || null;

}


/**
 * Get resources belonging to a specific course.
 *
 * Example:
 *
 * getResourcesByCourse("310F")
 */
function getResourcesByCourse(courseCode) {

  if (!courseCode) {
    return [];
  }

  const code = courseCode.toLowerCase().trim();

  return RESOURCES_DATA.filter(resource =>
    resource.courseCode.toLowerCase() === code
  );

}


/**
 * Get resources belonging to a specific chapter.
 *
 * Example:
 *
 * getResourcesByChapter("c310f-1")
 */
function getResourcesByChapter(chapterId) {

  if (!chapterId) {
    return [];
  }

  return RESOURCES_DATA.filter(
    resource => resource.chapterId === chapterId
  );

}


/**
 * Get resources of a particular type.
 *
 * Example:
 *
 * getResourcesByType("book")
 */
function getResourcesByType(type) {

  if (!type) {
    return [];
  }

  return RESOURCES_DATA.filter(
    resource => resource.type === type
  );

}


/* ============================================================
   COURSE + CHAPTER RESOURCE LOOKUP
   ============================================================ */


/**
 * Get all resources for a specific course AND chapter.
 *
 * Example:
 *
 * getChapterResources("310F", "c310f-1")
 */
function getChapterResources(courseCode, chapterId) {

  if (!courseCode || !chapterId) {
    return [];
  }

  const code = courseCode.toLowerCase().trim();

  return RESOURCES_DATA.filter(resource =>
    resource.courseCode.toLowerCase() === code &&
    resource.chapterId === chapterId
  );

}


/**
 * Get resources grouped by type for a chapter.
 *
 * Returns:
 *
 * {
 *   "class-note": [],
 *   "personal-note": [],
 *   "teacher-material": [],
 *   "slide": [],
 *   "book": []
 * }
 */
function getGroupedChapterResources(courseCode, chapterId) {

  const resources = getChapterResources(
    courseCode,
    chapterId
  );

  const grouped = {

    "class-note": [],
    "personal-note": [],
    "teacher-material": [],
    "slide": [],
    "book": [],
    "previous-year-question": [],
    "video": []

  };

  resources.forEach(resource => {

    if (grouped[resource.type]) {
      grouped[resource.type].push(resource);
    }

  });

  return grouped;

}


/* ============================================================
   SEARCH
   ============================================================ */


/**
 * Search resources by:
 *
 * - title
 * - course code
 * - chapter title
 * - file name
 * - resource type
 *
 * Example:
 *
 * searchResources("dipole")
 */
function searchResources(searchTerm) {

  if (!searchTerm || !searchTerm.trim()) {
    return [];
  }

  const query = searchTerm.toLowerCase().trim();

  return RESOURCES_DATA.filter(resource => {

    return (

      resource.title?.toLowerCase().includes(query) ||

      resource.courseCode?.toLowerCase().includes(query) ||

      resource.chapterTitle?.toLowerCase().includes(query) ||

      resource.fileName?.toLowerCase().includes(query) ||

      resource.type?.toLowerCase().includes(query)

    );

  });

}


/* ============================================================
   RESOURCE COUNT FUNCTIONS
   ============================================================ */


/**
 * Total number of resources.
 */
function getResourceCount() {

  return RESOURCES_DATA.length;

}


/**
 * Number of resources for a course.
 */
function getCourseResourceCount(courseCode) {

  return getResourcesByCourse(courseCode).length;

}


/**
 * Number of resources for a chapter.
 */
function getChapterResourceCount(chapterId) {

  return getResourcesByChapter(chapterId).length;

}


/**
 * Number of resources of a particular type.
 */
function getResourceTypeCount(type) {

  return getResourcesByType(type).length;

}


/* ============================================================
   RESOURCE VALIDATION
   ============================================================ */


/**
 * Check whether a resource object contains the
 * required information.
 *
 * Required:
 *
 * id
 * courseCode
 * chapterId
 * chapterTitle
 * title
 * type
 * fileName
 * filePath
 */
function validateResource(resource) {

  const requiredFields = [

    "id",
    "courseCode",
    "chapterId",
    "chapterTitle",
    "title",
    "type",
    "fileName",
    "filePath"

  ];

  const missingFields = requiredFields.filter(
    field =>
      !resource[field] ||
      String(resource[field]).trim() === ""
  );

  if (missingFields.length > 0) {

    return {
      valid: false,
      missing: missingFields
    };

  }


  if (!RESOURCE_TYPES[resource.type]) {

    return {
      valid: false,
      missing: [],
      error: `Unknown resource type: ${resource.type}`
    };

  }


  return {
    valid: true,
    missing: []
  };

}


/**
 * Validate every resource currently stored
 * in RESOURCES_DATA.
 *
 * Useful for debugging.
 */
function validateAllResources() {

  const errors = [];

  RESOURCES_DATA.forEach((resource, index) => {

    const result = validateResource(resource);

    if (!result.valid) {

      errors.push({
        index: index,
        id: resource.id || "Unknown",
        ...result
      });

    }

  });

  return errors;

}


/* ============================================================
   FILE PATH HELPERS
   ============================================================ */


/**
 * Get the expected resource folder for a type.
 *
 * Example:
 *
 * getResourceFolder("book")
 *
 * returns:
 *
 * "assets/resources/books/"
 */
function getResourceFolder(type) {

  const resourceType = RESOURCE_TYPES[type];

  if (!resourceType) {
    return null;
  }

  return `assets/resources/${resourceType.folder}/`;

}


/**
 * Automatically create a file path from a resource type
 * and file name.
 *
 * Example:
 *
 * buildResourcePath("book", "organic-book.pdf")
 *
 * returns:
 *
 * assets/resources/books/organic-book.pdf
 */
function buildResourcePath(type, fileName) {

  const folder = getResourceFolder(type);

  if (!folder || !fileName) {
    return "";
  }

  return `${folder}${fileName}`;

}


/* ============================================================
   RESOURCE DISPLAY HELPERS
   ============================================================ */


/**
 * Get human-readable resource type.
 *
 * Example:
 *
 * getResourceTypeLabel("class-note")
 *
 * returns:
 *
 * "Class Note"
 */
function getResourceTypeLabel(type) {

  return RESOURCE_TYPES[type]?.label || "Resource";

}


/**
 * Get resource icon.
 */
function getResourceTypeIcon(type) {

  return RESOURCE_TYPES[type]?.icon || "📁";

}


/**
 * Get file type information from filename.
 *
 * Example:
 *
 * getFileType("lecture.pdf")
 */
function getFileType(fileName) {

  if (!fileName) {
    return null;
  }

  const lowerName = fileName.toLowerCase();

  for (const [key, fileType] of Object.entries(FILE_TYPES)) {

    if (
      fileType.extensions.some(
        extension => lowerName.endsWith(extension)
      )
    ) {

      return {
        type: key,
        ...fileType
      };

    }

  }

  return {
    type: "unknown",
    label: "File",
    icon: "📄"
  };

}


/* ============================================================
   RESOURCE ID GENERATOR
   ============================================================ */


/**
 * Generate a new resource ID.
 *
 * Example result:
 *
 * res-310f-c310f-1-001
 */
function generateResourceId(courseCode, chapterId) {

  const cleanCode = String(courseCode)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  const existingCount = RESOURCES_DATA.filter(
    resource =>
      resource.courseCode?.toLowerCase() ===
      String(courseCode).toLowerCase()
  ).length;

  const number = String(existingCount + 1)
    .padStart(3, "0");

  return `res-${cleanCode}-${chapterId}-${number}`;

}


/* ============================================================
   RESOURCE OBJECT GENERATOR
   ============================================================ */


/**
 * Create a resource object.
 *
 * This function is mainly useful for code-generator.html.
 *
 * Example:
 *
 * createResourceObject({
 *   courseCode: "310F",
 *   chapterId: "c310f-1",
 *   chapterTitle: "Electric properties of molecules",
 *   title: "Dipole Moment",
 *   type: "class-note",
 *   fileName: "dipole-moment.pdf"
 * });
 */
function createResourceObject(data) {

  if (!data) {
    return null;
  }

  const courseCode = data.courseCode || "";
  const chapterId = data.chapterId || "";
  const type = data.type || "";
  const fileName = data.fileName || "";

  const resource = {

    id: data.id ||
      generateResourceId(courseCode, chapterId),

    courseCode: courseCode,

    chapterId: chapterId,

    chapterTitle: data.chapterTitle || "",

    title: data.title ||
      fileName.replace(/\.[^/.]+$/, ""),

    type: type,

    fileName: fileName,

    filePath:
      data.filePath ||
      buildResourcePath(type, fileName)

  };


  return resource;

}


/* ============================================================
   EXPORT-STYLE GLOBAL OBJECT
   ============================================================
 *
 * This project uses normal <script> files rather than
 * ES modules, so everything remains globally accessible.
 *
 * RESOURCE_API provides one clean object for app.js and
 * code-generator.html.
 *
 * ============================================================
 */

const RESOURCE_API = {

  // Data
  data: RESOURCES_DATA,
  types: RESOURCE_TYPES,
  fileTypes: FILE_TYPES,

  // Getters
  getAll: getAllResources,
  getById: getResourceById,
  getByCourse: getResourcesByCourse,
  getByChapter: getResourcesByChapter,
  getByType: getResourcesByType,
  getChapterResources: getChapterResources,
  getGroupedChapterResources: getGroupedChapterResources,

  // Search
  search: searchResources,

  // Counts
  count: getResourceCount,
  courseCount: getCourseResourceCount,
  chapterCount: getChapterResourceCount,
  typeCount: getResourceTypeCount,

  // Validation
  validate: validateResource,
  validateAll: validateAllResources,

  // File helpers
  getFolder: getResourceFolder,
  buildPath: buildResourcePath,
  getFileType: getFileType,

  // Resource creation
  generateId: generateResourceId,
  create: createResourceObject,

  // Display
  getTypeLabel: getResourceTypeLabel,
  getTypeIcon: getResourceTypeIcon

};