import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    posts: [],
    users: [],
    comments: [],
    post: {},
    authUser: {},
    commentsForPost: [],
    error: ''
}


export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async function(_, {rejectWithValue}) {
        try {
            console.log('1')
            const response = await fetch(`https://5158-213-87-139-47.ngrok-free.app/api/post/`);

            // const response = fetch(`https://5158-213-87-139-47.ngrok-free.app/api/post/`, {method: 'GET'})
            //     .then((res) => console.log('5', res.json()))

            console.log('2')
            if (!response.ok) {
                throw new Error("Ошибка HTTP: " + response.status);
            }
            console.log('3', response.json())
            const data = await response.json();
            console.log('123', data)
            return data;
        } catch (error) {
            console.log('456')
            return rejectWithValue(error.message);
        }
    }
);

export const fetchUsers = createAsyncThunk(
    'posts/fetchUsers',
    async function(_, {rejectWithValue}) {
        try {
            console.log('79')
            const response = await fetch('https://5158-213-87-139-47.ngrok-free.app/api/user/');
            console.log('29')
            if (!response.ok) {
                throw new Error("Ошибка HTTP: " + response.status);
            }
            console.log('39', response)
            const data = await response.json();
            console.log('789', data)

            return data;
        } catch (error) {
            console.log('89', error.message)
            return rejectWithValue(error.message);
        }
    }
);

export const fetchComments = createAsyncThunk(
    'posts/fetchComments',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch('https://5158-213-87-139-47.ngrok-free.app/api/review/');

            if (!response.ok) {
                throw new Error("Ошибка HTTP: " + response.status);
            }

            const data = await response.json();

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchPost = createAsyncThunk(
    'posts/fetchPost',
    async function(id, {rejectWithValue}) {
        try {
            const response = await fetch(`https://5158-213-87-139-47.ngrok-free.app/api/post/${String(id)}/`);

            if (!response.ok) {
                throw new Error("Ошибка HTTP: " + response.status);
            }

            const data = await response.json();

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchCommentsForPost = createAsyncThunk(
    'posts/fetchCommentsForPost',
    async function(id, {rejectWithValue}) {
        try {
            const response = await fetch(`https://5158-213-87-139-47.ngrok-free.app/api/review?post=${String(id)}`);

            if (!response.ok) {
                throw new Error("Ошибка HTTP: " + response.status);
            }

            const data = await response.json();

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const postPost = createAsyncThunk(
    'posts/postPost',
    async function([authorId, titleText, descriptText], {rejectWithValue}) {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: "include",
                body: JSON.stringify({ author: authorId.toString(), title: titleText.toString(), descript: descriptText.toString() })
            };

            const response1 = await fetch(`https://5158-213-87-139-47.ngrok-free.app/api/post/`, requestOptions);

            if (!response1.ok) {
                throw new Error("Ошибка HTTP POST: " + response1.status);
            }

            const response2 = await fetch(`https://5158-213-87-139-47.ngrok-free.app/drf/post/`);

            if (!response2.ok) {
                throw new Error("Ошибка HTTP GET: " + response2.status);
            }

            const data = await response2.json();

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const postComment = createAsyncThunk(
    'posts/postComment',
    async function([postId, authorId, commText], {rejectWithValue}) {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ post: postId.toString(), author: authorId.toString(), ref: null, comm: commText.toString() })
            };
            const response1 = await fetch(`https://5158-213-87-139-47.ngrok-free.app/api/review/`, requestOptions);

            if (!response1.ok) {
                throw new Error("Ошибка HTTP POST: " + response1.status);
            }

            const response2 = await fetch(`https://5158-213-87-139-47.ngrok-free.app/api/review?post=${String(postId)}`);

            if (!response2.ok) {
                throw new Error("Ошибка HTTP GET: " + response2.status);
            }

            const data = await response2.json();

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.loading = true;
            state.error = '';
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
            state.error = '';
        },
        [fetchPosts.rejected]: (state, action) => {
            state.loading = false;
            state.posts = [];
            state.error = action.payload;
        },

        [fetchUsers.pending]: (state) => {
            state.loading = true;
            state.error = '';
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = '';
        },
        [fetchUsers.rejected]: (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.payload;
        },

        [fetchComments.pending]: (state) => {
            state.loading = true;
            state.error = '';
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.loading = false;
            state.comments = action.payload;
            state.error = '';
        },
        [fetchComments.rejected]: (state, action) => {
            state.loading = false;
            state.comments = [];
            state.error = action.payload;
        },

        [fetchPost.pending]: (state) => {
            state.loading = true;
            state.error = '';
        },
        [fetchPost.fulfilled]: (state, action) => {
            state.loading = false;
            state.post = action.payload;
            state.error = '';
        },
        [fetchPost.rejected]: (state, action) => {
            state.loading = false;
            state.post = {};
            state.error = action.payload;
        },

        [fetchCommentsForPost.pending]: (state) => {
            state.loading = true;
            state.error = '';
        },
        [fetchCommentsForPost.fulfilled]: (state, action) => {
            state.loading = false;
            state.commentsForPost = action.payload;
            state.error = '';
        },
        [fetchCommentsForPost.rejected]: (state, action) => {
            state.loading = false;
            state.commentsForPost = [];
            state.error = action.payload;
        },

        [postPost.pending]: (state) => {
            state.loading = true;
            state.error = '';
        },
        [postPost.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
            state.error = '';
        },
        [postPost.rejected]: (state, action) => {
            state.loading = false;
            state.posts = [];
            state.error = action.payload;
        },

        [postComment.pending]: (state) => {
            state.loading = true;
            state.error = '';
        },
        [postComment.fulfilled]: (state, action) => {
            state.loading = false;
            state.commentsForPost = action.payload;
            state.error = '';
        },
        [postComment.rejected]: (state, action) => {
            state.loading = false;
            state.commentsForPost = [];
            state.error = action.payload;
        },
    },
})

// export const {loginUser, logoutUser, setRefComment, delRefComment} = postsSlice.actions;
export default postsSlice.reducer