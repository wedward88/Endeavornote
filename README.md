# README

Welcome to Endeavornote!

Endeavornote is a clone of the note taking application Evernote (https://evernote.com/). It is used
to take notes in Rich Text Format, and organize them into notebooks.

Please visit the live site at https://endeavornote.herokuapp.com/#/.

Endeavornote was built using the following technologies:
    + Ruby 2.5.1
    + Rails 5.2.3
    + React 16.8.6
    + Redux 4.0.1
    + Javascript
    + Webpack 4.32.2
    + Babel 7.4.5
    + React-Quill 1.3.3

One of the more difficult challenges I faced while building this application was generally managing the
flow of data, and making sure that the necessary data was available during any given scenario. For
example, in the below code snippet, I utilized Promise.prototype.then() to ensure that both Notebooks
and Note were retrieved before updating the state of a particular component.

```
componentDidMount() {
        this.props.retrieveNotebooks(this.props.user).then(
            this.props.retrieveNotes(this.props.user).then(
                this.setState({ mounted: true })
            ));   
    }
```

Before implementing the code above, the state would be updated before each AJAX request has time to process.

