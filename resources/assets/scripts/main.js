// import external dependencies
import 'jquery';

// Import everything from autoload
import './autoload/**/*';

// import local dependencies
import * as aos from './bundle/functions/aos';

// Load Events
$(() => {
  aos.init();
});
