1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: we use getElementById to access the element of HTML by id.
 we use getElementsByClassName to access the element of HTML by class name. 
 we use querySelector to access the element of HTML by id or class.(as far i know)
 we use querySelectorAll to access the element of HTML by id or class or even by tag name like a, span, p, etc (as far I know). 

2. How do you create and insert a new element into the DOM?
answer:  we use document.createElement("element name"), the we use appendChild to insert to where we want to insert

3. What is Event Bubbling? And how does it work?
answer: event bubbling is an important concept of DOM when a html element event get triggered, like "click", this event is not only limited to that element, it goes to the parent element, and even if there is also an event , it will trigger it too, so thats how it works, as it feels like a water bubble going upwards from bubble creationg position ,thats why we named it event bubbling.

4. What is Event Delegation in JavaScript? Why is it useful?
answer: it is a technique to minimize event listenters on a common parent element, as there is a event bubbling concept , we can just add one listener on parent instead of many on child element, it can automatically listen child even when we use event.target method.

usefulness:
 1. memory effeviancy, as it takes lower memory to process
 2. clean code
 3. can nhandle dynamic elements automatically (like when we insert new elements dynamically)


5. What is the difference between preventDefault() and stopPropagation() methods?
asnwer: 
preventDefault(): this method stops the browser from executing the default action associated with an event. It does not stop the event from bubbling up the DOM.
stopPropagation(): this method stops the event bubbling process. It prevents the event from traveling up the DOM tree, meaning any event listeners attached to the parent elements will not be triggered. It does not prevent the browser's default action.
