# Events Client & Server

Events is a technical demo to demonstrate how we create MERN stack apps.

Events is a generic events application and can be used for any type of event. Our demo is using Drone Events. However, there is nothing at the core of the app that restricts it to drone events other than styling of the home page. Events could easily be used for any type of events.

## Purpose of the app
- Show how we build full-stack/MERN web apps.
- Open source project that TriValley Coders members can contribute to and get mentoring.

## How the app works

Users must register before they can post an event.

Events created in this app are linked to a ticketing and/or registration site such as EventBrite or Meetup.

All current events posted by registered users are shown.

Images for Events are the same size as images for Facebook, Meetup & EventBrite, allowing user to use the same image they created for these sites.

## Tech Stack
**Client:** React, Redux, Redux Form, Redux Thunk, Material UI, date-fns, Ramda

**Server:** Express, AWS SDK, JSON Web Tokens, Passport

**File storage:** Amazon S3

**Database:** MongoDB on Atlas

**Hosting - client & server:** DigitalOcean

# Local Dev Machine Setup
MongoDB, MongoDB Compass, Yarn, Chrome &/or Firefox Developer Edition

**Install MongoDB**
- Install MongoDB locally. MongoDB's installation instructions are excellent
  - [Linux](https://docs.mongodb.com/manual/administration/install-enterprise-linux/)
  - [MacOS](https://docs.mongodb.com/manual/tutorial/install-mongodb-enterprise-on-os-x/)  
  - [Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-enterprise-on-windows/)

**Install MongoDB Compass**
- Install [MongoDB Compass](https://docs.mongodb.com/compass/master/install/)

**Install Yarn**
Using npm on a project maintained with Yarn causes versioning conflicts. 
- [Install Yarn](https://yarnpkg.com/en/docs/install#windows-stable)

**Browser Extensions**
- React Developer Tools
- Redux DevTools
- JSON Lite (optional)

# Use

If you would like to contribute, open an issue labeled 'question' and we will help you get started.

**Clone the Repositories**

Client - https://github.com/trivalleycoders-org/events-client (this repository)

Server - https://github.com/trivalleycoders-org/events-server

Documentation and data collections: https://github.com/trivalleycoders-org/event-doc-and-admin


**Dev Database Setup**
The data collections are here: [data collections](https://github.com/trivalleycoders-org/event-doc-and-admin/tree/master/data-collections)

> For detailed instructions on loading the data using Compass see [Loading Dev Data](https://github.com/trivalleycoders-org/event-doc-and-admin/blob/master/doc/loading-dev-data/loading-dev-data.md).

Using MongoDB Compass
- Create a database named 'EventsDev' with the initial collection named 'events'
- Create 2 more collections: 'postalCodes' and 'users'

**Import Dev Data**
Use Compass to import the [data collections](https://github.com/trivalleycoders-org/event-doc-and-admin/tree/master/data-collections):

|Collection Name|File to Import        
|---------------|----------------------
|events         |events-collection.json
|postalCodes    |postalCodes.json      
|users          |users.json   

If you have problems importing Postal Codes, use the following command from the command line(not mongo shell) to import (Make sure directory where MongoDb is installed is in the Path).

```
mongoimport --db EventsDev --collection postalCodes --file postalCodes.json
```

**Start-up the App**

- Start the server. It will run on port 3030

```
$ cd /events-server
$ yarn install
$ yarn start
```

- Start the client. It currently tries to get port 3000 but will grab the next available port if needed.

```
$ cd /events-client
$ yarn install
$ yarn start
```

# Roadmap

- Demo/beta app live: Sep 26, 2018
- Final design from designer: Sep 25, 2018
- Implementing the design: Sep 25 - Oct 10, 2018
- Code freeze for beta Oct 10, 2018


# Contributing

You would want to contribute to this project because
- You want to learn something and you can get __free mentoring__ from us
- You want to create an events site of our own

We enjoy helping contributors. If you know JS, CSS & some amount of React, Express or MongoDB contact us by opening an issue marked 'question' and we will help you get started.

If you want to contribute as a learning experience, here are some things you can do


**More or less easy** (from less hard to more hard)
- Create a color palette page: This is a React component that reads the Material UI color pallete and displays rectangles of colors with text. It will be used ot help visualize what colors are available for use in the UI
- Create the footer: This is static content. You would use Material UI and flexbox to arrange static content (images, text, links) in the footer according to the design spec.
- Style one or more of these components according to the design spec
  - Login
  - Registration
  - ChangePassword
- Header: The Header is mostly static content but contains the Search component that interacts with other components. It is currently working but needs styling

**Writing tests**
- Write server-side tests: We have a good set of server-side test but they need updating
- Write client-side tests: We have a few that solve some of the hardest problems but test coverage on the client is low

**Bug fixing**
- Fixing bugs in an existing code base is difficult but an excellent way to learn.

**Other**

Not feeling up to coding? There is lot's to do including, UI design improvements & Documentation creation.



# Who are we?

A group of people who love making software and sharing our knowledge with others.

[TriValley Coders](http://trivalleycoders.org)

[Free bi-weekly Meetup](https://www.meetup.com/trivalleycoders/)

# Thank you to our sponsors!

|[<img src="https://s3-us-west-2.amazonaws.com/trivalleycoders-images/briia-logo.png" width="100px;"/><br/><sub><b>Meeting Space</b></sub>](https://briia.io)<br/>|[<img src="https://s3-us-west-2.amazonaws.com/trivalleycoders-images/DO_Logo_Vertical_Blue.png" width="100px;"/><br/><sub><b>Hosting</b></sub>](https://www.digitalocean.com/)<br/>
| :---: | :---: |

## License
This project is licensed under the terms of the
[MIT license](/LICENSE).





