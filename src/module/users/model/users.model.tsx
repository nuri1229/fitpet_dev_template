type Name = {
  title: string,
  first: string,
  last: string
}

type Picture = {
  large: string,
  medium: string,
  thumbnail: string
}

export type User = {
  gender: string,
  name: Name,
  picture: Picture
}


// {
//   "gender": "female",
//   "name": {
//     "title": "Ms",
//     "first": "Ellen",
//     "last": "Freeman"
//   },
//   "location": {
//     "street": {
//       "number": 5440,
//       "name": "Queen Street"
//     },
//     "city": "Canterbury",
//     "state": "Staffordshire",
//     "country": "United Kingdom",
//     "postcode": "MH03 2XZ",
//     "coordinates": {
//       "latitude": "8.4279",
//       "longitude": "20.7270"
//     },
//     "timezone": {
//       "offset": "-7:00",
//       "description": "Mountain Time (US & Canada)"
//     }
//   },
//   "email": "ellen.freeman@example.com",
//   "login": {
//     "uuid": "54a2892d-7af8-49c4-9f5f-a7351046cf1b",
//     "username": "yellowmouse494",
//     "password": "fantasies",
//     "salt": "N7ILWqY9",
//     "md5": "8ce7d0cefa9ea7d2a2a083a00f0565ff",
//     "sha1": "d11e890e6afe5352333bf046007495c1942616f0",
//     "sha256": "5c655424763c1b9743165656646eca86a15391920e3b364cea9e33aa699becd6"
//   },
//   "dob": {
//     "date": "1956-10-01T19:33:03.809Z",
//     "age": 64
//   },
//   "registered": {
//     "date": "2008-01-24T17:39:37.801Z",
//     "age": 12
//   },
//   "phone": "013873 15394",
//   "cell": "0758-118-733",
//   "id": {
//     "name": "NINO",
//     "value": "CM 21 52 42 R"
//   },
//   "picture": {
//     "large": "https://randomuser.me/api/portraits/women/9.jpg",
//     "medium": "https://randomuser.me/api/portraits/med/women/9.jpg",
//     "thumbnail": "https://randomuser.me/api/portraits/thumb/women/9.jpg"
//   },
//   "nat": "GB"
// },