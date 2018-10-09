# App does all the data getting




# App gets its data & MyEvents gets its data

## App - load
- Constructor - start
  - *( cookie found )*
- Constructor - end
- App - mount
  - App - update
    - *( userId available )*
  - App - update
    - *( events retreived )*
- App - un-mount

## navigate / to /my-events
- MyEvents - mount
  - App - update
    - *( api.events.forUserRead )*
- MyEvents - un-mount

## navigate /my-events to /
- App - update
  - *( api.events.read )*

## /my-events: refresh page
- Constructor - start
  - *( cookie found )*
- Constructor - end
- MyEvents - mount
  - App - mount
    - App - update
      - *( userId available )*
    - App - update
  - MyEvents - un-mount
- App - un-mount

