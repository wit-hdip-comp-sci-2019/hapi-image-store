'use strict';

const Gallery = {
  index: {
    handler: async function(request, h) {
      try {
        return h.view('gallery', {
          title: 'Cloudinary Gallery'
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};

module.exports = Gallery;

