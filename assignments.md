---
title: Programming Assignments and Problem Sets
layout: default
---

## Overview

Course evaluation consists of programming assignments and problem sets,
generally due on alternating weeks, as well as a [final project](/final).

Problem sets review material from lecture and must be done **individually**.
They are to be completed on Gradescope and will be posted to the [Ed Discussion
Board](https://edstem.org/us/courses/19325).

Programming assignments put the ideas from lecture into practice by building
components of a web framework. All programming assignments must be done in
groups of two partners, **except** assignment 0 (setting up your development
environment), which should be done individually.

**Regrades:** If you feel we have made a mistake while grading your
work, email your preceptor with a short note describing the potential
mistake. You must do this within two weeks of the work being returned.

**Late days:** You may use up to seven (7) late days for programming
assignments. The late days are assigned retroactively to give you the
best possible overall grade on your programming
assignments. Programming assignments are due at 11:00pm Princeton
Time. Your score for one programming assignment is the commit with the
highest graded score and valid submission time. You do not declare the
use of late days. At the end of the semester, we find the best
allocation of late days across all your programming assignments, such
that all your submissions sum to the highest score.

You may not use late days for problem sets and the Dean\'s Date project

Late assignment penalties will be waived only in the case of
unforeseeable circumstances like medical emergencies, as documented by
your Dean or Director of Studies and with our approval.

## Programming Assignments

You will complete programming assignments in groups of two (except assignment
0), using Git to collaborate. We will automatically grade the last commit _each
time you push_ to your group's GitHub repository and report the grade as a
GitHub comment on the commit. At the end of the semester, we will assign you the
highest grade obtained for each assignment, considering the late day allocation
described above.

In other words, there is no penalty for pushing regularly to your repository,
and you should know within a few minutes how much of the assignment you've
successfully completed.

To begin working on a released assignment, using the assignment [dashboard](/dashboard).


|            | DATE DUE               |TOPIC                     |
|------------| -----------------------|--------------------------|
|Assignment 0| 02/02                  | Development Environment  |
|Assignment 1| 02/09                  | Socket programming       |
|Assignment 2| 02/23                  | HTTP Routing Framework   |
|Assignment 3| 03/04                  | In-memory cache          |
|Assignment 4| 03/23                  | Object Relational Mapper |
|Assignment 5| 04/06                  | Connection pool          |
|Assignment 6| 04/20                  | Access control           |

## Collaboration Policy

This course permits many forms of collaboration, including help from
course staff, classmates, and lab TAs. Googling is allowed, even
encouraged, in this course. You may use any online resource as long as
you cite the source (e.g., including the URL of source in the code).

Here is a summary, where ✔ means YES and ❌ means NO. If you have any
questions, please contact the course staff. Note the summer refers to
*Groups* - when you are working on an *individual* assignment, your
group consists of one - yourself.

|activity                             |your group\*  |course staff  |COS 316 grads  |classmates  |other
|-------------------------------------|--------------|--------------|---------------|------------|-------
|discuss concepts with \...           |✔             |✔             |✔              |✔           |✔
|acknowledge collaboration with \...  |✔             |✔             |✔              |✔           |✔
|expose solutions to \...             |✔             |✔             |❌             | ❌         |❌
|view solutions from \...             |✔             |❌            |❌             | ❌         |❌
|plagiarize code from \...            |❌            |❌            |❌             | ❌         |❌

**Your solutions.** The term *solutions* refers to any of the products
created when completing an, such as source code (including comments) and
documentation. It includes both finished and unfinished products,
regardless of correctness or completeness.

-   You must never expose solutions to anyone who is taking COS 316 now
    or who might take COS 316 in the future.
-   If you leave your computer unattended, be sure to protect it with a
    password.
-   You must never receive or view someone else\'s solutions to a
    programming assignment (or variant of an assignment).

**Working Groups.** All programming assignments require you to work in
groups. Here are the rules regarding group work.

-   A group must consist of two students.
-   You can work in different groups on different programming
    assignments.
-   Each group should submit a single solution, which should be clearly
    labeled with the names of the group\'s members. Only one member of
    the group needs to submit the group\'s solution. There is no need to
    submit redundant copies for the other members.
-   The members of a group will all receive the same grade on an
    programming assignment, reflecting the quality of the group\'s
    collective solution to the programming assignment.
-   It is up to you to divide up the work within your group, and to make
    sure that the other members of your group meet their commitments.
    (If a member of your group is consistently irresponsible, let us
    know and we\'ll take appropriate action.)
-   If you have trouble finding a group, let us know and we will help
    you.

**Why Work in Groups?** There are several reasons for our decision to
make you work in groups.

-   In the real world, people work in groups. We want you to learn how.
-   Designing, implementing and evaluating systems requires you to deal
    with engineering tradeoffs and make difficult design decisions. We
    hope that you\'ll debate these decisions within your group, and that
    the debates will be educational.

**Plagiarism.** As members of the University community, students are
bound by the rules and procedures described in [Rights, Rules,
Responsibilities](http://www.princeton.edu/pub/rrr/).

All the rules above continue to apply after assignments are graded and
after the end of the semester.

## General Assignment Instructions

The remainder of this guide details the steps you will need to 
take to be ready to use GitHub to submit your assignments.

### Do this once at the beginning of the course

**Creating a GitHub Account**

If you already have a GitHub account you are willing to use for 
this course, then you're done - proceed to the next step.

Otherwise, visit the [GitHub registration page](https://github.com/join) and
follow the onscreen instructions to register for an account. 
You will want to select "Free" as your subscription option, and 
ensure the "Help me set up an organization" box is unchecked.

### Do these once per assignment

**Starting the assignment**

Navigate to your [COS316 Dashboard](https://cos316.princeton.edu/dashboard)
and start the assignment. 

**Selecting your partner**

All assignments after assignment 0 should be completed in pairs. 
If you are working on assignment 0, you can proceed to the next 
step.

If you are the first of your pair to start an assignment, you will 
be asked to identify your partner by selecting their name from the 
shown class roster. *Do not select a partner's name without their 
permission*. Be careful when specifying a partner, as there is no 
way for you to change this on your own once you have selected one. 
Submitting will create a Github repository for you and your partner 
that includes starter code. A link to this repository will be of 
the form: `https://github.com/cos316/<assignment#>-<unique-name>`.

If your partner has already selected you for this assigment, you 
will be shown a link to the same, shared Github repository.

**Granting the COS316 Grader permission to your Github 
(assignment 0 only)**

The first time you go through this process, you should be prompted 
to grant the COS316 Grader permission to access various 
parts of your Github account. This is required in order to allow 
instructors to view your assignment files, and to allow the 
autograder to find your submissions.

**Getting access to assignment code**

Both partners should accept the Github invitation by visiting the 
repository on GitHub and clicking the link to accept. You also may 
get an e-mail depending on your GitHub notification settings.

**Cloning (downloading) your repository**

Once you have access to this repository, you will want to *clone* 
a copy of the repository to your own machine so that you can work 
on it.

There are two ways to accomplish this:

1.  Via command prompt. Open a terminal window using the Git-capable terminal
    from the first assignment setup. Navigate to the directory you are using for
    this course.

    Then enter the following command:

    `git clone <URL of your assignment repo>`

    For example:

    `git clone https://github.com/cos316/assignment1-cold-night`

    You will need to enter your GitHub credentials to authenticate yourself.

2.  Via GitHub Desktop. GitHub Desktop is a graphical Git/GitHub interface for
    macOS and Windows. You may find it easier to use, especially if you have
    never used Git or similar version control software before.

    Download GitHub Desktop [here](https://desktop.github.com/). Log in with
    your GitHub account. (If you are not prompted, you can do this manually
    from `File -> Options`).

    Then choose `File -> Clone repository` and select the repo from the list,
    or enter the URL manually.

**Pushing (submitting) to get online feedback**

To receive feedback on your submissions, you will need to push 
them to GitHub. If you already know how to do this, you may skip 
this section.

Editing and saving files in your repository locally 
*does not* automatically save these changes to GitHub.

Saving changes to GitHub is a two-step process. First, you will 
have to *commit* your changes to the local copy of the repository 
you downloaded, and then you have to *push* these commits to the 
remote copy of the repository, hosted on GitHub.

As before, there are two ways to do this:

1.  Via command line. To commit your changes, execute the following command
    from within your cloned local copy of the assignment repository:

    `git commit -a -m "<brief summary of changes>"`

    Then, to push your changes to the remote repository hosted on GitHub:

    `git push`

2.  Via GitHub Desktop. Select the changes you would like to commit using the
    change list on the left, and enter a description of the changes in the text
    box on the bottom left. Then click *Commit to master*.

    To push your changes to the remote GitHub repository, click the *Push* button
    in the top toolbar, next to the *Current Branch* dropdown. If someone else
    has made changes to the repository since the last time you pushed, you may
    first need to *fetch* or *pull* these changes, which is done using the same
    button.

**Viewing test results**

Every time you or your partner pushes a change to your GitHub 
repository, your submission will be graded as it is at that 
moment in time, and a snapshot of your results will be saved on 
GitHub as a comment on that commit.

To view these comments (for either your most recent submission or 
any past submission), click the *X Commits* button at the top of 
your repository's *Code* view, where X is the number of commits 
made so far. Then, click on the comment button for the commit you 
would like to inspect, and you will see your results.
