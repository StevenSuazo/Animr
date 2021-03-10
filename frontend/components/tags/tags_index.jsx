import React from 'react';
import TagFormContainer from './tag_form_container';
import TagsIndexItemContainer from './tags_index_item_container';

class TagsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTagForm = this.toggleTagForm.bind(this);
    }

    componentDidMount() {
        this.props.getTags();
    }

    toggleTagForm() {
        document.getElementById("tag-form").classList.remove("hidden");
    }

    render() {
        const { tags, currentUser, photoId, photoOwnerId } = this.props;

        const photoTags = tags.filter(tag => {
            return parseInt(tag.photo_id) == photoId;
        });

        let addTags;

        let tagForm;

        if (currentUser.id == photoOwnerId) {
            addTags = (
                <button
                    className="toggle-tag-form"
                    onClick={this.toggleTagForm}
                    type="button"
                >
                    Add tags
                </button>
            )
            tagForm = <TagFormContainer photoId={photoId}/>;
        } else {
            addTags = null;
            tagForm = null;
        }
        
        return (
            <div className="tags-container">
                <div className="tags-controls">
                    <p>Tags</p>
                    {addTags}
                </div>
                {tagForm}
                {photoTags.map(tag => {
                    return (
                        <TagsIndexItemContainer key={tag.id} tag={tag} photoOwnerId={photoOwnerId} />
                    )
                })}
            </div>
        )
    }
}

export default TagsIndex;