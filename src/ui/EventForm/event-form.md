## shape needed by form to init
```js
const initData = {
  category: 'Octocopter',
  combinedDateTime: {
    startDate: new Date(), // needs nesting
    endDate: new Date(), // needs nesting
  },
  free: true,
  imageUrl: 'https://s3-us-west-2.amazonaws.com/photo-app-tvc/briia.jpg',
  linkToUrl: 'link-to-url',
  organization: 'some org',
  price: 25, // absent if free=true
  tag01: 't1', // un-nest
  tag02: 't2', // un-nest
  tag03: 't3', // un-nest
  title: 'Event Title',
  venue: 'A place near me',
}
```

# shape in mongoDb
```js
{
  "category": "Video",
  "endDateTime": "2018-06-12T17:00:00.000Z",
  "imageUrl": "to do: imageUrl",
  "linkToUrl": "http://briia.io",
  "organization": "BRIIA",
  "price": 75,
  "startDateTime": "2018-06-12T16:00:00.000Z",
  "title": "BRIIA Investor Demo Day",
  "tags": [
    "Business",
    "Appearance"
  ],
  "venue": "Dublin Concert Hall",
}
```

## onSubmit values
```js
{
  "_id": "5b2a811bbdd1db1ef104f70a",
  "category": "Racing"
  "combinedDateTime": {
    "startDate": "2018-06-13T02:00:00.000Z",
    "endDate": "2018-06-13T03:00:00.000Z"
  },
  "free": true,
  "imageUrl": "https://s3-us-west-2.amazonaws.com/photo-app-tvc/reunion.png",
  "linkToUrl": "some-url-bla",
  "organization": "Holistic Snake Oil",
  "tag01": "Health",
  "tag02": "Women",
  "title": "A Holistic Approach to Hormonal Imbalances",
  "venue": "Dublin Concert Hall",
}
```
