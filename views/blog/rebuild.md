---
layout: post.11ty.js
title: The last rebuild in a while
description: A walkthrough of the new stack and changes
date: 2026-03-16
tags:
  - post
  - meta
  - eleventy
---

i've been meaning to rebuild this site for a while now. the old stack was fine — it worked, it shipped — but it was starting to feel like wearing someone else's shoes. functional but not quite right.

this time around i wanted something that felt more like mine. fewer dependencies, more control, and a workflow that doesn't make me want to close the laptop and go outside.

## the new stack

the site is now built with a custom static site generator written in rust. i know, i know — "you wrote a static site generator in rust" is peak developer cliche. but hear me out.

the old setup used a node-based tool that pulled in about 400 dependencies to turn markdown into html. the new one has twelve. it compiles in under a second. it does exactly what i need and nothing else.
