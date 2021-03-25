# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Daniel Do**

Time spent: **#3** hours spent in total

Link to project: (https://romantic-burly-acapella.glitch.me)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](your-link-here)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[YOUR ANSWER HERE]
GeeksforGeeks

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[YOUR ANSWER HERE]
One of the challenges I faced was my attempt to add a time such that if the player did not answer in time they would lose. Initially, I had thought it was simply just adding a timer and clearing at the correct function call but I had reached several road bumps. At first, I tried to place the var timer = setInterval(gameLose,3000) and add clearInterval(timer) when the player answered correctly but I concluded that wouldn't work because the timer would have to start after the player started in addition to an error causing the player to lose instantly. From there I continued to face similar problems trying to implement the timer. I attempted to add it to the start button such that the timer would start immediately when the player presses start but soon realized that since the var timer is localized in the timer function I can't access it from outside that function making it useless. Through trial and error, a write up of pseudo code I was able to more or less implement an inelegant timer by creating a timer global variable and seting the timer = setInterval(loseGame,intervalTime) at the end of the playClueSequence function so the timer only started after the sequence ends and that the timer is cleared at the beginning to ensure it resets the timer. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[YOUR ANSWER HERE]
What does the workflow look like. So far during my time learning code in class and by myself, I've never had to juggle using 3 different languages like css, html, and java all at once so I'm curious if that makes any difference. From my observations it looks like html is focused on the web page, css is centered on the stylization of the page and jave builds the meat of what happens on the web page, are these observations correct, or is there even more to it. Another question that came to mind after completing the submission was if there were other languages besides css,html, and java for web development and what their advantages and disadvantages to using them if any exist at all.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[YOUR ANSWER HERE]
If I was able to squeeze in a few more hours I'd spend the time implementing a display for the timer and a pattern of buttons to press. I think it would make the game more fun if a display with the active time ticking down was displayed to the player, it adds tension and makes the game a bit more exciting. Another fun addition to the game I thought about adding was different patterns of buttons that would appear randomly the stationary 4 buttons are too easy and unchallenging so adding a larger amount of buttons over a weird-looking shape would prove fun. 

## License

    Copyright [Daniel Do]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
