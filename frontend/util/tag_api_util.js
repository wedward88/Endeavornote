export const fetchTags = () => {
    return $.ajax({
        url: 'api/tags'
    });
}

export const fetchTaggings = () => {
    return $.ajax({
        url: 'api/taggings'
    })
}

export const editTag = (tag) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/tags/${tag.id}`,
        data: {
            tag
        }
    });
}

export const createTag = (tag) => {
    return $.ajax({
        method: 'POST',
        url: 'api/tags',
        data: {
            tag
        }
    });
}

export const deleteTag = (tag) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/tags/${tag.id}`,
        data: {
            tag
        }
    })
}