# Using ChatGPT
You are a front end developer expert. Create a simple stopwatch application in HTML (in a file named index.html that include all the HTML, styles and reference to the javascript file) and JavaScript vanilla (in a file name script.js). I'll provide you with an image that shows how the design of the application must be. Ask me any additional questions if you need any additional information.

# Responded with questions:
Thanks for the image — the layout is clear 👍

Before I generate the files, I want to confirm a few behavior details so the stopwatch works exactly how you expect:

Questions
Start button behavior
Should Start change to Pause/Resume after starting?
Or should it always stay Start and only start once?
Clear button behavior
Should Clear:
reset the time to 00:00:00.000, and
stop the timer if it is running?
Time format
The image appears to show:

HH:MM:SS
       mmm

Example:

00:08:00
     000

So the display format would be:
hours : minutes : seconds + milliseconds
Millisecond precision
Do you want:
true milliseconds (0–999) updating every ~10ms, or
centiseconds (0–99) like most stopwatches?
Responsive or fixed layout?
Should it:
stay fixed like the design, or
scale nicely on mobile?
Once you confirm, I'll generate:
/index.html
/script.js

with:
clean semantic HTML
CSS matching your design
vanilla JS stopwatch logic
smooth timing
minimal but maintainable code.
If you'd like, I can also add optional improvements like:
keyboard shortcuts ⌨️
lap tracking
animation for the digits
accessibility (ARIA labels)
Just confirm the behaviors and I’ll generate the files.

# Responses

1. Yes, let's change it to Pause/Resume for clarity to the user.
2. Yes, both.
3. Yes 4. true milliseconds updating around every 10ms or so
5. Responsive Make sure to write with good practices