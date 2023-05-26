import './App.css';
import PubReviewAppBar from "./AppBar";
import {Avatar, Card, CardActions, CardContent, CardHeader, Stack, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
// import {check} from "./store/authSlice";
import {fetchCommentsForPost, fetchPost, fetchUsers} from "./store/publicationsSlice";

function Publication() {
    document.body.style.background = '#F4FCFF'
    const current = new Date();
    const curDate = current.toLocaleDateString("ru-RU")

    let param = useParams().id;

    const auth = useSelector(state => state.auth)
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(check())
        dispatch(fetchPost(param))
        dispatch(fetchUsers())
        dispatch(fetchCommentsForPost(param))
    }, [dispatch, param])

    let newComments = [];
    let finalComments = [];

    let j = 0;

    return (
        <div className="App">
            <PubReviewAppBar/>
            <div className={'container'}>
                <div style={{ height: 64, marginBottom: 16}}></div>
                <Stack spacing={1} marginY={2}>
                    <Typography variant="h6" fontWeight='bold'>
                        Автоматизация учета арендных отношений
                    </Typography>
                    <Typography variant="body1">
                        В статье изучаются задачи и проблемы автоматизации процессов учета и анализа аренды недвижимого имущества.
                    </Typography>
                    <Typography variant="body1">
                        Авторство: Веремейчик К.И.
                    </Typography>
                    <Typography variant="body1">
                        Дата публикации: 06.05.2023
                    </Typography>
                </Stack>

                <Card variant={'outlined'} sx={{ borderWidth: 1, borderColor: '#000000', borderRadius: 5, marginBottom: 2}}>
                    <CardHeader
                        style={{ background: '#D5E7F6', height: 22}}
                        avatar={
                            <Avatar></Avatar>
                        }
                        subheader='08.05.2023'
                        title={
                            <Typography variant="body">
                                Мирзаев Н.М.
                            </Typography>
                        }
                    />
                    <CardContent style={{ background: '#F4FCFF'}}>
                        <Typography variant="body1">
                            Арендные операции, в последние годы становятся все более популярным, и выходят на качественно новый уровень. Несмотря на это, вопросы, связанные с налоговым и бухгалтерским сопровождением подобных операций, недостаточно разобраны. В данной работе рассмотрены вопросы автоматизации учета арендных отношений, что позволяет принятия приемлемых управленческих решений при выполнении арендных операций. На мой взгляд, данную статью следует рассматривать как информационное сообщения о программном комплексе «АрендаСофт» и предоставляет полезную информацию для экономистов, в частности для специалистов в области финансового менеджмента.
                        </Typography>
                    </CardContent>
                </Card>

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
                        <TextField
                            // disabled
                            id="outlined-multiline-static"
                            multiline
                            label="Рецензия"
                            placeholder="Введите рецензию к публикации..."
                            minRows={3}
                            margin={'dense'}
                            fullWidth
                            InputProps={{
                                style: {
                                    background: '#FFFFFF'
                                }
                            }}
                        />
                    </CardContent>
                    <CardActions sx={{ direction: 'rtl', background: '#F4FCFF'}}>
                        <Button size="small" variant="contained" sx={{ boxShadow: 'none', backgroundColor: '#9CC4FF', color: '#000000', direction: 'ltr', borderRadius: 3}}>Опубликовать</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}

export default Publication;