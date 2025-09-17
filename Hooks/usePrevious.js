/*
    usePrevious

    - remember the previous value
*/

const usePrevious = (value) => {
  const ref = React.useRef();

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

/*
🔵 First render
-----------------------------------
value = 10
ref.current = undefined   (initial)
return ref.current → undefined
(UI shows current=10, prev=undefined)

   ⬇️ after paint
   useEffect runs → ref.current = 10


🔵 Second render
-----------------------------------
value = 20
ref.current = 10          (from last effect)
return ref.current → 10
(UI shows current=20, prev=10)

   ⬇️ after paint
   useEffect runs → ref.current = 20


🔵 Third render
-----------------------------------
value = 30
ref.current = 20
return ref.current → 20
(UI shows current=30, prev=20)

   ⬇️ after paint
   useEffect runs → ref.current = 30


*/

/*
MOUNT
-----------------------------------------------------
1. Render phase: component runs
2. Commit: UI painted on screen
3. Effect: useEffect runs (setup code here)

UPDATE
-----------------------------------------------------
1. Render phase: component runs again
2. Commit: UI updated
3. Cleanup: old effect cleanup runs (if deps changed)
4. Effect: new useEffect runs

UNMOUNT
-----------------------------------------------------
1. Cleanup: all effect cleanups run
2. Component disappears

*/
