# Provided PM2.5 observations
![PM2.5 map](screenshots\Puget Sound PM2.5.png)

Source: [U.S. EPA AirData](https://aqs.epa.gov/aqsweb/airdata/download_files.html), daily PM2.5 FRM/FEM mass (parameter 88101), downloaded 2026-10-18.

Date: **2025-07-05**, local standard day. 11 distinct monitoring sites in the Puget Sound teaching area.

- `pm25_puget_sound_2025-07-05.csv`: load in QGIS as delimited text, X=`longitude`, Y=`latitude`, CRS EPSG:4326.
- `pm25_stations.geojson`: the same rows as WGS84 point geometry for Mapbox and QGIS.
- `pm25_source.json`: exact source URL, filters, source hash, units, and deduplication rule.

The numeric `pm25` field uses **µg/m³**, not AQI. `station_name`, `station_id`, `date`, `units`, and `poc` document each observation. The source's 24-HR BLK AVG values may have less precision than the daily means of 1-hour values. All supplied rows use the same aggregation, standard, date and units. Do not mix both summaries as independent stations.

Reproduce by selecting Washington, the bounding box in the metadata, 2025-07-05, 24-HR BLK AVG, PM25 24-hour 2012, no exceptional events, nonnegative values and at least 75% observations. If multiple POCs remain, retain the lowest numeric POC per site. Preserve station identifiers as text.

An interpolated map estimates values between monitors. Its apparent 250 m cell size does not establish 250 m measurement accuracy. This sample supports a classroom demonstration, not a health or regulatory conclusion.

---

# Independent Map: Seattle Slopes

![Seattle Slopes map](screenshots\Seattle Slopes.png)

## Overview and Purpose

This map explores the relationship between terrain steepness and historical landslide locations in Seattle, Washington. It is intended for residents, urban planners, and others who are interested in understanding the city's topography and environmental hazards.

The raster layer displays terrain slope in degrees, while the point data identifies recorded landslide initiation locations. Together the layers allow users to examine where historical landslides have occurred in relation to steeper terrain.

## Data Sources
 
 **Terrain Slope Raster**
 Source: United States Geological Survey (2021). *United States Geological Survey 3D Elevation Program 1/3 arc-second Digital Elevation Model*. Distributed by OpenTopography.

 DOI: https://doi.org/10.5069/G98K778D

 Accessed: 2026-10-31

 License: US Government Public Domain.

 **Historical Landslide Points**

 Source: City of Seattle GIS, *ECA Known Slide Initiation Point*.

 Dataset: https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::eca-known-slide-initiation-point

 
 ## Processing and Visualization

 The USGS 10-meter elevation data were processed in QGIS to create a numerical slope raster, expressed in degrees.

 The raster was classified into four categories:
 - 0-5°: Nearly flat
 - 5-15°: Gentle to moderate
 - 15-30°: Steep
 - >30°: Very steep

The raster was exported as a PNG XYZ tile pyramid at zoom levels 10-13, covering Seattle and the surrounding Puget Sound area.

A separate Mapbox Studio basemap was exported as another tile pyramid.

The landslide points use blue circle symbols. Clicking a point displays its recorded slide type, year, and file number. Users can toggle the slope raster and landslide points independently.



