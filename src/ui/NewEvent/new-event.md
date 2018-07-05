## redux fields (8)
```js
{
  _id: String,
  endDateTime: Date,
  imageUrl: String,
  price: Number,
  startDateTime: Date,
  tags ['tag', 'tag'],
  title: String,
  venu: String,
}
```
**missing**
- category
- linkToUrl
- organization
- free

## NewEvent (UI - form)
```js
{
  category: String,
  endDateTime: Date,
  free: Boolean,
  imageUrl: String,
  linkToUrl: String,
  organization: String,
  price: Number,
  startDateTime: Date,
  title: String,
  tags: [String, String, String]
  venu: String,
}
```
**missing**
- NONE
**rules**
- if free -> no price field
- tags[].length <= 3


## onSubmit values (10)
```js
{
  'category': String,
  'combinedDateTime': {
    'startDate': Date,
    'endDate': Date,
  },
  'linkToUrl': String,
  'organization': String,
  'price': Number,
  'tag01': String,
  'tag02': String,
  'tag03': String
  'title': String
  'venue': String,
}
```
**missing?**
- endDateTime (shape)
- free
- imageUrl: String,
- startDateTime (shape)
- tags (shape)

mongodDG
```js
{
  '_id': String,
  'category': String,
  'endDateTime': Date,
  'imageUrl': String,
  'linkToUrl': String,
  'organization': String,
  'price': Number,
  'startDateTime': Date,
  'tags':[String, String , String],
  'title': String,
  'venue': String,
```
