import React from "react";
import Container from '@mui/material/Container'
import { Alert, Button } from "@mui/material";
import { STARTPAGE_ROUTE } from "../../routes/consts";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const history = useNavigate();
    
    return (
        <main>
            <Container 
                maxWidth="xl" 
                sx={{my: 5}}
                className="error_f"
            >
                <Alert severity="error">Ошибка 404. Страница не найдена</Alert>
                <Button 
                    variant="outlined" 
                    onClick={() => history(STARTPAGE_ROUTE)}
                    sx={{my: 1}}
                >
                    Вернуться на главную
                </Button>
            </Container>
        </main>
    )
}

export default ErrorPage;