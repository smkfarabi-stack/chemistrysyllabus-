================================================================================
                    3RD YEAR CHEMISTRY RESOURCE SYSTEM
================================================================================

Project Name:
3rd Year Chemistry App

Project Folder:
3rd-year-chem-app

Creator:
Farabi · Chemistry 53

Project Purpose:
A static web-based Chemistry syllabus and resource management system designed
for 3rd-year Chemistry students.

Portfolio:
https://smkfarabi-stack.github.io/my-portfolio/


================================================================================
1. PROJECT OVERVIEW
================================================================================

This project is a static HTML, CSS and JavaScript web application for organizing
the 3rd-year Chemistry syllabus and study resources.

The application provides:

    • Complete course list
    • Course-wise chapter organization
    • Chapter-wise topic lists
    • Class notes
    • Personal notes
    • Teacher materials
    • Slides
    • Books
    • Resource search
    • Resource filtering
    • Course filtering
    • Chapter/resource organization
    • Resource code generation
    • Glassmorphism-based modern UI
    • Chemistry-themed background
    • Loading animation
    • Creator information
    • Portfolio link

The project does NOT require a database or backend server.

Everything is stored in JavaScript data structures and physical files.

This makes the application suitable for:

    • Local use
    • USB/offline use
    • GitHub Pages
    • Static hosting
    • Personal academic use
    • Student resource sharing


================================================================================
2. TECHNOLOGY USED
================================================================================

Frontend:

    HTML5
    CSS3
    Vanilla JavaScript

No frontend framework is required.

The project does NOT require:

    React
    Vue
    Angular
    Node.js
    Express
    MongoDB
    MySQL
    Firebase

The application is intentionally kept simple and static.

Main technologies:

    HTML
        Provides the application structure.

    CSS
        Controls the complete visual appearance.

    JavaScript
        Controls syllabus data, resource data and application behavior.


================================================================================
3. COMPLETE PROJECT STRUCTURE
================================================================================

3rd-year-chem-app/
│
├── assets/
│   │
│   ├── images/
│   │   └── bg.svg
│   │
│   └── resources/
│       │
│       ├── class-notes/
│       ├── slides/
│       ├── personal-notes/
│       └── books/
│
├── css/
│   └── styles.css
│
├── js/
│   ├── syllabus-data.js
│   ├── resources.js
│   ├── code-generator.js
│   └── app.js
│
├── code-generator.html
│
├── index.html
│
└── README.txt


================================================================================
4. FILE RESPONSIBILITIES
================================================================================


4.1 index.html
----------------

This is the MAIN LANDING PAGE of the application.

It contains:

    • HTML document structure
    • Loading screen
    • Creator information
    • Portfolio link
    • Main application container
    • JavaScript file imports

The main application is rendered inside:

    <main id="app-root"></main>

Important:

The creator card is intentionally placed OUTSIDE the #app-root element.

This is important because app.js dynamically renders/replaces the content
inside #app-root.

If creator information is placed inside #app-root, app.js may remove it
when the application is rendered.


================================================================================

4.2 css/styles.css
------------------

This file controls the visual design of the application.

It contains styles for:

    • Global page layout
    • Background
    • Glassmorphism
    • Header
    • Sidebar
    • Course cards
    • Chapter cards
    • Topic lists
    • Resource cards
    • Search box
    • Filters
    • Buttons
    • Loading screen
    • Empty states
    • Footer
    • Responsive/mobile layout

The application uses a modern dark Chemistry-inspired design.

The background is loaded from:

    assets/images/bg.svg

The CSS uses relative paths so that the project can work on static hosting
such as GitHub Pages.


================================================================================

4.3 js/syllabus-data.js
-----------------------

This is the main syllabus database.

It contains:

    • Courses
    • Course codes
    • Course titles
    • Chapters
    • Chapter IDs
    • Chapter titles
    • Topics

The syllabus is stored as JavaScript data rather than a database.

Example structure:

    {
        code: "310F",
        title: "Physical Chemistry III",
        chapters: [
            {
                id: "c310f-1",
                title: "Electric properties of molecules",
                topics: [
                    "Topic 1",
                    "Topic 2",
                    "Topic 3"
                ]
            }
        ]
    }


IMPORTANT:

Course codes and chapter IDs are used by the resource system.

Therefore, avoid changing an existing chapter ID after resources have been
connected to that chapter.


