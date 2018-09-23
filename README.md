# Events Client & Server

Events is a technical demo to demonstrate how we create MERN stack apps.

Events is a generic events application and can be used for any type of event. Our demo is using Drone Events. However, there is nothing at the core of the app that restricts it to drone events other than styling of the home page. Events could easily be used for other types of events.

## How it works

Users must regester before they can post an event.

Events created in this app and linked to a ticketing and/or registration site such as EventBrite or Meetup.

All current events posted by registered users are shown.

Images for Events are the same size as images for Facebook, Meetup & EventBrite allowing user to use the same image they created for these sites.

## Tech Stack
**Client:** React, Redux, Redux Form, Redux Thunk, Material UI, date-fns, Ramda

**Server:** Express, AWS SDK, JSON Web Tokens, Passport

**File storage:** Amazon S3

**Database:** MongoDB on Atlas

**Hosting - client & server:** DigitalOcean

## Purpose of the app
- Show how we build full-stack web apps.
- Open source project that TriValley Coders members can contribute to and get mentoring.


# Use

## Client
- This repository

## Server
- https://github.com/trivalleycoders-org/events-server

Full instructions on loading data will be available soon. In the meantime, the collections are available if you know how to load data into MongoDB. If you want to try the app open an issue marked 'question' and we will will be happy to help. Other than that:

- Install MongoDB locally and run on the default port
- The data collections are here: https://github.com/trivalleycoders-org/event-doc-and-admin/tree/master/data-collections

- Clone the repositories
```

$ git clone https://github.com/trivalleycoders-org/events-server

$ git clone https://github.com/trivalleycoders-org/events-client

```

- Start the server. It will run on port 3030

```
$ cd /events-server
$ yarn install
$ yarn start
```

- Start the client. It currently tries to get port 3000

```
$ cd /events-client
$ yarn install
$ yarn start
```

# Roadmap
At this point, early September 2018, we are a few weeks from out first beta release.
There is no official roadmap yet but you can browse our backlog and icebox issues to see what we are thinking about.
Beta
- Demo/beta app live: Sep 26, 2018
- Final design from designer: Sep 25, 2018
- Implementing the design: Sep 25 - Oct 10, 2018
- Code freeze for beta Oct 10, 2018


# Contributing

We would love to have contributers. At this point, early September 2018, we are a few weeks from out first beta release. We are implementing a new design and mopping up bugs.

We enjoy helping contributors. If you know JS, CSS & some amount of React, Express or MongoDB contact by opening an issue marked Question.

What do we need right now?

- Implementing our new design using Material UI

- Writing tests: Our server-side test coverage is good but needs some updates. Our client-side coverage is not where it should be. There are lots of test to write. If you would like a place to learn and/or practice writing test please let us know.

- Help implementing design (i.e., CSS and JSX as needed)

- Bug fixing

- Work on future features. For example
  - auto-complete for tags
  - input masks
  - making registration, login & account components more inviting (they are just edit boxes on page at the moment - so plain)
  - Social media integration

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





