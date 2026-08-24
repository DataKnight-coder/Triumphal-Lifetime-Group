const fs = require('fs');
const path = require('path');
const yauzl = require('yauzl'); // wait, yauzl might not be installed.

// Let's just use AdmZip if it's installed, or just basic fs if we can