================================================================================

4.4 js/resources.js
-------------------

This file contains the resource database.

At the top, resources are stored in:

    const RESOURCES_DATA = [];


Every resource is represented by an object.

Example:

    {
      id: "res-310f-c310f-1-x7k92",
      courseCode: "310F",
      chapterId: "c310f-1",
      chapterTitle: "Electric properties of molecules",
      title: "Dipole Moment Class Note",
      type: "class-note",
      fileName: "dipole-moment.pdf",
      filePath: "assets/resources/class-notes/dipole-moment.pdf"
    },


The resource system also defines resource types.

Current resource types:

    class-note
        Class Note

    personal-note
        Personal Note

    teacher-material
        Teacher Material

    slide
        Slides

    book
        Book

    previous-year-question
        Previous Year Questions

    video
        Video


Resource folder mapping:

    class-note
        ↓
    assets/resources/class-notes/

    personal-note
        ↓
    assets/resources/personal-notes/

    teacher-material
        ↓
    assets/resources/class-notes/

    slide
        ↓
    assets/resources/slides/

    book
        ↓
    assets/resources/books/

    previous-year-question
        ↓
    assets/resources/previous-year-questions/

    video
        ↓
    assets/resources/videos/


================================================================================
5. RESOURCE OBJECT EXPLAINED
================================================================================

A resource object contains several important properties.


5.1 id
------

Example:

    id: "res-310f-c310f-1-x7k92"

This uniquely identifies the resource.

The ID is useful for:

    • Finding resources
    • Managing resources
    • Avoiding duplicate identification
    • Internal application operations


5.2 courseCode
--------------

Example:

    courseCode: "310F"

This connects the resource to a specific Chemistry course.

The value must match the course code in syllabus-data.js.


5.3 chapterId
-------------

Example:

    chapterId: "c310f-1"

This connects the resource to a specific chapter.

The value must match the chapter ID in syllabus-data.js.


5.4 chapterTitle
----------------

Example:

    chapterTitle: "Electric properties of molecules"

This stores the readable chapter name.

It makes the resource object easier to understand and debug.


5.5 title
---------

Example:

    title: "Dipole Moment Class Note"

This is the title displayed to the user.


5.6 type
--------

Example:

    type: "class-note"

This determines the category of the resource.

Allowed values:

    class-note
    personal-note
    teacher-material
    slide
    book


5.7 fileName
------------

Example:

    fileName: "dipole-moment.pdf"

This is the actual file name.


5.8 filePath
------------

Example:

    filePath: "assets/resources/class-notes/dipole-moment.pdf"

This is the path used by the web application to open the resource.

The physical file must actually exist at this location.


================================================================================
6. HOW THE APPLICATION WORKS
================================================================================

The application follows this basic flow:


                    index.html
                         │
                         ▼
              syllabus-data.js
                         │
                         ▼
                 resources.js
                         │
                         ▼
                     app.js
                         │
                         ▼
                  #app-root
                         │
                         ▼
                User Interface


More specifically:


STEP 1
------

The browser opens:

    index.html


STEP 2
------

index.html loads:

    css/styles.css


STEP 3
------

index.html loads:

    js/syllabus-data.js


STEP 4
------

index.html loads:

    js/resources.js


STEP 5
------

index.html loads:

    js/code-generator.js


STEP 6
------

index.html loads:

    js/app.js


STEP 7
------

app.js reads the syllabus and resource data.


STEP 8
------

app.js dynamically generates the user interface inside:

    #app-root


STEP 9
------

The user interacts with:

    • Courses
    • Chapters
    • Topics
    • Search
    • Filters
    • Resources


================================================================================
7. SYLLABUS DATA LOGIC
================================================================================

The syllabus is organized in a hierarchy:


    COURSE
       │
       ├── CHAPTER
       │      │
       │      ├── TOPIC
       │      ├── TOPIC
       │      └── TOPIC
       │
       ├── CHAPTER
       │      │
       │      ├── TOPIC
       │      └── TOPIC
       │
       └── CHAPTER


Example:


    CHEM 310F
    │
    ├── Electric properties of molecules
    │      ├── Topic A
    │      ├── Topic B
    │      └── Topic C
    │
    ├── Chemical bonding
    │      ├── Topic A
    │      └── Topic B
    │
    └── Other chapter
           ├── Topic A
           └── Topic B


