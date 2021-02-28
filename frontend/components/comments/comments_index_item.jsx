import React from 'react';
import { Link } from 'react-router-dom';
import { CgTrash } from 'react-icons/cg';
import { BiEdit } from 'react-icons/bi';

class CommentsIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.deleteComment(this.props.comment.id);
    }

    render() {
        const { comment, users, currentUser, photoOwnerId } = this.props;
    
        let deleteComment;
        let editComment;

        if (currentUser.id === comment.user_id || currentUser.id == photoOwnerId) {
            deleteComment = (
                <button
                    className="comment-delete-button"
                    onClick={this.handleDelete}
                    type="button"
                >
                    <CgTrash />
                </button>
            )
            editComment = (
                <button
                    className="comment-edit-button"
                    onClick={this.handleEdit}
                    type="button"
                >
                    <BiEdit />
                </button>
            )
        } else {
            deleteComment = null;
            editComment = null;
        }
        debugger
        return (
            <div className="comment">
                <div className="comment-content">
                    <Link to={`/photos/${comment.user_id}`} className="comment-user">{users[comment.user_id].username}</Link>
                    <p className="comment-body">{comment.body}</p>
                </div>
                <div className="comment-actions">
                    {/* {editComment} */}
                    {deleteComment}
                </div>
            </div>
        )
    }
}

export default CommentsIndexItem;