---
title: Programming Assignments and Problem Sets
layout: default
---

This assignment schedule is preliminary and subject to change. See
[grading and course / assignment policies]({% link policies.md %}).

<table class="wide-table">
  <thead>
    <tr>
	  <th>Type</th>
      <th>Name</th>
      <th>Release</th>
      <th>Due</th>
      <th>Links</th>
    </tr>
  </thead>

  <tbody>
    {% assign sorted_assignments = site.data.syllabus.assignments | sort: "due" %}
    {% for assignment in sorted_assignments %}
      <tr>
	    <td>
		  {% if assignment.type == "prompt" %}
		    <div title="{{ assignment.type }}">✍</div>
		  {% elsif assignment.type == "programming" %}
		    <div title="{{ assignment.type }}">💻</div>
		  {% elsif assignment.type == "pset" %}
		    <div title="{{ assignment.type }}">🤔</div>
		  {% else %}
		    {{ assignment.type }}
		  {% endif %}
	    </td>
        <td style="text-align: left">{{ assignment.title }}</td>
        <td>{{ assignment.release | date: "%m/%d" }}</td>
        <td>{{ assignment.due | date: "%m/%d %l:%M%P" }}</td>
        <td>
		  {% capture assignment_links %}
		  {% for link in assignment.links %}
	        [<a
			  href="{% if link[1].path %}{% link {{ link[1].path }} %}{% else %}{{ link[1].url }}{% endif %}"
			  {% if link[1].new_tab == true %}target="_blank"{% endif %}
			  >{{ link[0] }}</a>]
			{% if forloop.last == false %}, {% endif %}
		  {% endfor %}
		  {% endcapture %}
		  {{ assignment_links | strip_newlines }}
        </td>
        <td></td>
        <td></td>
      </tr>
    {% endfor %}
  </tbody>
</table>

## General Programming Assignment Instructions

The remainder of this guide details the steps you will need to take to be ready
to use GitHub to submit your assignments.

### Do this once at the beginning of the course

**Creating a GitHub Account**

If you already have a GitHub account you are willing to use for this course,
then you're done - proceed to the next step.

Otherwise, visit the [GitHub registration page](https://github.com/join) and
follow the onscreen instructions to register for an account. You will want to
select "Free" as your subscription option, and ensure the "Help me set up an
organization" box is unchecked.

### Do these once per assignment

**Starting the assignment**

Navigate to your <!-- [COS316 Dashboard]({% link dashboard.md %}) --> dashboard
(to be enabled) and start the assignment.

**Selecting your partner**

If you are the first of your pair to start an assignment, you will be asked to
identify your partner by selecting their name from the shown class roster. *Do
not select a partner's name without their permission*. Be careful when
specifying a partner, as there is no way for you to change this on your own once
you have selected one.  Submitting will create a Github repository for you and
your partner that includes starter code. A link to this repository will be of
the form: `https://github.com/cos316/<assignment#>-<unique-name>`.

If your partner has already selected you for this assigment, you will be shown a
link to the same, shared Github repository.

**Granting the COS316 Grader permission to your Github (assignment 1 only)**

The first time you go through this process, you should be prompted to grant the
COS316 Grader permission to access various parts of your Github account. This is
required in order to allow instructors to view your assignment files, and to
allow the autograder to find your submissions.

**Getting access to assignment code**

Both partners should accept the Github invitation by visiting the repository on
GitHub and clicking the link to accept. You also may get an e-mail depending on
your GitHub notification settings.

**Cloning (downloading) your repository**

Once you have access to this repository, you will want to *clone* a copy of the
repository to your own machine so that you can work on it. From here on, the
process is similar to how you would contributed to any other git project hosted
on GitHub. Take a look at [lecture 3]({% link
lectures/L03-systems-programming-engineering.pdf %}) for an introduction to the
git version control system. You can find an interactive tutorial on git at
[learngitbranching.js.org](https://learngitbranching.js.org/).

There are two ways to clone your repository:

1.  Via command prompt. Open a terminal window using the Git-capable terminal
    from the first assignment setup. Navigate to the directory you are using for
    this course.

    Then enter the following command:

    `git clone <URL of your assignment repo>`

    For example:

    `git clone https://github.com/cos316/assignment1-cold-night`

    You will need to enter your GitHub credentials to authenticate yourself.

	Alternatively, you can set up SSH with your GitHub account. This can help to
    avoid git's authentication prompts for repository operations. GitHub
    provides [a guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
    on setting this up.

2.  Via GitHub Desktop. GitHub Desktop is a graphical Git/GitHub interface for
    macOS and Windows. You may find it easier to use, especially if you have
    never used Git or similar version control software before.

    Download GitHub Desktop [here](https://desktop.github.com/). Log in with
    your GitHub account. (If you are not prompted, you can do this manually from
    `File -> Options`).

    Then choose `File -> Clone repository` and select the repo from the list, or
    enter the URL manually.

**Pushing (submitting) to get online feedback**

To receive feedback on your submissions, you will need to push them to
GitHub. If you already know how to do this, you may skip this section.

Editing and saving files in your repository locally *does not* automatically
save these changes to GitHub.

Saving changes to GitHub is a two-step process. First, you will have to *commit*
your changes to the local copy of the repository you downloaded, and then you
have to *push* these commits to the remote copy of the repository, hosted on
GitHub.

As before, there are two ways to do this:

1.  Via command line. To commit your changes, execute the following command from
    within your cloned local copy of the assignment repository:

    `git commit -a -m "<brief summary of changes>"`

	This will add all local changes to this commit. Instead of `-a`, consider
    using `git add` to select changed files you want to include in your next
    commit.
	[Lecture 3]({% link lectures/L03-systems-programming-engineering.pdf %})
	expands on how using git can aid you during the programming assignments.

    Then, to push your changes to the remote repository hosted on GitHub:

    `git push`

2.  Via GitHub Desktop. Select the changes you would like to commit using the
    change list on the left, and enter a description of the changes in the text
    box on the bottom left. Then click *Commit to master*.

    To push your changes to the remote GitHub repository, click the *Push*
    button in the top toolbar, next to the *Current Branch* dropdown. If someone
    else has made changes to the repository since the last time you pushed, you
    may first need to *fetch* or *pull* these changes, which is done using the
    same button.

**Viewing test results**

Every time you or your partner pushes a change to your GitHub repository, your
submission will be graded as it is at that moment in time, and a snapshot of
your results will be saved on GitHub as a comment on that commit.

To view these comments (for either your most recent submission or any past
submission), click the *X Commits* button at the top of your repository's *Code*
view, where X is the number of commits made so far. Then, click on the comment
button for the commit you would like to inspect, and you will see your results.