This structure makes it possible to connect resources directly to chapters.


================================================================================
8. IMPORTANT SYLLABUS FUNCTIONS
================================================================================

syllabus-data.js provides helper functions.

Examples include:


getCourseById()
----------------

Finds a course using its ID.


getChapterById()
----------------

Finds a chapter using its chapter ID.


getCourseByChapterId()
----------------------

Finds which course contains a particular chapter.


getAllCourses()
---------------

Returns all courses.


getCourseCount()
----------------

Returns the total number of courses.


getChapterCount()
-----------------

Returns the total number of chapters.


searchSyllabus()
----------------

Searches the syllabus data.


These functions allow app.js to work with the syllabus without repeatedly
writing the same search logic.


================================================================================
9. RESOURCE DATA LOGIC
================================================================================

resources.js provides helper functions for resource management.

Important functions include:


getAllResources()
-----------------

Returns all resources.


getResourceById()
-----------------

Finds a resource using its ID.


getResourcesByCourse()
---------------------

Returns resources belonging to a course.


getResourcesByChapter()
-----------------------

Returns resources belonging to a chapter.


getResourcesByType()
--------------------

Returns resources of a specific type.


getChapterResources()
---------------------

Returns resources for a chapter.


getGroupedChapterResources()
----------------------------

Groups resources according to chapter.


searchResources()
-----------------

Searches resources.


getResourceCount()
------------------

Returns total resource count.


getCourseResourceCount()
------------------------

Returns resource count for a course.


getChapterResourceCount()
-------------------------

Returns resource count for a chapter.


getResourceTypeCount()
----------------------

Returns resource count for a specific type.


validateResource()
------------------

Checks whether a resource object is valid.


validateAllResources()
----------------------

Validates the complete resource list.


getResourceFolder()
-------------------

Determines the correct folder for a resource type.


buildResourcePath()
-------------------

Builds a resource file path.


getResourceTypeLabel()
----------------------

Returns the readable resource type name.


getResourceTypeIcon()
---------------------

Returns the icon associated with a resource type.


getFileType()
-------------

Determines the file type from the file name.


generateResourceId()
--------------------

Creates a resource ID.


createResourceObject()
----------------------

Creates a resource object using the expected format.


RESOURCE_API
------------

Provides an organized resource API/interface for resource-related operations.


================================================================================
10. RESOURCE TYPES
================================================================================

The application currently supports:


1. CLASS NOTE
-------------

Type:

    class-note

Folder:

    assets/resources/class-notes/


Used for:

    • Class lecture notes
    • Lecture handouts
    • Academic notes
    • Course notes


2. PERSONAL NOTE
----------------

Type:

    personal-note

Folder:

    assets/resources/personal-notes/


Used for:

    • Student-created notes
    • Personal summaries
    • Revision notes
    • Exam preparation notes


3. TEACHER MATERIAL
-------------------

Type:

    teacher-material

Folder:

    assets/resources/class-notes/


Used for:

    • Teacher-provided documents
    • Teacher handouts
    • Official class materials


4. SLIDES
---------

Type:

    slide

Folder:

    assets/resources/slides/


Used for:

    • PowerPoint files
    • Lecture slides
    • Presentation materials


5. BOOK
--------

Type:

    book

Folder:

    assets/resources/books/


Used for:

    • Textbooks
    • Reference books
    • Book chapters
    • Study books


================================================================================
11. CODE GENERATOR
================================================================================

The project includes:

    code-generator.html


The purpose of the code generator is to make adding new resources easier.

Instead of manually writing a resource object, the generator creates the
required JavaScript object.


================================================================================
12. HOW TO ADD A NEW RESOURCE
================================================================================

Follow these steps every time you add a new resource.


STEP 1
------

Open:

    code-generator.html


STEP 2
------

Enter the actual file name.

Example:

    dipole-moment.pdf


STEP 3
------

Select the resource type.

Example:

    Class Note


STEP 4
------

Select the course.

Example:

    310F


STEP 5
------

Select the chapter.

Example:

    Electric properties of molecules


STEP 6
------

Click:

    Generate


STEP 7
------

The generator creates an object similar to:


    {
      id: "res-310f-c310f-1-x7k92",
      courseCode: "310F",
      chapterId: "c310f-1",
      chapterTitle: "Electric properties of molecules",
      title: "Dipole Moment Class Note",
      type: "class-note",
      fileName: "dipole-moment.pdf",
      filePath: "assets/resources/class-notes/dipole-moment.pdf"
    },


