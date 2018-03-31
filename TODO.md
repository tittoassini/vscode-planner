# Document Processing

## Markdown Planner

Release EVERY 28 EVERY MONDAY

* README NOW
* TO DO not displayed on first file NOW
* Fix selection in list 1H NOW
* Configuration/Repository/Publish
  * https://keepachangelog.com/en/1.0.0/
  * Manage dependencies https://greenkeeper.io/
  * https://www.npmjs.com/package/vscode-extension-telemetry
* Handle Task in priority order
  * Display reserved expressions (DUE, EVERY ..) in different colors
  * Customisable interval of time when dues are considered urgent
* Reorder tasks (select and then cut and paste where wanted)
    * Select a section cmd-s and expand selection to next level
        * paragraphs are separate blocks 
        * in tables: cell, line, all table 
        * Extract as separate extension
* Modify Structure
  * Up/Down block aware (move up and down by one block rather than one line)
* Understand and navigate structure
    * Outline
    * Fold all under a heading, show only top items
* Stay Concentrated
  * Start/Stop pomodoro session
* WWW and Mobile versions
    * Shared Access (handle concurrent changes (e.g. changes from Inbox), Tasks doesn't seem to do it very well)
        * https://code.visualstudio.com/blogs/2017/11/15/live-share
* Share data with Google Calendar
  * Support EVERY entries as repetitive tasks 
* Pull in data from Google Tasks
    * open link to http://quid2.org/tasks/index.html
    * ? read directly data from there (need to login internally)
* Planning projects: see  https://github.com/fredericaltorres/vscode-planning-syntax

### How to Prioritise

What we want: choose what to do next, we do not need precise values, just an ordering of priorities.

* Prioritize directly: order them in a list (e.g. simple related subtasks)

* Order by urgency first and then importance

|                |  important | not important|
|----------------|------------|--------------|
|          urgent|    1        | 2           |
|      not urgent|    3        | 4           |     

Order tasks:

* urgent important:
  order by urgency
* urgent - non important
  order by urgency
* not urgent - important
  order by urgency
* not urgent - not important
  ignore

Urgent: bool: false = days_left < 11? (THIS ACTUALLY DEPENDS ON HOW LONG IT TAKES TO COMPLETE THEM) 

Urgency: days_left_to_complete: 3650

urgent=now=due <today>

Importance: bool = false;

big=important 

* Order by return on investment ratio: value/cost

ADDED VALUE (in money or time, but use the same unit in the same file) 
== PRICE - VARIABLE COST

COST (in same unit) fixed cost
