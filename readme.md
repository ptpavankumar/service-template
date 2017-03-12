NOTES: 
1. This solution uses simple mount technique to play with express routes. For a comprehensive solution checkout https://github.com/ptpavankumar/service-template-with-db 

2. Never place any file that in migrations folder that should not be executed

// Database setup commands

// Setup initial migration folder with default db-upgrade script
```
knex migration:make initial --env development --knexfile src/dbcongif.js
```

// Apply the upgrade scripts into sqlite
```
knex migration:latest --env development --knexfile src/dbcongif.js
```