STEP 8
------

Click:

    Copy Code


STEP 9
------

Open:

    js/resources.js


STEP 10
-------

Find:

    const RESOURCES_DATA = [];


Change it to something like:


    const RESOURCES_DATA = [
      {
        id: "res-310f-c310f-1-x7k92",
        courseCode: "310F",
        chapterId: "c310f-1",
        chapterTitle: "Electric properties of molecules",
        title: "Dipole Moment Class Note",
        type: "class-note",
        fileName: "dipole-moment.pdf",
        filePath: "assets/resources/class-notes/dipole-moment.pdf"
      }
    ];


If resources already exist, add the new object after the previous object and
separate objects with commas.


STEP 11
-------

Put the actual physical file into:

    assets/resources/class-notes/


For this example:

    assets/resources/class-notes/dipole-moment.pdf


STEP 12
-------

Refresh the application.


The resource should now appear under the appropriate course/chapter.


================================================================================
13. VERY IMPORTANT RESOURCE RULE
================================================================================

The JavaScript resource object and the physical file must match.


For example:


resources.js:

    fileName:
    dipole-moment.pdf


filePath:

    assets/resources/class-notes/dipole-moment.pdf


Physical file:

    assets/
    └── resources/
        └── class-notes/
            └── dipole-moment.pdf


All three must match.


If the JavaScript says:

    dipole-moment.pdf


but the actual file is:

    dipole-moment-final.pdf


the resource will not open correctly.


================================================================================
14. HOW TO ADD A NEW COURSE
================================================================================

Open:

    js/syllabus-data.js


Find the main syllabus data array.

Add a new course using the existing structure.

Example:


    {
      code: "399X",
      title: "Example Chemistry Course",
      chapters: [
        {
          id: "c399x-1",
          title: "Example Chapter",
          topics: [
            "Topic 1",
            "Topic 2",
            "Topic 3"
          ]
        }
      ]
    }


Recommended naming:

Course code:

    399X


Chapter ID:

    c399x-1


Second chapter:

    c399x-2


Third chapter:

    c399x-3


The chapter ID should be unique across the entire project.


================================================================================
15. HOW TO ADD A NEW CHAPTER
================================================================================

Inside the appropriate course, add:


    {
      id: "c310f-5",
      title: "New Chapter",
      topics: [
        "Topic 1",
        "Topic 2",
        "Topic 3"
      ]
    }


IMPORTANT:

The chapter ID should be unique.


Do NOT reuse an existing chapter ID.


================================================================================
16. HOW TO ADD A NEW TOPIC
================================================================================

Inside the chapter's topics array:


    topics: [
      "Existing Topic",
      "Another Topic",
      "New Topic"
    ]


Topics are simple strings.

No separate topic database is required.


================================================================================
17. CHAPTER ID RULE
================================================================================

Chapter IDs are extremely important.

Example:

    c310f-1


Breakdown:

    c
    ↓
    indicates chapter

    310f
    ↓
    course code

    1
    ↓
    chapter number


Example:


    c310f-1
    c310f-2
    c310f-3


If a resource is connected to:

    c310f-1


and the chapter ID is later changed to:

    c310f-01


the resource may no longer be connected correctly.


Therefore:

DO NOT casually change chapter IDs after resources have been added.


================================================================================
18. SEARCH SYSTEM
================================================================================

The application contains search functionality.

Search can be used to find information from the syllabus and resources.

Conceptually:


    User enters search text
              │
              ▼
        Search function
              │
              ▼
       Compare text
              │
              ▼
       Matching results
              │
              ▼
       Display results


The resource search system is designed to work with:

    • Resource title
    • Course
    • Chapter
    • Resource information


The syllabus search system searches syllabus-related information.


================================================================================
19. FILTER SYSTEM
================================================================================

The application can organize resources according to:

    • Course
    • Chapter
    • Resource type


For example:


    Course:
        CHEM 310F


    Chapter:
        Electric properties of molecules


    Resource type:
        Class Note


The application can then display only resources matching those conditions.


================================================================================
20. FILE TYPE SUPPORT
================================================================================

The current resource system recognizes:

    PDF
    TXT
    DOCX
    PPTX
    PPT


File type definitions are stored in resources.js.


