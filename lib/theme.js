import { createTheme } from "@mui/material/styles"

let theme = createTheme({
    breakpoints: {
        values: {
            phone: 0,
            tablet: 415,
            laptop: 900,
            desktop: 1600
        }
    }
})

theme.typography.h1 = {
    fontSize: '1rem',
}

theme.typography.h2 = {
    fontSize: '.8rem'
}

theme.typography.body2 = {
    fontSize: '1.5rem'
}

export default theme