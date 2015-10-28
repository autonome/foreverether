require('sdk/tabs').on('ready', function(tab) {
  if (tab.url.indexOf('public.etherpad-mozilla.org/') > -1) {
    var { Bookmark, save } = require("sdk/places/bookmarks")
    save(Bookmark({ title: tab.title, url: tab.url }))
  }
})
