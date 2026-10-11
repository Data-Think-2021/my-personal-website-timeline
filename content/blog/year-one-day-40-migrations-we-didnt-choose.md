---
title: "Day 40: Migrations We Didn't Choose"
date: "2026-10-01"
excerpt: "Four causes of migration projects — and only one was within our control."
tags: ["YearOne", "100-days", "leadership", "migration", "aws", "compliance"]
---

# Day 40: Migrations We Didn't Choose

We moved our code from AWS CodeCommit to GitHub because AWS announced they were deprecating the service.

Right before we finished, AWS reversed their decision.

And now, we have to move that same code again, this time to GitHub EU. A new contract requirement coming into force means our data can only be processed outside the EU under very narrow conditions. GitHub's primary servers are in the US, so everything moves back to the EU by December.

In my first year as a leader, one word kept showing up in many conversations and projects: migration.
When I stepped back and looked at what drove so many migration projects, I found four causes:

- **Vendor decisions:** AWS announcing the CodeCommit shutdown
- **Compliance:** EU data location requirements
- **Technical debt:** a legacy AWS data lake account that made management and maintenance difficult
- **Organisational change:** a reorganisation that created new departments and teams

Only one of them was actually within our control.
My first reaction was frustration. So much time, team focus and energy, just to end up doing the same work somewhere else.

But looking back honestly, I can't point to a bad decision. Leaving CodeCommit made sense with what we knew. The EU requirement didn't exist yet. Nobody is wise enough to predict that.
What I can influence is how painful the next migration will be.

Is there a migration on your team's plate right now? Could anyone have seen it coming? What can we do to have more control and avoid some migrations?

---

*This is part of my "100 Days of Year One" series. Follow along as I share what I've learned in my first year as Head of Data and Cloud.*
