import { PortfolioItem, ResumeItem, SkillGroup, EducationItem } from './types';

export const personalInfo = {
  name: "Jad Aljersh",
  title: "GIS Analyst & Developer",
  tagline: "",
  bio: "I'm a Geographic Information Systems (GIS) Analyst and Full-Stack Spatial Developer based in Las Vegas, NV. Leveraging robust spatial databases, ETL pipelines, and high-performance web-mapping libraries, I transform vast geospatial datasets into clean interactive experiences. My expertise spans advanced raster/vector geoprocessing, and developing full-stack web architectures for real-time spatial analytics.",
  contact: {
    email: "jadaljersh@outlook.com",
    linkedin: "https://linkedin.com/in/jad-aljersh",
    github: "https://github.com/jadaljersh",
    location: "Las Vegas, NV"
  }
};

export const resumeItems: ResumeItem[] = [
  {
    id: "exp-1",
    role: "GIS Analyst",
    company: "Las Vegas Metropolitan Police Department",
    duration: "August 2024 - Present",
    description: [
      "Updating addressing data, and pushing map updates to Computer Aided Dispatch (CAD).",
      "Developing tools using Python, and application wisgets using ArcGIS Experience Builder Developer Edition for internal use within IT and other bureaus.",
      "Automating workflows, and constantly expanding the capabilities of CAD data geocoding process.",
      "Leveraging our internal language model in automated tasks, such as improving geocoding matches, and developing a chatbot for the ArcGIS Portal.",
      "Maintaining and upgrading the servers used in the ArcGIS Enterprise Architecture.",
      "Maintaining the ArcGIS Online Open Data Portal built using ArcGIS Hub, and leveraging Prefect to automate data updates from internal databases."

    ],
    tags: ["ArcGIS Enterprise", "ArcGIS Online", "ArcGIS Pro", "Geoevent", "JavaScript", "LLM", "Prefect", "Python", "SQL", "Streamlit"]
  },
  {
    id: "exp-2",
    role: "GIS Intern",
    company: "Metropolitan Water District of Southern California",
    duration: "February 2024 - August 2024",
    description: [
      "Migrating the district’s ESRI’s WebApp Builder-created applications into Experiences, and migrating the deprecated StoryMaps into the modern StoryMap environment.",
      "Modifying a Python script that returns line segments from start- and end-station inputs using a query based on start and end stations on the water mainlines.",
      "Completed building a script tool using ArcPy that automates PDF map creation using a CSV file input to display automated meter reading outages, filterable by date and type.",
      "Building a custom widget for Experience Builder using JavaScript to locate water district structures along the water mainlines.",
      "Created two field maps; a pre-inspection and a post-inspection landscape evaluation field map for the District's Turf Replacement Program.",
      "Created a polyline feature class layer of mainline shutdowns using provided text descriptions and engineering drawings.",
      "Used Survey123 Online to build two surveys to collect information from those interested in purchasing or leasing any surplus property, and built a more advanced survey using Survey123 Connect for collecting dam inspection observations using a complex set of question rules."
    ],
    tags: ["ArcGIS Enterprise", "ArcGIS Online", "ArcGIS Pro", "Geoevent", "Python"]
  },
  {
    id: "exp-3",
    role: "GIS Aide",
    company: "City of Thousand Oaks",
    duration: "September 2023 - August 2024",
    description: [
      "Assisted with building the City’s default internal and Public Works web map viewer using VertiGIS Studio Web.",
      "Completed creating workflows for the VertiGIS browsers, and the existing Geocortex Essentials web viewer using VertiGIS Workflow.",
      "Completed building Printing and Reporting templates for the VertiGIS browsers.",
      "Completing maintenance requests on the existing Geocortex Essentials sites.",
      "Completed basic automation tasks using Python, such as automating the listing of publishing paths of services from ArcGIS Server Manager, and generating a list of shapefiles and file geodatabase contents along with their basic properties that reside within a parent folder.",
      "Automated map series layout creation through the inset methodology by modifying two script tools created by ESRI’s Map Automation Team.",
      "Geocoded addresses, georeferenced construction plans and as-builts, and performed spatial and tabular joins using ArcGIS Pro.",
      "Updated business licenses, home occupation permits, and Development Activity Report location layers in the ArcGIS Portal.",
      "Designed static maps, created custom label classes using VB Script, and created custom pop-ups using HTML for web-mapping purposes."
    ],
    tags: ["ArcGIS Enterprise", "ArcGIS Online", "ArcGIS Pro", "Geocortex", "Python", "SQL", "VertiGIS"]
  },
  {
    id: "exp-4",
    role: "Student Assistant - IT Support",
    company: "California State University, Northridge",
    duration: "November 2021 - December 2023",
    description: [
      "Provided faculty members and students with technical support through walk-in, phone, and online ticketing services.",
      "Conducted learning management system integration tests with support from the Lead Instructional Technologists."
    ],
    tags: ["Customer Service", "IT", "Technical Support"]
  },
  {
    id: "exp-5",
    role: "GIS Intern",
    company: "National Weather Service, Tucson",
    duration: "May 2023 - August 2023",
    description: [
      "Developed an extreme-temperature Social Vulnerability Index for Census Tracts using the Entropy Weight Method through creating a custom ArcGIS toolbox using Python, and implemented the findings in daily bivariate heat risk maps for the National Weather Service West Region Heat Risk product.",
      "Shadowed the forecast operations team.",
      "Presented my summer internship work at the National Oceanic and Atmospheric Administration’s Science and Education Symposium in Silver Spring, MD."
    ],
    tags: ["Decision Making", "GIS", "Python", "Weather"]
  },
  {
    id: "exp-6",
    role: "Student Assistant - Geography Department",
    company: "California State University, Northridge",
    duration: "March 2021 - August 2022",
    description: [
      "Researched the leading factors of landslides by analyzing California's geology, land cover, slope, and precipitation patterns (July - August 2022).",
      "Downloaded and reformatted Census data for ArcGIS Pro classroom usability (July - August 2022).",
      "Edited field types and performed table joins to shapefiles to implement up-to-date, real-world data in classroom assignments (July - August 2022).",
      "Graded the work of over 100 students’ submissions during the Spring 2021 semester for the department's lower-division weather courses, and maintained the course’s Canvas (March - May 2021).",
      "Wrote a research paper on the role of food production-related methane emissions on climate change and student food-related carbon footprint mitigation efforts under the supervision of the faculty advisor Mario Giraldo, Ph.D, and presented the findings at the 2021 Association of Pacific Coast Geographers conference in San Diego, CA (March 2021 - February 2022)."
    ],
    tags: ["Census Data", "Manuscript Writing", "Research", "Teacher's Assistant"]
  },
  {
    id: "exp-7",
    role: "GIS Project Assistant",
    company: "Center for Geospatial Science and Technology",
    duration: "March 2022 - May 2022",
    description: [
      "Conducted a literature review on existing disadvantaged community models to assess the socioeconomic statuses and ecological landscapes of low-lying coastal regions at a threat to sea-level rise in Ventura County, CA.",
      "Recorded the collected data in Microsoft PowerBI, and produced figure summaries to be later used in the publication."
    ],
    tags: ["Census Data", "Manuscript Writing", "Research", "Teacher's Assistant"]
  }
];

