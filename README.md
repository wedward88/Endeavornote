# Welcome to Endeavornote!

Endeavornote is a clone of the note taking application [Evernote](http://evernote.com/). It is used
to take notes in Rich Text Format, and organize them into notebooks.

Please visit Endeavornote's live site [HERE](https://endeavornote.herokuapp.com/#/).

----

#### Endeavornote was built using the following technologies: ####

* Ruby 2.5.1
* Rails 5.2.3
* React 16.8.6
* Redux 4.0.1
* Javascript
* Webpack 4.32.2
* Babel 7.4.5
* React-Quill 1.3.3


----

![Imgur](https://i.imgur.com/rYCcQVl.png)
![Imgur](https://i.imgur.com/01AirfZ.png)

----
#### Challenges ####

One of the more difficult challenges I faced while building this application was generally managing the
flow of data, and making sure that the necessary data was available during any given scenario. For
example, in the below code snippet, I utilized Promise.prototype.then() to ensure that both Notebooks
and Notes were retrieved before updating the state of a particular component.

```
componentDidMount() {
        this.props.retrieveNotebooks(this.props.user).then(
            this.props.retrieveNotes(this.props.user).then(
                this.setState({ mounted: true })
            ));   
    }
```
Before implementing the code above, the state would be updated before each AJAX request has time to process.

Additionally, learning to utilize a React component's state was really fun! The below code snippet shows how I used the component's state to keep track of modals, row open/collapse, form types, etc. :

```
class NotebookIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            mounted: false, 
            modalOpen: false, 
            active: 0,
            rowOpen: 0, 
            formType: "newNotebook", 
            currentNotebook: null 
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.removeClass = this.removeClass.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.toggleRow = this.toggleRow.bind(this);
    }
}
```

----
#### Future Features ####

* Tags
  * allow users to categorize their notes into 'tag' categories
* Searching
  * allow users to search their notes, notebooks, and tags
* Support for images
  * allow for images within notes
* Additional editor styles
