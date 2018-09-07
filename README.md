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


# Contributing
We would love to have contributers. At this point, early September 2018, we are a few weeks from out first beta release. We are working on styling, tweaking UI and mopping up bugs.

We like helping people learn so you know JS & CSS let's chat.

What do we need right now?

- We aren't designers. If you are a designer who also writes CSS and wants to learn to style a React app, we are happy to teach you in exchange for your making our app look good.

- Our server-side test coverage is good but our client-side coverage has fallen behind. If you would like a place to learn and/or practice writing test please let us know.

- Help implementing design (i.e., css and JSX as needed)

- Bug fixing

- Work on future features. For example
  - auto-complete for tags
  - input masks
  - making registration, login & account components more inviting (they are just edit boxes on page at the moment - so plain)
  - Social media integration

Contact us by opening an issue marked as 'question'

# Who are we?

A group of people who love making software and sharing our knowledge with others.

[TriValley Coders](http://trivalleycoders.org)

[on Meetup](https://www.meetup.com/trivalleycoders/)
