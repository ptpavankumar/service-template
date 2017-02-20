// const knex = require('../repositories/knex');


// router.post('/user', (req, res) => {
//   const validationInfo = inputSchema.validate(req.body);
//   if (validationInfo.errors) {
//     return res.status(400).send({ errors: validationInfo.errors });
//   }

//   return knex('user').insert({
//     name: req.body.name,
//     dateofbirth: req.body.dob,
//     gender: req.body.sex,
//     email: req.body.email,
//   }, 'id')
//   .then(userids => (
//     knex('address').insert({
//       number: req.body.address.number,
//       name: req.body.address.name,
//       suburb: req.body.address.suburb,
//       state: req.body.address.state,
//       country: req.body.address.country,
//     }, 'id')
//     .then(addressids => (
//       knex('user_address').insert({
//         user_id: userids[0],
//         address_id: addressids[0],
//       }, 'id'))
//     .then((useraddressids) => {
//       const finalResult = {
//         user_id: userids[0],
//         address_id: addressids[0],
//         user_address_id: useraddressids[0],
//       };
//       return res.status(201).send(`User ${JSON.stringify(finalResult)} is valid and saved succesfully!`);
//     })
//   )));
// });

// router.get('/user', (req, res) => {
//   knex.select().table('user')
//   .then((collections) => {
//     console.log(collections);
//     res.status(200).send(collections);
//   })
//   .catch(err => res.status(500).send(`Fetching users from database failed with ${err}`));
// });

// module.exports = router;
