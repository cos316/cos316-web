---
layout: default
---

## Final Project

Your final project is to build some new system functionality. It is
open-ended, you get to define your project. Its scope should be
similar to what you've done in the programming assignments throughout
the course. You can work in a group of 2 or individually.

Your project can either be related to one of our previous programming
assignments, or it can be related to a real system. You will likely
find it easier to build on one of our previous assignments because you
are already familiar with their structure, go, the build process, and
the testing process. Our wonderful TAs will help you select and refine
your final project topic during precepts.

### Deliverables

You will have three deliverables due on Dean's Date: 5pm Princeton Time on December 8, 2020. They are:
1. A tarball with your code and tests.
2. A 2-page project report.
3. A video demo of your project that is 5 minutes or less.

**Tarball**
Your tarball should contain your code, including your tests. If your code is in a directory called `code`, you can create a tarball with this command while in the parent directory: `tar -czvf code.tgz code`.

**Project Report**
Your 2 page project report must include the following 4 sections:
1. Project description. Briefly describe the base system you are modifying, the new functionality you are adding, and your rationale for why you wanted to add that new functionality.
2. Design overview. Briefly describe the design of your new functionality.
3. Testing methodology. Briefly describe your methodology for testing your new functionality.
4. Outcome. Describe the outcome of your project. Was it fully successful or partially successful? What works completely, what works mostly, and what doesn't work?

**Video Demo**
Your video demo should be at most 5 minutes long. (Shorter is fine.) It should show your code running with you explaining what is happening. One easy way to record this video is in a zoom meeting by yourself, see instructions from Zoom here: https://support.zoom.us/hc/en-us/articles/201362473-Local-recording

### Example project ideas:

Assignment 2 (routing): An alternative routing scheme, for example, for hierarchical/nested controllers.

Assignment 3 (in-memory cache):
* Disk-based cache
* Alternative (non-queue based) eviction algorithm
* Look-through cache for the ORM

Assignment 4 (ORM): Add selection and projection operations

Assignment 5 (connection pool): Compare a mutex vs. channel based implementation of a pool

Assignment 6 (access control): Client or server side of an  Single-Sign-On SSO protocol (e.g., CAS, OAuth, OpenID)