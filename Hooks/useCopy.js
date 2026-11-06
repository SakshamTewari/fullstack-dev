/*
    useCopy

    - copies the given text to clipboard
    - returns a method copy(text) to copy text and copied text.
*/

const useCopy = () => {
  const [copiedText, setCopiedText] = React.useState();

  const copy = async (text) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
    } catch (error) {
      console.error(`Failed copying the text ${text}, error`);
      setCopiedText(null);
    }
  };

  return [copiedText, copy];
};
