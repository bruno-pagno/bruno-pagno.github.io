+++
date = '2026-09-22T18:35:32-03:00'
draft = false
title = 'My Development Workflow in the AI Era'
tags = ['ai', 'workflow', 'engineering']
+++

On the AI era the hardest part is not the code development itself, but the planning. Architectural decisions are now way harder than the implementation itself, plus reviewing the code that was made to make sure it's not slop.

With that in mind, my workflow consists of focusing on developing a good document with the details and the reasoning behind it, the counter options, pros and cons, why a decision was made over another, and things like that. Slate is a good tool for that purpose. Then, I use different models, in different context windows, to analyze the document made during multiple rounds, just so I can polish the work and make sure everything makes sense.

I also include an implementation section on the document with all the files that need to be changed, which repository they are located in, and enough details so that an LLM can read and implement.

As I mentioned, after a few iterations I actually go for the implementation, where I will review the code manually and do a few iterations of reviews and questioning using LLMs.

When working in teams, this way of working has been very efficient for me, as my teammates can contribute to my documents by reviewing and making comments, and by documenting the entire process as part of the work itself.