export const educationItems: EducationItem[] = [
  {
    id: "edu-1",
    degree: "B.S. in Geographic Information Science",
    school: "California State University, Northridge",
    duration: "August 2019 - December 2023",
    description: "Magna Cum Laude, GPA 3.79/4.0"
  },
  {
    id: "edu-2",
    degree: "High School Diploma",
    school: "San Pedro High School",
    duration: "August 2014 - June 2018",
    description: "Honors, GPA 3.85/4.0"
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: "ETL",
    skills: [
      { name: "Pandas/NumPy"},
      { name: "Prefect Server"},
      { name: "SQL Server ETL"},
      { name: "SSMS Store Procedures"},
      { name: "Windows Task Scheduler"}
    ]
  },
  {
    category: "Geospatial Stack",
    skills: [
      { name: "ArcGIS Enterprise Setup and Upgrades"},
      { name: "ArcGIS Enterprise/Online Applications"},
      { name: "ArcGIS Pro"},
      { name: "ArcPy"},
      { name: "Enterprise Geodatabase Management"},
      { name: "PostGIS/PostgreSQL"},
      { name: "QGIS"}
    ]
  },
  {
    category: "Spatial Analysis",
    skills: [
      { name: "Crime Analysis"},
      { name: "Interpolation"},
      { name: "Network Routing"},
      { name: "Raster Digital Elevation Modeling"},
      { name: "Spatial Joins/Intersects"}
    ]
  },
  {
    category: "Web Mapping & Development",
    skills: [
      { name: "ArcGIS Chatbot Development"},
      { name: "Extension Development for ArcGIS Enterprise"},
      { name: "Experience Builder Developer Edition"},
      { name: "Script Tools & Web Tools for ArcGIS Enterprise"},
      { name: "Streamlit/Leaflet"},
      { name: "TypeScript/React"}
    ]
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "map-20",
    title: "U.S. Tornadoes (1950-2022)",
    tagline: "Cartography",
    description: "This map displays generalized historical tornado line segments, obtained from the FEMA Geospatial Resource Center. In many states, the tornado track density is high, thus, tornadoes of lower Enhanced Fujita (EF) Scale ratings can be drawn below tornadoes of higher EF ratings. Therefore, the first step in creating this map was to adjust the drawing order based on the EF ratings, in which tracks of higher magnitude are drawn on top. The chart below the map displays the tornado counts and their magnitudes per longitude degree. The chart is unrelated to the map spatially, but was created using the tornado tracks' longitude midpoints I calculated, rounded to the nearest degree. The Firefly basemap in ESRI's Living Atlas was used in creating this map, along with a polygon shape from which the U.S. boundary, also obtained from ESRI's Living Atlas, was erased.",
    image: "https://jad.maps.arcgis.com/sharing/rest/content/items/d3f742b4da82420eaa3ae831b16268ca/data",
    type: "map",
    tags: ["ArcGIS Pro", "Cartography"],
    metrics: [
      { label: "Software Used", value: "ArcGIS Pro" },
      { label: "Data Source", value: "NWS, Firefly" }
    ],
    links: {
      docs: "https://jad.maps.arcgis.com/sharing/rest/content/items/d3f742b4da82420eaa3ae831b16268ca/data",
      docsLabel: "Open Map"
    }
  },
  {
    id: "map-1",
    title: "Panama Railway",
    tagline: "Cartography",
    description: "This map was sketched and labeled with Adobe Illustrator using a circa 1865 map of Panama produced by the Comision Corografica in Bogotá, Colombia.",
    image: "https://jad.maps.arcgis.com/sharing/rest/content/items/56318f0b350946d18c011d07dc2ac2b6/data",
    type: "map",
    tags: ["Adobe Illustrator", "Cartography"],
    metrics: [
      { label: "Software Used", value: "Adobe Illustrator" },
      { label: "Data Source", value: "Comision Corografica in Bogotá, Colombia" }
    ],
    links: {
      docs: "https://jad.maps.arcgis.com/sharing/rest/content/items/56318f0b350946d18c011d07dc2ac2b6/data",
      docsLabel: "Open Map"
    }
  },
  {
    id: "map-2",
    title: "Rosario Beach Trail",
    tagline: "Cartography",
    description: "This map was sketched and labeled with Adobe Illustrator using Google satellite imagery and OpenStreetMap.",
    image: "https://jad.maps.arcgis.com/sharing/rest/content/items/eacafa5ce60b439dab565bd4dcb24555/data",
    type: "map",
    tags: ["Adobe Illustrator", "Cartography"],
    metrics: [
      { label: "Software Used", value: "Adobe Illustrator" },
      { label: "Data Source", value: "Google Maps, OpenStreetMap" }
    ],
    links: {
      docs: "https://jad.maps.arcgis.com/sharing/rest/content/items/eacafa5ce60b439dab565bd4dcb24555/data",
      docsLabel: "Open Map"
    }
  },
  {
    id: "map-3",
    title: "Porter Ranch, CA",
    tagline: "Cartography",
    description: "These streets were hand-drawn in Google Earth using historical satellite imagery. Each street segment, trail, and structure were sketched individually, and placed in its year group. Each year group was exported as a KML file from Google Earth, and processed in QGIS. An SVG file from QGIS was later exported and symbolized in Adobe Illustrator. The stamps and background effects were created in Adobe Illustrator. The CSUN logo was obtained from the CSUN website.",
    image: "https://jad.maps.arcgis.com/sharing/rest/content/items/b7ed869e18d3490aacce5d9ee1b68c49/data",
    type: "map",
    tags: ["Adobe Illustrator", "Cartography", "Google Earth", "KML", "QGIS"],
    metrics: [
      { label: "Software Used", value: "Adobe Illustrator, Google Earth, QGIS" },
      { label: "Data Source", value: "Google Earth" }
    ],
    links: {
      docs: "https://jad.maps.arcgis.com/sharing/rest/content/items/b7ed869e18d3490aacce5d9ee1b68c49/data",
      docsLabel: "Open Map"
    }
  },
    {
    id: "map-4",
    title: "The States of the United States in 1860",
    tagline: "Cartography",
    description: "The physical and political boundaries were converted to an SVG from a shapefile in QGIS obtained from David Deis of California State University, Northridge's Geography and Environmental Studies Department. All symbolization took place within Adobe Illustrator.",
    image: "https://jad.maps.arcgis.com/sharing/rest/content/items/697268b8af6f4dfa9a924be17eb0acaa/data",
    type: "map",
    tags: ["Adobe Illustrator", "Cartography", "QGIS"],
    metrics: [
      { label: "Software Used", value: "Adobe Illustrator, QGIS" },
      { label: "Data Source", value: "CSUN" }
    ],
    links: {
      docs: "https://jad.maps.arcgis.com/sharing/rest/content/items/697268b8af6f4dfa9a924be17eb0acaa/data",
      docsLabel: "Open Map"
    }
  },
    {
    id: "map-5",
    title: "Grackle Breeding Events in the Desert Southwest",
    tagline: "Cartography",
    description: "The pie charts on this map were created using Adobe Illustrator's graphing function. The Grackle breeding events data was obtained from David Deis of California State University, Northridge's Geography and Environmental Studies Department.",
    image: "https://jad.maps.arcgis.com/sharing/rest/content/items/0963f54bf1354a3ebb76be64653b9ea3/data",
    type: "map",
    tags: ["Adobe Illustrator"],
    metrics: [
      { label: "Software Used", value: "Adobe Illustrator" },
      { label: "Data Source", value: "CSUN" }
    ],
    links: {
      docs: "https://jad.maps.arcgis.com/sharing/rest/content/items/0963f54bf1354a3ebb76be64653b9ea3/data",
      docsLabel: "Open Map"
    }
  },
    {
    id: "map-6",
    title: "Tarawa Atoll",
    tagline: "Cartography",
    description: "This map was sketched and labeled in Adobe Illustrator by applying the live-trace function on a sketch obtained from David Deis of California State University, Northridge's Geography and Environmental Studies Department.",
    image: "https://jad.maps.arcgis.com/sharing/rest/content/items/0796133111fe44949338ba1862078577/data",
    type: "map",
    tags: ["Adobe Illustrator"],
    metrics: [
      { label: "Software Used", value: "Adobe Illustrator" },
      { label: "Data Source", value: "CSUN" }
    ],
    links: {
      docs: "https://jad.maps.arcgis.com/sharing/rest/content/items/0796133111fe44949338ba1862078577/data",
      docsLabel: "Open Map"
    }
  },
    {
    id: "map-7",
    title: "Contiguous United States Average Tornado Characteristics by County Warning Area (2008-2021)",
    tagline: "Analysis",
    description: "When the historical trend isn't of interest, summarizing historical data alone provides essential insights into past extreme weather events, aiding in understanding specific incidents and their impacts. The layout below shows 3 maps that display the following average tornado characteristics by CWA: Tornado path length, average tornado diameter, and average tornado intensity.",
    image: "https://jad.maps.arcgis.com/sharing/rest/content/items/fdc5de09be6c41d9a8188966858685b3/data",
    type: "map",
    tags: ["Adobe Illustrator", "Cartography", "ArcGIS Pro"],
    metrics: [
      { label: "Software Used", value: "ArcGIS Pro" },
      { label: "Data Source", value: "Storm Prediction Center" }
    ],
    links: {
      docs: "https://jad.maps.arcgis.com/sharing/rest/content/items/fdc5de09be6c41d9a8188966858685b3/data",
      docsLabel: "Open Map"
    }
  },
    {
    id: "map-8",
    title: "Tornado Probability of Detection Mean Trend (2008-2022) by Weather Forecast Office",
    tagline: "Analysis",
    description: "Analyzing weather forecast trends over time is essential for understanding and enhancing forecast accuracy and in return enhancing public safety. Trends in forecasting severe weather, such as tornadoes, can reflect the effectiveness of new radar technologies and algorithms, guiding further research and development. It can also reflect decreased forecast accuracy by Weather Forecast Office personnel. I analyzed tornado Probability of Detection (POD) data obtained from the National Weather Service Performance Management database, and analyzed the data between 2008 and 2022. The following map indicates the mean trend of tornado POD by WOF boundary.",
    image: "https://jad.maps.arcgis.com/sharing/rest/content/items/76784dc9b2c24a8a896b2ace82575a65/data",
    type: "map",
    tags: ["QGIS"],
    metrics: [
      { label: "Software Used", value: "QGIS" },
      { label: "Data Source", value: "National Weather Service Performance Management" }
    ],
    links: {
      docs: "https://jad.maps.arcgis.com/sharing/rest/content/items/76784dc9b2c24a8a896b2ace82575a65/data",
      docsLabel: "Open Map"
    }
  },
    {
    id: "map-9",
    title: "Medical Spatial Accessibility Index for Santa Clarita, CA",
    tagline: "Analysis",
    description: "One of the best methods to measure spatial accessibility is the 2-Step Floating Catchment Area (2SFCA). This method is a spatial analysis technique used to measure spatial accessibility to services, such as healthcare, by considering both the availability of those services and the population's demand for them within a certain area. To complete the analysis using the 2SFCA method, the supply-demand ratio must first be calculated for each service location. In the following analysis, the service locations are the medical providers. The catchment area is a 20-minute drive time around each medical provider. The supply-demand ratio for each service location was then calculated by dividing the service capacity by the total population in the catchment area. The population data used was a raster dataset obtained from  worldpop.org. In the second step of the 2SFCA, the population centers were used to identify a catchment area using a 20-minute drive time as well. Since the population of each block group is not evenly spread, the population raster was used to create a weighted mean center of the population for each block group. Then, the supply-demand ratios from all medical providers within this catchment area were summed up to calculate an accessibility score for each population location, and are symbolized in the map below. Higher scores suggest better access to medical services.",
    image: "https://jad.maps.arcgis.com/sharing/rest/content/items/7511b5753c0e469bb02bae731b3485a5/data",
    type: "map",
    tags: ["ArcGIS Pro"],
    metrics: [
      { label: "Software Used", value: "ArcGIS Pro" },
      { label: "Data Source", value: "WorldPop.org, CSUN" }
    ],
    links: {
      docs: "https://jad.maps.arcgis.com/sharing/rest/content/items/7511b5753c0e469bb02bae731b3485a5/data",
      docsLabel: "Open Map"
    }
  },
    {
    id: "map-10",
    title: "Land Use Areas by Type Within 1 Mile of the Northridge Dignity Health Medical Center",
    tagline: "Analysis",
    description: "Calculating land use areas by type around a medical center is necessary for resource allocation. Such basic statistics help ensure that essential medical services and their capacity are adequately provided depending on the land use type surrounding the medical center, e.g. heavily residential land use means that the medical center will be more heavily utilized compared to those surrounded by grasslands. The following layout compares two maps and tables: One with a 1-mile Euclidean Distance buffer (straight line distance) and another with a 1-mile service area convex. Evidently, the count of residential land parcels is off by 2,096 parcels, and the difference be higher in areas of high terrain where there is no structured grid. Emergency services reach fewer land parcels than can be expected when using straight-line distances.",
    image: "https://jad.maps.arcgis.com/sharing/rest/content/items/466852f33f1149fc9502cf90b93ca39c/data",
    type: "map",
    tags: ["QGIS"],
    metrics: [
      { label: "Software Used", value: "QGIS" },
      { label: "Data Source", value: "Los Angeles County" }
    ],
    links: {
      docs: "https://jad.maps.arcgis.com/sharing/rest/content/items/466852f33f1149fc9502cf90b93ca39c/data",
      docsLabel: "Open Map"
    }
  },
    {
    id: "map-11",
    title: "The Disadvantaged Communities of the San Fernando Valley, CA (2020)",
    tagline: "Analysis",
    description: "Disadvantaged community scores can be calculated using a pre-determined criteria order, sorted by the level of importance. The criteria that are perceived to make the most impact are assigned higher weights. Manually in a spreadsheet, these ranks can be calculated by listing the ranks to the criteria in one field (r j ), calculating the weight of the criteria using by subtracting the rank from the total count, and adding 1 (n-r j +1) in another field, then normalizing the weight by dividing the ration of the weight over the sum of weights (r j /Σr j ). Following the calculation of the weights, the values are normalized, and a weighted sum is calculated. The census tracts' weighted sum is then used to rank them in order, where the census tract with the lowest weighted sum is given the rank 1 (most disadvantaged). This procedure was applied to the San Fernando Valley's census tracts. The tracts are symbolized based on the normalized score, not their order of disadvantage. The census tract with a score of 100 is the most disadvantaged.",
    image: "https://jad.maps.arcgis.com/sharing/rest/content/items/bfa24e885a1e4f00b27eeed8d91b7af4/data",
    type: "map",
    tags: ["QGIS"],
    metrics: [
      { label: "Software Used", value: "QGIS" },
      { label: "Data Source", value: "US Census" }
    ],
    links: {
      docs: "https://jad.maps.arcgis.com/sharing/rest/content/items/bfa24e885a1e4f00b27eeed8d91b7af4/data",
      docsLabel: "Open Map"
    }
  },
    {
    id: "map-12",
    title: "Heat Vulnerability Using Entropy Weight Method for the Census Tracts of the San Fernando Valley, CA",
    tagline: "Analysis",
    description: "The Entropy Weight Method (EWM) is a decision-making technique used in multi-criteria decision analysis to determine the relative importance of criteria to eliminate the subjectivity that human-assigned weights may carry. The EWM depends on the measure of randomness or uncertainty within a dataset where entropy is calculated for each criterion to assess the degree of value spread within the dataset. The weighted sums are derived based on the entropy values. Criteria with lower entropy values indicate less uncertainty and are assigned higher weights as they provide more valuable information for the decision-making process.Prior to the calculation of the entropy values, the dataset values must be normalized to ensure that they are on a comparable scale. For each field input, the dataset requires the user to indicate whether the field should follow a maximization or a minimization weighing method. Maximization fields are criteria where higher values are desired or preferable. In other words, these values represent values of the decision criterion that decision-makers aim to maximize. In the EWM, both maximization and minimization criteria are considered together to determine the relative importance of each criterion.",
    image: "https://jad.maps.arcgis.com/sharing/rest/content/items/794dc8421e68479f8bc8e204474f5779/data",
    type: "map",
    tags: ["ArcGIS Pro"],
    metrics: [
      { label: "Software Used", value: "ArcGIS Pro" },
      { label: "Data Source", value: "US Census" }
    ],
    links: {
      docs: "https://jad.maps.arcgis.com/sharing/rest/content/items/794dc8421e68479f8bc8e204474f5779/data",
      docsLabel: "Open Map"
    }
  },
    {
    id: "map-13",
    title: "Los Angeles Violent Crimes 10-Meter Clusters (2010-2017)",
    tagline: "Analysis",
    description: "ArcGIS Pro’s 80-20 tool aggregates points of incidents into clusters of points contained within the clustering tolerance, or the search radius within which the incident points are collected. The 80-20 tool is based on the concept that a large majority of incidents occur within a small location of the area analyzed. The tool outputs the count of points found near or within line or polygon features, the percentage of the total number of points found, and the cumulative percentage at each feature. The 80-20 can be especially helpful to lawmakers and high-level stakeholders where the tool’s output can identify the areas where more efforts need to be deployed, and the areas where there are excess efforts. The 80-20 tool was run on Los Angeles violent crime incidents where intersecting violent crime incidents (within 10 meters of each other) were summarized into new point features containing the count of incidents, their percentage of all incidents, and their cumulative percentage of the crime incidents.",
    image: "https://jad.maps.arcgis.com/sharing/rest/content/items/10775ed4930b4afcaa83601a966e42a7/data",
    type: "map",
    tags: ["ArcGIS Pro"],
    metrics: [
      { label: "Software Used", value: "ArcGIS Pro" },
      { label: "Data Source", value: "LAPD" }
    ],
    links: {
      docs: "https://jad.maps.arcgis.com/sharing/rest/content/items/10775ed4930b4afcaa83601a966e42a7/data",
      docsLabel: "Open Map"
    }
  },
    {
    id: "map-14",
    title: "Los Angeles Violent Crime Counts per Street Segment (2010-2017)",
    tagline: "Analysis",
    description: "ArcGIS’ Summarize Incident Count tool creates a feature class out of the input feature, summarizing another layer of points that coincide within the input feature class, where the count of points within a user-specified buffer is output into the output attribute table. Summarize Incident Count can take the count of crime incidents, for example, and summarize the count of incidents per street line segment. The output feature class contains the count of all summary features, as well as their attributes. For example, the generated street feature class contains the count of all crime incidents, as well as the count of each of their categories. The map below displays the count of assaults with deadly weapons and aggravated assaults within a 10-meter buffer of street segments in Los Angeles. Crime analysts can use this tool to identify hot “spot” street segments, where perhaps, more law enforcement can be deployed to those streets. Overall, this tool can be utilized for large-scale analyses only as it does not quantify small-scale patterns as kernel density does, for example.",
    image: "https://jad.maps.arcgis.com/sharing/rest/content/items/bdeb0a5dd03c44978568ee470ab31614/data",
    type: "map",
    tags: ["ArcGIS Pro"],
    metrics: [
      { label: "Software Used", value: "ArcGIS Pro" },
      { label: "Data Source", value: "LAPD" }
    ],
    links: {
      docs: "https://jad.maps.arcgis.com/sharing/rest/content/items/bdeb0a5dd03c44978568ee470ab31614/data",
      docsLabel: "Open Map"
    }
  },
    {
    id: "map-15",
    title: "Los Angeles Violent Crime Counts per Street Segment (2010-2017)",
    tagline: "Analysis",
    description: "A redistricting suggestion was created using the Cost Allocation tool, utilizing the existing police stations as the input source data and the burglary density layer as the cost raster. The suggested redistricting of LAPD divisions can be seen on this map. The redistricting scenario verifies with the prioritization of resource allocation for the North Hollywood Division, where the size of the division boundaries shrinks significantly, thanks to the high crime density in the area, whereas the boundaries of the Topanga Division get reshaped to include a similar area, but cover a lower urban-dense region. Another method of hot-spot mapping was performed, where spatial clusters were identified using the Getis-Ord Gi* statistic, which is a measure of clustering through spatial autocorrelation, and the confidence of the clustering, helping identify statistically significant clusters that do not get indicated by Kernel Density to help make more informed decisions. In addition, one advantage of the Getis-Ord Gi* statistic is able to identify cold spots, which indicate areas with few to no crime incidents, helpful for law enforcement officials when determining the redistribution of existing resources. Getis-Ord Gi* values were classified into three cold spot and three hot spot categories. Hot spots of high statistical significance can be seen within the North Hollywood and Topanga Divisions in Figure 3 (left). Compared to the redistricting attempt in Figure 3 (right), it is evident that the redistricting attempt was successful as the reshaped boundaries cross through the core of the high-confidence hot spots, indicating a successful redistricting attempt, where the hot spots of the North Hollywood Division get shared with the Van Nuys Division jurisdiction, and the hot spots within Topanga Division get shared with the West Valley Division jurisdiction.",
    image: "https://jad.maps.arcgis.com/sharing/rest/content/items/2d7b09ccb24840339f38eeadda24ed2b/data",
    type: "map",
    tags: ["ArcGIS Pro"],
    metrics: [
      { label: "Software Used", value: "ArcGIS Pro" },
      { label: "Data Source", value: "LAPD" }
    ],
    links: {
      docs: "https://jad.maps.arcgis.com/sharing/rest/content/items/2d7b09ccb24840339f38eeadda24ed2b/data",
      docsLabel: "Open Map"
    }
  },
    {
    id: "map-16",
    title: "Wind and Solar Energy Generation Suitability in Hawai'i",
    tagline: "Analysis",
    description: "",
    image: "https://jad.maps.arcgis.com/sharing/rest/content/items/f2657da279aa437cbf71e5a324c114ba/data",
    type: "map",
    tags: ["ArcGIS Pro"],
    metrics: [
      { label: "Software Used", value: "ArcGIS Pro" },
      { label: "Data Source", value: "UH Manoa" }
    ],
    links: {
      docs: "https://jad.maps.arcgis.com/sharing/rest/content/items/f2657da279aa437cbf71e5a324c114ba/data",
      docsLabel: "Open Map"
    }
  },
    {
    id: "map-17",
    title: "The Relationship Between Elevation and Mean Annual Precipitation in California",
    tagline: "Analysis",
    description: "",
    image: "https://jad.maps.arcgis.com/sharing/rest/content/items/bb7fd6d2801d4e04a645f15ab250b066/data",
    type: "map",
    tags: ["ArcGIS Pro"],
    metrics: [
      { label: "Software Used", value: "ArcGIS Pro" },
      { label: "Data Source", value: "NAtional Defense Mapping Agency, USGS" }
    ],
    links: {
      docs: "https://jad.maps.arcgis.com/sharing/rest/content/items/bb7fd6d2801d4e04a645f15ab250b066/data",
      docsLabel: "Open Map"
    }
  },
    {
    id: "map-18",
    title: "California County Populations Weighted Mean Centers",
    tagline: "Analysis",
    description: "",
    image: "https://jad.maps.arcgis.com/sharing/rest/content/items/eab571c86e1b4f7982a5fc55f4c643d8/data",
    type: "map",
    tags: ["ArcGIS Pro"],
    metrics: [
      { label: "Software Used", value: "ArcGIS Pro" },
      { label: "Data Source", value: "WorldPop, U.S. Census" }
    ],
    links: {
      docs: "https://jad.maps.arcgis.com/sharing/rest/content/items/eab571c86e1b4f7982a5fc55f4c643d8/data",
      docsLabel: "Open Map"
    }
  },
    {
    id: "map-19",
    title: "Projected Changes in California's Köppen-Geiger Classifications From the 1991-2020 to the 2071-2100 Climate Period",
    tagline: "Analysis",
    description: "",
    image: "https://jad.maps.arcgis.com/sharing/rest/content/items/725c44bf167c435fbe00933bf994e911/data",
    type: "map",
    tags: ["ArcGIS Pro"],
    metrics: [
      { label: "Software Used", value: "ArcGIS Pro" },
      { label: "Data Source", value: "Beck, et al." }
    ],
    links: {
      docs: "https://jad.maps.arcgis.com/sharing/rest/content/items/725c44bf167c435fbe00933bf994e911/data",
      docsLabel: "Open Map"
    }
  },
    {
    id: "map-21",
    title: "Number of Shared Borders",
    tagline: "Analysis",
    description: "",
    image: "https://jad.maps.arcgis.com/sharing/rest/content/items/cfd8c1f8f9544ed3b3c659bfee1024c5/data",
    type: "map",
    tags: ["ArcGIS Pro"],
    metrics: [
      { label: "Software Used", value: "ArcGIS Pro" },
      { label: "Data Source", value: "ESRI" }
    ],
    links: {
      docs: "https://jad.maps.arcgis.com/sharing/rest/content/items/cfd8c1f8f9544ed3b3c659bfee1024c5/data",
      docsLabel: "Open Map"
    }
  },
//--------------------------------------------------------------------------------------------------
    {
    id: "vis-1",
    title: "Date and Time Heatmap",
    tagline: "Heatmap",
    description: "To generate this visualization, a data processing pipeline was established using Python and Pandas to transform raw temporal datasets into a clean, multi-dimensional matrix. The initial dataset was parsed to extract explicit day-of-year and hour components while filtering out invalid or missing temperature readings. To prevent abrupt, noisy visual transitions and accurately represent broader thermal trends, a 28-hour circular rolling mean was applied to the dataset. The data was duplicated temporally before smoothing to handle edge cases, ensuring that temperature averages transitioned seamlessly across midnight boundaries and from the end of the year back to the beginning. Finally, the smoothed data was pivoted into a 24x365 structure and exported as a JSON object, decoupling the intensive data transformation logic from the frontend and allowing the React architecture to rapidly render the interactive grid using a custom continuous color scale.",
    image: "https://jad.maps.arcgis.com/sharing/rest/content/items/d99e722f68924eb4ab9745f735abdfb2/data",
    type: "visualization",
    tags: ["Python"],
    metrics: [
      { label: "Software Used", value: "Python" },
      { label: "Data Source", value: "NOAA NCEI" }
    ],
    links: {
      docs: "https://jad.maps.arcgis.com/sharing/rest/content/items/d99e722f68924eb4ab9745f735abdfb2/data",
      docsLabel: "Open Chart"
    }
  },
    {
    id: "vis-2",
    title: "Disadvantaged Communities (DAC) Categorical Model",
    tagline: "Bubble Chart",
    description: "This bubble chart was created using Adobe Illustrator as well. Since there is no feature in Adobe Illustrator for pie chart creation yet, the bubbles' diameters were manually calculated and created accordingly. This is one example of a relatively lengthy process that is rarely undertaken but is necessary when there is both a lack of available tools for such creative visualization, and the desired product will be the results summary of a major project. This graphic was created for the Center for Geospatial Science and Technology at California State University, Northridge.",
    image: "https://jad.maps.arcgis.com/sharing/rest/content/items/002ee006a11440688d7637ddad5b0dc8/data",
    type: "visualization",
    tags: ["ArcGIS Pro"],
    metrics: [
      { label: "Software Used", value: "PowerBI" },
      { label: "Data Source", value: "CalEnviroScreen, CDC, Council on Environmental Quality, Hazards and Vulnerability Research Institute, NYU, U.S. Census, U.S. Environmental Protection Agency" }
    ],
    links: {
      docs: "https://jad.maps.arcgis.com/sharing/rest/content/items/002ee006a11440688d7637ddad5b0dc8/data",
      docsLabel: "Open Chart"
    }
  },
    {
    id: "vis-3",
    title: "2020 Weather Summary for Northridge, CA",
    tagline: "Line Chart",
    description: "making charts using Adobe Illustrator can often prove useful with major projects to make the data more visually appealing, projects that involve one or a few datasets, or datasets that contain numerous fields, difficult to showcase using a readily-available feature in said applications. The following chart was created using Adobe Illustrator, displaying various weather variables recorded by the California State University, Northridge weather station in 2020.",
    image: "https://jad.maps.arcgis.com/sharing/rest/content/items/01bd37d646c842f2b2b9bb2929589f4d/data",
    type: "visualization",
    tags: ["ArcGIS Pro"],
    metrics: [
      { label: "Data Source", value: "NOAA NCEI" }
    ],
    links: {
      docs: "https://jad.maps.arcgis.com/sharing/rest/content/items/01bd37d646c842f2b2b9bb2929589f4d/data",
      docsLabel: "Open Chart"
    }
  },
    {
    id: "vis-4",
    title: "Interactive Average Daily Temperatures Line Chart",
    tagline: "Line Chart",
    description: "This interactive visualization displays the 30-year historical average of daily maximum and minimum temperatures for Los Angeles, California (1994–2023). To build this, raw climate data from NOAA was processed using Python and Pandas to calculate a 28-day circular rolling mean, which effectively smooths out daily weather anomalies to reveal pure seasonal trends. The processed dataset was then exported as a lightweight JSON file, allowing the React frontend to render a highly responsive, zero-dependency SVG chart featuring custom thermal gradients and precision interactive tooltips.",
    image: "https://jad.maps.arcgis.com/sharing/rest/content/items/c4e1f11a3d6f43bd85b0e7a3bb33f7b3/data",
    type: "visualization",
    tags: ["Python"],
    metrics: [
      { label: "Data Source", value: "NOAA NCEI" }
    ],
    links: {
      docs: "https://jad.maps.arcgis.com/sharing/rest/content/items/c4e1f11a3d6f43bd85b0e7a3bb33f7b3/data",
      docsLabel: "Open Chart"
    }
  },
//--------------------------------------------------------------------------------------------------
  {
    id: "dev-1",
    title: "Automating View Data Updates Using a CSV File Input",
    tagline: "ArcGIS Script Tool",
    description: "To automate the creation of updated PDF maps from a dynamic CSV dataset, this ArcGIS script tool converts an incoming .csv file into a geodatabase table, cleans up any empty default fields, and appends the new records into a truncated database table. The script then dynamically updates the map layout based on the data type, applies optional date-based definition queries, and zooms the map extent to match the active layer's features. Finally, it exports the tailored map view as a PDF to a designated output folder, turning what would be a repetitive manual join and layout process into a streamlined, automated workflow.",
    image: "https://jad.maps.arcgis.com/sharing/rest/content/items/a045cf20e6d640869426a26cf656220c/data",
    type: "dev",
    tags: ["ArcGIS Script Tool", "Automation", "Data Update"],
    links: {
      demo: "https://storymaps.arcgis.com/stories/32affbdb78cd4d42b558d22dcc33f204"
    },
    customLinks: [
      {
        linkTitle: "Flowchart",
        linkUrl: "https://jad.maps.arcgis.com/sharing/rest/content/items/a045cf20e6d640869426a26cf656220c/data"
      }
    ]
  },
//--------------------------------------------------------------------------------------------------

  {
    id: "project-1",
    title: "Implementing Confidence-Risk Matrix Analysis in Support of National Weather Service Impact-Based Decision Services",
    tagline: "Decision-Making",
    description: "Extreme weather events of all types can pose significant risks to public safety and infrastructure, but no set of thresholds can make up a universal definition of extreme weather events as some regions can be more vulnerable than others due to their climate characteristics. To minimize harm to life and property, and maximize emergency response readiness, an ArcGIS Script Tool was developed using the ArcPy Python library that automates the generation of bivariate risk-confidence weather forecasts that display the probability and potential extremity of a National Blend of Models (NBM) forecast event. The two datasets that are used as inputs to operate this tool are percentile forecast grid layers generated by the NBM, and grid layers that were created using historical datasets from Parameter Elevation Regressions on Independent Slopes Model (PRISM) temperature and precipitation data along with NWS’ National Operational Hydrologic Remote Sensing Center (NOHRSC) snowfall data. The tool is intended to be utilized by National Weather Service meteorologists regardless of their experience with the software. The Script Tool was tested using historical extreme weather event scenarios of high temperatures, low temperatures, rainfall, and snowfall, and satisfactory results were returned. The bivariate map outputs are recommended to be discussed at Impact-Based Decision Services meetings where the impacts of potentially extreme weather events, relative to a region’s historical experiences, can be discussed.",
    image: "https://jad.maps.arcgis.com/sharing/rest/content/items/37fcbe14d91b4d70a5fabb7ed060dee2/data",
    type: "project",
    tags: ["Decision-Making", "Weather Forecasting"],
    details: {
      challenge: "Extreme weather lacks a universal definition, making it difficult to assess risk consistently across varying climate regions.",
      solution: "An automated ArcGIS script tool was developed using ArcPy to generate bivariate risk-confidence forecasts from NBM and historical weather datasets.",
      impact: "The resulting map outputs empower National Weather Service meteorologists to make informed impact-based decisions regarding regional weather extremes."
    },
    links: {
      demo: "https://drive.google.com/file/d/1K0WMjNzBUGgd4UNTm387bIwgvfwa58wB/view?usp=drive_link"
    },
    customLinks: [
      {
        linkTitle: "Flowchart",
        linkUrl: "https://jad.maps.arcgis.com/sharing/rest/content/items/4c63da4963c5486596d26b3f834fbebb/data"
      },
      {
        linkTitle: "Project File and Toolbox",
        linkUrl: "https://drive.google.com/file/d/1fw8xc0uBNno3nx_pdtu0_gzlecS0y8RR/view?usp=sharing"
      }
    ]
  }
];