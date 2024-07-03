function youtubeExtension() {
    return [
      {
        type: 'lang',
        regex: /{% youtube (.+?) %}/g,
        replace: function (match, url) {
          const videoId = url.split('v=')[1] || url.split('/').pop();
          return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
        },
      },
    ];
  }
  
  export  {youtubeExtension};
  