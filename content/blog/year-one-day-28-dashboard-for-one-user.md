---
title: "Day 28: We Shut Down a Dashboard for One User"
date: "2026-09-19"
excerpt: "Years of code, infra, and cloud cost for a single user — effort is not value."
tags: ["YearOne", "100-days", "leadership", "productivity", "fake-work", "data"]
category: "data-cloud-ai"
---

# Day 28: We Shut Down a Dashboard for One User

We maintained a dashboard for years.
It turned out to serve only for one user.

Code, infrastructure, maintenance, cloud costs — all real. All paid for.
When we finally looked closer, we saw what it actually was: a UI to retrieve data from a database, built so people could look up data directly.

To be clear: this is not about the user. Asking for easier access to data is completely reasonable. The gap was on our side.
The person who built the dashboard had long left the company. With them, the ownership left too.
Nobody inherited the question: "Why does this exist?"
We only inherited: "Keep it running."
And we did. Because engineers like writing code, refactoring, improving things.
It looks like productivity.
But effort is not value.

This year, we shut it down. For the occasional need, the user writes a SQL query or opens a ticket — and we get them the data. **Maintaining an entire product for one user wasn't the right trade-off anymore.**

This kind of work exists in every company. Not because people aren't working hard — but **because we keep a report, a process, a meeting or a dashboard running simply because it already exists.** Nobody stops to ask or challenge it: does this still create enough value to justify the effort?

That's the skill I want my engineers to build — not another tool or framework, but the habit of asking: **Who does this help? What value does it create? Is it worth the effort?**

Does your company have any dashboards with hardly any users?

---

*This is part of my "100 Days of Year One" series. Follow along as I share what I've learned in my first year as Head of Data and Cloud.*
