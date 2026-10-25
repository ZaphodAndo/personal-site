---
layout: post.11ty.js
title: Software sucks
description: Just constant dissapointment
date: 2026-10-25
tags:
  - post
  - tech
  - microsoft
---

Why does modern software suck so much?

We live in a world where any old bloke from down the local with a claude subscription can spit out fully featured applications at a rate of nots and yet we have big tech behemoths such as Microsoft with their decades of experience building software and some of the best paid software engineers on the planet and yet they still produce software that makes you want to claw your eyes out.

Just the other day my team encountered one of the most frustrating bugs courtesy of Microsoft that I have seen in paid commercial software for a while.

We make use of feature branches when we have long running or large projects with lots of moving parts to avoid polluting master with half finished or broken features that we don't want accidentally being released.

Now with one of our most recent projects we were ready to merge the feature branch into master however as one might expect there was a series of merge conflicts. No big deal just fix them and push right? Nah that would be too easy, too trivial because we are using Microsoft Azure devops to host our git repos.

After resolving the merge conflicts and pushing the changes, Azure just sits there and refuses to acknowledge the conflicts have been fixed on the PR and because of our policies it completely blocks the merge until said conflicts are resolved even though they have been its just azure bugging out.

Not only does it completely brick the pull request but it also bricks the branch because even if you abandon the PR and go again it still shows the conflicts as being unresolved. 💀

To fix this we ended having to create a new branch and then make a pull request from there instead.

What a royal pain in the backside figuring all of that out was.

If this was just a one off thing, an occasional bug in day to day life I might not care however that’s far from the case. Using modern software feels like death by a million paper-cuts.

Another clanger from Microshaft (Microsoft) is when the worlds most dreadful communications software Teams just refused to pickup my headset for some reason. In the end restarting Teams fixed the issue but it wasted 15 minutes of my life and I missed standup.

At this point I’m just moaning about how terrible Microsoft products are but its not just them the rot is everywhere and it pains me inside that as an industry we all like to cosplay “Engineers” but then pump out the bare minimum that still manages to break.

And these same companies that produce slop after slop seem to want everyone to believe that AI is going to solve everyones problems. 

AI won’t make this better because ability is not the issue. We can make good software we just don't because most companies and developers either don't care enough to do so or because its simply not financially beneficial. Why put extra effort into making your products nice to use when everyone still buys it?
