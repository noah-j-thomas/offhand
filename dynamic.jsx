
/*
1. The Data - 
    we need the blocks themselves, what blocks exist and the contents of each block

    usually an array of objects

    example:

    blocks = [
        { id: "weather", title: "Weather" },
        { id: "notes", title: "Notes" }
        { id: "clock", title: "Clock" }
    ]

2. Layout State -
which block is in which slot?

    example:

    layout = [
        { slotId: "slot-1", itemId: "notes"},
        { slotId: "slot-2", itemId: "weather"},
        { slotId: "slot-3", itemId: "clock"}      
    ]




3. Rendered Layout
combination of the data and the layout

4. The Drag System
the part that detects dragging, swapping, and reports layout changes

5. Lifecycle Control
manages the timing of when swapy exists, updating layout when swaps happen, and updating swapy when blocks change
*/


/*
Step 1. 
React state holds block data

Step 2. 
React state holds slot mapping

Step 3.
React uses both to build screen

Step 4.
User drags block, swapy detects movement

Step 5. 
Swapy reports new layout

Step 6.
React updates layout state

Step 7.
React redraws UI
*/