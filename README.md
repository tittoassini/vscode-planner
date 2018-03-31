# Markdown Planner

A simple approach to planning ahead.

<!--
## Features

* Easily select a Markdown block 
* Mark tasks as urgent and/or important
* Display todos in order of execution
* Synchronize with Google Tasks and Google Calendar
-->
## Planning In Markdown?

Planning is often done using specialised tools ranging from basic todo list managers like Google Tasks to complex project management tools.

For most planning, however, slightly enhanced text files have many advantages.

Text files are easy to write, to read, to search, to print and to share with others. They are maintainable and preservable, with no obsolescent proprietary formats or software to worry about.

Markdown is a well supported standard for text processing, particularly in Visual Studio Code, and provides a good platform to build upon.

By writing our plans as Markown files we get a lot of functionality for free, for example:

* An Outline (look in the Explorer area on your left side) that makes it easy to understand and navigate your plan 
* A print preview (open with `ctrl-K V`)
* Useful functions to quickly enter or modify lists, headers and so on

.. and much more.

## Planning: What To Do Next?

The main aim of a planning system is to select the next action to perform in order to achieve a certain goal.

To do so, we usually do not need to evalute precisely the value, cost and dependencies of every possible action, we just need to provide enough information to calculate a rough ordering of priorities.

### Example: A Jogging Plan: Putting it All Together

Say that you want to become a proper runner, you might specify your plan as follows:

Become a Long Distance Runner SOON IMPORTANT:

* Choose a training program
* Buy running shoes
* Training
    * Short Run EVERY WEDNESDAY EVERY FRIDAY
    * Long Run EVERY SUNDAY
* Events
    * Florence Half-Marathon DUE 2018-04-15
    * Florence Marathon DUE 2018-11-25

The goal (Become a Long Distance Runner) is stated first and marked as important and to be started soon.

Then follows the list of tasks required to accomplish the goal, ordered by their priority (first choose a training program then buy suitable shoes).

The plan also specifies recurring tasks (weekly running days) and some specific events (run the half or full marathon).

## Planning on a Small Scale: Prioritize Simple Sub Tasks

To prioritize the steps required to achieve a single and simple goal, just order them in a list, with the next one to be done at the top:

* My lofty goal, in order to achieve it:
    * Do this first
    * Then this
    * and finally this
        * doing this first
        * and then this

### Rearranging Tasks

Keep rearranging the task till it feels right.

To move a line or a selected block of text up and down use: `Alt + ↑` and `Alt + ↓`.

To select a block of text use `ctrl-s` (`ctrl` becomes `cmd` on Mac). It will select the smallest logical block of text that surrounds the cursor. Repeating the command will select progressively larger blocks of texts. Use `ESC` to deselect. 

To move around the selected block then either cut (`ctrl-X`) and paste (`ctrl-V`) it or move it using `Alt + ↑` and `Alt + ↓`.

## Prioritize on a Large Scale, by Urgency and Importance
 
To handle many different and unrelated goals and actions, it is useful to organise them by two simple dimensions: urgency and importance.

This gives rise to the famous [Eisenhower Matrix](https://en.wikipedia.org/wiki/Time_management#The_Eisenhower_Method):


|                | Important | Not Important |
| -------------- | --------- | ------------- |
| **Urgent**     | 1         | 2             |
| **Not Urgent** | 3         | 4             |

The matrix prioritize tasks by splitting them in four groups of decreasing relevance:

1. urgent and important
    * This is what should be done immediately
2. urgent and non important
    * These tasks should be delegated. If that is not possible, they are second in line to be dealt with.
3. not urgent and important
    * These are your long term goals on which to focus once the urgent stuff has been dealt with (directly or by delegation)  
4. not urgent and not important
    * And finally this is the clutter that should be ignored

The todos in the current file are displayed in the TODOS view on the Explorer area ordered by their class and inside every class by their urgency.

Tasks that neither urgent nor important are not displayed at all.

All tasks that are due in less than 11 days are considered urgent.

### Marking Tasks By Urgency

To mark a task as being urgent write **NOW** (to be done immediately) or **SOON** (to be done in the next 3 days):

    Learn all about markdown SOON

If there is a specific date by which a task is due, specify a **DUE** date. To quickly enter a DUE date, type `due` and then `ctrl-space` and select the due code snippet:

    Pay phone bill DUE 2018-03-30

Note that dates are specified in international format: **YYYY-MM-DD**.

If the tasks is recurrent, you can specify on which day of the month or the week it takes place. To quickly enter a weekly task: type the first three letters of the weekday (`sun`, `mon`, `tue` ..), then `ctrl-space` to select the corresponding code snippet:

    Go shopping EVERY MONDAY EVERY THURSDAY
    Check online bank account EVERY 1

Note that you can have multiple markers per task.

### Marking Tasks By Importance

To mark a task as important, write **IMPORTANT** or **BIG**.



# Import and Export Planning Information

One problem with planning is that the required information is often scattered around.

Some of it will be in your online or offline calendar, a lot will be in your emails.

To integrate all this information in your markdown planner files, we need a way of moving it back and

One A convenient daily workflow (for Google users at least) to stay one step ahead of your commitments is to go through your email inbox, every evening, and clean it completely:

* Delete all the junk emails
* Answer all the emails that can be answered quickly
* Transform all emails that you have to act upon in tasks (in gmail, look under **More** for **Add to Tasks**) and then archive them
* Archive all emails that you do not need to act upon but that contains useful information you need to keep
* Rejoice in the emptiness of your email box :-)
* Now you Then convert 

There a couple of simple tools that makes this easier.

## Save a task on Google Calendar

`ctrl-e + ctrl c` (Mnemonic: **e**xport to **c**alendar) to save the current task in Google Calendar (if there is an associated provided)

## Retrieve tasks from Google Tasks

`ctrl-i + ctrl t` (Mnemonic: **i**mport from google **t**asks) to import your task lists from Google Tasks.

The command will simply open the web page at http://quid2.org/tasks in your browser.

if you are logged into your Google account, your tasks lists will shortly appear in markdown format so that you can cut-and-paste them from the web page to your local markdown planner files.

Note that your task lists are converted and not deleted. 

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: enable/disable this extension
* `myExtension.thing`: set to `blah` to do something


## Known Issues

* The selection command .. 

## Acknowledgements

<div>Extension Icon made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

## Release Notes

See the [Change Log](https://github.com/alanz/vscode-hie-server/blob/master/Changelog.md).
