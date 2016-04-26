# Signin Screen

## Complete these steps to create a signin prototype:

1. When the user presses the .signin button, fade in the modal window
2. When the user presses the .close button, fade out the modal window
3. When the user presses the .submit button, add an .error class to both input elements
4. When the user puts their cursor in one of the input fields, remove the .error class
5. (Bonus) Allow the user to click the .modal to close itself
  - Tricky, consider what happens when two elements that are overlapping are both waiting for a click

## Things to consider: 

- How do you select a CSS element by "name" attribute?
- Can you create the animation using just CSS? (you don't have to do it, just consider how)
- If both input elements have the same functionality, can they share code?

# The Switch

## The solution

Given the HTML and CSS as provided, use jQuery to hear the click of the switch and meet the following criteria:

- When someone hits the button in the switch, remove the current state class (on/off), and apply the opposite class (on/off)
- Swap the colors of the body's background and text by adding or removing the dark/light class
- Lastly, change the text in box to say "It's so bright in here!" when it's on, and "Hey, who turn off the lights?" when it's off

## Hints

Start with small steps:

1. Change the status text when the document is ready
2. Add a click listener to the switch and incorporate the text change from number 1
- Note that now you've confirmed the switch works
3. How do we switch the classes back now?
- This is easy if we knew what class was currently on the switch
- Javascript "IF" will give us an easy way, but there's a way to do this by attaching the events to the global scope
