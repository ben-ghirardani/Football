*** when the page first loads it can take a liitle time for all 3 API calls to be made. Any actions before then cause an error. Improve error handling to deal with this. *** 

<BackButton/> position needs to be fixed on the page

<!-- 
  Create some dummy data for the single game page as API os paid at that point.
 -->

Quote from Stack Overflow -

The must-know here is the stack order of elements are, by default, defined by the reverse of their order in the HTML structure. Consider the following example:

<body>
  <div>Bottom</div>
  <div>Top</div>
</body> 
In this example, if the two <div> elements were positioned in the same place on the page, the <div>Top</div> element would cover the <div>Bottom</div> element. Since <div>Top</div> comes after <div>Bottom</div> in the HTML structure it has a higher stacking order.