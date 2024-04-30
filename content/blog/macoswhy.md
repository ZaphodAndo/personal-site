---
title: KeyboardEvent quirks with MacOS
description: Why did Tim Apple do this to us?
date: 2024-04-30
tags:
  - post
  - apple
  - javascript
---

## What happened this time?
Recently I have been implementing a new system for managing keyboard shortcuts in our web application.

When we were architecting the API for this we decided that for MacOS we would make use of the `command` key for the access key.

This seemed like a logical choice and was inline with what seemed to be a general convention across MacOS applications however whilst implementing this new system and testing things in different browsers/operating systems we uncovered some amazingly dumb behaviour that occurs in the land of MacOS when using the `command` key and `keyup` events.

When the command key is pressed down along with another alphanumeric or symbol key e.g. `z` it will trigger `keydown` events for both keys as expected however on releasing the z key no keyup event will fire.

This is because of some weird MacOs specific behaviour that seems to modify the keys when command is pressed down resulting in the `keyup` event for that key not being fired as it should do, causing problems for anything that relies on `keyup` events being fired.

The exception to this rule seems to be keys that are treated as access keys e.g. `shift`, `control` and `alt`. Holding down `command` + any of those keys and then releasing them will cause the correct `keyup` events for the key presses to trigger.

Thanks Apple for the endless pain and issues. 🙄

tl:dr MacOs sucks, Tim Apple is trolling and `keyup` events for alphanumeric and symbol keys will not fire whilst `command` is being pressed.
