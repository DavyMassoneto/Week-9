db.createUser(
  {
    user: "omnistack",
    pwd: "omnistack",
    roles: [
      { role: 'readWrite', db: 'week-9' }
    ]
  })
