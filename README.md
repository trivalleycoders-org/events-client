# Events Client & Server
__This readme is for both the client and server__

For now, the focus is to list Drone Events, but could be forked and used for any type of event.

Events are created in this app and linked to the ticketing and/or registration site such as EventBrite or Meetup. You could use this app to add events to your website.

The app uses material-ui (which is Material Design) with a full theme file so it can easily be modified in terms of colors, fonts, etc.

## Purpose of the app
Events is a technical demo to demonstrate how we create a MERN stack app. In a few weeks there will be a technical presentation explaining the architecture of the app.

## Client
- This repository

## Server
- https://github.com/trivalleycoders-org/events-server

## Use
We don't have full instructions on loading test/dev data yet. However, the collections are available if you know how to load data into MongoDB. If you want to try the app open an issue marked 'question' and we will will be happy to help. Other than that:

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

# Than you to our sponsors!

<div style="display: flex; justify-content: space-around">

<div  style="text-align: center">

[<img src="https://s3-us-west-2.amazonaws.com/trivalleycoders-images/DO_Logo_Horizontal_Blue.png" width="300">](https://www.digitalocean.com/)

<p>Provides hosting</p>

</div>

<div  style="text-align: center">

[<img src="https://s3-us-west-2.amazonaws.com/trivalleycoders-images/briia-logo.png" width="100">](https://briia.io/)

<p>Provides Meeting Space</p>

</div>

</div>

## License
This project is licensed under the terms of the
[MIT license](/LICENSE).
