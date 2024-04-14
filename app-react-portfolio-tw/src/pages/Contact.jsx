import { Typography, Container, Grid, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";

const FormContainer = styled('form')({

    display: 'flex',
    width:'60%',
    margin:'0 auto',
    marginTop:'100px',
    flexDirection: 'column',
    justifyContent: 'space-between',
});

const Contact = () => {
    return (
        <Container>
            <Typography variant="h1" component="h1" gutterBottom>
                <b>Contact page</b>
            </Typography>
            <Typography variant="h4" gutterBottom >
                This is the Contact page.
            </Typography>

            <section style={{ paddingBottom: '24vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="body1" gutterBottom>
                    If you have any questions, suggestions, or just feel like chatting, feel free to get in touch. I'm always open to new ideas and enriching conversations. You can use the form below or shoot me an email at [your email address]. Looking forward to hearing from you!
                </Typography>

                <FormContainer>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                name="firstName"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                multiline
                                rows={4}
                                id="message"
                                label="Message"
                                name="message"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '16px' }}
                    >
                        Submit
                    </Button>
                </FormContainer>
            </section>
        </Container>
    );
};

export default Contact;