Example:

    pdf
        .pdf

    txt
        .txt

    docx
        .docx

    pptx
        .pptx

    ppt
        .ppt


When adding a resource, use the actual extension of the file.


================================================================================
21. USER INTERFACE DESIGN
================================================================================

The UI uses a dark glassmorphism design.

Main visual characteristics:

    • Dark background
    • Transparent/glass panels
    • Blur effects
    • Aqua/cyan highlights
    • Purple accents
    • Green accents
    • Rounded cards
    • Soft borders
    • Modern typography
    • Responsive layout


The Chemistry-themed background is:

    assets/images/bg.svg


If you want to replace the background, replace:

    bg.svg


while keeping the same file name.

Alternatively, update the path inside:

    css/styles.css


================================================================================
22. CREATOR SECTION
================================================================================

The landing page contains creator information.

Current creator information:


    Created by

    Farabi · Chemistry 53

    3rd Year Chemistry Resource System

    View Portfolio


The portfolio link is:


    https://smkfarabi-stack.github.io/my-portfolio/


The creator card is located outside:

    #app-root


This is intentional.

app.js controls the content inside #app-root.

If creator information is placed inside #app-root, the dynamic rendering system
can remove it.


================================================================================
23. LOADING SCREEN
================================================================================

The application contains a loading screen.

The loading screen displays:

    • Chemistry flask
    • Liquid animation
    • Bubble animation
    • Loading text


The loading screen exists to provide a visual transition while the application
initializes.


================================================================================
24. APP.JS LOGIC
================================================================================

app.js is the main application controller.

Its general responsibility is:


    Load data
       │
       ▼
    Initialize application
       │
       ▼
    Build interface
       │
       ▼
    Display courses
       │
       ▼
    Display chapters
       │
       ▼
    Display topics
       │
       ▼
    Display resources
       │
       ▼
    Handle user interactions


It acts as the bridge between:

    syllabus-data.js
             +
    resources.js
             +
    HTML/CSS


The exact visual components are controlled by app.js and styled by
styles.css.


================================================================================
25. CODE-GENERATOR.JS
================================================================================

The project also contains:

    js/code-generator.js


This file is part of the project's JavaScript layer and is available to the
main application.

The standalone:

    code-generator.html

provides the user interface for generating resource objects.

The purpose of the generator system is to reduce manual errors when creating
resource objects.


================================================================================
26. STATIC ARCHITECTURE
================================================================================

This project intentionally uses a static architecture.


There is NO:


    Database
    Backend API
    Authentication server
    User account system
    Cloud storage
    Server-side resource management


Instead:


    JavaScript
        +
    HTML
        +
    CSS
        +
    Local resource files


form the complete application.


This makes the project:

    • Easy to understand
    • Easy to deploy
    • Cheap/free to host
    • Easy to backup
    • Easy to move
    • Suitable for GitHub Pages


================================================================================
27. RUNNING THE PROJECT LOCALLY
================================================================================

The simplest method is to open:

    index.html


in a browser.


However, some browsers may restrict local file access depending on how the
JavaScript files are loaded.

If that happens, use a local development server.


OPTION 1: VS CODE LIVE SERVER
-----------------------------

Install the VS Code extension:

    Live Server


Then:

    1. Open the project in VS Code.
    2. Right-click index.html.
    3. Select "Open with Live Server".
    4. The application opens in the browser.


OPTION 2: PYTHON HTTP SERVER
-----------------------------

If Python is installed, open a terminal in the project folder.

Run:


    python3 -m http.server 8000


Then open:


    http://localhost:8000


The application should load from:

    http://localhost:8000/index.html


================================================================================
28. GITHUB PAGES DEPLOYMENT
================================================================================

Because the project is static, it can be hosted using GitHub Pages.


The important rule is:

KEEP THE PROJECT STRUCTURE INTACT.


For example:


    index.html
    css/styles.css
    js/app.js
    js/syllabus-data.js
    js/resources.js
    assets/images/bg.svg
    assets/resources/...


must remain in their expected relative locations.


GitHub Pages works with the relative paths already used by the project.


================================================================================
29. RELATIVE PATHS
================================================================================

The project uses relative paths.

Example:


    css/styles.css


is loaded from:


    index.html
        │
        └── css/
            └── styles.css


Background:


    ../assets/images/bg.svg


from:

    css/styles.css


Resource:


    assets/resources/class-notes/example.pdf


from:

    index.html


