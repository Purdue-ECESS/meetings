import { Typography } from "@mui/material";

export default function Index() {
    return (
        <div style={{ margin: 0, padding: 0 }}>
            <div style={{ position: "sticky", top: 0, backgroundColor: "purple", padding: 20 }}>
                <Typography>
                    Navigation Bar
                </Typography>
            </div>
            <div style={{backgroundColor: "gray"}}>
                <div style={{ margin: "0 auto", backgroundColor: "pink", height: "200vh", maxWidth: 1080, overflow: "hidden" }}>
                    <Typography>Hi There, This is the Body</Typography>
                </div>
            </div>
        </div>
    )
}
