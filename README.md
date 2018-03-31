# Markdown Planner

A simple approach to planning ahead.

## Features

* Easily write plans and mark things to do in Markdown files
* See at a glance what is to be done next in the **TO DO** view
* Organize tasks by urgency and importance
* Specify due dates and recurring tasks
* Synchronize with Google Tasks and Google Calendar

## Planning In Markdown?

Planning is often done using specialized tools ranging from basic todo list managers like Google Tasks to complex project management tools.

For most planning, however, slightly enhanced text files have many advantages.

Text files are easy to write, to read, to search, to print and to share with others. They are maintainable and preservable, with no obsolescent proprietary formats or software to worry about.

Markdown is a well supported standard for text processing, particularly in Visual Studio Code, and provides a good platform to build upon.

<!--
By writing our plans as Markdown files we get a lot of functionality for free, for example:

* Outline (look in the Explorer area on your left side) that makes it easy to understand and navigate your plan 
* Print preview (open with `ctrl-K V`)
* Useful functions to quickly enter or modify lists, headers and so on

.. and much more.


## Planning: What To Do Next?

The main aim of a planning system is to select the next action to perform in order to achieve a certain goal.

To do so, we usually do not need to evalute precisely the value, cost and dependencies of every possible action, we just need to provide enough information to calculate a rough ordering of priorities.
-->

## Example: A Jogging Plan

So, how does a plan look like in Markdown? 

For example, a plan to become a runner might be stated as follows:

```markdown
Become a Long Distance Runner SOON IMPORTANT:

* Choose a training program
* Buy running shoes
* Training
    * Short Run EVERY WEDNESDAY EVERY FRIDAY
    * Long Run EVERY SUNDAY
* Events
    * Florence Half-Marathon DUE 2018-04-15
    * Florence Marathon DUE 2018-11-25
```

The goal (Become a Long Distance Runner) is stated first and marked as important and to be started soon.

Then follows the list of tasks required to accomplish the goal, ordered by their priority (first choose a training program then buy suitable shoes).

The plan also specifies recurring tasks (weekly running days) and some specific events (run the half or full marathon).

## Planning on a Small Scale

To prioritize the steps required to achieve a simple goal, just order them in a list, with the next one to be done at the top:

* My lofty goal, in order to achieve it:
    * Do this first
    * Then this
    * and finally this
        * doing this first
        * and then this

### Rearranging Tasks

Keep rearranging the task till it feels right.

To move a line or a selected block of text up and down use: `Alt + ↑` and `Alt + ↓`.

To select a block of text use `ctrl-a` (`ctrl` becomes `cmd` on Mac). It will select the smallest logical block of text that surrounds the cursor. Repeating the command will select progressively larger blocks of texts. Use `ESC` to deselect. 

To move around the selected block then either cut (`ctrl-X`) and paste (`ctrl-V`) it or move it up and down using `Alt + ↑` and `Alt + ↓`.

## Planning on a Large Scale
 
To handle many different and/or unrelated goals and actions, it is useful to organize them by two simple dimensions: urgency and importance.

This gives rise to the famous [Eisenhower Matrix](https://en.wikipedia.org/wiki/Time_management#The_Eisenhower_Method):


|                | Important | Not Important |
| -------------- | --------- | ------------- |
| **Urgent**     | 1         | 2             |
| **Not Urgent** | 3         | 4             |

The matrix split tasks in four groups of decreasing priority:

1. Urgent and Important
    * Tasks that should be attended to immediately
2. Urgent and Non Important
    * Tasks that should be delegated. If that is not possible, they are second in line to be dealt with.
3. Not Urgent and Important
    * Long term goals on which to focus once the urgent stuff has been dealt with 
4. Not Urgent and Not Important
    * The clutter that should be ignored

### Marking Tasks By Importance

To mark a task as important, write **IMPORTANT** or **BIG** (but not **BIGLY**):

    Become a Better Human Being IMPORTANT

### Marking Tasks By Urgency

To mark a task as being urgent write **NOW** (to be done immediately) or **SOON** (to be done in the next 3 days):

    Learn all about markdown SOON

If there is a specific date by which a task is due, specify a **DUE** date. To quickly enter a DUE date, type `due` and then `ctrl-space` and select the `due` code snippet:

    Pay phone bill DUE 2018-03-30

Note that dates are specified in international format: **YYYY-MM-DD**.

If the tasks is recurrent, you can specify on which day of the month or the week it takes place. 

To quickly enter a weekly task: type the first three letters of the weekday (`sun`, `mon`, `tue` ..), then `ctrl-space` to select the corresponding code snippet:

    Go shopping EVERY MONDAY EVERY THURSDAY
    Check online bank account EVERY 1

Note that you can have multiple markers per task.

## What To Do Next?

All urgent or important tasks in the current file are displayed in the **TO DO** view in the Explorer area (on the left of the screen).

The tasks are ordered by their priority class and inside every class by their urgency.

All tasks that are due in less than 11 days are considered urgent.

Tasks that neither urgent nor important are not displayed.

## Import and Export Planning Information

One problem with planning is that the required information is often scattered around.

Some of it will be in your online or offline calendar, a lot will be in your emails.

With most WWW based email programs (like GMail) you can reference an email from Markdown by just cutting and pasting its URL.

This extension provides a couple of commands that help to integrate external information with your Markdown Planner files:

<!--
One A convenient daily workflow (for Google users at least) to stay one step ahead of your commitments is to go through your email inbox, every evening, and clean it completely:

* Delete all the junk emails
* Answer all the emails that can be answered quickly
* Transform all emails that you have to act upon in tasks (in gmail, look under **More** for **Add to Tasks**) and then archive them
* Archive all emails that you do not need to act upon but that contains useful information you need to keep
* Rejoice in the emptiness of your email box :-)
* Then use Then convert 

To integrate all this information in your markdown planner files, we need a way of moving it back and
-->


### Save a Task on Google Calendar

`ctrl-e + ctrl c` (Mnemonic: **e**xport to **c**alendar) to save the task under the cursor in Google Calendar.

### Retrieve Google Tasks

`ctrl-i + ctrl t` (Mnemonic: **i**mport from google **t**asks) to import your task lists from Google Tasks.

The command will simply open the web page http://quid2.org/tasks in your browser.

After logging into your Google account, your tasks lists will be converted to Markdown Planner format. 

Just cut-and-paste them from the web page to your local markdown planner file.

Note that your task lists are converted and not deleted. 

## Reference

All commands provided by this extensions are under the **Planner** prefix (to find them `ctrl-p` and then enter `> Planner`).

| Command | ShortCut |
|---------|----------|
| Select Block | `ctrl-a` |
|Save Task to Google Calendar | `ctrl-e + ctrl c` |
| Retrieve Google Tasks | `ctrl-i + ctrl t` |
| Open Markdow Preview | `ctrl-k v`
| Move Selected Block Up | `Alt + ↑`
| Move Selected Block Down | `Alt + ↓`


| Snippet | ShortCut |
|---------|----------|
| DUE today | `due` | 
| EVERY MONDAY .. | `mon tue wed thu fri sat sun` |  

## Known Issues

See [Issues](https://github.com/tittoassini/vscode-planner/issues).

## Release Notes

See the [Change Log](https://github.com/tittoassini/vscode-planner/blob/master/CHANGELOG.md).

## Acknowledgements

<div>Extension Icon made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>.</div>