Do not randomly add "/" before paths.

For example, avoid changing:


    assets/resources/books/book.pdf


into:


    /assets/resources/books/book.pdf


unless you specifically understand how the hosting environment handles root
paths.


Relative paths are safer for GitHub Pages and local project use.


================================================================================
30. HOW TO BACK UP THE PROJECT
================================================================================

Simply copy the entire:


    3rd-year-chem-app/


folder.


Do NOT backup only index.html.

The complete project includes:


    index.html
    code-generator.html
    css/
    js/
    assets/
    README.txt


All are required.


================================================================================
31. COMMON MISTAKE #1
================================================================================

PROBLEM:

Resource card appears, but clicking it does not open the file.


CAUSE:

The filePath is incorrect or the physical file is missing.


CHECK:


    filePath:
    assets/resources/class-notes/example.pdf


Then verify that the file exists at:


    assets/resources/class-notes/example.pdf


The file name must match exactly.


================================================================================
32. COMMON MISTAKE #2
================================================================================

PROBLEM:

A resource does not appear under the expected chapter.


CAUSE:

The chapterId is incorrect.


Example resource:


    chapterId: "c310f-1"


The syllabus must contain:


    id: "c310f-1"


If they are different, the application cannot correctly connect the resource
to the chapter.


================================================================================
33. COMMON MISTAKE #3
================================================================================

PROBLEM:

JavaScript stops working after adding a resource.


CAUSE:

There may be a syntax error in resources.js.


Typical causes:

    • Missing comma
    • Missing }
    • Missing ]
    • Missing quotation mark
    • Extra comma in an incorrect location
    • Incorrect object structure


Correct structure:


    const RESOURCES_DATA = [
      {
        ...
      },
      {
        ...
      }
    ];


================================================================================
34. COMMON MISTAKE #4
================================================================================

PROBLEM:

Creator information disappears.


CAUSE:

Creator HTML was placed inside:


    #app-root


app.js dynamically controls that area.


SOLUTION:

Keep the creator section outside:


    <main id="app-root"></main>


For example:


    <section class="creator-card">
        ...
    </section>

    <main id="app-root"></main>


================================================================================
35. COMMON MISTAKE #5
================================================================================

PROBLEM:

Background image does not appear.


CHECK:


    assets/images/bg.svg


must exist.


Then check:


    css/styles.css


The path should correctly point from the CSS file to the image.


Current expected relationship:


    css/
        styles.css

    assets/
        images/
            bg.svg


Therefore the CSS path is:


    ../assets/images/bg.svg


================================================================================
36. COMMON MISTAKE #6
================================================================================

PROBLEM:

A resource has the wrong category.


For example:

A PDF is supposed to be a Book but is categorized as Class Note.


Remember:

File extension and resource category are different things.


Example:


    File type:
        PDF


    Resource type:
        Book


A PDF can therefore be:

    Class Note
    Personal Note
    Teacher Material
    Book


depending on its purpose.


================================================================================
37. RECOMMENDED FILE NAMING
================================================================================

Use simple file names.

Recommended:


    dipole-moment.pdf
    chemical-bonding.pdf
    spectroscopy-notes.pdf
    chapter-1-slides.pptx


Avoid unnecessary spaces where possible.


Better:


    physical-chemistry-notes.pdf


Instead of:


    Physical Chemistry Notes Final Version 2.pdf


Simple names make paths easier to manage.


================================================================================
38. RECOMMENDED RESOURCE WORKFLOW
================================================================================

Whenever adding a new resource:


    1. Obtain the actual file.
              │
              ▼
    2. Decide the resource category.
              │
              ▼
    3. Identify the course.
              │
              ▼
    4. Identify the chapter.
              │
              ▼
    5. Open code-generator.html.
              │
              ▼
    6. Enter the file name.
              │
              ▼
    7. Select resource type.
              │
              ▼
    8. Select course.
              │
              ▼
    9. Select chapter.
              │
              ▼
   10. Generate the object.
              │
              ▼
   11. Copy the generated code.
              │
              ▼
   12. Paste it into resources.js.
              │
              ▼
   13. Put the actual file into the correct folder.
              │
              ▼
   14. Refresh the application.
              │
              ▼
   15. Test the resource.


================================================================================
39. DO NOT MANUALLY CHANGE GENERATED RESOURCE PATHS UNLESS NECESSARY
================================================================================

