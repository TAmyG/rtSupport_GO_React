r.db('rtsupport').table('channel').changes({
  includeInitial: true
})
  
  
r.dbCreate('rtsupport')
  
  
r.db('rtsupport').tableCreate('message')