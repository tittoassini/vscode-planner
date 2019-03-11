## Planning and todos info management
 
 Reqs:
 * Persistent, everywhere accessible
 * Easy to search/browse
 * Integrate all sources
 Emails, Task list and Google calendar
 TODOs global and package level
 GitHub issues/plan
 Source files

 Principles:
 * ? Info should be stated closest to where is to be used (so more specific level?)

Footnotes:
See [test]

[test]: test

# Document Processing

## vscode-similar

Identify similar areas of text, make it see to merge/move or simply locate similar information

## vscode-markdown-block

* Select: treat as separate blocks SOON
        * lines in code blocks 
        * in tables: cell, line, all table 
* Modify Structure
  * Up/Down block aware (move up and down by one block rather than one line) SOON

* Understand and navigate structure
    * Outline
    * Fold all under a heading, show only top items

## Markdown Planner BIG

For development: see scripts in package.json

Changes:
* FIXED: TO DO not displayed on first file
* Display reserved expressions (DUE, EVERY ..) in different color

Release EVERY 28 EVERY MONDAY

* README
  * explain email handling SOON
* Fix selection 1H NOW
* Configuration/Repository/Publish
  * automatic changelog https://keepachangelog.com/en/1.0.0/ 
  * Manage dependencies https://greenkeeper.io/
  * https://www.npmjs.com/package/vscode-extension-telemetry
* Handle Task in priority order
  * Customisable interval of time when dues are considered urgent: NOW IS IN 3 DAYS.
* Stay Concentrated
  * Start/Stop pomodoro session
* WWW and Mobile versions
    * Shared Access (handle concurrent changes (e.g. changes from Inbox), Tasks doesn't seem to do it very well)
        * https://visualstudio.microsoft.com/services/live-share/
* Share data with Google Calendar
    Support EVERY entries as repetitive tasks
    Update a previously saved task
* Online support: make planning files accessible online
    * Put the directory under Google Drive!
       *  But, links to headers not present
       *  List of task not present
    * Export to Google Tasks
        * Phased out?
* Pull in data from Google Tasks
    * open link to http://quid2.org/tasks/index.html (NOT WORKING!)
    * ? read directly data from there (need to login internally)
* Planning projects: see  https://github.com/fredericaltorres/vscode-planning-syntax

### How to Prioritise

What we want: choose what to do next, we do not need precise values, just an ordering of priorities.

* Prioritize directly: order them in a list (e.g. simple related subtasks)

* Order by urgency first and then importance

|            | important | not important |
| ---------- | --------- | ------------- |
| urgent     | 1         | 2             |
| not urgent | 3         | 4             |

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