The generator automatically determines the folder according to the resource
type.

Example:


    class-note
        ↓
    assets/resources/class-notes/


    personal-note
        ↓
    assets/resources/personal-notes/


    slide
        ↓
    assets/resources/slides/


    book
        ↓
    assets/resources/books/


This reduces human error.


================================================================================
40. DATA RELATIONSHIP
================================================================================

The most important relationship in the application is:


    COURSE
       │
       │ courseCode
       ▼
    CHAPTER
       │
       │ chapterId
       ▼
    RESOURCE
       │
       │ filePath
       ▼
    PHYSICAL FILE


Example:


    CHEM 310F
       │
       ▼
    c310f-1
       │
       ▼
    Dipole Moment Class Note
       │
       ▼
    assets/resources/class-notes/dipole-moment.pdf


This is the core logic of the resource system.


================================================================================
41. WHY THE PROJECT DOES NOT NEED A DATABASE
================================================================================

The project is designed for a controlled academic resource collection.

The data volume is expected to remain manageable.

Therefore:

    JavaScript arrays
        +
    physical resource files


are sufficient.


Advantages:

    • No database configuration
    • No API
    • No server
    • No hosting cost
    • Easy deployment
    • Easy backup
    • Easy version control


If the project becomes extremely large in the future, a backend/database can
be introduced.


================================================================================
42. FUTURE DATABASE VERSION
================================================================================

If the project eventually needs:

    • User accounts
    • Admin panel
    • Online uploads
    • Comments
    • Ratings
    • Download tracking
    • Search indexing
    • Cloud storage
    • Multiple administrators


then a backend architecture can be introduced.

Possible future architecture:


    Frontend
        │
        ▼
    REST API
        │
        ▼
    Backend
        │
        ├── Database
        │
        └── File Storage


But this is NOT required for the current version.


================================================================================
43. FUTURE FEATURES
================================================================================

Possible future upgrades include:


    • Admin dashboard
    • Online resource upload
    • User authentication
    • Favorites
    • Bookmarking
    • Download counter
    • Recently viewed resources
    • Dark/light mode
    • Advanced search
    • Resource preview
    • PDF viewer
    • Online notes
    • Exam question bank
    • Past question archive
    • Important-topic marking
    • Chapter completion tracking
    • Student progress tracking
    • Automatic backup
    • Cloud storage
    • Database support


These are optional future improvements.


================================================================================
44. MAINTENANCE RULES
================================================================================

RULE 1
------

Do not delete a chapter ID if resources are already connected to it.


RULE 2
------

Do not change file names without updating filePath.


RULE 3
------

Do not move resource files without updating filePath.


RULE 4
------

Do not change resource type names randomly.

Use the existing values:


    class-note
    personal-note
    teacher-material
    slide
    book


RULE 5
------

Keep JavaScript syntax valid.


RULE 6
------

Keep relative paths correct.


RULE 7
------

Do not rename important files unless all references are updated.


RULE 8
------

When adding a resource, always test it after adding.


RULE 9
------

Keep backup copies before major structural changes.


RULE 10
-------

Do not put dynamic application content inside #app-root unless it is intended
to be controlled by app.js.


================================================================================
45. QUICK RESOURCE CHECKLIST
================================================================================

Before adding:


    [ ] File exists
    [ ] File name decided
    [ ] Course identified
    [ ] Chapter identified
    [ ] Resource type identified


After generating:


    [ ] Code copied
    [ ] Object pasted into resources.js
    [ ] Correct comma placement
    [ ] Physical file copied
    [ ] Folder is correct
    [ ] fileName matches
    [ ] filePath matches
    [ ] chapterId matches
    [ ] courseCode matches


After opening the app:


    [ ] Resource appears
    [ ] Resource is under correct course
    [ ] Resource is under correct chapter
    [ ] Resource opens correctly


================================================================================
46. QUICK COURSE CHECKLIST
================================================================================

When adding a new course:


    [ ] Course code is unique
    [ ] Course title is correct
    [ ] Chapter IDs are unique
    [ ] Chapter titles are correct
    [ ] Topics are correctly written
    [ ] Syntax is valid


================================================================================
47. QUICK PROJECT CHECKLIST
================================================================================

