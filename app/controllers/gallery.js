'use strict';

const ImageStore = require('../utils/image-store');

const Gallery = {
  index: {
    handler: async function(request, h) {
      try {
        const allImages = await ImageStore.getAllImages();
        return h.view('gallery', {
          title: 'Cloudinary Gallery',
          images: allImages
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};

module.exports = Gallery;
