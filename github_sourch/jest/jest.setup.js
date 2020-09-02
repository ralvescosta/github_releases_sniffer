import 'jsdom-global/register';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/**
 * Cleanup Enzyme Warnings because the enzyme tries to use the react dom for web
 */
const originalConsoleError = console.error;
console.error = (message) => {
  if (message.startsWith('Warning:')) {
    return;
  }
  originalConsoleError(message);
};
/** */

Enzyme.configure({adapter: new Adapter()});
