---
title: Bryan Guner Web Dev Resource Gub
sections:
  - section_id: hero
    type: section_hero
    title: I am a musician/electrical engineer turned web developer
    image: images/3.jpg
    content: >-
      This section can contain a subtitle or tagline. The recommended length is
      one to three sentences, but can be changed as you prefer.
    actions:
      - label: Get Started
        url: /docs
        style: primary
  - section_id: features
    type: section_grid
    col_number: three
    grid_items:
      - title: Blog
        content: >
          > A Quick Guide to Big-O Notation, Memoization, Tabulation, and
          Sorting 

          >

          > ![](https://miro.medium.com/max/2000/0*yjlSk3T9c2_14in1.png)

          >

          > ***Curating Complexity: A Guide to Big-O Notation***
        actions:
          - label: Get Started
            url: /docs
            style: link
      - title: Tools
        content: >
          <https://levelup.gitconnected.com/python-study-guide-for-a-native-javascript-developer-5cfdf3d2bdfb>
        actions:
          - label: View Posts
            url: /blog
            style: link
      - title: Goals
        content: >+
          This section exists for me to day dream ideas for the future... and
          maybe... just maybe, hold myself accountable to them.

        actions:
          - label: Learn More
            url: /style-guide
            style: link
      - title: lorem-ipsum
        title_url: lorem-ipsum
        image_alt: lorem-ipsum
        content: >-
          ## Lorem ipsum


          Lorem ipsum dolor sit amet, **consectetur adipiscing elit**, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.


          - Lorem ipsum

          - dolor sit amet
        actions: []
        type: grid_item
      - title: lorem-ipsum
        title_url: lorem-ipsum
        image_alt: lorem-ipsum
        content: >-
          ## Lorem ipsum


          Lorem ipsum dolor sit amet, **consectetur adipiscing elit**, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.


          - Lorem ipsum

          - dolor sit amet
        actions: []
        type: grid_item
      - title: lorem-ipsum
        title_url: lorem-ipsum
        image_alt: lorem-ipsum
        content: >-
          ## Lorem ipsum


          Lorem ipsum dolor sit amet, **consectetur adipiscing elit**, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.


          - Lorem ipsum

          - dolor sit amet
        actions: []
        type: grid_item
  - section_id: text-img
    type: section_content
    image_position: left
    title: Musician
    content: "# Hi\_\U0001F44B, I'm Bryan\n\n```\n                                                                                                                        ![](/images/gravatar.png)\n\n\n\n```\n"
    actions: []
  - section_id: text-no-img
    type: section_content
    title: A Section Without Image
    content: "1.  # Linked Lists# What is a Linked List?## “So…this sounds a lot like an Array…”# Types of Linked Lists# Linked List Methods# Time and Space Complexity Analysis# Time Complexity — Access and Search## Scenarios## Discussion# Time Complexity — Insertion and Deletion## Scenarios## Discussion# Space Complexity## Scenarios## Discussion# Stacks and Queues# What is a Stack?# What is a Queue?# Stack and Queue Properties# Time and Space Complexity Analysis## Time Complexity — Access and Search## Time Complexity — Insertion and Deletion## Space Complexity# When should we use Stacks and Queues?## Stacks## Queues\n\n    In the university setting, it’s common for Linked Lists to appear early on in an undergraduate’s Computer Science coursework. While they don’t always have the most practical real-world applications in industry, Linked Lists make for an important and effective educational tool in helping develop a student’s mental model on what data structures actually are to begin with.\n\n    Linked lists are simple. They have many compelling, reoccurring edge cases to consider that emphasize to the student the need for care and intent while implementing data structures. They can be applied as the underlying data structure while implementing a variety of other prevalent abstract data types, such as Lists, Stacks, and Queues, and they have a level of versatility high enough to clearly illustrate the value of the Object Oriented Programming paradigm.\n\n    They also come up in software engineering interviews quite often.\n\n    A Linked List data structure represents a linear sequence of “vertices” (or “nodes”), and tracks three important properties.\n\n    **Linked List Properties:**\n\n    The data being tracked by a particular Linked List does not live inside the Linked List instance itself. Instead, each vertex is actually an instance of an even simpler, smaller data structure, often referred to as a “Node”.\n\n    Depending on the type of Linked List (there are many), Node instances track some very important properties as well.\n\n    **Linked List Node Properties:**\n\n    Property Description\_value: The actual value this node represents.nextThe next node in the list (relative to this node).previousThe previous node in the list (relative to this node).\n\n    **NOTE:**\_The\_previous\_property is for Doubly Linked Lists only!\n\n    Linked Lists contain\_*ordered*\_data, just like arrays. The first node in the list is, indeed, first. From the perspective of the very first node in the list, the\_*next*\_node is the second node. From the perspective of the second node in the list, the\_*previous*\_node is the first node, and the\_*next*\_node is the third node. And so it goes.\n\n    Admittedly, this does\_*sound*\_a lot like an Array so far, and that’s because Arrays and Linked Lists are both implementations of the List ADT. However, there is an incredibly important distinction to be made between Arrays and Linked Lists, and that is how they\_*physically store*\_their data. (As opposed to how they\_*represent*\_the order of their data.)\n\n    Recall that Arrays contain\_*contiguous*\_data. Each element of an array is actually stored\_*next to*\_it’s neighboring element\_*in the actual hardware of your machine*, in a single continuous block in memory.\n\n    *An Array’s contiguous data being stored in a continuous block of addresses in memory.*\n\n    Unlike Arrays, Linked Lists contain\_*non-contiguous*\_data. Though Linked Lists\_*represent*\_data that is ordered linearly, that mental model is just that — an interpretation of the\_*representation*\_of information, not reality.\n\n    In reality, in the actual hardware of your machine, whether it be in disk or in memory, a Linked List’s Nodes are not stored in a single continuous block of addresses. Rather, Linked List Nodes live at randomly distributed addresses throughout your machine! The only reason we know which node comes next in the list is because we’ve assigned its reference to the current node’s\_next\_pointer.\n\n    *A Singly Linked List’s non-contiguous data (Nodes) being stored at randomly distributed addresses in memory.*\n\n    For this reason, Linked List Nodes have\_*no indices*, and no\_*random access*. Without random access, we do not have the ability to look up an individual Linked List Node in constant time. Instead, to find a particular Node, we have to start at the very first Node and iterate through the Linked List one node at a time, checking each Node’s\_*next*\_Node until we find the one we’re interested in.\n\n    So when implementing a Linked List, we actually must implement both the Linked List class\_*and*\_the Node class. Since the actual data lives in the Nodes, it’s simpler to implement the Node class first.\n\n    There are four flavors of Linked List you should be familiar with when walking into your job interviews.\n\n    **Linked List Types:**\n\n    ***Note:**\_These Linked List types are not always mutually exclusive.*\n\n    For instance:\n\n    *   Any type of Linked List can be implemented Circularly (e.g. A Circular Doubly Linked List).\n\n    *   A Doubly Linked List is actually just a special case of a Multiply Linked List.\n\n    You are most likely to encounter Singly and Doubly Linked Lists in your upcoming job search, so we are going to focus exclusively on those two moving forward. However, in more senior level interviews, it is very valuable to have some familiarity with the other types of Linked Lists. Though you may not actually code them out,\_*you will win extra points by illustrating your ability to weigh the tradeoffs of your technical decisions*\_by discussing how your choice of Linked List type may affect the efficiency of the solutions you propose.\n\n    Linked Lists are great foundation builders when learning about data structures because they share a number of similar methods (and edge cases) with many other common data structures. You will find that many of the concepts discussed here will repeat themselves as we dive into some of the more complex non-linear data structures later on, like Trees and Graphs.\n\n    Before we begin our analysis, here is a quick summary of the Time and Space constraints of each Linked List Operation. The complexities below apply to both Singly and Doubly Linked Lists:\n\n    Before moving forward, see if you can reason to yourself why each operation has the time and space complexity listed above!\n\n    1.  We have a Linked List, and we’d like to find the 8th item in the list.\n\n    2.  We have a Linked List of sorted alphabet letters, and we’d like to see if the letter “Q” is inside that list.\n\n    Unlike Arrays, Linked Lists Nodes are not stored contiguously in memory, and thereby do not have an indexed set of memory addresses at which we can quickly lookup individual nodes in constant time. Instead, we must begin at the head of the list (or possibly at the tail, if we have a Doubly Linked List), and iterate through the list until we arrive at the node of interest.\n\n    In Scenario 1, we’ll know we’re there because we’ve iterated 8 times. In Scenario 2, we’ll know we’re there because, while iterating, we’ve checked each node’s value and found one that matches our target value, “Q”.\n\n    In the worst case scenario, we may have to traverse the entire Linked List until we arrive at the final node. This makes both Access & Search\_**Linear Time**\_operations.\n\n    1.  We have an empty Linked List, and we’d like to insert our first node.\n\n    2.  We have a Linked List, and we’d like to insert or delete a node at the Head or Tail.\n\n    3.  We have a Linked List, and we’d like to insert or delete a node from somewhere in the middle of the list.\n\n    Since we have our Linked List Nodes stored in a non-contiguous manner that relies on pointers to keep track of where the next and previous nodes live, Linked Lists liberate us from the linear time nature of Array insertions and deletions. We no longer have to adjust the position at which each node/element is stored after making an insertion at a particular position in the list. Instead, if we want to insert a new node at position\_i, we can simply:\n\n    1.  Create a new node.\n\n    2.  Set the new node’s\_next\_and\_previous\_pointers to the nodes that live at positions\_i\_and\_i - 1, respectively.\n\n    3.  Adjust the\_next\_pointer of the node that lives at position\_i - 1\_to point to the new node.\n\n    4.  Adjust the\_previous\_pointer of the node that lives at position\_i\_to point to the new node.\n\n    And we’re done, in Constant Time. No iterating across the entire list necessary.\n\n    “But hold on one second,” you may be thinking. “In order to insert a new node in the middle of the list, don’t we have to lookup its position? Doesn’t that take linear time?!”\n\n    Yes, it is tempting to call insertion or deletion in the middle of a Linked List a linear time operation since there is lookup involved. However, it’s usually the case that you’ll already have a reference to the node where your desired insertion or deletion will occur.\n\n    For this reason, we separate the Access time complexity from the Insertion/Deletion time complexity, and formally state that Insertion and Deletion in a Linked List are\_**Constant Time**\_across the board.\n\n    ***Note:**\_Without a reference to the node at which an insertion or deletion will occur, due to linear time lookup, an insertion or deletion in the middle of a Linked List will still take Linear Time, sum total.*\n\n    1.  We’re given a Linked List, and need to operate on it.\n\n    2.  We’ve decided to create a new Linked List as part of strategy to solve some problem.\n\n    It’s obvious that Linked Lists have one node for every one item in the list, and for that reason we know that Linked Lists take up Linear Space in memory. However, when asked in an interview setting what the Space Complexity\_*of your solution*\_to a problem is, it’s important to recognize the difference between the two scenarios above.\n\n    In Scenario 1, we\_*are not*\_creating a new Linked List. We simply need to operate on the one given. Since we are not storing a\_*new*\_node for every node represented in the Linked List we are provided, our solution is\_*not necessarily*\_linear in space.\n\n    In Scenario 2, we\_*are*\_creating a new Linked List. If the number of nodes we create is linearly correlated to the size of our input data, we are now operating in Linear Space.\n\n    ***Note**: Linked Lists can be traversed both iteratively and recursively. If you choose to traverse a Linked List recursively, there will be a recursive function call added to the call stack for every node in the Linked List. Even if you’re provided the Linked List, as in Scenario 1, you will still use Linear Space in the call stack, and that counts.*\n\n    Stacks and Queues aren’t really “data structures” by the strict definition of the term. The more appropriate terminology would be to call them abstract data types (ADTs), meaning that their definitions are more conceptual and related to the rules governing their user-facing behaviors rather than their core implementations.\n\n    For the sake of simplicity, we’ll refer to them as data structures and ADTs interchangeably throughout the course, but the distinction is an important one to be familiar with as you level up as an engineer.\n\n    Now that that’s out of the way, Stacks and Queues represent a linear collection of nodes or values. In this way, they are quite similar to the Linked List data structure we discussed in the previous section. In fact, you can even use a modified version of a Linked List to implement each of them. (Hint, hint.)\n\n    These two ADTs are similar to each other as well, but each obey their own special rule regarding the order with which Nodes can be added and removed from the structure.\n\n    Since we’ve covered Linked Lists in great length, these two data structures will be quick and easy. Let’s break them down individually in the next couple of sections.\n\n    Stacks are a Last In First Out (LIFO) data structure. The last Node added to a stack is always the first Node to be removed, and as a result, the first Node added is always the last Node removed.\n\n    The name Stack actually comes from this characteristic, as it is helpful to visualize the data structure as a vertical stack of items. Personally, I like to think of a Stack as a stack of plates, or a stack of sheets of paper. This seems to make them more approachable, because the analogy relates to something in our everyday lives.\n\n    If you can imagine adding items to, or removing items from, a Stack of…literally anything…you’ll realize that every (sane) person naturally obeys the LIFO rule.\n\n    We add things to the\_*top*\_of a stack. We remove things from the\_*top*\_of a stack. We never add things to, or remove things from, the\_*bottom*\_of the stack. That’s just crazy.\n\n    Note: We can use JavaScript Arrays to implement a basic stack.\_Array#push\_adds to the top of the stack and\_Array#pop\_will remove from the top of the stack. In the exercise that follows, we’ll build our own Stack class from scratch (without using any arrays). In an interview setting, your evaluator may be okay with you using an array as a stack.\n\n    Queues are a First In First Out (FIFO) data structure. The first Node added to the queue is always the first Node to be removed.\n\n    The name Queue comes from this characteristic, as it is helpful to visualize this data structure as a horizontal line of items with a beginning and an end. Personally, I like to think of a Queue as the line one waits on for an amusement park, at a grocery store checkout, or to see the teller at a bank.\n\n    If you can imagine a queue of humans waiting…again, for literally anything…you’ll realize that\_*most*\_people (the civil ones) naturally obey the FIFO rule.\n\n    People add themselves to the\_*back*\_of a queue, wait their turn in line, and make their way toward the\_*front*. People exit from the\_*front*\_of a queue, but only when they have made their way to being first in line.\n\n    We never add ourselves to the front of a queue (unless there is no one else in line), otherwise we would be “cutting” the line, and other humans don’t seem to appreciate that.\n\n    Note: We can use JavaScript Arrays to implement a basic queue.\_Array#push\_adds to the back (enqueue) and\_Array#shift\_will remove from the front (dequeue). In the exercise that follows, we’ll build our own Queue class from scratch (without using any arrays). In an interview setting, your evaluator may be okay with you using an array as a queue.\n\n    Stacks and Queues are so similar in composition that we can discuss their properties together. They track the following three properties:\n\n    **Stack Properties | Queue Properties:**\n\n    Notice that rather than having a\_head\_and a\_tail\_like Linked Lists, Stacks have a\_top, and Queues have a\_front\_and a\_back\_instead. Stacks don’t have the equivalent of a\_tail\_because you only ever push or pop things off the top of Stacks. These properties are essentially the same; pointers to the end points of the respective List ADT where important actions way take place. The differences in naming conventions are strictly for human comprehension.\n\n    Similarly to Linked Lists, the values stored inside a Stack or a Queue are actually contained within Stack Node and Queue Node instances. Stack, Queue, and Singly Linked List Nodes are all identical, but just as a reminder and for the sake of completion, these List Nodes track the following two properties:\n\n    Before we begin our analysis, here is a quick summary of the Time and Space constraints of each Stack Operation.\n\n    Data Structure Operation Time Complexity (Avg)Time Complexity (Worst)Space Complexity (Worst)AccessΘ(n)O(n)O(n)SearchΘ(n)O(n)O(n)InsertionΘ(1)O(1)O(n)DeletionΘ(1)O(1)O(n)\n\n    Before moving forward, see if you can reason to yourself why each operation has the time and space complexity listed above!\n\n    When the Stack ADT was first conceived, its inventor definitely did not prioritize searching and accessing individual Nodes or values in the list. The same idea applies for the Queue ADT. There are certainly better data structures for speedy search and lookup, and if these operations are a priority for your use case, it would be best to choose something else!\n\n    Search and Access are both linear time operations for Stacks and Queues, and that shouldn’t be too unclear. Both ADTs are nearly identical to Linked Lists in this way. The only way to find a Node somewhere in the middle of a Stack or a Queue, is to start at the\_top\_(or the\_back) and traverse downward (or forward) toward the\_bottom\_(or\_front) one node at a time via each Node’s\_next\_property.\n\n    This is a linear time operation, O(n).\n\n    For Stacks and Queues, insertion and deletion is what it’s all about. If there is one feature a Stack absolutely must have, it’s constant time insertion and removal to and from the\_top\_of the Stack (FIFO). The same applies for Queues, but with insertion occurring at the\_back\_and removal occurring at the\_front\_(LIFO).\n\n    Think about it. When you add a plate to the top of a stack of plates, do you have to iterate through all of the other plates first to do so? Of course not. You simply add your plate to the top of the stack, and that’s that. The concept is the same for removal.\n\n    Therefore, Stacks and Queues have constant time Insertion and Deletion via their\_push\_and\_pop\_or\_enqueue\_and\_dequeue\_methods, O(1).\n\n    The space complexity of Stacks and Queues is very simple. Whether we are instantiating a new instance of a Stack or Queue to store a set of data, or we are using a Stack or Queue as part of a strategy to solve some problem, Stacks and Queues always store one Node for each value they receive as input.\n\n    For this reason, we always consider Stacks and Queues to have a linear space complexity, O(n).\n\n    At this point, we’ve done a lot of work understanding the ins and outs of Stacks and Queues, but we still haven’t really discussed what we can use them for. The answer is actually…a lot!\n\n    For one, Stacks and Queues can be used as intermediate data structures while implementing some of the more complicated data structures and methods we’ll see in some of our upcoming sections.\n\n    For example, the implementation of the breadth-first Tree traversal algorithm takes advantage of a Queue instance, and the depth-first Graph traversal algorithm exploits the benefits of a Stack instance.\n\n    Additionally, Stacks and Queues serve as the essential underlying data structures to a wide variety of applications you use all the time. Just to name a few:\n\n    *   The Call Stack is a Stack data structure, and is used to manage the order of function invocations in your code.\n\n    *   Browser History is often implemented using a Stack, with one great example being the browser history object in the very popular React Router module.\n\n    *   Undo/Redo functionality in just about any application. For example:\n\n    *   When you’re coding in your text editor, each of the actions you take on your keyboard are recorded by\_pushing that event to a Stack.\n\n    *   When you hit \\[cmd + z] to undo your most recent action, that event is\_poped off the Stack, because the last event that occured should be the first one to be undone (LIFO).\n\n    *   When you hit \\[cmd + y] to redo your most recent action, that event is\_pushed back onto the Stack.\n\n    <!---->\n\n    *   Printers use a Queue to manage incoming jobs to ensure that documents are printed in the order they are received.\n\n    *   Chat rooms, online video games, and customer service phone lines use a Queue to ensure that patrons are served in the order they arrive.\n\n    *   In the case of a Chat Room, to be admitted to a size-limited room.\n\n    *   In the case of an Online Multi-Player Game, players wait in a lobby until there is enough space and it is their turn to be admitted to a game.\n\n    *   In the case of a Customer Service Phone Line…you get the point.\n\n    *   As a more advanced use case, Queues are often used as components or services in the system design of a service-oriented architecture. A very popular and easy to use example of this is Amazon’s Simple Queue Service (SQS), which is a part of their Amazon Web Services (AWS) offering.\n\n    *   You would add this service to your system between two other services, one that is sending information for processing, and one that is receiving information to be processed, when the volume of incoming requests is high and the integrity of the order with which those requests are processed must be maintained.\n\n    **If you found this guide helpful feel free to checkout my other articles:**\n\n    **Further resources:**\n\n    **Here’s a live code editor where you can mess with any of the examples:**\n"
    actions:
      - label: Get Started
        url: /docs/getting-started/installation
        style: primary
  - section_id: features-two-col
    type: section_grid
    title: Sample Layouts
    subtitle: An optional subtitle of the section
    col_number: two
    grid_items:
      - title: Overview
        content: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
          ligula, cursus id molestie vel, maximus aliquet risus. Vivamus in nibh
          fringilla, fringilla tortor at, pulvinar orci.
        actions:
          - label: Learn More
            url: /overview
            style: link
      - title: Showcase
        content: >-
          Donec lobortis velit sed suscipit lobortis. Ut non quam metus. Nullam
          a maximus mi. Quisque justo nunc, sollicitudin euismod euismod at,
          tincidunt ut tellus. Vivamus rhoncus mattis varius.
        actions:
          - label: Learn More
            url: /showcase
            style: link
  - section_id: cta
    type: section_cta
    title: Contact Me!
    subtitle: This is an optional description for the call to action block.
    actions:
      - label: Get Started
        url: /docs/getting-started/installation
        style: primary
      - label: lorem-ipsum
        url: '#'
        style: link
        icon_class: dev
        new_window: false
        no_follow: false
        type: action
  - title: lorem-ipsum
    section_id: lorem-ipsum
    image_alt: lorem-ipsum
    image_position: left
    content: >-
      ## Lorem ipsum


      Lorem ipsum dolor sit amet, **consectetur adipiscing elit**, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.


      - Lorem ipsum

      - dolor sit amet
    actions: []
    type: section_content
  - title: lorem-ipsum
    section_id: lorem-ipsum
    subtitle: lorem-ipsum
    col_number: three
    type: section_docs
seo:
  title: Stackbit Libris Theme
  description: The preview of the Libris theme
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Stackbit Libris Theme
      keyName: property
    - name: 'og:description'
      value: The preview of the Libris theme
      keyName: property
    - name: 'og:image'
      value: images/4.jpg
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Stackbit Libris Theme
    - name: 'twitter:description'
      value: The preview of the Libris theme
    - name: 'twitter:image'
      value: images/4.jpg
      relativeUrl: true
template: advanced
---
