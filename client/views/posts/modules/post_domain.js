Template[getTemplate('postDomain')].helpers({
  domain: function(){
    var a = document.createElement('a');
    a.href = this.asxcode;
//    a.href = this.url;
    return a.hostname;
  }
});