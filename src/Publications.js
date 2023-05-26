import './App.css';
import PubReviewAppBar from "./AppBar";
import {Avatar, Card, CardActions, CardContent, CardHeader, Stack, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux"
// import {check} from "./store/authSlice";
import {fetchComments, fetchPosts, fetchUsers, postPost} from "./store/publicationsSlice";

function Publications() {
    document.body.style.background = '#F4FCFF'
    const current = new Date();
    const curDate = current.toLocaleDateString("ru-RU")

    const posts = useSelector(state => state.posts)
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(check())
        // dispatch(fetchPosts())
        dispatch(fetchUsers())
        dispatch(fetchComments())
    }, [dispatch])

    const postHandler = () => {
        if (document.getElementById('areaTitle').value !== '', document.getElementById('areaDescript').value !== '') {
            dispatch(postPost([auth.user.id, document.getElementById('areaTitle').value, document.getElementById('areaDescript').value]));
        }
        else alert("Заполните все поля!");
    }

    return (
        <div className="App">
            <PubReviewAppBar/>
            <div className={'container'}>
                <div style={{ height: 64, marginBottom: 16}}></div>

                {/*{posts.loading &&  <div className="d-flex justify-content-center"></div> }*/}
                {/*{!posts.loading && posts.error ? <div>{posts.error}</div>: null}*/}
                {/*{!posts.loading && posts.posts.length ? (*/}
                {/*    <div>*/}
                {/*        {posts.posts.map((post, index) => {*/}
                {/*            return (*/}
                {/*                <Card variant={'outlined'} sx={{ borderWidth: 1, borderColor: '#000000', borderRadius: 5, marginBottom: 2}}>*/}
                {/*                    <CardHeader*/}
                {/*                        style={{ background: '#D5E7F6', height: 22}}*/}
                {/*                        avatar={*/}
                {/*                            <Avatar></Avatar>*/}
                {/*                        }*/}
                {/*                        subheader={post.date}*/}
                {/*                        title={*/}
                {/*                            <Typography variant="body">*/}
                {/*                                {post.authors}*/}
                {/*                            </Typography>*/}
                {/*                        }*/}
                {/*                    />*/}
                {/*                    <CardContent style={{ background: '#F4FCFF'}}>*/}
                {/*                        <Typography variant="h6" fontWeight='bold'>*/}
                {/*                            {post.title}*/}
                {/*                        </Typography>*/}
                {/*                        <Typography variant="body1">*/}
                {/*                            {post.annotation}*/}
                {/*                        </Typography>*/}
                {/*                        <Typography variant="body1">*/}
                {/*                            Количество рецензий: {posts.comments.filter(comment => comment.post === post.id).length}*/}
                {/*                        </Typography>*/}
                {/*                    </CardContent>*/}
                {/*                    <CardActions sx={{ direction: 'rtl', background: '#F4FCFF'}}>*/}
                {/*                        <Button*/}
                {/*                            size="small"*/}
                {/*                            variant="contained"*/}
                {/*                            sx={{ boxShadow: 'none',*/}
                {/*                                backgroundColor: '#9CC4FF',*/}
                {/*                                color: '#000000',*/}
                {/*                                direction: 'ltr',*/}
                {/*                                borderRadius: 3}}*/}
                {/*                            component={Link}*/}
                {/*                            to='/publication/${post.id}'*/}
                {/*                        >*/}
                {/*                            Подробнее...*/}
                {/*                        </Button>*/}
                {/*                    </CardActions>*/}
                {/*                </Card>*/}

                {/*            )*/}
                {/*        })}*/}
                {/*    </div>*/}

                {/*): null }*/}

                <Card variant={'outlined'} sx={{ borderWidth: 1, borderColor: '#000000', borderRadius: 5, marginBottom: 2}}>
                    <CardHeader
                        style={{ background: '#D5E7F6', height: 22}}
                        avatar={
                            <Avatar></Avatar>
                        }
                        subheader='06.05.2023'
                        title={
                            <Typography variant="body">
                                Веремейчик К.И.
                            </Typography>
                        }
                    />
                    <CardContent style={{ background: '#F4FCFF'}}>
                        <Typography variant="h6" fontWeight='bold'>
                            Автоматизация учета арендных отношений
                        </Typography>
                        <Typography variant="body1">
                            В статье изучаются задачи и проблемы автоматизации процессов учета и анализа аренды недвижимого имущества.
                        </Typography>
                        <Typography variant="body1">
                            Количество рецензий: 1
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ direction: 'rtl', background: '#F4FCFF'}}>
                        <Button
                            size="small"
                            variant="contained"
                            sx={{ boxShadow: 'none',
                                backgroundColor: '#9CC4FF',
                                color: '#000000',
                                direction: 'ltr',
                                borderRadius: 3}}
                            component={Link}
                            to="/publication/"
                        >
                            Подробнее...
                        </Button>
                    </CardActions>
                </Card>

                {auth.auth === 1 &&
                    <Card variant={'outlined'} sx={{ borderWidth: 1, borderColor: '#000000', borderRadius: 5, marginBottom: 2}}>
                        <CardHeader
                            style={{ background: '#D5E7F6', height: 22}}
                            avatar={
                                <Avatar></Avatar>
                            }
                            subheader={curDate}
                            title={
                                <Typography variant="body">
                                    User1
                                </Typography>
                            }
                        />
                        <CardContent style={{ background: '#F4FCFF'}}>
                            <Stack>
                                <TextField
                                    // disabled
                                    id="outlined-disabled"
                                    label="Авторы"
                                    placeholder="Введите авторов публикации..."
                                    margin={'dense'}
                                    InputProps={{
                                        style: {
                                            background: '#FFFFFF'
                                        }
                                    }}
                                />
                                <TextField
                                    // disabled
                                    id="outlined-disabled"
                                    label="Название"
                                    placeholder="Введите название публикации..."
                                    margin={'dense'}
                                    InputProps={{
                                        style: {
                                            background: '#FFFFFF'
                                        }
                                    }}
                                />
                                <TextField
                                    // disabled
                                    id="outlined-multiline-static"
                                    multiline
                                    label="Аннотация"
                                    placeholder="Введите аннотацию к публикации..."
                                    minRows={3}
                                    margin={'dense'}
                                    InputProps={{
                                        style: {
                                            background: '#FFFFFF'
                                        }
                                    }}
                                />
                            </Stack>
                        </CardContent>
                        <CardActions sx={{ direction: 'rtl', background: '#F4FCFF'}}>
                            <Button size="small" variant="contained" sx={{ boxShadow: 'none', backgroundColor: '#9CC4FF', color: '#000000', direction: 'ltr', borderRadius: 3}}>Подробнее...</Button>
                        </CardActions>
                    </Card>
                }


            </div>
        </div>
    );
}

export default Publications;