---
layout: post
title: "How to safely upgrade an Amazon EC2 instance"
tagline: "A note to future me"
date: 2014-10-15
category: sysadmin
tags: [aws, sysadmin]
image: posts/ooo.jpg
---
{% include JB/setup %}

Note to self
============

I so rarely do this that I forget how to do it and always have a last minute panic when I encounter problems.  So I've decided to document it for both future me and anyone else in the same situation.

Although there is the option of creating an image and booting a new instance from that, it's quicker to change the instance type on the existing running instance. As long as you don’t mind a few minutes downtime while the server reboots.

The first part is easy

**In the AWS Management Console:**

- Right-Click on the instance
- Instance Lifecycle > Stop
- When it stops
- Instance Management > Change Instance Type
- Start

What I always forget is to make sure any IIS nodes mapped to the old internal IP are remapped to the new internal IP.  

If your using RDS, don't forget to change the Security Group to allow access from the new instance internal IP.

Don’t forget all data on ethereal drives will be lost.  So if you store data on this way, copy to EBS storage for the upgrade.
Fingers crossed next upgrade will be smother than my last :)

