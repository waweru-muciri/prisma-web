import { Box, Container, Grid } from '@mui/material';

// TODO: Change subtitle text

const AuthLayout = (props) => {
    const { children } = props;

    return (
        <Container maxWidth="md"
            sx={{
                flex: 1,
                flexGrow: 1,
                height: '100vh', 
            }}
        >
            <Grid container direction={"row"} style={{ justifyContent: "center", alignItems: "center", height: '100vh',  }}
            >
                <Grid item container justifyContent="center" alignItems="center"
                    xs={12}
                    lg={12}
                >
                    <Grid item sm={6}>{children}</Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AuthLayout