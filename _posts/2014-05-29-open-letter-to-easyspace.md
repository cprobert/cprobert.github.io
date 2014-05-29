---
layout: post
title: "Open Letter to Easyspace"
tagline: "buyer beware"
date:   2014-05-29
category: openletter
tags: [complaint]
image: posts/unlocked.jpg
---
{% include JB/setup %}

**We Expect Better Security from Companies we've Trusted with OUR Details!**

I was recently contact be an Easyspace Customer service rep, asking:

> This is a courtesy email form Easyspace.
> 
> We are gaining valuable feedback from all of our customers as we always strive to improve our service.
> 
> I notice that you have 10 of your packages. I just want to make sure that you were happy with the service provided. Please let us know if there is anything that you feel Easyspace could do better to improve your customer experience.

It was opportune email because I'd just received a separate system email from Easyspace with my password unencrypted in the email for all to read.  As you may imagine I wasn't very happy with this flagrant abuse of trust.  So I replied hoping that they were genuinely interested in my comments.  

Unfortunately I had no response, my email went into a blackhole.  So I thought I'd publish my reply so any potential Easyspace customers can see what their getting themselves in for.

> Hi Maryjo
>
> I'm glad you asked.  My main bugbear with easy space was always the DNS especially the fact that I had no way to add txt records.  I was so pleased when you introduced it, so thank you for that.
>
> My current concern is a lot more serious.  Would you send a password on a post card?  No - then why are you sending passwords in emails.  Emails are un-encrypted (plain text), and consequentially can be read at any hop between destinations.  Like post men can read your postcard, sysadmin can read your email.  So email is effectively as secure as a postcard.  This is not a good medium to be sending secrets over.
>
> What is also concerning is that to be able to show me the password you have to be storing the password in plain text in the DB. It is best practices to salt and hash password. This way the password in never stored only the resultant output of salted hashed password compared to the stored salted hash. You might think that this is perhaps a little OTT but I certainly don't think so. It is simple to run a query on a DB and pull all user-names and passwords if their stored in plain text. It only takes one disgruntled employee to leak this list and your entire customer base if compromised. Time and time again we see this in the news. If it can happen to huge companies like Ebay it can certainly happen to you. If you’re getting something as simple as password best practice so wrong, god knows what else you're doing wrong.
>
> This is a serious issue that I've written to you about and was ignored.  It would be a hassle to move my account from you but after seeing my FTP password sent to me in an email I'm motivated to do so.
>
> Please pass this on to someone who is empowered to do something about it.  Then have a very serious chat with the developer who wrote code.  In a day and age when even our own governments are snooping on us it is vital that security best practices are adhered to.
>
>
> Best regards
>
>
> Courtenay Probert