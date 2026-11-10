# Navigating the Mississippi River

## Study Area and Dates
I chose the lower Mississippi River, specifically around New Orleans, extending south into the river delta and nearby Gulf waters, as well as north through Baton Rouge and toward Vicksburg and Greenville, Mississippi. I was curious about how vessel types and movement patterns might differ between the main river corridor and the surrounding Gulf waterways.

I requested March 4, 2025 (00:00 - 23:59 UTC) from [AccessAIS](https://marinecadastre.gov/accessais/). I chose this date in particular because I was curious about unusual activity associated with Mardi Gras (Fat Tuesday) around the New Orleans area, specifically anticipating passenger vessel activity to stand out during the celebrations. I would not be able to tell whether this was unusual activity without comparing it to other days. New Orleans was on Central Standard Time (UTC-6), meaning the dataset spans from about 6:00 PM March 3 to 5:59 PM March 4 in local time. 

In order to keep the dataset manageable, I requested only one day and a limited geographic area. I converted the CSV into JSON paths grouped by vessel identifier (MMSI), removed duplicate observations with the same vessel and timestamp, and loaded the processed trajectories into the map. I also incorporated filters to explore different vessel categories independently.



## Interpretation
One pattern that stood out was how much activity appeared near the ends of narrow coastal landforms and branching waterways south of New Orleans. Other trajectories followed the main Mississippi River, with particularly noticeable concentrations around Baton Rouge and New Orleans.

Around New Orleans, some passenger vessel paths appeared relatively short and stayed within a small area. I wondered whether these might be tourist boats or ferries. The area does have established river crossings, including the Canal Street-Algiers Point ferry ([Louisiana DOTD](https://dotd.la.gov/about/office-of-operations/ferries/)), but I cannot identify the specific vessels based on their paths alone on this map as it stands now. Passenger activity appeared to increase around midday (CST), which was interesting given my original curiosity about Mardi Gras celebrations. However, without comparing other dates, I cannot determine whether the holiday influenced this pattern.

I was surprised that cargo traffic appeared more prominent than passenger traffic, especially around Baton Rouge. The [Port of Greater Baton Rouge](https://www.portgbr.com/about-overview) is at the head of deepwater navigation on the Mississippi River, which provides some context for the concentration of commercial shipping in that area.

Tanker activity also seemed to become more noticeable around midday (CST). There appeared to be a steady flow of cargo vessels in the southern portion of the map, toward the Gulf, throughout the night and early morning (CST). This activity seemed to become less pronounced later in the day. Surprisingly, there were barely any vessels shown leaving that area compared with the number that seemed to be approaching it. However, because the animation only displays a limited portion of each vessel's path at a time, I cannot determine whether this represents an actual difference between arriving and departing traffic or a limitation of the visualization and selected time range.

The most dramatic difference occurred when selecting "Other vessels", which displayed 1,288 vessel paths and revealed activity across much more of the river network. The river almost seemed to light up, particularly between Baton Rouge, New Orleans, and the surrounding Gulf waterways. Farther north, I also noticed repeated movements around Greenville and Vicksburg that appeared somewhat separate from the more concentrated activity downstream.

The "Other vessels" category includes AIS classifications outside my passenger, cargo, and tanker filters. This could include tugboats, towing vessels, fishing vessels, and other unspecified types. This could explain why so much more of the river network becomes visible when selecting for this category. It also suggests that the vessel activity along the Mississippi is more diverse than I initially expected.



## Feature Proposal for a Potential User
A potential user could be a port or transportation planner interested in when different vessel types are active along the lower Mississippi River. They might be interested in comparing the timing of passenger activity near New Orleans with cargo traffic farther upriver.

I would propose an hourly vessel activity histogram connected to the map's existing vessel type filter and time slider. This idea is inspired by the [kepler.gl Time Playback Guide](https://docs.kepler.gl/docs/user-guides/h-playback), which demonstrates how time distribution graphs and interactive playback controls can help users investigate temporal patterns in geographic data.

The histogram would show the number of distinct vessels reporting AIS positions during each hour, rather than counting every individual AIS message. A user could identify busier or quieter hours for each vessel category and click a bar to jump to that time in the animation. This would make it easier to compare activity throughout the day rather than trying to identify patterns just by watching the moving trails.

For a transportation planner, this feature could help identify periods and locations that warrant further investigation.