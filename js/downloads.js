function downloadFile(resourcePath, fileName) {
    var link = document.createElement('a');
    link.href = resourcePath;
    link.download = fileName; 

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }