import './App.css';
import {Avatar, Card, CardActions, CardContent, CardHeader, Stack, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

function RegForm() {
    document.body.style.background = '#F4FCFF'

    return (
        <div className="App">
            <div className={'containerRegAuth'}>
                <Stack>
                    <Typography variant='h6' fontWeight='bold' margin='0 auto' marginY={3}>
                        Регистрация
                    </Typography>
                    <TextField
                        required
                        id="outlined-disabled"
                        label="Фамилия"
                        placeholder="Введите фамилию..."
                        margin={'dense'}
                        InputProps={{
                            style: {
                                background: '#FFFFFF'
                            }
                        }}
                    />
                    <TextField
                        required
                        id="outlined-disabled"
                        label="Имя"
                        placeholder="Введите имя..."
                        margin={'dense'}
                        InputProps={{
                            style: {
                                background: '#FFFFFF'
                            }
                        }}
                    />
                    <TextField
                    required
                    id="outlined-disabled"
                    label="Отчество"
                    placeholder="Введите отчество..."
                    margin={'dense'}
                    InputProps={{
                        style: {
                            background: '#FFFFFF'
                        }
                    }}
                    />
                    <TextField
                        required
                        id="outlined-disabled"
                        label="Электронная почта"
                        placeholder="Введите электронную почту..."
                        margin={'dense'}
                        InputProps={{
                            style: {
                                background: '#FFFFFF'
                            }
                        }}
                    />
                    <TextField
                        required
                        id="outlined-disabled"
                        label="Пароль"
                        placeholder="Введите пароль..."
                        margin={'dense'}
                        InputProps={{
                            style: {
                                background: '#FFFFFF'
                            }
                        }}
                    />
                    <Button
                        size="small"
                        variant="contained"
                        sx={{ boxShadow: 'none',
                            backgroundColor: '#9CC4FF',
                            color: '#000000',
                            borderRadius: 3,
                            margin: '0 auto',
                            marginY: 2
                        }}
                        component={Link}
                        to="/"

                    >
                        Зарегистрироваться
                    </Button>
                    <Typography component={Link} to='/auth/' variant="body1" margin='0 auto'>
                        Войти
                    </Typography>
                </Stack>
            </div>
        </div>
    );
}

export default RegForm;