The project should contain:


    [ ] index.html
    [ ] code-generator.html
    [ ] README.txt

    [ ] css/styles.css

    [ ] js/syllabus-data.js
    [ ] js/resources.js
    [ ] js/code-generator.js
    [ ] js/app.js

    [ ] assets/images/bg.svg

    [ ] assets/resources/class-notes/
    [ ] assets/resources/slides/
    [ ] assets/resources/personal-notes/
    [ ] assets/resources/books/


================================================================================
48. DEVELOPMENT PHILOSOPHY
================================================================================

This project follows a simple principle:


    DATA
      +
    LOGIC
      +
    DESIGN
      =
    CHEMISTRY RESOURCE SYSTEM


DATA
----

syllabus-data.js
resources.js


LOGIC
-----

app.js
code-generator.js


DESIGN
------

styles.css
bg.svg


STRUCTURE
---------

index.html
code-generator.html


RESOURCES
---------

assets/resources/


DOCUMENTATION
-------------

README.txt


Keeping these responsibilities separate makes the project easier to maintain.


================================================================================
49. IMPORTANT ARCHITECTURE SUMMARY
================================================================================

The complete architecture can be understood as:


                         USER
                           │
                           ▼
                       index.html
                           │
              ┌────────────┼────────────┐
              │            │            │
              ▼            ▼            ▼
           CSS          SYLLABUS      RESOURCES
              │            │            │
              │            │            │
              ▼            └─────┬──────┘
          styles.css             │
                                 ▼
                               app.js
                                 │
                                 ▼
                              #app-root
                                 │
                                 ▼
                         USER INTERFACE


Resource addition:


                    code-generator.html
                             │
                             ▼
                      Resource Object
                             │
                             ▼
                       resources.js
                             │
                             ▼
                     Resource Metadata
                             │
                             ▼
                    Physical Resource File


================================================================================
50. SIMPLE EXPLANATION OF THE WHOLE PROJECT
================================================================================

If someone asks:

"What is this project?"


Answer:


This is a static 3rd-year Chemistry academic resource management web
application.

The syllabus is stored in JavaScript.

Resources are stored as metadata in resources.js and as physical files inside
the assets/resources folders.

app.js reads the data and dynamically creates the user interface.

styles.css controls the visual design.

code-generator.html helps generate resource objects.

No backend or database is required.


================================================================================
51. PROJECT CREATOR
================================================================================

Created by:

    Farabi · Chemistry 53

Project:

    3rd Year Chemistry Resource System


Portfolio:

    https://smkfarabi-stack.github.io/my-portfolio/


The creator portfolio presents SMK Farabi as a Chemistry student and
developer working across scientific study, web development, research,
writing and digital projects.


================================================================================
52. PROJECT VERSION
================================================================================

Project Type:

    Static Web Application

Primary Language:

    JavaScript

Markup:

    HTML5

Styling:

    CSS3

Storage:

    JavaScript data + local/static files

Database:

    None

Backend:

    None

Hosting Compatibility:

    GitHub Pages
    Static Hosting
    Local Server


================================================================================
53. FINAL MAINTENANCE NOTE
================================================================================

The most important files are:


    js/syllabus-data.js
        → Controls the Chemistry syllabus


    js/resources.js
        → Controls the resource database


    js/app.js
        → Controls application behavior and rendering


    css/styles.css
        → Controls appearance


    index.html
        → Main landing page


    code-generator.html
        → Resource creation tool


    assets/resources/
        → Stores actual study materials


If you understand these seven areas, you understand the core of the project.


================================================================================
54. FINAL QUICK REFERENCE
================================================================================

MAIN PAGE:

    index.html


RESOURCE GENERATOR:

    code-generator.html


SYLLABUS:

    js/syllabus-data.js


RESOURCES:

    js/resources.js


APPLICATION LOGIC:

    js/app.js


GENERATOR SUPPORT:

    js/code-generator.js


STYLES:

    css/styles.css


BACKGROUND:

    assets/images/bg.svg


CLASS NOTES:

    assets/resources/class-notes/


PERSONAL NOTES:

    assets/resources/personal-notes/


SLIDES:

    assets/resources/slides/


BOOKS:

    assets/resources/books/


DOCUMENTATION:

    README.txt


CREATOR:

    Farabi · Chemistry 53


PORTFOLIO:

    https://smkfarabi-stack.github.io/my-portfolio/


================================================================================
                         END OF README
================================================================================

                    3rd Year Chemistry Resource System
                              Farabi · Chemistry 53
================================================================================